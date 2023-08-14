'use client';
import { useNavigator,
         useSearch } from '#@/app/search-context';
import { Card } from '#@/components/card/card';
import { useParams,
         usePathname,
         useRouter } from 'next/navigation';
import card from '#@/components/card/card.module.scss';
import { fixFechas } from '#@/lib/fix';
import { MonCarpeta } from '#@/lib/types/carpeta';

export const CardSearchList = (
  {
    path,
    fechas
  }: {
  path: string;
  fechas: MonCarpeta[];
}
) => {
  const [
    search,
    setSearch
  ] = useSearch();

  const [
    isNavOpen,
    setIsNavOpen
  ]
    = useNavigator();

  const clickHandler = () => {
    setIsNavOpen(
      false
    );
  };
  const rows: any[] = [];

  const sortedFechas = [
    ...fechas
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
  sortedFechas.forEach(
    (
      Fecha, i, arr
    ) => {
      const {
        fecha
      } = Fecha;
      const Nombre = Fecha.nombre ?? 'sin nombre';

      if (
        Nombre.toLowerCase()
          .indexOf(
            search.toLowerCase()
          ) === -1
      ) {
        return;
      }

      rows.push(
        <Card
          key={Fecha._id}
          path={path}
          carpeta={Fecha}
        >
          <p className={card.sub}>{`${ i + 1 } de ${
            arr.length
          }`}</p>
          {fecha && (
            <sub className={card.date}>
              {fixFechas(
                fecha
              )}
            </sub>
          )}
        </Card>
      );
    }
  );

  return <>{rows}</>;
};
