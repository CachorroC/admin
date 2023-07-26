import 'server-only';
import { monDemandado } from '../types/mongodb';
import { ActuacionCollectionItem, IntActuaciones,
         intActuacion,
         intConsultaActuaciones } from '../types/procesos';
import { carpetasCollection } from '../Carpetas';
import { sleep } from '../fix';
import { cache } from 'react';
import clientPromise from '../mongodb';
import { IntCarpeta, MonCarpeta } from '../types/demandados';
import { Collection } from 'mongodb';


export async function fetchActuaciones (
                {
                  idProceso,  index
                }: {
  idProceso: number;  index?: number
}
) {
  if ( idProceso === 0 || idProceso === 404 ) {
    return [];
  }
  const awaitTime = index ?? 0;
  await sleep(
    awaitTime
  );

  try {
    const Request = await fetch(
      `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${ idProceso }`,
      {
        next: {
          revalidate: 32000
        }
      }
    );

    if ( !Request.ok ) {
      return [];
    }
    const Response = ( await Request.json() ) as intConsultaActuaciones;

    return Response.actuaciones;
  } catch ( error ) {
    console.log(
      error
    );

    return [];
  }
}

export const fetchFechas = async(
  {
    procesos
  }: {
  procesos: MonCarpeta[];
}
) => {
  const fechas = [];

  for ( let p = 0; p < procesos.length; p++ ) {
    const proceso = procesos[ p ];

    for ( let i = 0; i < proceso.idProceso.length; i++ ) {
      const idp = proceso.idProceso[ i ];

      const fetch = await fetchFecha(
        {
          idProceso: idp,
          proceso  : proceso,
          index    : p
        }
      );
      fechas.push(
        fetch
      );
    }
  }

  return fechas;
};

export const fetchFecha = async(
  {
    idProceso,
    proceso,
    index
  }: {idProceso: number,
  proceso: MonCarpeta;
  index: number;
}
) => {

  const acts = await fetchActuaciones(
    {
      idProceso: idProceso,
      index    : index
    }
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
};
