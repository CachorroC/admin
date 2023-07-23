import 'server-only';
import { monDemandado } from '../types/mongodb';
import { ActuacionCollectionItem, IntActuaciones,
         intActuacion,
         intConsultaActuaciones } from '../types/procesos';
import { carpetasCollection } from '../Carpetas';
import { sleep } from '../fix';
import { cache } from 'react';
import clientPromise from '../mongodb';
import { MonCarpeta } from '../types/demandados';
import { Collection } from 'mongodb';

export function wait(
                delay: number
) {
  return new Promise(
    (
      resolve
    ) => {
      return setTimeout(
        resolve,
        delay
      );
    }
  );
}

export const actuacionesCollection = cache(
  async () => {
    const client = await clientPromise;

    if ( !client ) {
      throw new Error(
        'no hay cliente mongo actuaciones'
      );
    }

    const actuaciones = client.db(
      'RyS'
    ).collection<ActuacionCollectionItem>(
      'Actuaciones'
    );

    return actuaciones;
  }
);

export async function getActuaciones(
                idProceso: number,
                index: number
) {
  const awaitTime = index * 2000;

  if ( idProceso === 0 || idProceso === 404 ) {
    console.log(
      `idProceso es ${ idProceso }`
    );

    return [];
  }
  const collection = await actuacionesCollection();
  wait(
    awaitTime
  );

  try {
    const request = await fetch(
      `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${ idProceso }`,
      {
        next: {
          revalidate: 32000
        }
      }
    );

    if ( !request.ok ) {
      console.log(
        `Get Actuaciones request was not ok ${ request.status }`
      );

      return [];
    }

    const res
      = ( await request.json() ) as intConsultaActuaciones;

    if ( !res.actuaciones ) {
      console.log(
        'Get Actuaciones no tiene actuaciones'
      );

      return [];
    }
    const ultimaActuacion = res.actuaciones[ 0 ];

    const updateCarpeta
      = await collection.updateOne(
        {
          idProceso: idProceso
        },
        {
          $set: {
            ultimaActuacion: ultimaActuacion
          }
        }
      );

    if ( updateCarpeta.modifiedCount >= 1 ) {
      console.log(
        `${ idProceso } was ${ updateCarpeta.acknowledged } with ${ updateCarpeta.modifiedCount } documents modified`
      );
    }

    return res.actuaciones;
  } catch ( err ) {
    console.log(
      err ?? 'error'
    );

    return [];
  }
}

export async function fetchFechas(
                {
                  procesos
                }: {
  procesos: MonCarpeta[];
}
) {
  const fechas = [];

  for ( let p = 0; p < procesos.length; p++ ) {
    const proceso = procesos[ p ];

    const fetch = await fetchFecha(
      {
        proceso: proceso,
        index  : p
      }
    );
    fechas.push(
      fetch
    );
  }

  return fechas;
}

export async function fetchFecha(
                {
                  proceso,
                  index
                }: {
  proceso: MonCarpeta;
  index: number;
}
) {
  const acts = await getActuaciones(
    proceso.idProceso,
    index
  );

  if ( acts.length >= 1 ) {
    const fecha = {
      ...proceso,
      fecha: acts[ 0 ].fechaActuacion
    };

    return fecha;
  }

  const fecha = {
    ...proceso,
    fecha: null
  };

  return fecha;
}

export async function fetchLastActuaciones (
                idProceso: number,
) {
  const collection = await actuacionesCollection();

  const Request = await fetch(
    `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${ idProceso }`,
    {
      next: {
        revalidate: 32000
      }
    }
  );

  if ( !Request.ok ) {
    const newNotOk: ActuacionCollectionItem = {
      lastFetch: new Date(),
      idProceso: idProceso
    };

    const updateNotOk = await collection.findOneAndUpdate(
      {
        idProceso: idProceso
      },
      newNotOk,
      {
        upsert        : true,
        returnDocument: 'after'
      }
    );

    return updateNotOk;
  }
  const Response = ( await Request.json() ) as intConsultaActuaciones;
  const actuaciones = Response.actuaciones;

  if ( actuaciones.length === 0 ) {
    const updateEmptyActs = await collection.findOneAndUpdate(
      {
        idProceso: idProceso
      },
      {
        $set: {
          lastFetch: new Date(),
          idProceso: idProceso
        }
      },
      {
        upsert        : true,
        returnDocument: 'after'
      }
    );

    return updateEmptyActs;
  }

  const updateWithAnswer: ActuacionCollectionItem = {
    lastFetch      : new Date(),
    idProceso      : idProceso,
    ultimaActuacion: actuaciones[ 0 ]
  };

  const updateExistingActs = await collection.findOneAndUpdate(
    {
      idProceso: idProceso
    },
    updateWithAnswer,
    {
      upsert        : true,
      returnDocument: 'after'
    }
  );

  return updateExistingActs;
}
