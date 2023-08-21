import { Collection, ObjectId } from 'mongodb';
import { carpetasCollection,
         getCarpetas,
         getCarpetasByllaveProceso } from '../Carpetas';
import { fetchDespachos } from '../global/Despachos';
import { sleep } from '../fix';
import clientPromise from '../mongodb';
import { Proceso,
         procesosConvert } from '../types/procesos';

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
    = db.collection<Proceso>(
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
  if (
    llaveProceso.length < 23
    || llaveProceso === 'sinEspecificar'
  ) {
    console.log(
      `${ index }: esta llaveProceso es menos de 23: ${ llaveProceso }`
    );

    return null;
  }

  try {
    const req = await fetch(
      `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${ llaveProceso }&SoloActivos=true`
    );

    if ( !req.ok ) {
      console.log(
        `${ index }: el request procesos returned not ok ${ llaveProceso }: ${ req.status }`
      );

      return null;
    }

    const json = await req.json();

    const res
      = procesosConvert.toConsultaNumeroRadicacion(
        JSON.stringify(
          json
        )
      );

    const procesos = res.procesos;

    return procesos;
  } catch ( e ) {
    if ( e instanceof Error ) {
      console.log(
        `${ index }: error en la conexion network del fetchProceso ${ e.name } : ${ e.message }`
      );
    }
    console.log(
      `${ e }`
    );

    return null;
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
  console.time(
    `proceso ${ index }`
  );
  console.log(
    `inicia el tiempo para proceso ${ index }`
  );

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

  if ( fetchP ) {
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

      if (
        updt.modifiedCount > 0
        || updt.upsertedCount > 0
      ) {
        console.log(
          ` se actualizaron ${ updt.modifiedCount } procesos y se insertaron ${ updt.upsertedCount } procesosn nuevos  `
        );
      }
    }
  }
  console.timeEnd(
    `proceso ${ index }`
  );

  return fetchP;
}
