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
  try {
    if (
      llaveProceso.length < 23
      || llaveProceso === 'sinEspecificar'
    ) {
      throw new Error(
        `${ index }: esta llaveProceso es menos de 23: ${ llaveProceso }`
      );
    }

    const req = await fetch(
      `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${ llaveProceso }&SoloActivos=true`
    );

    if ( !req.ok ) {
      throw new Error(
        `${ index }: procesos not ok, status: ${ req.status } with ${ req.statusText } llaveProceso: ${ llaveProceso } => headers: ${ req.headers }`
      );
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
        `${ index }: ${ llaveProceso }: error en la conexion network del fetchProceso ${ e.name } : ${ e.message }`
      );
    }
    console.log(
      `${ index }: ${ llaveProceso }: : error en la conexion network del fetchProceso  =>  ${ e }`
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

  return fetchP;
}
