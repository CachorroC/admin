import Drawer from '#@/components/navbar/drawer';
import SearchOutputList from '#@/components/search/SearchProcesosOutput';
import SearchOutputListSkeleton from '#@/components/search/SearchProcesosOutputSkeleton';
import { Suspense } from 'react';
import Title from '#@/components/modal/title';
import typeface from '#@/components/typográficos/typeface.module.scss';
import Header from '#@/components/navbar/Header';
import { ButtonSkeleton } from '#@/components/navbar/ButtonSkeleton';
import { getCarpetas } from '#@/lib/Carpetas';
import { fetchFechas } from '#@/lib/Actuaciones';

export default async function Page() {
  const procesos = await getCarpetas();
  const fechas = await fetchFechas(
    { procesos: procesos }
  );

  return (
    <>
      <Suspense fallback={<ButtonSkeleton />}>
        <Title />
      </Suspense>
      <Drawer>
        <Suspense fallback={<SearchOutputListSkeleton />}>
          <SearchOutputList path={'/Procesos'} fechas={fechas} />
        </Suspense>
      </Drawer>
    </>
  );
}
