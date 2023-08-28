import { Collection, ObjectId } from 'mongodb';
import { carpetasCollection,
         getCarpetas,
         getCarpetasByllaveProceso } from '../Carpetas';
import { fetchDespachos } from '../global/Despachos';
import { sleep } from '../fix';
import clientPromise from '../mongodb';
import { Proceso,
         procesosConvert } from '../types/procesos';
import { NextResponse } from 'next/server';
import { Juzgado } from '../types/carpeta';
import { despachosConvert } from '../types/despachos';
import { cache } from 'react';

export const getDespachos = cache(
  async () => {
    try {
      const request = await fetch(
        'https://www.ramajudicial.gov.co/directorioPortal-portlet/api/jsonws/servicioapidirectorio/get-despacho-distritos.18'
      );

      if ( !request.ok ) {
        throw new Error(
          'error en los despachos'
        );
      }

      const response = await request.json();

      const json = JSON.stringify(
        response
      );

      const despachos
      = despachosConvert.toDespacho(
        json
      );

      return despachos;
    } catch ( e ) {
      if ( e instanceof Error ) {
        console.log(
          ` error en la conexion network del getDespacxhos ${ e.name } : ${ e.message }`
        );
      }
      console.log(
        ` error en la conexion network del getDespacxho  =>  ${ e }`
      );

      return [];
    }
  }
);

export async function newJuzgado(
  procesos: Proceso[]
) {
  const juzgados = new Map<number, Juzgado>();

  const Despachos = await getDespachos();

  for ( const proceso of procesos ) {
    const indexOf = procesos.indexOf(
      proceso
    );

    const matchedDespacho = Despachos.find(
      (
        despacho
      ) => {
        const nDesp = despacho.nombre
              .toLowerCase()
              .normalize(
                'NFD'
              )
              .replace(
                /\p{Diacritic}/gu, ''
              )
              .trim();

        const pDesp = proceso.despacho
              .toLowerCase()
              .normalize(
                'NFD'
              )
              .replace(
                /\p{Diacritic}/gu, ''
              )
              .trim();

        const indexOfDesp = nDesp.indexOf(
          pDesp
        );

        if ( indexOfDesp >= 0 ) {
          console.log(
            `procesos despacho is in despachos ${ indexOfDesp }`
          );
        }

        return nDesp === pDesp;
      }
    );

    const nameN = matchedDespacho
      ? matchedDespacho.nombre
      : proceso.despacho;

    const matchedId = nameN.match(
      /\d+/g
    );

    const newId = Number(
      matchedId?.toString()
    );

    const newJuzgado: Juzgado = {
      id  : newId ?? 0,
      tipo: matchedDespacho
        ? matchedDespacho.nombre
        : proceso.despacho,
      url: matchedDespacho
        ? `https://www.ramajudicial.gov.co${ matchedDespacho.url }`
        : `https://www.ramajudicial.gov.co${ proceso.despacho
              .replaceAll(
                ' ', '-'
              )
              .toLowerCase() }`
    };
    juzgados.set(
      indexOf, newJuzgado
    );
  }

  return Array.from(
    juzgados.values()
  );
}

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

export const fetchProceso = cache(
  async (
    {
      llaveProceso,
      index
    }: {
    llaveProceso: string;
    index: number;
  }
  ) => {
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
          `${ index }: procesos not ok, status: ${ req.status } with ${ req.statusText } llaveProceso: ${ llaveProceso }`
        );
      }

      const json = await req.json();

      const res
        = procesosConvert.toConsultaNumeroRadicacion(
          JSON.stringify(
            json
          )
        );

      return res.procesos;
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
);

export const getProceso = cache(
  async (
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

    const carpColl = await carpetasCollection();

    const fetchP = await fetchProceso(
      {
        llaveProceso: llaveProceso,
        index       : index
      }
    );

    if ( fetchP ) {
      for ( const proceso of fetchP ) {
        const juzgados = await newJuzgado(
          fetchP
        );

        const updt = await carpColl.updateOne(
          {
            llaveProceso: llaveProceso,
            idProceso   : proceso.idProceso
          },
          {
            $set: {
              idProceso         : proceso.idProceso,
              'demanda.juzgados': juzgados
            }
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
);
