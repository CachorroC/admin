'use client';
import { Route } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import card from '#@/components/card/card.module.scss';
import { useModal } from '#@/app/modal-context';
import typography from '#@/styles/fonts/typography.module.scss';
import { useNavigator } from '#@/app/search-context';
import { toNameString } from '#@/lib/fix';
import { IntCarpeta,
         MonCarpeta,
         NombreCompleto } from '#@/lib/types/demandados';

export const Card = (
  {
    path,
    carpeta,
    children
  }: {
  path: string;
  carpeta: MonCarpeta;
  children: ReactNode;
}
) => {
  const [
    isNavOpen,
    setIsNavOpen
  ]
    = useNavigator();

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
    || pathname
      === `${ path }/${ carpeta.llaveProceso }/${ carpeta.idProceso }`
    || pathname
      === `${ path }/${ carpeta.llaveProceso }`;


  return (
    <div className={card.container}>
      <div
        className={
          isActive
            ? card.isActive
            : card.notActive
        }
      >
        <h1
          className={`${ typography.titleMedium } ${ card.title }`}
        >
          {toNameString(
            {
              nameRaw: new NombreCompleto(
                carpeta.deudor
              ).Nombre
            }
          )}
        </h1>
        <div className={card.links}>
          <Link
            className={`${ card.link } ${
              isActive && card.isActive
            }`}
            href={`/Carpetas/${ carpeta._id }`}
          >
            <span
              className={`material-symbols-outlined ${ card.icon }`}
            >
              folder_shared
            </span>
            <span className={card.tooltiptext}>
              Perfil del Demandado
            </span>
          </Link>
          <Link
            className={`${ card.link } ${
              isActive && card.isActive
            }`}
            href={
              `/Procesos/${ carpeta.llaveProceso }` as Route
            }
          >
            <span
              className={`material-symbols-outlined ${ card.icon }`}
            >
              badge
            </span>
            <span className={card.tooltiptext}>
              Perfil del Demandado
            </span>
          </Link>
          <Link
            className={`${ card.link } ${
              isActive && card.isActive
            }`}
            href={`/Notas/NuevaNota/${ carpeta.llaveProceso }`}
            onClick={() => {
              setIsOpen(
                true
              );
            }}
          >
            <span
              className={`material-symbols-outlined ${ card.icon }`}
            >
              add
            </span>
            <span className={card.tooltiptext}>
              Agregar nota
            </span>
          </Link>
          <Link
            className={`${ card.link } ${
              isActive && card.isActive
            }`}
            onClick={clickHandler}
            href={href}
          >
            <span
              className={`${ card.icon } material-symbols-outlined`}
            >
              file_open
            </span>
            <span className={card.tooltiptext}>
              Actuaciones del proceso
            </span>
          </Link>
        </div>

        {children}
        {carpeta.demanda.radicado && (
          <div
            className={`${ typography.bodySmall } ${ card.content }`}
          >
            {carpeta.demanda.radicado}
          </div>
        )}


      </div>
    </div>
  );
};
