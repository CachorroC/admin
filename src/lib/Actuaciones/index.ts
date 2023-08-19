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
    console.log(
      `${ index }: try fetch actuaciones started`
    );

    const Request = await fetch(
      `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${ idProceso }`, {
        next: {
          revalidate: 86400
        }
      }
    );
    console.log(
      `${ index }: try fetch resulto: ${ Request.status } con el mensaje: ${ Request.statusText }`
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
      `${ index }: error en de red en el try catch de getActuaciones`
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
  const awaitTime = index * 200;
  console.log(
    awaitTime
  );
  await sleep(
    awaitTime
  );

  if (  idProceso === 0 ) {
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
    console.log(
      `se modificaron ${ updateCarpetawithActuaciones.modifiedCount } carpetas y se insertaron ${ updateCarpetawithActuaciones.upsertedCount } carpetas`
    );


  }

  return actuaciones;
}
