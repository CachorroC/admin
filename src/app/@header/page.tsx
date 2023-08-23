import Title from '#@/components/Headings/title';
import Header from '#@/components/navbar/Header';
import Drawer from '#@/components/navbar/drawer';
import { getCarpetas } from '#@/lib/Carpetas';
import { LinkCard } from '#@/components/search/link';
import { ReactNode } from 'react';
import SearchOutputList from '#@/components/search/SearchProcesosOutput';

export default async function Default() {
  const carpetas = await getCarpetas();

  return (
    <Header>
      <Title />
      <Drawer>
        <SearchOutputList
          path={'/Procesos'}
          fechas={carpetas}
        />
      </Drawer>
    </Header>
  );
}
