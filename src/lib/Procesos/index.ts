import { Collection, ObjectId } from 'mongodb';
import { carpetasCollection, getCarpetas, getCarpetasByllaveProceso } from '../Carpetas';
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
      `${ index }: esta llaveProceso es menos de 23: ${ llaveProceso }`
    );

    return [];
  }

  try {
    const req = await fetch(
      `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${ llaveProceso }&SoloActivos=true`
    );

    if ( !req.ok ) {
      console.log(
        `${ index }: el request procesos returned not ok ${ llaveProceso }: ${ req.status }`
      );

      return [];
    }

    const res
      = ( await req.json() ) as intConsultaNumeroRadicacion;

    const procesos = res.procesos;

    return procesos;
  } catch ( error ) {
    console.log(
      `${ index }: error en la conexion network del fetchProceso ${ error }`
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
  index: number;
}
) {
  const awaitTime = 1000;
  await sleep(
    awaitTime
  );

  const collection = await procesosCollection();

  const fetchP = await fetchProceso(
    {
      llaveProceso: llaveProceso,
      index       : index
    }
  );

  if ( fetchP.length > 0 ) {

    for ( let i = 0; i < fetchP.length; i++ ) {
      const proceso = fetchP[ i ];

      const updt = await collection.updateOne(
        {
          idProceso: proceso.idProceso
        },
        {
          $set: proceso
        },
        {
          upsert: true
        }
      );

      if ( updt.modifiedCount > 0 || updt.upsertedCount > 0 ) {
        console.log(
          ` se actualizaron ${ updt.modifiedCount } carpetas con proceso y se insertaron ${ updt.upsertedCount } carpetas nuevas `
        );
      }
    }
  }

  return fetchP;
}
