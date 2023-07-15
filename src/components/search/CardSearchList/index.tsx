'use client';
import { useNavigator, useSearch } from '#@/app/search-context';
import { Card } from '#@/components/card/card';
import { intFecha } from '#@/lib/types/demandados';
import { useParams, usePathname, useRouter } from 'next/navigation';
import card from '#@/components/card/card.module.scss';
import { fixFechas } from '#@/lib/fix';

export const CardSearchList = (
  {
    path,
    uri,
    Fechas
  }: {
  path: string;
  uri: string;
  Fechas: intFecha[];
}
) => {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();

  const [
    search,
    setSearch
  ] = useSearch();

  const [
    isNavOpen,
    setIsNavOpen
  ] = useNavigator();

  const clickHandler = () => {
    setIsNavOpen(
      false
    );
  };
  const rows: any[] = [];

  const sortedFechas = [
    ...Fechas
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

      const x
      = typeof a.fecha === 'string'
        ? a.fecha.toLowerCase()
        : a.fecha.toISOString();

      const y
      = typeof b.fecha === 'string'
        ? b.fecha.toLowerCase()
        : b.fecha.toISOString();

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
        idProceso, llaveProceso, Deudor, fecha, id
      } = Fecha;

      const {
        Nombre, Direccion, Tel, Email, Id
      } = Deudor;

      if ( Nombre.toLowerCase().indexOf(
        search.toLowerCase()
      ) === -1 ) {
        return;
      }

      rows.push(
        <Card
          carpeta={Fecha}
          key={id}
          name={Nombre}
          path={`/Carpetas/${ id }`}
          fecha={fecha}>
          <p className={card.sub}>{`${ i + 1 } de ${ arr.length }`}</p>
          {fecha && <sub className={card.date}>{fixFechas(
            fecha
          )}</sub>}
        </Card>
      );
    }
  );

  return <>{rows}</>;
};
