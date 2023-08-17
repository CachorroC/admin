import Title from '#@/components/Headings/title';
import Header from '#@/components/navbar/Header';
import Drawer from '#@/components/navbar/drawer';
import { getCarpetas } from '#@/lib/Carpetas';
import { LinkCard } from '#@/components/search/link';
import { ReactNode } from 'react';

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
        { carpetas.map(
          (
            carpeta, index
          ) => {
            return (
              <LinkCard key={carpeta._id} path={'/Procesos'} carpeta={carpeta}/>
            );
          }
        ) }
      </Drawer>
    </Header>
  );
}
