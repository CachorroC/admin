import { getCarpetas } from '#@/lib/Carpetas';
import Drawer from '#@/components/navbar/drawer';
import { Fragment, Suspense } from 'react';
import SearchOutputList from '#@/components/search/SearchProcesosOutput';
import { Loader } from '#@/components/Loader';
import { LinkCard } from '#@/components/search/link';
import { fixFechas } from '#@/lib/fix';
import CardSkeleton from '#@/components/card/card-skeleton';
import { FechaActuacionComponent } from '#@/components/ultima-actuacion-component';

export async function ListDrawer() {
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
      {
        carpetas.map(
          (
            carpeta, index
          ) => {
            return (
              <LinkCard key={carpeta._id} path={ '/Procesos' } carpeta={ carpeta } />
            );
          }
        )
      }
    </>
  );
}
