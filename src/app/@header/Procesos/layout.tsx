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
  const carpetasRaw = await getCarpetas();

  const carpetas = [
    ...carpetasRaw
  ].sort(
    (
      a, b
    ) => {
      if ( !a.fecha || a.fecha === undefined ) {
        return 1;
      }

      if ( !b.fecha || b.fecha === undefined ) {
        return -1;
      }
      const x = a.fecha.toISOString();
      const y = b.fecha.toISOString();

      if ( x < y ) {
        return 1;
      }

      if ( x > y ) {
        return -1;
      }

      return 0;
    }
  );

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
