import { Collection } from 'mongodb';
import { carpetasCollection, getCarpetasByllaveProceso } from '../Carpetas';
import { fetchDespachos } from '../global/Despachos';
import { sleep } from '../fix';
import clientPromise from '../mongodb';
import { intProceso,
         intConsultaNumeroRadicacion } from '../types/procesos';

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

  if ( llaveProceso.length < 23 || llaveProceso === 'sinEspecificar' ) {
    console.log(
      `esta llaveProceso es menos de 23: ${ llaveProceso }`
    );

    return [];
  }

  try {
    const req = await fetch(
      `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${ llaveProceso }&SoloActivos=true`
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

  const fetchP = await fetchProceso(
    {
      llaveProceso: llaveProceso,
      index       : index ?? 0
    }
  );


  return fetchP;
}
