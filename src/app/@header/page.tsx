import Title from '#@/components/Headings/title';
import { getCarpetas } from '#@/lib/Carpetas';
import { fetchFechas } from '#@/lib/Actuaciones';
import Drawer from '#@/components/navbar/drawer';
import SearchOutputList from '#@/components/search/SearchProcesosOutput';
import Header from '#@/components/navbar/Header';
import { Suspense } from 'react';
import SearchOutputListSkeleton from '#@/components/search/SearchProcesosOutputSkeleton';
import { Loader } from '#@/components/Loader';
import { ListDrawer } from './list';

export default async function Page() {
  return (
    <>
      <Title />
      <Suspense fallback={<Loader />}>
        <ListDrawer />
      </Suspense>
    </>
  );
}
