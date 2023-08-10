import 'server-only';
import { monDemandado } from '../types/mongodb';
import { ActuacionCollectionItem,
         IntActuaciones,
         intActuacion,
         intConsultaActuaciones,
         monActuacion } from '../types/procesos';
import { carpetasCollection, getCarpetaById, getCarpetaByidProceso } from '../Carpetas';
import { sleep } from '../fix';
import { cache } from 'react';
import clientPromise from '../mongodb';
import { IntCarpeta,
         MonCarpeta,
         carpetaConvert } from '../types/demandados';
import { Collection } from 'mongodb';

export const actuacionesCollection = async () => {
  const client = await clientPromise;

  if ( !client ) {
    throw new Error(
      'no hay cliente mongólico'
    );
  }

  const db = client.db(
    'RyS'
  );

  const actuaciones = db.collection<monActuacion>(
    'Actuaciones'
  );

  return actuaciones;
};

export async function fetchActuaciones(
  {
    idProceso,
    index
  }: {
  idProceso: number;
  index: number;
}
) {
  const awaitTime = index * 1000;
  await sleep(
    awaitTime
  );

  if ( !idProceso || idProceso === 0 ) {
    console.log(
      `este idProceso es: ${ idProceso } con index ${ index }`
    );

    return [];
  }
  const actsColl = await actuacionesCollection();

  try {
    const Request = await fetch(
      `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${ idProceso }`,
      { next: { revalidate: 32000 } }
    );

    if ( !Request.ok ) {
      console.log(
        ` ${ idProceso }: actuaciones not ok, status: ${ Request.status } with ${ Request.statusText } index: ${ index }`
      );

      return [];
    }

    const Response
      = ( await Request.json() ) as intConsultaActuaciones;
    const actuaciones = Response.actuaciones;

    if ( actuaciones.length >= 1 ) {

      const updateActsinMongo
      = await actsColl.updateOne(
        {
          idProceso: idProceso,
          llaveProceso:
            actuaciones[ 0 ].llaveProceso
        },
        {
          $set: {
            ...actuaciones[ 0 ],
            idProceso: idProceso
          }
        },
        { upsert: true }
      );

      if ( updateActsinMongo.acknowledged ) {
        console.log(
          `${ index }: the actuaciones collection was updated with ${ updateActsinMongo.modifiedCount } actuaciones modified or ${ updateActsinMongo.upsertedCount }actuaciones upserted with a matched count of ${ updateActsinMongo.matchedCount }`
        );
      }
    }

    return actuaciones;
  } catch ( error ) {
    console.log(
      error
    );

    return [];
  }
}

export async function getActuaciones(
  {
    idProceso,
    index
  }: {
  idProceso: number;
  index?: number;
}
) {
  const collection = await carpetasCollection();

  const carpeta = await getCarpetaByidProceso(
    { idProceso: idProceso }
  );


  const actuaciones = await fetchActuaciones(
    {
      idProceso: idProceso,
      index    : index ?? 0
    }
  );

  if ( actuaciones.length >= 1 ) {
    const updateCarpetawithActuaciones
      = await collection.updateOne(
        { idProceso: idProceso },
        {
          $set: {
            fecha: new Date(
              actuaciones[ 0 ].fechaActuacion
            )
          }
        },
        { upsert: false }
      );

    if (
      updateCarpetawithActuaciones.acknowledged
    ) {
      console.log(
        `${ index }: the  carpetas collection was updated with ${ updateCarpetawithActuaciones.modifiedCount } actuaciones modified or ${ updateCarpetawithActuaciones.upsertedCount }actuaciones upserted with a matched count of ${ updateCarpetawithActuaciones.matchedCount }`
      );
    }
  }

  return actuaciones;
}

export async function fetchFechas(
  {
    carpetas
  }: {
  carpetas: MonCarpeta[];
}
) {
  const mapCarpetaswithFechas: Map<
    string,
    MonCarpeta
  > = new Map();

  for ( const carpeta of carpetas ) {
    const index = carpetas.indexOf(
      carpeta
    );

    const fecha = await fetchFecha(
      {
        carpeta: carpeta,
        index  : index
      }
    );
    mapCarpetaswithFechas.set(
      carpeta._id, fecha
    );
  }

  return Array.from(
    mapCarpetaswithFechas.values()
  );
}

export async function fetchFecha(
  {
    carpeta,
    index
  }: {
  carpeta: MonCarpeta;
  index: number;
}
) {
  const {
    idProceso
  }
    = carpeta;
  const collection = await carpetasCollection();


  const actuaciones = await getActuaciones(
    {
      idProceso: idProceso,
      index    : index
    }
  );

  if ( actuaciones.length >= 1 ) {

    const newCarpeta = {
      ...carpeta,
      fecha: actuaciones[ 0 ].fechaActuacion
    };

    return newCarpeta;

  }

  return carpeta;
}
