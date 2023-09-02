import Title from '#@/components/Headings/title';
import { getCarpetas } from '#@/lib/Carpetas';
import Drawer from '#@/components/navbar/drawer';
import SearchOutputList from '#@/components/search/SearchProcesosOutput';
import { ForwardButton,
         BackwardsButton,
         DrawerMenuButton,
         HomeButton } from '#@/components/Buttons/NavButtons';
import { Suspense } from 'react';
import { Loader } from '#@/components/Loader';

export default async function Page() {
  const carpetas = await getCarpetas();

  return (
    <>
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
    </>
  );
}
