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

import { Metadata } from 'next';
import { getActuaciones } from '#@/lib/Actuaciones';
import { Loader } from '#@/components/Loader';

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
      idProceso: idProceso,
      index    : index
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
      const typeofA = typeof a.fecha;
      console.log(
        typeofA
      );

      const typeofB = typeof b.fecha;
      console.log(
        typeofB
      );

      if ( !a.fecha || a.fecha === undefined ) {
        return 1;
      }

      if ( !b.fecha || b.fecha === undefined ) {
        return -1;
      }

      const x = a.fecha.toString();

      const y = b.fecha.toString();

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
          return (
            <Card path={ '/Procesos' } carpeta={ carpeta } key={ carpeta._id }>
              <h1
                className={`${ typography.displaySmall } ${ card.title }`} key={carpeta._id}
              >
                {carpeta.nombre}
              </h1>
              <sub className={ card.sub }>{ `carpeta numero ${ carpeta.numero }` }</sub>

              <Suspense
                key={carpeta._id}
                fallback={
                  <Loader key={carpeta._id}/>
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
