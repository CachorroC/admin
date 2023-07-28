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
         MonCarpeta } from '../types/demandados';
import { Collection } from 'mongodb';

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

  if ( idProceso === 0 || idProceso === 404 ) {
    console.log(
      `este idProceso es: ${ idProceso }`
    );

    return [];
  }

  try {
    const Request = await fetch(
      `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${ idProceso }`,
      { next: { revalidate: 32000 } }
    );

    if ( !Request.ok ) {
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
  }: { idProceso: number; index?: number }
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
      { idProceso: idProceso }, { $addToSet: { ultimasActuaciones: ultimaActconIdProceso } }, { upsert: true, }
    );

    if ( updateCarpetawithActuaciones.acknowledged ) {
      console.log(
        `the collection was updated with ${ updateCarpetawithActuaciones.modifiedCount } actuaciones modified or ${ updateCarpetawithActuaciones.upsertedCount }actuaciones upserted with a matched count of ${ updateCarpetawithActuaciones.matchedCount }`
      );

      return actuaciones;
    }

    return actuaciones;
  }

  return actuaciones;


}
