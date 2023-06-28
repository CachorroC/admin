import { ReactNode, Suspense } from 'react';
import Header from '#@/components/navbar/Header';
import { getCarpetas } from '#@/lib/Carpetas';
import { fetchFechas } from '#@/lib/Actuaciones';
import SearchOutputListSkeleton from '#@/components/search/SearchProcesosOutputSkeleton';
import SearchOutputList from '#@/components/search/SearchProcesosOutput';
import Drawer from '#@/components/navbar/drawer';
export default async function Layout(
  { children }: { children: ReactNode }
) {
  const carpetas = await getCarpetas();
  const fechas = await fetchFechas(
    {procesos: carpetas}
  );
  return (
    <Suspense>
      <Header>
        <Drawer>
          <Suspense fallback={<SearchOutputListSkeleton />}>
            <SearchOutputList path={'/Procesos'} fechas={fechas} />
          </Suspense>
        </Drawer>
        { children }
      </Header>
    </Suspense>
  );
}
