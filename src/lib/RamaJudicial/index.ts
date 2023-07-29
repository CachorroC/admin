import 'server-only';
import { notFound } from 'next/navigation';
import { intConsultaNumeroRadicacion,
         intProceso } from '#@/lib/types/procesos';
import { sleep } from '#@/lib/fix';
import { carpetasCollection } from '../Carpetas';

export async function fetchProceso(
  {
    llaveProceso,
    index
  }: {
  llaveProceso: string;
  index: number;
  }
) {
  const awaitTime = index * 1000;
  await sleep(
    awaitTime
  );

  if ( llaveProceso.length < 23 ) {

    console.log(
      `esta llaveProceso es menos de 23: ${ llaveProceso }`
    );

    return [];
  }

  try {
    const req = await fetch(
      `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${ llaveProceso }&SoloActivos=false`
    );

    if ( !req.ok ) {
      return [];
    }

    const res
      = ( await req.json() ) as intConsultaNumeroRadicacion;
    const procesos = res.procesos;

    return procesos;
  } catch ( error ) {
    console.log(
      error ?? 'error'
    );

    return [];
  }
}

export async function getProceso(
  {
    llaveProceso,
    index
  }: {
  llaveProceso: string;
  index?: number;
}
) {
  const collection = await carpetasCollection();

  const procesos = await fetchProceso(
    {
      llaveProceso: llaveProceso,
      index       : index ?? 0
    }
  );

  for ( const proceso of procesos ) {
    const updateCarpetawithProceso = await collection.updateOne(
      { idProceso: proceso.idProceso }, { $set: { idProceso: proceso.idProceso } }, { upsert: false }
    );

    if ( updateCarpetawithProceso.acknowledged ) {
      console.log(
        `the collection was updated with ${ updateCarpetawithProceso.modifiedCount } documents modified or ${ updateCarpetawithProceso.upsertedCount } documents upserted with a matched count of ${ updateCarpetawithProceso.matchedCount }`
      );
    }



    return procesos;
  }

  return procesos;
}
