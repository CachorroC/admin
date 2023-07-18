'use client';
import { Route } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, Suspense, useState } from 'react';
import card from '#@/components/card/card.module.scss';
import { useModal } from '#@/app/modal-context';
import typography from '#@/styles/fonts/typography.module.scss';
import { useNavigator } from '#@/app/search-context';
import { fixFechas, toNameString } from '#@/lib/fix';
import { Name } from '#@/components/Headings/clientSideName';
import { useEffect } from 'react';
import { Loader } from '#@/components/Loader';
import { MonCarpeta, NombreCompleto, intFecha } from '#@/lib/types/demandados';

export const Card = (
  {
    path,
    carpeta,
    children
  }: {
  path: string;
  carpeta: MonCarpeta | intFecha;
  children: ReactNode;
}
) => {
  const [
    isNavOpen,
    setIsNavOpen
  ] = useNavigator();

  const [
    isOpen,
    setIsOpen
  ] = useModal();

  const clickHandler = () => {
    setIsNavOpen(
      false
    );
    setIsOpen(
      true
    );
  };
  const pathname = usePathname();
  const isInProcesos = pathname === path;

  const href = (
    carpeta.llaveProceso
      ? carpeta.idProceso
        ? `${ path }/${ carpeta.llaveProceso }/${ carpeta.idProceso }`
        : `${ path }/${ carpeta.llaveProceso }`
      : `${ path }`
  ) as Route;

  const isActive
    = pathname === href
    || pathname === `${ path }/${ carpeta.llaveProceso }/${ carpeta.idProceso }`
    || pathname === `${ path }/${ carpeta.llaveProceso }`;

  const despachoName =  carpeta.Demanda.Juzgado.Ejecucion
    ? carpeta.Demanda.Juzgado.Ejecucion.id
    : carpeta.Demanda.Juzgado.Origen.id;

  const despachoUrl =  carpeta.Demanda.Juzgado.Ejecucion
    ? carpeta.Demanda.Juzgado.Ejecucion.url
    : carpeta.Demanda.Juzgado.Origen.url;

  const juzgado = despachoName
    .replace(
      / /g,
      '-'
    )
    .toLocaleLowerCase()
    .slice(
      0,
      -1
    );

  return (
    <div className={card.container}>
      <div className={isActive
        ? card.isActive
        : card.notActive}>
        <h1 className={`${ typography.titleMedium } ${ card.title }`}>
          {toNameString(
            {
              nameRaw: carpeta.Deudor.PrimerNombre + carpeta.Deudor.PrimerApellido
            }
          )}
        </h1>
        <div className={card.links}>
          <Link
            className={`${ card.link } ${ isActive && card.isActive }`}
            href={`/Carpetas/${ carpeta._id }`}>
            <span className={`material-symbols-outlined ${ card.icon }`}>
              folder_shared
            </span>
            <span className={card.tooltiptext}>Perfil del Demandado</span>
          </Link>
          <Link
            className={`${ card.link } ${ isActive && card.isActive }`}
            href={`/Procesos/${ carpeta.llaveProceso }` as Route}>
            <span className={`material-symbols-outlined ${ card.icon }`}>
              badge
            </span>
            <span className={card.tooltiptext}>Perfil del Demandado</span>
          </Link>
          <Link
            className={`${ card.link } ${ isActive && card.isActive }`}
            href={`/Notas/NuevaNota/${ carpeta.llaveProceso }` as Route}
            onClick={() => {
              setIsOpen(
                true
              );
            }}>
            <span className={`material-symbols-outlined ${ card.icon }`}>
              add
            </span>
            <span className={card.tooltiptext}>Agregar nota</span>
          </Link>
          <Link
            className={`${ card.link } ${ isActive && card.isActive }`}
            onClick={clickHandler}
            href={href}>
            <span className={`${ card.icon } material-symbols-outlined`}>
              file_open
            </span>
            <span className={card.tooltiptext}>Actuaciones del proceso</span>
          </Link>
        </div>

        {children}
        {carpeta.Demanda.Radicado && (
          <div className={`${ typography.bodySmall } ${ card.content }`}>
            {carpeta.Demanda.Radicado}
          </div>
        )}

        <Link
          className={`${ card.link } ${ isActive && card.isActive }`}
          href={despachoUrl as Route}>
          <p className={`${ typography.bodySmall } ${ card.content }`}>
            {juzgado.replaceAll(
              'á',
              'a'
            )}
          </p>
        </Link>
      </div>
    </div>
  );
};
