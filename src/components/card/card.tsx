'use client';
import { Route } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, useState } from 'react';
import card from '#@/components/card/card.module.scss';
import { useModal } from '#@/app/modal-context';
import typography from '#@/styles/fonts/typography.module.scss';
import { useCategory, useNavigator } from '#@/app/search-context';
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
    if (  category !== carpeta.category ) {
      return null;
    }
  }

  const {
    primerNombre, segundoNombre, primerApellido, segundoApellido
  } = carpeta.deudor;



  return (
    <div className={ card.container }   >
      <div
        className={
          isActive
            ? card.isActive
            : card.notActive
        }
      >

        <div className={ card.section }>
          <sub className={ card.sub }>{ `carpeta numero ${ carpeta.numero }` }</sub>
          <NombreComponent key={ carpeta._id } deudor={ carpeta.deudor } />
        </div>
        <div className={ card.content }>
          {children}
        </div>
        <div className={ card.links }>

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
          ) }
          {tel.celular && tel.celular.map(
            (
              cel, i
            ) => {
              return (
                <Link key={i}
                  className={card.link}
                  href={`tel:${ cel }`}
                >
                  <span
                    className={`material-symbols-outlined ${ card.icon }`}
                  >
                  phone_iphone
                  </span>
                  <span
                    className={card.tooltiptext}
                  >
                    {cel.toString()}
                  </span>
                </Link> );
            }
          ) }
          {tel.fijo && tel.fijo.map(
            (
              f, i
            ) => {
              return (
                <Link key={i}
                  className={card.link}
                  href={`tel:${ f }`}
                >
                  <span
                    className={`material-symbols-outlined ${ card.icon }`}
                  >
                  call
                  </span>
                  <span
                    className={card.tooltiptext}
                  >
                    {f.toString()}
                  </span>
                </Link> );
            }
          )}
          <Link
            className={`${ card.link } ${
              isActive && card.isActive
            }`}
            href={`/Procesos/${ carpeta.llaveProceso  ?? 'sinEspecificar' }/Editar` as Route}
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
