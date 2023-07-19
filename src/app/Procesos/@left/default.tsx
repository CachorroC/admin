import 'server-only';
import { Suspense } from 'react';
import SearchOutputListSkeleton from '#@/components/search/SearchProcesosOutputSkeleton';
import { getCarpetas } from '#@/lib/Carpetas';
import { fetchFechas } from '#@/lib/Actuaciones';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import type { Route } from 'next';
import { CardSearchList } from '#@/components/search/CardSearchList';

export default async function DefaultProcesosLeft() {
  const carpetas = await getCarpetas();

  const fechas = await fetchFechas(
    {
      procesos: carpetas
    } 
  );

  return (
    <Suspense fallback={<SearchOutputListSkeleton />}>
      <CardSearchList
        path={'/Procesos' as Route}
        Fechas={fechas}
      />
    </Suspense>
  );
}
