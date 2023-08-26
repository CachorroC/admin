'use client';
import { Route } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, useState } from 'react';
import card from '#@/components/card/card.module.scss';
import { useModal } from '#@/app/modal-context';
import typography from '#@/styles/fonts/typography.module.css';
import { useCategory,
         useNavigator } from '#@/app/search-context';
import { toNameString } from '#@/lib/fix';
import { Deudor,
         IntCarpeta,
         MonCarpeta,
         NombreCompleto } from '#@/lib/types/carpeta';
import { NombreComponent } from './Nombre';
import { Router } from 'next/router';

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
    openLinks,
    setOpenLinks
  ]
    = useState(
      false
    );

  const {
    deudor
  } = carpeta;

  const {
    email, tel
  } = deudor;

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
    carpeta.idProceso
      ? `${ path }/${ carpeta.llaveProceso }/${ carpeta.idProceso }`
      : `${ path }/${ carpeta.llaveProceso }`
  ) as Route;

  const isActive
    = pathname === href
    || pathname
      === `${ path }/${ carpeta.llaveProceso }/${ carpeta.idProceso }`
    || pathname
      === `${ path }/${ carpeta.llaveProceso }`;

  if ( category !== 'todos' ) {
    if ( category !== carpeta.category ) {
      return null;
    }
  }

  const {
    primerNombre,
    segundoNombre,
    primerApellido,
    segundoApellido
  } = carpeta.deudor;

  function handleOpenLinks() {
    setOpenLinks(
      !openLinks
    );
  }

  return (
    <div
      className={card.container}
      onClick={() => {
        setOpenLinks(
          !openLinks
        );
      }}>
      <div className={card.card}>
        <div className={card.section}>
          <sub
            className={`${ typography.labelSmall } ${ card.sub }`}>{carpeta.numero}</sub>
          <NombreComponent
            key={carpeta._id}
            deudor={carpeta.deudor}
          />
        </div>
        <div className={card.content}>
          {children}
        </div>

        {openLinks && (
          <div className={card.links}>
            <Link
              className={`${ card.link } ${
                isActive && card.isActive
              }`}
              onClick={clickHandler}
              href={href}>
              <span
                className={`${ card.icon } material-symbols-outlined`}>
                file_open
              </span>
              <span className={card.tooltiptext}>
                Actuaciones del proceso
              </span>
            </Link>
            <Link
              className={`${ card.link } ${
                isActive && card.isActive
              }`}
              href={
                `/Procesos/${ carpeta.llaveProceso }/Editar` as Route
              }>
              <span
                className={`material-symbols-outlined ${ card.icon }`}>
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
              }>
              <span
                className={`material-symbols-outlined ${ card.icon }`}>
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
              href={`/Notas/${ carpeta.llaveProceso }`}
              onClick={() => {
                setIsOpen(
                  true
                );
              }}>
              <span
                className={`material-symbols-outlined ${ card.icon }`}>
                add
              </span>
              <span className={card.tooltiptext}>
                Agregar nota
              </span>
            </Link>
            {email && (
              <Link
                className={`${ card.link } ${
                  isActive && card.isActive
                }`}
                href={email as Route}>
                <span
                  className={`material-symbols-outlined ${ card.icon }`}>
                  mail
                </span>
                <span
                  className={card.tooltiptext}>
                  Correo Electrónico
                </span>
              </Link>
            )}
            {tel.celular && (
              <Link
                key={tel.celular}
                className={card.link}
                href={`tel:${ tel.celular }`}>
                <span
                  className={`material-symbols-outlined ${ card.icon }`}>
                  phone_iphone
                </span>
                <span
                  className={card.tooltiptext}>
                  {tel.celular.toString()}
                </span>
              </Link>
            )}
            {tel.fijo && (
              <Link
                key={tel.fijo}
                className={card.link}
                href={`tel:${ tel.fijo }`}>
                <span
                  className={`material-symbols-outlined ${ card.icon }`}>
                  call
                </span>
                <span
                  className={card.tooltiptext}>
                  {tel.fijo.toString()}
                </span>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
