import 'server-only';
import { notFound } from 'next/navigation';
import { intConsultaNumeroRadicacion,
         intProceso } from '#@/lib/types/procesos';
import { sleep } from '#@/lib/fix';
import { carpetasCollection, getCarpetaById, getCarpetaByidProceso, getCarpetasByllaveProceso } from '../Carpetas';
import clientPromise from '../mongodb';

export const procesosCollection = async () => {
  const client = await clientPromise;

  if ( !client ) {
    throw new Error(
      'no hay cliente mongólico'
    );
  }

  const db = client.db(
    'RyS'
  );

  const carpetas
    = db.collection<intProceso>(
      'Procesos'
    );

  return carpetas;
};

export async function fetchProceso(
  {
    llaveProceso,
    index
  }: {
  llaveProceso: string;
  index: number;
}
) {
  const collection = await procesosCollection();
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

export async function updaterProceso (
  {
    idProceso, llaveProceso
  }: { idProceso: number; llaveProceso: string }
) {
  const carpeta = await getCarpetasByllaveProceso(
    { llaveProceso: llaveProceso }
  );

  const {
    _id, ...newCarpeta
  } = carpeta;
  const collection = await carpetasCollection();

  const updated = await collection.updateOne(
    {
      idProceso   : idProceso,
      llaveProceso: llaveProceso
    },
    {
      $set: {
        ...newCarpeta,
        idProceso: idProceso
      }
    },
    { upsert: true }
  );

  return updated.acknowledged;
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




  if ( llaveProceso.length !== 23 ) {
    return [];
  }


  const procesos = await fetchProceso(
    {
      llaveProceso: llaveProceso,
      index       : index ?? 0
    }
  );

  for ( const proceso of procesos ) {
    const updt = await updaterProceso(
      {
        idProceso   : proceso.idProceso,
        llaveProceso: llaveProceso
      }
    );
    console.log(
      `${ llaveProceso } update was ${ updt } `
    );
  }

  return procesos;
}
