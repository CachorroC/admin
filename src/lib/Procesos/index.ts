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
        `${ index }: el request procesos returned not ok ${ llaveProceso }`
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
  const awaitTime = index * 10;
  await sleep(
    awaitTime
  );

  const fetchP = await fetchProceso(
    {
      llaveProceso: llaveProceso,
      index       : index
    }
  );

  if ( fetchP.length > 0 ) {
    const collection = await carpetasCollection();
    const carpetas = await getCarpetas();



    const carpeta = carpetas.find(
      (
        carp
      ) => {
        return carp.llaveProceso === llaveProceso;
      }
    );

    if ( carpeta ) {

      const {
        _id, ...oldCarpeta
      } = carpeta;

      for ( let i = 0; i < fetchP.length; i++ ) {
        const proceso = fetchP[ i ];

        const newCarp = {
          ...oldCarpeta,
          idProceso   : proceso.idProceso,
          llaveProceso: llaveProceso
        };

        const updt = await collection.updateOne(
          {
            idProceso   : proceso.idProceso
          },
          {
            $set: newCarp
          },
          {
            upsert: true
          }
        );
        console.log(
          ` se actualizaron ${ updt.modifiedCount } carpetas con proceso y se insertaron ${ updt.upsertedCount } carpetas nuevas `
        );
      }
    }

    return fetchP;
  }

  return fetchP;
}
