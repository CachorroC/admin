import Title from '#@/components/Headings/title';
import Drawer from '#@/components/navbar/drawer';
import { getCarpetas } from '#@/lib/Carpetas';
import SearchOutputList from '#@/components/search/SearchProcesosOutput';
import { ForwardButton,
         BackwardsButton,
         DrawerMenuButton,
         HomeButton } from '#@/components/Buttons/NavButtons';
import { Loader } from '#@/components/Loader';
import { Suspense } from 'react';
import layout from '#@/styles/layout.module.scss';
import InputSearchBar from '#@/components/search/InputSearchBar';

export default async function Default() {
  const carpetas = await getCarpetas();

  return (
    <div className={layout.header}>
      <Suspense fallback={<Loader />}>
        <HomeButton />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <InputSearchBar />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <ForwardButton />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <BackwardsButton />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <DrawerMenuButton />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Drawer>
          <SearchOutputList
            path={'/Procesos'}
            fechas={carpetas}
          />
        </Drawer>
      </Suspense>
    </div>
  );
}
