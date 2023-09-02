import { ReactNode, Suspense } from 'react';
import { BackwardsButton,
         DrawerMenuButton,
         ForwardButton,
         HomeButton } from '#@/components/Buttons/NavButtons';
import layout from '#@/styles/layout.module.scss';
import InputSearchBar from '#@/components/search/InputSearchBar';
import { Loader } from '#@/components/Loader';
import Drawer from '#@/components/navbar/drawer';
import SearchOutputList from '#@/components/search/SearchProcesosOutput';
import { getCarpetas } from '#@/lib/Carpetas';

export default async function Layout(
  {
    children
  }: {
  children: ReactNode;
} 
) {
  const carpetas = await getCarpetas();

  return (
    <div className={layout.header}>
      <Suspense fallback={<Loader />}>
        <HomeButton />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <InputSearchBar />
      </Suspense>
      {children}
      <Suspense fallback={<Loader />}>
        <BackwardsButton />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <ForwardButton />
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
