import Title from '#@/components/Headings/title';
import Header from '#@/components/navbar/Header';
import Drawer from '#@/components/navbar/drawer';
import { getCarpetas } from '#@/lib/Carpetas';
import { LinkCard } from '#@/components/search/link';
import { ReactNode, Suspense } from 'react';
import SearchOutputList from '#@/components/search/SearchProcesosOutput';
import SearchOutputListSkeleton from '#@/components/search/SearchProcesosOutputSkeleton';

export default async function Layout (
  {
    children
  }: {children: ReactNode}
) {
  const carpetas = await getCarpetas();

  return (
    <Header>
      {children}
      <Drawer>
        <Suspense fallback={<SearchOutputListSkeleton />}>
          <SearchOutputList path={ '/Procesos' } fechas={ carpetas} />
        </Suspense>
      </Drawer>
    </Header>
  );
}
