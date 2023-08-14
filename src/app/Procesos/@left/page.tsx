import 'server-only';
import { Fragment, Suspense } from 'react';
import { getCarpetas } from '#@/lib/Carpetas';
import CardSkeleton from '#@/components/card/card-skeleton';
import typography from '#@/styles/fonts/typography.module.scss';
import card from '#@/components/card/card.module.scss';
import { fixFechas, sleep } from '#@/lib/fix';
import { Card } from '#@/components/card/card';
import { NombreComponent } from '#@/components/card/Nombre';
import { MonCarpeta } from '#@/lib/types/carpeta';
import { intConsultaActuaciones } from '#@/lib/types/procesos';

export const revalidate = 43200;


export async function  FechaActuacionComponent(
  {
    carpeta,
    index
  }: {
  carpeta: MonCarpeta;
  index: number;
}
) {
  const rowsActs = [];

  const {
    idProceso
  } = carpeta;
  const awaitTime = index * 1000;
  await sleep(
    awaitTime
  );

  if ( !idProceso || idProceso === 0 ) {
    console.log(
      `este idProceso es: ${ idProceso } con index ${ index }`
    );

    return null;
  }

  try {
    const Request = await fetch(
      `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${ idProceso }`,
    );

    if ( !Request.ok ) {
      console.log(
        ` ${ idProceso }: actuaciones not ok, status: ${ Request.status } with ${ Request.statusText } index: ${ index }`
      );

      return null;
    }

    const Response
      = ( await Request.json() ) as intConsultaActuaciones;
    const actuaciones = Response.actuaciones;

    if ( actuaciones.length === 0 ) {
      return null;
    }
    const ultimaActuacion = actuaciones[ 0 ];
    rowsActs.push(
      <sub className={card.updated} key={carpeta._id}>
        {fixFechas(
          ultimaActuacion.fechaActuacion
        )}
      </sub>
    );


    return (
      <Fragment key={carpeta._id}>
        {rowsActs}
      </Fragment>
    );
  } catch ( error ) {
    console.log(
      error
    );

    return null;
  }


};


export default async function PageProcesosLeft() {
  const carpetasRaw = await getCarpetas();

  const carpetas = [
    ...carpetasRaw
  ].sort(
    (
      a, b
    ) => {
      if ( !a.fecha || a.fecha === undefined ) {
        return 1;
      }

      if ( !b.fecha || b.fecha === undefined ) {
        return -1;
      }
      const x = a.fecha.toISOString();
      const y = b.fecha.toISOString();

      if ( x < y ) {
        return 1;
      }

      if ( x > y ) {
        return -1;
      }

      return 0;
    }
  );

  return (
    <>
      {carpetas.map(
        (
          carpeta, index
        ) => {
          const segundoNombre
          = carpeta.deudor.segundoNombre ?? ' ';

          const segundoApellido
          = carpeta.deudor.segundoApellido ?? ' ';

          const {
            cedula,
            primerNombre,
            primerApellido,
            email,
            tel,
            direccion
          } = carpeta.deudor;
          const nombre = `${ primerNombre }   ${ segundoNombre }   ${ primerApellido }   ${ segundoApellido }`;

          return (
            <Card path={ '/Procesos' } carpeta={ carpeta } key={ carpeta._id }>
              <h1
                className={`${ typography.displaySmall } ${ card.title }`}
              >
                {nombre}
              </h1>
              <sub className={ card.sub }>{ `${ index + 1 } de ${ carpetasRaw.length }` }</sub>

              <Suspense
                key={carpeta._id}
                fallback={<CardSkeleton />}
              >
                <FechaActuacionComponent
                  key={carpeta._id}
                  carpeta={carpeta}
                  index={index}
                />
              </Suspense>
              <sub className={ card.date }>
                {`fecha de la ultima actuacion registrada en el servidor: ${ fixFechas(
                  carpeta.fecha
                ) } `}
              </sub>
            </Card>
          );
        }
      )}
    </>
  );
}
