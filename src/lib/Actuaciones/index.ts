import 'server-only';
import { monDemandado } from '../types/mongodb';
import { ActuacionCollectionItem,
         IntActuaciones,
         intActuacion,
         intConsultaActuaciones } from '../types/procesos';
import { carpetasCollection } from '../Carpetas';
import { sleep } from '../fix';
import { cache } from 'react';
import clientPromise from '../mongodb';
import { IntCarpeta,
         MonCarpeta,
         carpetaConvert } from '../types/demandados';
import { Collection } from 'mongodb';

export async function fetchActuaciones(
  {
    idProceso,
    index
  }: {
  idProceso: number ;
  index: number;
}
) {

  const awaitTime = index * 200;
  await sleep(
    awaitTime
  );

  if ( !idProceso || idProceso === 0 ) {
    console.log(
      `este idProceso es: ${ idProceso } con index ${ index }`
    );

    return [];
  }

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

    return actuaciones;
  } catch ( error ) {
    console.log(
      error
    );

    return [];
  }
}

export async function getActuaciones (
  {
    idProceso, index
  }: { idProceso: number ; index?: number }
) {
  const collection = await carpetasCollection();

  const actuaciones = await fetchActuaciones(
    {
      idProceso: idProceso,
      index    : index ?? 0
    }
  );

  if ( actuaciones.length >= 1 ) {
    const ultimaActconIdProceso = {
      idProceso      : idProceso,
      ultimaActuacion: actuaciones[ 0 ]
    };

    const updateCarpetawithActuaciones = await collection.updateOne(
      { idProceso: idProceso }, {
        $set: {
          fecha: new Date(
            actuaciones[ 0 ].fechaActuacion
          )
        }
      }, { upsert: false }
    );

    if ( updateCarpetawithActuaciones.acknowledged ) {
      console.log(
        `${ index }: the collection was updated with ${ updateCarpetawithActuaciones.modifiedCount } actuaciones modified or ${ updateCarpetawithActuaciones.upsertedCount }actuaciones upserted with a matched count of ${ updateCarpetawithActuaciones.matchedCount }`
      );

      return actuaciones;
    }

    return actuaciones;
  }

  return actuaciones;


}

export async function fetchFechas (
  {
    carpetas
  }: { carpetas: MonCarpeta[] }
) {
  const mapCarpetaswithFechas: Map<string, MonCarpeta> = new Map();

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

export async function fetchFecha (
  {
    carpeta, index
  }: { carpeta: MonCarpeta, index: number }
) {
  const collection = await carpetasCollection();


  const actuaciones = await getActuaciones(
    {
      idProceso: carpeta.idProceso,
      index    : index
    }
  );

  if ( actuaciones.length > 0 ) {

    const ultimaActuacion = actuaciones[ 0 ];

    const updateCarpeta = await collection.findOneAndUpdate(
      { idProceso: carpeta.idProceso }, {
        $set: {
          fecha: new Date(
            ultimaActuacion.fechaActuacion
          )
        }
      }, {
        upsert        : true,
        returnDocument: 'after'
      }
    );

    if ( updateCarpeta.value ) {
      const newCarpeta = carpetaConvert.toMonCarpeta(
        updateCarpeta.value
      );

      return newCarpeta;
    }

    return {
      ...carpeta,
      fecha: new Date(
        ultimaActuacion.fechaActuacion
      )
    };
  }

  return carpeta;
}