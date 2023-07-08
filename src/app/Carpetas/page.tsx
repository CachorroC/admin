import 'server-only';
import { Suspense } from 'react';
import SearchOutputList from '#@/components/search/SearchProcesosOutput';
import SearchOutputListSkeleton from '#@/components/search/SearchProcesosOutputSkeleton';
import { getCarpetas } from '#@/lib/Carpetas';
import { fetchFechas } from '#@/lib/Actuaciones';
import { CardSearchList } from '#@/components/search/CardSearchList';
import type { Route } from 'next';
import { getBaseUrl } from '#@/lib/getBaseUrl';

export default async function PageProcesosLeft() {
  const carpetas = await getCarpetas ();

  const fechas = await fetchFechas (
    {
      procesos: carpetas
    }
  );
  return (
    <Suspense
      fallback={<SearchOutputListSkeleton />}>
      <CardSearchList
        path={'/Procesos' as Route}
        uri={`${ getBaseUrl () }`}
        Fechas={fechas}
      />
    </Suspense>
  );
}
