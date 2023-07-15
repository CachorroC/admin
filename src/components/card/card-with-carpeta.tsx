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
import { MonCarpeta, intFecha } from '#@/lib/types/demandados';

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
  const {
    llaveProceso, id, idProceso, Deudor, Carpeta, Avaluo, Demanda
  } = carpeta;

  const {
    Juzgado, Proceso, Municipio, Radicado, Ubicacion
  } = Demanda;

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
    llaveProceso
      ? idProceso
        ? `${ path }/${ llaveProceso }/${ idProceso }`
        : `${ path }/${ llaveProceso }`
      : `${ path }`
  ) as Route;

  const isActive
    = pathname === href
    || pathname === `${ path }/${ llaveProceso }/${ idProceso }`
    || pathname === `${ path }/${ llaveProceso }`;


  const juzgado = Juzgado
    ? Juzgado.Origen.replace(
      / /g,
      '-'
    ).toLocaleLowerCase()
      .slice(
        0,
        -1
      )
    : null;

  return (
    <div
      className={card.container}>
      <div className={isActive
        ? card.isActive
        : card.notActive}>
        <h1 className={`${ typography.titleMedium } ${ card.title }`}>
          {toNameString(
            {
              nameRaw: Deudor.Nombre
            }
          )}
        </h1>
        <div className={card.links}>
          <Link
            className={`${ card.link } ${ isActive && card.isActive }`}
            href={`/Carpetas/${ id }`}>
            <span className={`material-symbols-outlined ${ card.icon }`}>
                  folder_shared
            </span>
            <span className={card.tooltiptext}>Perfil del Demandado</span>
          </Link>
          <Link
            className={`${ card.link } ${ isActive && card.isActive }`}
            href={`/Procesos/${ llaveProceso }`}>
            <span className={`material-symbols-outlined ${ card.icon }`}>
                  badge
            </span>
            <span className={card.tooltiptext}>Perfil del Demandado</span>
          </Link>
          <Link
            className={`${ card.link } ${ isActive && card.isActive }`}
            href={`/Notas/NuevaNota/${ llaveProceso }`}
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
            <span className={card.tooltiptext}>
                  Actuaciones del proceso
            </span>
          </Link>

        </div>

        {children}
        {Radicado && (
          <div className={`${ typography.bodySmall } ${ card.content }`}>
            {Radicado}
          </div>
        )}
        {juzgado && (
          <Link
            className={`${ card.link } ${ isActive && card.isActive }`}
            href={`https://ramajudicial.gov.co/web/${ juzgado.replaceAll(
              'á',
              'a'
            ) }`}>
            <p className={`${ typography.bodySmall } ${ card.content }`}>
              {juzgado.replaceAll(
                'á',
                'a'
              )}
            </p>
          </Link>
        )}
      </div>
    </div>
  );
};
