import { getActuaciones } from '#@/lib/Actuaciones';
import { fixFechas, sleep } from '#@/lib/fix';
import { MonCarpeta } from '#@/lib/types/carpeta';
import typography from '#@/styles/fonts/typography.module.css';
import { Fragment } from 'react';
import card from '#@/components/card/card.module.scss';
import { ConsultaActuacion, actuacionConvert } from '#@/lib/types/actuaciones';

async function getData (
  idProceso: number
) {
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

    const {
      actuaciones
    } = actuacionConvert.toConsultaActuacion(
      JSON.stringify(
        json
      )
    );

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

export default async function FechaActuacionComponent (
  {
    carpeta,
    index
  }: {
  carpeta: MonCarpeta;
  index: number;
}
) {

  if ( !carpeta.idProceso ) {
    return null;
  }

  const actuaciones = await getData(
    carpeta.idProceso
  );


  if ( !actuaciones || actuaciones.length === 0 ) {
    return null;
  }

  const ultimaActuacion = actuaciones[ 0 ];

  return (
    <div className={card.date}>
      {ultimaActuacion.actuacion && (
        <h5
          className={` ${ card.actuacion } ${ typography.titleSmall }`}>
          {ultimaActuacion.actuacion}
        </h5>
      )}
      {ultimaActuacion.anotacion && (
        <p
          className={` ${ card.anotacion } ${ typography.labelSmall }`}>
          {ultimaActuacion.anotacion}
        </p>
      )}
      <sub className={card.fecha}>
        {`actuacion registrada el: ${ fixFechas(
          ultimaActuacion.fechaActuacion
        ) }`}
      </sub>
    </div>
  );
};
