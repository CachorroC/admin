import { Suspense } from 'react';
import SearchOutputList from '#@/components/search/SearchProcesosOutput';
import SearchOutputListSkeleton from '#@/components/search/SearchProcesosOutputSkeleton';
import { getCarpetas } from '#@/lib/Carpetas';
import { fetchFechas } from '#@/lib/Actuaciones';
export default async function DefaultProcesosLeft() {
  const carpetas = await getCarpetas();
  const fechas = await fetchFechas({ procesos: carpetas });
  return (
    <Suspense fallback={<SearchOutputListSkeleton />}>
      <SearchOutputList path={'/Procesos'} fechas={fechas} />
    </Suspense>
  );
}
