import Title from '#@/components/Headings/title';
import Header from '#@/components/navbar/Header';
import Drawer from '#@/components/navbar/drawer';
import { getCarpetas } from '#@/lib/Carpetas';
import { LinkCard } from '#@/components/search/link';
import { ReactNode } from 'react';

export default async function Default () {
  const carpetasRaw = await getCarpetas();

  const carpetas = [
    ...carpetasRaw
  ].sort(
    (
      a, b
    ) => {
      if ( !a.numero || a.numero === undefined ) {
        return 1;
      }

      if ( !b.numero || b.numero === undefined ) {
        return -1;
      }
      const x = a.numero.toString();
      const y = b.numero.toString();

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
      <Title/>
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
