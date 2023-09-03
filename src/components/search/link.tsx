'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Route } from 'next';
import searchbar from '#@/components/search/searchbar.module.css';
import { fixFechas } from '#@/lib/fix';
import { useNavigator,
         useSearch } from '#@/app/search-context';
import { useRouter } from 'next/navigation';
import { NombreComponent } from '../nombre';
import { MonCarpeta } from '#@/lib/types/carpeta';
import { Suspense } from 'react';
import { Loader } from '../Loader';

export const LinkCard = (
  {
    path,
    carpeta
  }: {
  path: string;
  carpeta: MonCarpeta;
} 
) => {
  const [
    search,
    setSearch
  ] = useSearch();

  const {
    deudor,
    fecha,
    llaveProceso,
    idProceso,
    _id
  } = carpeta;

  const Nombre = carpeta.nombre;

  const pathname = usePathname();

  const [
    isNavOpen,
    setIsNavOpen
  ]
    = useNavigator();

  const procesosHref = carpeta.llaveProceso
    ? carpeta.idProceso
      ? `${ path }/${ carpeta.llaveProceso }/${ carpeta.idProceso }`
      : `${ path }/${ carpeta.llaveProceso }`
    : `/Carpetas/${ carpeta.numero }`;

  const isActive
    = pathname === procesosHref
    || pathname
      === `${ path }/${ llaveProceso }/${ idProceso }`
    || pathname === `${ path }/${ llaveProceso }`;

  const router = useRouter();

  const isSearch
    = carpeta.nombre
          .toLowerCase()
          .indexOf(
            search.toLowerCase() 
          ) === -1;

  return (
    <Link
      key={carpeta._id}
      href={procesosHref as Route}
      onClick={() => {
        setIsNavOpen(
          false 
        );
      }}
      className={searchbar.container}>
      <div
        className={
          isActive
            ? searchbar.isActive
            : searchbar.notActive
        }>
        <sup
          className={`${
            !isSearch && searchbar.sub
          }`}>
          {carpeta.numero}
        </sup>
        <Suspense fallback={<Loader />}>
          <NombreComponent
            key={carpeta._id}
            deudor={deudor}
          />
        </Suspense>
        {Nombre}

        <sub className={searchbar.date}>
          {fixFechas(
            fecha 
          )}
        </sub>
      </div>
    </Link>
  );
};
