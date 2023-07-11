import 'server-only';
import { Suspense } from 'react';
import SearchOutputList from '#@/components/search/SearchProcesosOutput';
import SearchOutputListSkeleton from '#@/components/search/SearchProcesosOutputSkeleton';
import { getCarpetas } from '#@/lib/Carpetas';
import { fetchFechas } from '#@/lib/Actuaciones';
import { CardSearchList } from '#@/components/search/CardSearchList';
import type { Route } from 'next';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import { Loader } from '#@/components/Loader';
import { ListCardCarpetasNFechasServer } from '#@/components/card/CarpetasCard/client-list';
import layout from '#@/styles/scss/layout.module.scss';

export default async function PageCarpetas() {
    const carpetas = await getCarpetas();

    const fechas = await fetchFechas(
      { procesos: carpetas } 
    );

    return (
      <>
        <div className={layout.left}>
          <Suspense fallback={<Loader />}>
            <CardSearchList
              path={'/Procesos' as Route}
              uri={`${ getBaseUrl() }`}
              Fechas={fechas}
            />
          </Suspense>
        </div>
        <div className={layout.right}>
          <Suspense fallback={<Loader />}>
            <ListCardCarpetasNFechasServer />
          </Suspense>
        </div>
      </>
    );
}
