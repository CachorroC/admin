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
    Fechas,
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
      if (!a.fecha || a.fecha === undefined) {
        return 1;
      }
      if (!b.fecha || b.fecha === undefined) {
        return -1;
      }
      let x = a.fecha.toLowerCase();
      let y = b.fecha.toLowerCase();
      if (x < y) {
        return 1;
      }
      if (x > y) {
        return -1;
      }
      return 0;
    }
  );
  sortedFechas.forEach(
    (
      Fecha, i, arr
    ) => {
      const { idProceso, llaveProceso, Deudor, fecha, _id } = Fecha;
      const { Nombre, Direccion, Tel, Email, Id } = Deudor;
      if (Nombre.toLowerCase().indexOf(
        search.toLowerCase()
      ) === -1) {
        return;
      }
      rows.push(
        <Card
          key={_id}
          name={Nombre}
          path='/Procesos'
          llaveProceso={llaveProceso}
          idProceso={idProceso}
          fecha={fecha}
        >
          <p className={ card.sub }>{ `${ i + 1 } de ${ arr.length }` }</p>
          {
            fecha && (
              <sub className={card.date}>{ fixFechas(
                fecha
              )}</sub>
            )
          }
        </Card>
      );
    }
  );
  return <>{rows}</>;
};
