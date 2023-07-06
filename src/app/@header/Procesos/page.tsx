import Title from '#@/components/Headings/title';
import { getCarpetas } from '#@/lib/Carpetas';
import { fetchFechas } from '#@/lib/Actuaciones';
import Drawer from '#@/components/navbar/drawer';
import SearchOutputList from '#@/components/search/SearchProcesosOutput';
import Header from '#@/components/navbar/Header';
import { Suspense } from 'react';
import SearchOutputListSkeleton from '#@/components/search/SearchProcesosOutputSkeleton';

export default async function Page() {
  const procesos = await getCarpetas ();

  const fechas = await fetchFechas ({
    procesos: procesos
  });
  return (
    <Header>
      <Suspense fallback={<p>loading</p>}>
        <Title />
      </Suspense>
      <Drawer>
        <Suspense
          fallback={<SearchOutputListSkeleton />}>
          <SearchOutputList
            path='/Procesos'
            fechas={fechas}
          />
        </Suspense>
      </Drawer>
    </Header>
  );
}
