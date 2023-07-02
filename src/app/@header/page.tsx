import Title from '#@/components/Headings/title';
import { getCarpetas } from '#@/lib/Carpetas';
import { fetchFechas } from '#@/lib/Actuaciones';
import Drawer from '#@/components/navbar/drawer';
import SearchOutputList from '#@/components/search/SearchProcesosOutput';
import Header from '#@/components/navbar/Header';
import { Suspense } from 'react';
import SearchOutputListSkeleton from '#@/components/search/SearchProcesosOutputSkeleton';

async function ListDrawer() {
  const procesos = await getCarpetas();
  const fechas = await fetchFechas(
    { procesos: procesos }
  );
  return (
    <Drawer>
      <SearchOutputList path='/Procesos' fechas={fechas} />
    </Drawer>
  );
}

export default async function Page() {
  return (
    <Header>
      <Title />
      <Suspense fallback={<SearchOutputListSkeleton />}>
        <ListDrawer />
      </Suspense>
    </Header>
  );
}
