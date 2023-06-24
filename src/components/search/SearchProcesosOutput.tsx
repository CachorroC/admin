'use client';
import { monDemandado } from '#@/lib/types/mongodb';
import { LinkCard } from './link';
import { intFecha } from '#@/lib/types/demandados';
import typography from '#@/styles/fonts/typography.module.scss';
import { useSearch } from '#@/app/search-context';
import { monCarpetaDemandado } from '../../lib/types/demandados';

export default function SearchOutputList (
  {
    path,
    procesos,
    fechas
  }: {
    path: string;
    procesos: monCarpetaDemandado[];
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
      const { idProceso, llaveProceso, fecha } = proceso;

      if (
        proceso.Demandado.Nombre.toLowerCase().indexOf(
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
          key={index}>
          <sub className={ typography.labelSmall } >
            {
              `${index + 1} of ${array.length}`
            }
          </sub>
        </LinkCard>


      );
    }
  );

  return <>{ rows }</>;
}
