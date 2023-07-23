import 'server-only';
import { notFound } from 'next/navigation';
import { intConsultaNumeroRadicacion,
         intProceso } from '#@/lib/types/procesos';
import { ObjectId } from 'mongodb';
import { sleep } from '#@/lib/fix';
import { cache } from 'react';
import clientPromise from '#@/lib/mongodb';
import { updateProceso } from './update';

export async function fetchProceso(
                {
                  llaveProceso,
                  index
                }: {
  llaveProceso: string;
  index: number;
}
) {
  console.log(
    llaveProceso.length
  );
  sleep(
    index * 1000
  );
  console.log(
    'wakey'
  );

  if ( llaveProceso.length < 23 ) {
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

export async function fetchProcesos(
                {
                  llavesProceso
                }: {
  llavesProceso: string[];
}
) {
  const procesos: Map<string, intProceso[]>
    = new Map();

  try {
    for (
      let ia = 0;
      ia < llavesProceso.length;
      ia++
    ) {
      const llaveProceso = llavesProceso[ ia ];
      const awaitTime = ia * 1000;

      const response = await fetchProceso(
        {
          llaveProceso: llaveProceso,
          index       : awaitTime
        }
      );

      return procesos.set(
        llaveProceso,
        response
      );
    }

    return procesos;
  } catch ( error ) {
    console.log(
      error ?? 'error en fetchProcesos'
    );

    return procesos;
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
  const awaitTime = ( index ?? 0 ) * 1000;

  const ultimosProcesos = await fetchProceso(
    {
      llaveProceso: llaveProceso,
      index       : awaitTime
    }
  );

  const returnedProcesos: Map<
    number,
    intProceso
  > = new Map();

  for (
    let prc = 0;
    prc < ultimosProcesos.length;
    prc++
  ) {
    const proceso = ultimosProcesos[ prc ];

    const updtProceso = await updateProceso(
      {
        proceso: proceso,
        index  : prc
      }
    );

    const returnedProceso
      = updtProceso.value ?? proceso;

    returnedProcesos.set(
      proceso.idProceso,
      returnedProceso
    );
  }

  return Array.from(
    returnedProcesos.values()
  );
}

export async function getProcesos(
                {
                  llavesProceso
                }: {
  llavesProceso: string[];
}
) {
  const returnedProcesos: Map<
    number,
    intProceso
  > = new Map();

  for (
    let index = 0;
    index < llavesProceso.length;
    index++
  ) {
    const llaveProceso = llavesProceso[ index ];
    const awaitTime = index * 1000;

    const ultimosProcesos = await fetchProceso(
      {
        llaveProceso: llaveProceso,
        index       : awaitTime
      }
    );
    ultimosProcesos.forEach(
      async (
        proceso, i
      ) => {
        const updtProceso = await updateProceso(
          {
            proceso: proceso,
            index  : index * i
          }
        );

        const returnedProceso
          = updtProceso.value ?? proceso;
        returnedProcesos.set(
          proceso.idProceso,
          returnedProceso
        );
      }
    );
  }

  return returnedProcesos;
}
