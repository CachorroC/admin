'use client';
import { monDemandado } from '#@/lib/types/mongodb';
import { intFecha } from '#@/lib/types/demandados';
import { useSearch } from '#@/app/search-context';
import { LinkCard } from './link';
import typography from '#@/styles/fonts/typography.module.scss';
import { fixFechas } from '#@/lib/fix';
import card from '#@/components/card/card.module.scss';
export default function SearchOutputList (
  {
    path,
    procesos,
    fechas
  }: {
    path: string;
    procesos: monDemandado[];
      fechas: intFecha[];
  }
) {
  const [
    search,
    setSearch
  ] = useSearch();

  const rows: any[] = [];

  const idk = [ ...fechas ].sort(
    (
      a, b
    ) => {
      if ( !a.fecha || a.fecha === undefined ) {
        return 1;
      }
      if ( !b.fecha || b.fecha === undefined ) {
        return -1;
      }
      let x = a.fecha.toLowerCase();
      let y = b.fecha.toLowerCase();
      if ( x < y ) {
        return 1;
      }
      if ( x > y ) {
        return -1;
      }
      return 0;
    }
  );
  idk.forEach(
    (
      proceso, index, array
    ) => {
      const { idProceso, llaveProceso, Demandado, fecha , _id} = proceso;
      const {Nombre, Id, Tel, Direccion} = Demandado;

      if (
        Nombre.toLowerCase().indexOf(
          search.toLowerCase()
        ) ===
        -1
      ) {
        return;
      }
      rows.push(


        <LinkCard
          path={ path }
          proceso={ proceso }
          key={ _id.toString() } llaveProceso={ llaveProceso } idProceso={idProceso } >
          <sub className={ typography.labelSmall } >
            {
              `${index + 1} of ${array.length}`
            }
          </sub>
          <sub className={ card.date }>
            {fixFechas(
              fecha
            )}
          </sub>
        </LinkCard>



      );
    }
  );

  return <>{ rows }</>;
}
