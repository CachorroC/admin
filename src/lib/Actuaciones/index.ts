import 'server-only';
import { carpetasCollection } from '../Carpetas';
import { sleep } from '../fix';
import { intConsultaActuaciones } from '#@/lib/types/procesos';

export async function  fetchActuaciones(
  {
    idProceso,
    index
  }: {
  idProceso: number;
  index: number;
}
) {

  try {

    const Request = await fetch(
      `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${ idProceso }`, {
        next: {
          revalidate: 86400
        }
      }
    );

    if ( !Request.ok ) {
      console.log(
        ` ${ index }: actuaciones not ok, status: ${ Request.status } with ${ Request.statusText } idProceso: ${ idProceso }`
      );

      return [];
    }

    const Response
      = ( await Request.json() ) as intConsultaActuaciones;

    const actuaciones = Response.actuaciones;

    return actuaciones;
  } catch ( error ) {
    console.log(
      `${ index }: error en de red en el try catch de getActuaciones: ${ JSON.stringify(
        error
      ) }`
    );

    return [];
  }
}

export async function getActuaciones(
  {
    idProceso,
    index
  }: {
  idProceso: number;
  index: number;
}
) {
  const awaitTime = 10000;
  await sleep(
    awaitTime
  );

  if ( !idProceso || idProceso === 0 || idProceso === 1 ) {
    console.log(
      `${ index }: este idProceso es: ${ idProceso }`
    );

    return [];
  }



  const actuaciones = await fetchActuaciones(
    {
      idProceso: idProceso,
      index    : index
    }
  );

  if ( actuaciones.length > 0 ) {
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

  return actuaciones;
}
