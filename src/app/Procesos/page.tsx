import 'server-only';
import { Fragment, Suspense } from 'react';
import { getCarpetas } from '#@/lib/Carpetas';
import CardSkeleton from '#@/components/card/card-skeleton';
import typography from '#@/styles/fonts/typography.module.scss';
import card from '#@/components/card/card.module.scss';
import { fixFechas,
         sleep,
         toNameString } from '#@/lib/fix';
import { Card } from '#@/components/card/card';
import { Metadata } from 'next';
import { FechaActuacionComponent } from '#@/components/Actuacion/server-components';
import { Loader } from '#@/components/Loader';

export const metadata: Metadata = {
  title: 'Procesos'
};

export default async function PageProcesosLeft(
  {
    searchParams
  }: {  searchParams: { [key: string]: string | string[] | undefined }}
) {

  const sortSearchParam = searchParams.sort;

  if ( sortSearchParam ) {
    const typeOfSearchparam = typeof sortSearchParam;
    console.log(
      sortSearchParam
    );
  }


  const carpetasRaw = await getCarpetas();

  const carpetas = [
    ...carpetasRaw
  ].sort(
    (
      a, b
    ) => {
      const typeofA = typeof a.fecha;

      const typeofB = typeof b.fecha;

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
          const {
            deudor
          } = carpeta;

          const {
            primerNombre,
            segundoNombre,
            primerApellido,
            segundoApellido
          } = deudor;

          return (
            <Card
              path={'/Procesos'}
              carpeta={carpeta}
              key={carpeta._id}
            >

              <Suspense fallback={<Loader  key={carpeta._id}/>} >
                <FechaActuacionComponent
                  key={carpeta._id}
                  idProceso={carpeta.idProceso}
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
