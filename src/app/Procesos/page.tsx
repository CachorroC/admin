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
import { Loader } from '#@/components/Loader';
import { ConsultaActuacion,
         actuacionConvert } from '#@/lib/types/actuaciones';
import { MonCarpeta } from '#@/lib/types/carpeta';
import { FechaActuacionComponent } from '../Actuacion/server-components';
import SearchOutputListSkeleton from '#@/components/search/SearchProcesosOutputSkeleton';


export const dynamic = 'force-dynamic';

export const dynamicParams = true;

export const metadata: Metadata = {
  title: 'Procesos'
};

export default async function PageProcesosLeft() {
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
      <Suspense fallback={<SearchOutputListSkeleton />}>
        {carpetas.map(
          (
            carpeta, index
          ) => {
            const {
              deudor
            } = carpeta;

            return (
              <Card
                path={'/Procesos'}
                carpeta={carpeta}
                key={carpeta._id}>
                <Suspense
                  key={carpeta._id}
                  fallback={
                    <Loader key={carpeta._id} />
                  }>
                  <FechaActuacionComponent
                    carpeta={carpeta}
                    key={carpeta._id}
                    index={index}
                  />
                </Suspense>
              </Card>
            );
          }
        )}
      </Suspense>
    </>
  );
}
