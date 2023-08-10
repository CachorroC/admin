import { getCarpetas } from '#@/lib/Carpetas';
import { fetchFechas,
         getActuaciones } from '#@/lib/Actuaciones';
import Drawer from '#@/components/navbar/drawer';
import { Fragment, Suspense } from 'react';
import { ActuacionCard } from '#@/components/card/ActuacionesCard';
import { MonCarpeta } from '#@/lib/types/demandados';
import SearchOutputList from '#@/components/search/SearchProcesosOutput';
import { Loader } from '#@/components/Loader';

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
    <Drawer>
      <Suspense fallback={<Loader />}>
        <SearchOutputList
          path={'/Procesos'}
          fechas={carpetas}
          isFallback={true}
        />
      </Suspense>
    </Drawer>
  );
}
