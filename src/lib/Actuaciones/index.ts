import 'server-only';
import { cache } from 'react';
import { monDemandado } from '../types/mongodb';
import { ActuacionCollectionItem,
         IntActuaciones,
         intActuacion,
         intConsultaActuaciones,
         monActuacion } from '../types/procesos';
import { carpetasCollection, getCarpetaById, getCarpetaByidProceso } from '../Carpetas';
import { sleep } from '../fix';
import clientPromise from '../mongodb';
import { IntCarpeta,
         MonCarpeta,
         carpetaConvert } from '../types/carpeta';
import { Collection } from 'mongodb';

export const actuacionesCollection = cache(
  async () => {
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
  }
);

export const fetchActuaciones= cache(
  async(
    {
      idProceso,
      index
    }: {
  idProceso: number;
  index: number;
}
  ) => {
    const awaitTime = index * 1000;
    await sleep(
      awaitTime
    );

    if (  idProceso === 0 ) {
      console.log(
        `${ index }: este idProceso es: ${ idProceso }`
      );

      return [];
    }
    const actsColl = await actuacionesCollection();

    try {
      const Request = await fetch(
        `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${ idProceso }`,
        {
          next: {
            revalidate: 32000
          }
        }
      );

      if ( !Request.ok ) {
        console.log(
          ` ${ index }: actuaciones not ok, status: ${ Request.status } with ${ Request.statusText } idProceso: ${ idProceso }`
        );

        return [];
      }

      const Response
      = ( await Request.json() ) as intConsultaActuaciones;
      const actuaciones = Response.actuaciones;

      if ( actuaciones.length > 0 ) {

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
        {
          upsert: true
        }
      );

        if ( updateActsinMongo.modifiedCount >= 1 || updateActsinMongo.upsertedCount >= 1 ) {
          console.log(
            `${ index }: la coleccion de Actuaciones modificó ${ updateActsinMongo.modifiedCount } documentos. se insertaron  ${ updateActsinMongo.upsertedCount }actuaciones; y se hizo match con ${ updateActsinMongo.matchedCount } documentos`
          );
        }
      }

      return actuaciones;
    } catch ( error ) {
      console.log(
        `Error creado en fetchActuaciones: ${ error }`
      );

      return [];
    }
  }
);

export const getActuaciones = cache(
  async(
    {
      idProceso,
      index
    }: {
  idProceso: number;
  index?: number;
}
  ) => {
    const collection = await carpetasCollection();

    const actuaciones = await fetchActuaciones(
      {
        idProceso: idProceso,
        index    : index ?? 0
      }
    );

    if ( actuaciones.length > 0 ) {
      const updateCarpetawithActuaciones
      = await collection.updateOne(
        {
          idProceso: idProceso
        },
        {
          $set: {
            fecha: new Date(
              actuaciones[ 0 ].fechaActuacion
            )
          }
        },
        {
          upsert: false
        }
      );

      if (
        updateCarpetawithActuaciones.modifiedCount >= 1 || updateCarpetawithActuaciones.upsertedCount >= 1
      ) {
        console.log(
          `${ index }: la coleccion de Carpetas modificó ${ updateCarpetawithActuaciones.modifiedCount } documentos. se insertaron  ${ updateCarpetawithActuaciones.upsertedCount }actuaciones; y se hizo match con ${ updateCarpetawithActuaciones.matchedCount } documentos`
        );
      }
    }

    return actuaciones;
  }
);

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

  const actuaciones = await getActuaciones(
    {
      idProceso: idProceso,
      index    : index
    }
  );

  if ( actuaciones.length >= 1 ) {

    const newCarpeta: MonCarpeta = {
      ...carpeta,
      fecha: new Date(
        actuaciones[ 0 ].fechaActuacion
      )
    };

    return newCarpeta;

  }

  return carpeta;
}
