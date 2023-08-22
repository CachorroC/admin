import 'server-only';
import { carpetasCollection } from '../Carpetas';
import { sleep } from '../fix';
import { cache } from 'react';
import { Actuacion,
         actuacionConvert } from '../types/actuaciones';

export const fetchActuaciones = cache(
  async (
    idProceso: number
  ) => {
    try {
      const request = await fetch(
        `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${ idProceso }`,
        {
          next: {
            revalidate: 259200
          }
        }
      );

      if ( !request.ok ) {
        /*  console.log(
          ` actuaciones not ok, status: ${ request.status } with ${ request.statusText } idProceso: ${ idProceso }`
        ); */

        throw new Error(
          ` actuaciones not ok, status: ${ request.status } with ${ request.statusText } idProceso: ${ idProceso }`
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
          `${ idProceso }: error en la conexion network del fetchActuaciones ${ error.name } : ${ error.message }`
        );
      }
      console.log(
        `error en de red en el try catch de fetchActuaciones  =>
         ${ error }`
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
    console.time(
      `actuacion ${ index === 1
        ? idProceso
        : index }`
    );
    console.log(
      `inicia el tiempo para actuacion ${ index }`
    );

    const awaitTime = index * 60;
    await sleep(
      awaitTime
    );

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
    console.timeEnd(
      `actuacion ${ index === 1
        ? idProceso
        : index }`
    );

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
    const collection = await carpetasCollection();

    const updateCarpetawithActuaciones
      = await collection.updateOne(
        {
          idProceso: idProceso
        },
        {
          $set: {
            fecha: new Date(
              actuaciones[ 0 ].fechaActuacion
            )
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
