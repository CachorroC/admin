import Title from '#@/components/Headings/title';
import Drawer from '#@/components/navbar/drawer';
import { getCarpetas } from '#@/lib/Carpetas';
import { LinkCard } from '#@/components/search/link';
import { ReactNode, Suspense } from 'react';
import SearchOutputList from '#@/components/search/SearchProcesosOutput';
import { BackwardsButton,
         DrawerMenuButton,
         ForwardButton,
         HomeButton } from '#@/components/Buttons/NavButtons';
import { Loader } from '#@/components/Loader';
import layout from '#@/styles/layout.module.scss';

export default async function Default() {
  const carpetas = await getCarpetas();

  return (
    <div className={layout.header}>
      <Suspense fallback={<Loader />}>
        <DrawerMenuButton />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <HomeButton />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <ForwardButton />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <BackwardsButton />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Title helper={'Procesos'} />
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
