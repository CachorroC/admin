import { Collection } from 'mongodb';
import { carpetasCollection, getCarpetasByllaveProceso } from '../Carpetas';
import { fetchDespachos } from '../Despachos';
import { sleep } from '../fix';
import clientPromise from '../mongodb';
import { intProceso,
         intConsultaNumeroRadicacion } from '../types/procesos';
import { cache } from 'react';

export const procesosCollection = cache(
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

    const carpetas
    = db.collection<intProceso>(
      'Procesos'
    );

    return carpetas;
  }
);

export const  fetchProceso = cache(
  async(
    {
      llaveProceso,
      index
    }: {
  llaveProceso: string;
  index: number;
}
  ) => {
    const awaitTime = index * 1000;
    await sleep(
      awaitTime
    );
    const collection = await procesosCollection();

    if ( llaveProceso.length < 23 ) {
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

      for ( const proceso of procesos ) {
        await collection.updateOne(
          {
            llaveProceso: llaveProceso,
            idProceso   : proceso.idProceso
          },
          {
            $set: proceso
          },
          {
            upsert: true,
          }
        );

      }

      return procesos;
    } catch ( error ) {
      console.log(
        error ?? 'error'
      );

      return [];
    }
  }
);

export const  getProceso = cache(
  async(
    {
      llaveProceso,
      index
    }: {
  llaveProceso: string;
  index?: number;
}
  ) => {

    const carpsColl = await carpetasCollection();

    const fetchP = await fetchProceso(
      {
        llaveProceso: llaveProceso,
        index       : index ?? 0
      }
    );

    for ( const proceso of fetchP ) {

      const updtCarpeta
      = await carpsColl.updateOne(
        {
          llaveProceso: llaveProceso,
          idProceso   : proceso.idProceso
        }, {
          $set: {
            idProceso: proceso.idProceso
          }
        }, {
          upsert: false
        }
      );

      if ( updtCarpeta.modifiedCount >= 1 || updtCarpeta.upsertedCount >= 1 ) {

        console.log(
          `${ index }: la coleccion de Carpetas a traves de Procesos modificó ${ updtCarpeta.modifiedCount } documentos. se insertaron  ${ updtCarpeta.upsertedCount }actuaciones; y se hizo match con ${ updtCarpeta.matchedCount } documentos`
        );
      }

    }

    return fetchP;
  }
);

export async function getProcesoByidProceso(
  {
    idProceso
  }: {
  idProceso: number;
}
) {
  const collection = await procesosCollection();

  const proceso = await collection.findOne(
    {
      idProceso: idProceso
    }
  );

  return proceso;
}

export async function getProcesosByllaveProceso(
  {
    llaveProceso
  }: {
  llaveProceso: string;
}
) {
  const collection = await procesosCollection();

  const proceso = await collection
        .find(
          {
            llaveProceso: llaveProceso
          }
        )
        .toArray();

  return proceso;
}
