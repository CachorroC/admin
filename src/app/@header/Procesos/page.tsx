import Title from '#@/components/Headings/title';
import { getCarpetas } from '#@/lib/Carpetas';
import { fetchFechas } from '#@/lib/Actuaciones';
import Drawer from '#@/components/navbar/drawer';
import SearchOutputList from '#@/components/search/SearchProcesosOutput';
import Header from '#@/components/navbar/Header';
import { Suspense } from 'react';
import SearchOutputListSkeleton from '#@/components/search/SearchProcesosOutputSkeleton';
import { Loader } from '#@/components/Loader/index';

export default async function Page() {
  const carpetas = await getCarpetas();

  const fechas = await fetchFechas(
    {
      carpetas: carpetas 
    } 
  );

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Title />
      </Suspense>
      <Drawer>
        <Suspense fallback={<Loader />}>
          <SearchOutputList
            path='/Procesos'
            fechas={fechas}
            isFallback={false}
          />
        </Suspense>
      </Drawer>
    </>
  );
}
