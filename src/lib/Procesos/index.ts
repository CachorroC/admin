
import { carpetasCollection } from '#@/lib/Carpetas';
import { sleep } from '#@/lib/fix';
import clientPromise from '#@/lib/mongodb';
import { ConsultaNumeroRadicacion,
         Proceso } from '#@/lib/types/procesos';
import { Juzgado } from '#@/lib/types/carpeta';
import { Despacho } from '#@/lib/types/despachos';
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

      const response
      = ( await request.json() ) as Despacho[];

      return response;
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

export async function fetchProceso(
  llaveProceso: string,
  index: number
) {


  try {
    await sleep(
      index
    );

    if ( llaveProceso.length < 23 ) {
      throw new Error(
        `${ index } la llaveProceso no está bien estructurada: ${ llaveProceso }`
      );
    }

    const req = await fetch(
      `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${ llaveProceso }&SoloActivos=true`,
      {
        next: {
          tags: [
            'procesos'
          ]
        }
      }
    );

    if ( !req.ok ) {
      throw new Error(
        `${ index }: procesos not ok, status: ${ req.status } with ${ req.statusText } llaveProceso: ${ llaveProceso }`
      );
    }

    const json
      = ( await req.json() ) as ConsultaNumeroRadicacion;

    const {
      procesos
    } = json;

    return procesos;
  } catch ( e ) {
    if ( e instanceof Error ) {
      console.log(
        `${ index }: ${ llaveProceso }: error en la conexion network del fetchProceso ${ e.name } : ${ e.message }`
      );

      return null;
    }
    console.log(
      `${ index }: ${ llaveProceso }: : error en la conexion network del fetchProceso  =>  ${ e }`
    );

    return null;
  }
}

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
    const carpColl = await carpetasCollection();

    const fetchP = await fetchProceso(
      llaveProceso,
      index
    );

    if ( fetchP ) {
      for ( const proceso of fetchP ) {
        if ( !proceso.esPrivado ) {
          const juzgados
            = await newJuzgado(
              fetchP
            );

          const updt = await carpColl.updateOne(
            {
              $or: [
                {
                  idProceso: proceso.idProceso
                },
                {
                  llaveProceso: llaveProceso
                }
              ]
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
    }

    return fetchP;
  }
);
