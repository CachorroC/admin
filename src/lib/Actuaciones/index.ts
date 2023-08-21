import 'server-only';
import { carpetasCollection } from '../Carpetas';
import { sleep } from '../fix';
import { cache } from 'react';
import { Actuacion, actuacionConvert } from '../types/actuaciones';

export const fetchActuaciones = cache(
  async (
    idProceso: number
  ) => {
    try {

      const Request = await fetch(
        `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${ idProceso }`, {
          next: {
            revalidate: 259200
          }
        }
      );

      if ( !Request.ok ) {
        console.log(
          ` actuaciones not ok, status: ${ Request.status } with ${ Request.statusText } idProceso: ${ idProceso }`
        );

        return null;
      }

      const json = await Request.json();

      const consulta = actuacionConvert.toConsultaActuacion(
        json
      );

      const actuaciones = consulta.actuaciones;

      return actuaciones;
    } catch ( error ) {
      console.log(
        `error en de red en el try catch de getActuaciones: ${
          error }`
      );

      return null;
    }
  }

);

export const getActuaciones= cache(
  async(
    {
      idProceso,
      index
    }: {
  idProceso: number;
  index: number;
}
  ) => {
    console.time(
      `actuacion ${ index }`
    );  console.log(
      `inicia el tiempo para actuacion ${ index }`
    );



    const awaitTime = 1000;
    await sleep(
      awaitTime
    );


    const actuaciones = await fetchActuaciones(
      idProceso
    );

    if ( actuaciones ){

      await updateActuaciones(
        {
          idProceso  : idProceso,
          actuaciones: actuaciones
        }
      );
    }
    console.timeEnd(
      `actuacion numero ${ index }`
    );

    return actuaciones;
  }
);


export const updateActuaciones = cache(
  async (
    {
      idProceso, actuaciones
    }: {idProceso: number; actuaciones: Actuacion[]}
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

    if ( updateCarpetawithActuaciones.modifiedCount > 0 || updateCarpetawithActuaciones.upsertedCount > 0 ) {
      console.log(
        `se modificaron ${ updateCarpetawithActuaciones.modifiedCount } carpetas y se insertaron ${ updateCarpetawithActuaciones.upsertedCount } carpetas`
      );
    }
  }
);