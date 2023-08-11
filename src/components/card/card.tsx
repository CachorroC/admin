'use client';
import { Route } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import card from '#@/components/card/card.module.scss';
import { useModal } from '#@/app/modal-context';
import typography from '#@/styles/fonts/typography.module.scss';
import { useCategory, useNavigator } from '#@/app/search-context';
import { toNameString } from '#@/lib/fix';
import { Deudor,
         IntCarpeta,
         MonCarpeta,
         NombreCompleto } from '#@/lib/types/carpeta';

export const DeudorComponent = (
  {
    deudor,
    isActive
  }: {
  deudor: Deudor;
  isActive: boolean;
}
) => {

  const segundoNombre
    = deudor.segundoNombre ?? ' ';

  const segundoApellido
    = deudor.segundoApellido ?? ' ';

  const {
    cedula,
    primerNombre,
    primerApellido,
    email,
    tel,
    direccion
  } = deudor;
  const nombre = `${ primerNombre }   ${ segundoNombre }   ${ primerApellido }   ${ segundoApellido }`;

  return (
    <section
      className={card.section}
      key={cedula}
    >
      {email && (
        <Link
          className={`${ card.link } ${
            isActive && card.isActive
          }`}
          href={email as Route}
        >
          <span
            className={`material-symbols-outlined ${ card.icon }`}
          >
            mail
          </span>
          <span className={card.tooltiptext}>
            Correo Electrónico
          </span>
        </Link>
      )}
      {tel.celular !== 0 && (
        <Link
          className={`${ card.link } ${
            isActive && card.isActive
          }`}
          href={tel.celular.toString() as Route}
        >
          <span
            className={`material-symbols-outlined ${ card.icon }`}
          >
            phone_iphone
          </span>
          <span className={card.tooltiptext}>
            Telefono celular
          </span>
        </Link>
      )}
      {tel.fijo !== 0 && (
        <Link
          className={`${ card.link } ${
            isActive && card.isActive
          }`}
          href={tel.fijo.toString() as Route}
        >
          <span
            className={`material-symbols-outlined ${ card.icon }`}
          >
            phone
          </span>
          <span className={card.tooltiptext}>
            Telefono fijo
          </span>
        </Link>
      )}
    </section>
  );
};

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
    category,
    setCategory
  ] = useCategory();

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
      false
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

  if ( category !== 'todos' ) {
    if (  category !== carpeta.grupo ) {
      return null;
    }
  }

  return (
    <div
      className={card.container}
      key={carpeta._id}
    >
      <div
        className={
          isActive
            ? card.isActive
            : card.notActive
        }
      >
        {children}
        <DeudorComponent
          deudor={carpeta.deudor}
          key={carpeta.deudor.cedula}
          isActive={isActive}
        />

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
              Procesos
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
      </div>
    </div>
  );
};
