import 'server-only';
import { Fragment, Suspense } from 'react';
import { getCarpetas } from '#@/lib/Carpetas';
import CardSkeleton from '#@/components/card/card-skeleton';
import typography from '#@/styles/fonts/typography.module.css';
import card from '#@/components/card/card.module.css';
import { fixFechas, sleep } from '#@/lib/fix';
import { Card } from '#@/components/card/card';
import { NombreComponent } from '#@/components/card/Nombre';
import { MonCarpeta } from '#@/lib/types/carpeta';
import { intConsultaActuaciones } from '#@/lib/types/procesos';

import { Metadata } from 'next';
import { getActuaciones } from '#@/lib/Actuaciones';

export const metadata: Metadata = {
  title: 'Procesos',
};

export async function  FechaActuacionComponent(
  {
    carpeta,
    index
  }: {
  carpeta: MonCarpeta;
  index: number;
} 
) {

  const {
    idProceso
  } = carpeta;

  const actuaciones = await getActuaciones(
    {
      idProceso: idProceso
    } 
  );

  if ( actuaciones.length === 0 ) {
    return null;
  }
  const ultimaActuacion = actuaciones[ 0 ];

  return(
    <Fragment key={ carpeta._id }>
      <p className={card.content}>{ultimaActuacion.anotacion}</p>

      <sub className={card.updated} key={carpeta._id}>
        {`fecha de la ultima actuacion: ${ fixFechas(
          ultimaActuacion.fechaActuacion 
        ) }`
        }
      </sub>
    </Fragment>
  );

};


export default async function PageProcesosLeft () {
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
                fallback={
                  <sub className={ card.date }>
                    { `fecha de la ultima actuacion registrada en el servidor: ${ fixFechas(
                      carpeta.fecha 
                    ) } `}
                  </sub>
                }
              >
                <FechaActuacionComponent
                  key={carpeta._id}
                  carpeta={carpeta}
                  index={index}
                />
              </Suspense>

            </Card>
          );
        } 
      )}
    </>
  );
}
