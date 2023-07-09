import 'server-only';
import { ReactNode, Suspense } from 'react';
import Header from '#@/components/navbar/Header';
import Drawer from '#@/components/navbar/drawer';
import SearchOutputList from '#@/components/search/SearchProcesosOutput';
import { getCarpetas } from '#@/lib/Carpetas';
import { fetchFechas } from '#@/lib/Actuaciones';
import SearchOutputListSkeleton from '#@/components/search/SearchProcesosOutputSkeleton';
import { Loader } from '#@/components/Loader';

export default async function Layout(
  {
    children
  }: {
  children: ReactNode;
}
) {
  const procesos = await getCarpetas ();

  const fechas = await fetchFechas (
    {
      procesos: procesos
    }
  );
  return (
    <Header>
      {children}
      <Drawer>
        <Suspense
          fallback={<Loader />}>
          <SearchOutputList
            path='/Procesos'
            fechas={fechas}
          />
        </Suspense>
      </Drawer>
    </Header>
  );
}
