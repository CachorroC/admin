import 'server-only';
import { carpetasCollection, getCarpetaByidProceso } from '../Carpetas';
import { sleep } from '../fix';
import { cache } from 'react';
import { Actuacion,
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

  const actuaciones
    = db.collection<Actuacion>(
      'Actuaciones'
    );

  return actuaciones;
};

export const fetchActuaciones = cache(
  async (
    idProceso: number
  ) => {
    try {
      if ( idProceso === 1 ) {
        throw new Error(
          'idProceso es 1, no es posible hacer la peticion'
        );
      }

      const request = await fetch(
        `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${ idProceso }`,
        {
          next: {
            revalidate: 259200
          }
        }
      );

      if ( !request.ok ) {
        throw new Error(
          ` actuaciones not ok, status: ${ request.status } with ${ request.statusText } idProceso: ${ idProceso } => headers: ${ request.headers }`
        );
      }

      const json = await request.json();

      const consulta
        = actuacionConvert.toConsultaActuacion(
          JSON.stringify(
            json
          )
        );

      const actuaciones = consulta.actuaciones;

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
);

export const getActuaciones = cache(
  async (
    {
      idProceso,
      index
    }: {
    idProceso: number;
    index: number;
  }
  ) => {
    const actuaciones = await fetchActuaciones(
      idProceso
    );

    if ( actuaciones ) {
      await updateActuaciones(
        {
          idProceso  : idProceso,
          actuaciones: actuaciones
        }
      );
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

    const carpetasColl = await carpetasCollection();

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
          },
          $currentDate: {
            lastModified: true
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
