import 'server-only';
import { Suspense } from 'react';
import SearchOutputList from '#@/components/search/SearchProcesosOutput';
import SearchOutputListSkeleton from '#@/components/search/SearchProcesosOutputSkeleton';
import { getCarpetas, getCarpetasNew } from '#@/lib/Carpetas';
import { fetchFechas } from '#@/lib/Actuaciones';
import { CardSearchList } from '#@/components/search/CardSearchList';
import type { Route } from 'next';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import { Loader } from '#@/components/Loader';
import { ListCardCarpetasNFechasServer } from '#@/components/card/CarpetasCard/server-list';
import layout from '#@/styles/scss/layout.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';

export default async function PageCarpetas() {
  const carpetas = await getCarpetas();

  const fechas = await fetchFechas({
    procesos: carpetas
  });

  return (
    <div className={layout.body}>
      <div className={layout.name}>
        <h1 className={typography.displaySmall}>Carpetas</h1>
      </div>
      <div className={layout.left}>
        <Suspense fallback={<Loader />}>
          <CardSearchList
            path={'/Procesos' as Route}
            Fechas={fechas}
          />
        </Suspense>
      </div>
      <div className={layout.right}>
        <Suspense fallback={<Loader />}>
          <ListCardCarpetasNFechasServer />
        </Suspense>
      </div>
    </div>
  );
}
