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
import layout from '#@/styles/scss/layout.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';
import { MonCarpeta } from '#@/lib/types/demandados';

export async function LeftCarpetas (
  {
    path, carpetas
  }: { path: string; carpetas: MonCarpeta[] }
) {
  const fechas = await fetchFechas(
    { carpetas: carpetas }
  );

  return (
    <SearchOutputList path={ '/Carpetas' } fechas={fechas } />
  );
}

export async function RightCarpetas (
  {
    path, carpetas
  }: { path: string; carpetas: MonCarpeta[] }
) {
  const fechas = await fetchFechas(
    { carpetas: carpetas }
  );

  return (
    <CardSearchList path={ '/Carpetas' } fechas={ fechas } />
  );
}

export default async function PageCarpetas() {
  const carpetas = await getCarpetas();



  return (
    <div className={layout.body}>
      <div className={layout.name}>
        <h1 className={typography.displaySmall}>
          Carpetas
        </h1>
      </div>
      <div className={layout.left}>
        <Suspense fallback={ <SearchOutputList path={ '/Carpetas' } fechas={ carpetas } /> }>
          <LeftCarpetas path={ '/Carpetas' } carpetas={carpetas } />
        </Suspense>
      </div>
      <div className={layout.right}>
        <Suspense fallback={ <CardSearchList path={ '/Carpetas' } fechas={ carpetas } /> }>
          <RightCarpetas path={ '/Carpetas' } carpetas={ carpetas } />
        </Suspense>
      </div>
    </div>
  );
}
