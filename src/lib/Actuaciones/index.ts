import 'server-only';
import { carpetasCollection } from '#@/lib/Carpetas';
import { sleep } from '../fix';
import { cache } from 'react';
import { Actuacion,
         ConsultaActuacion,
         actuacionConvert } from '../types/actuaciones';
import { MonCarpeta } from '../types/carpeta';
import clientPromise from '../mongodb';

export const actuacionesCollection = async () => {
  const client = await clientPromise;

  if ( !client ) {
    throw new Error(
      'no hay cliente mongólico' 
    );
  }

  const db = client.db(
    'RyS' 
  );

  const actuaciones = db.collection<Actuacion>(
    'Actuaciones'
  );

  return actuaciones;
};

export async function fetchActuaciones(
  idProceso: number,
  index: number
) {
  console.time(
    index.toString() 
  );
  await sleep(
    index 
  );
  console.timeEnd(
    index.toString() 
  );

  try {
    const request = await fetch(
      `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${ idProceso.toString() }`,
      {
        next: {
          revalidate: 259200,
          tags      : [
            'actuaciones'
          ]
        }
      }
    );
    console.log(
      request.status 
    );

    if ( !request.ok ) {
      throw new Error(
        `fetch Actuaciones not ok: ${ request.status }: ${ request.statusText } del ${ idProceso }`
      );
    }

    const json
      = ( await request.json() ) as ConsultaActuacion;

    const {
      actuaciones 
    } = json;

    return actuaciones;
  } catch ( error ) {
    if ( error instanceof Error ) {
      console.log(
        `${ idProceso }: error en la conexion network del fetchActuaciones => ${ error.name } : ${ error.message }`
      );
    }
    console.log(
      `${ idProceso }: : error en la conexion network del fetchActuaciones  =>  ${ error }`
    );

    return null;
  }
}

export const getActuaciones = cache(
  async (
    {
      carpeta,
      index
    }: {
    carpeta: MonCarpeta;
    index: number;
  } 
  ) => {
    if ( !carpeta.idProceso ) {
      return null;
    }

    const actuaciones = await fetchActuaciones(
      carpeta.idProceso,
      index
    );

    if ( actuaciones ) {
      const ultimaActuacion = actuaciones[ 0 ];

      const newDate = new Date(
        ultimaActuacion.fechaActuacion
      )
            .toISOString();
      console.log(
        newDate 
      );

      const oldDate = new Date(
        carpeta.fecha ?? ''
      )
            .toISOString();
      console.log(
        oldDate 
      );

      if ( oldDate !== newDate ) {
        await updateActuaciones(
          {
            idProceso  : carpeta.idProceso,
            actuaciones: actuaciones
          } 
        );
      }
    }

    return actuaciones;
  }
);

export const updateActuaciones = cache(
  async (
    {
      idProceso,
      actuaciones
    }: {
    idProceso: number;
    actuaciones: Actuacion[];
  } 
  ) => {
    const carpetasColl
      = await carpetasCollection();

    const updateCarpetawithActuaciones
      = await carpetasColl.updateOne(
        {
          idProceso: idProceso
        },
        {
          $set: {
            fecha: new Date(
              actuaciones[ 0 ].fechaActuacion
            ),
            ultimaActuacion: actuaciones[ 0 ]
          }
        },
        {
          upsert: false
        }
      );

    if (
      updateCarpetawithActuaciones.modifiedCount
        > 0
      || updateCarpetawithActuaciones.upsertedCount
        > 0
    ) {
      console.log(
        `se modificaron ${ updateCarpetawithActuaciones.modifiedCount } carpetas y se insertaron ${ updateCarpetawithActuaciones.upsertedCount } carpetas`
      );
    }
  }
);
