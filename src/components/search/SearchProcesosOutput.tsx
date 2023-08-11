'use client';
import { useSearch,
         useNavigator } from '#@/app/search-context';
import { LinkCard } from './link';
import { fixFechas } from '#@/lib/fix';
import Link from 'next/link';
import searchbar from '#@/components/search/searchbar.module.scss';
import { usePathname } from 'next/navigation';
import { Name } from '../Headings/clientSideName';
import type { Route } from 'next';
import { useRef } from 'react';
import { MonCarpeta,
         NombreCompleto } from '#@/lib/types/carpeta';

export default function SearchOutputList(
  {
    path,
    fechas,
    isFallback
  }: {
  path: string;
  fechas: MonCarpeta[];
  isFallback: boolean;
}
) {
  const pathname = usePathname();

  const [
    search,
    setSearch
  ] = useSearch();

  const searchLinkRef = useRef<Map<
    any,
    any
  > | null>(
    null
  );

  function scrollToId(
    _id: string
  ) {
    const map = getMap();

    const node = map.get(
      _id
    );
    node.scrollIntoView(
      {
        behavior: 'smooth',
        block   : 'nearest',
        inline  : 'center'
      }
    );
    node.focus();
  }

  function getMap() {
    if ( !searchLinkRef.current ) {
      searchLinkRef.current = new Map();
    }

    return searchLinkRef.current;
  }

  const clickHandler = () => {
    setIsNavOpen(
      false
    );
  };

  const [
    isNavOpen,
    setIsNavOpen
  ]
    = useNavigator();
  const isActive = pathname === path;
  const href = path as Route;
  const rows: any[] = [];

  const idk = [
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
  idk.forEach(
    (
      proceso, index, array
    ) => {
      const {
        idProceso,
        llaveProceso,
        deudor,
        fecha,
        _id
      } = proceso;

      const name = new NombreCompleto(
        deudor
      );

      if (
        name.Nombre.toLowerCase()
              .indexOf(
                search.toLowerCase()
              ) === -1
      ) {
        return;
      }
      rows.push(
        <LinkCard
          path={path}
          carpeta={proceso}
          key={_id}
        />
      );
    }
  );

  return (
    <>
      <p>
        {isFallback
          ? 'es fallback'
          : 'no es fallback'}
      </p>

      {rows}
    </>
  );
}
