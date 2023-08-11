import Title from '#@/components/Headings/title';
import Header from '#@/components/navbar/Header';
import { Suspense } from 'react';
import SearchOutputListSkeleton from '#@/components/search/SearchProcesosOutputSkeleton';
import { Loader } from '#@/components/Loader';
import { ListDrawer } from './list';
import Drawer from '#@/components/navbar/drawer';

export default function Default() {
  return (
    <Header>
      <Title />
      <Drawer>
        <Suspense fallback={<Loader />}>
          <ListDrawer />
        </Suspense>
      </Drawer>
    </Header>
  );
}
