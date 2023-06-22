'use client';
import Link from 'next/link';
import {
  useSelectedLayoutSegment,
  usePathname,
  useSelectedLayoutSegments,
  useParams,
} from 'next/navigation';
import type { Route } from 'next';
import { useNavigator } from '#@/app/search-context';
import searchbar from '#@/components/search/searchbar.module.scss';
import { ReactNode, Fragment } from 'react';
import { useModal } from '#@/app/modal-context';
import card from '#@/components/card/card.module.scss';
import Heading from '../typográficos/Heading';
import { intFecha } from '#@/lib/types/mongodb';
import { fixFechas } from '#@/lib/fix';
import typography from '#@/components/typográficos/typography.module.scss';

export const LinkCard = (
  {
    path,
    proceso,
    children,
  }: {
  path: string;
 proceso: intFecha;
  children: ReactNode;
}
) => {
  const { llaveProceso, idProceso, sujetosProcesales, fecha } = proceso;
  const params = useParams();
  const pathname = usePathname();
  const [
    isNavOpen,
    setIsNavOpen
  ] = useNavigator();
  const [
    isOpen,
    setIsOpen
  ] = useModal();

  const href = (
    llaveProceso
      ? idProceso
        ? `${path}/${llaveProceso}/${idProceso}/Actuaciones`
        : `${path}/${llaveProceso}`
      : path
  ) as Route;
  const isActive =
    pathname === href ||
    pathname === `${path}/${llaveProceso}/${idProceso}/Actuaciones` ||
    pathname === `${path}/${llaveProceso}/${idProceso}` ||
    pathname === `${path}/${llaveProceso}`;
  const mismoDemandado =
    params.llaveProceso === llaveProceso &&
    params.idProceso !== idProceso?.toString();

  const clickHandler = () => {
    setIsNavOpen(
      false
    );
    setIsOpen(
      true
    );
  };
  return (
    <div className={`${searchbar.container} ${isActive && searchbar.active  }`}>
      <Link
        className={ isActive
          ? searchbar.titleActive
          : searchbar.title }
        onClick={ clickHandler }
        href={ `/Procesos/${llaveProceso}/${idProceso}/Actuaciones` }      >
        <h1 className={typography.titleMedium}> { sujetosProcesales }</h1>

      </Link>

      <div className={ searchbar.section }>
        <p className={typography.labelMedium}>{fixFechas(
          fecha
        ) }</p>
        {children}
      </div>

      <div className={ searchbar.links }>
        <Link className={isActive
          ? searchbar.linkIsActive
          : searchbar.link }

        href={ `/Procesos/${ llaveProceso }` }>
          <span className={ `material-symbols-outlined ${ searchbar.icon }` }>
          open_in_new
          </span>
        </Link>
        <Link className={isActive
          ? searchbar.linkIsActive
          : searchbar.link }

        href={ `/NuevaNota/${ llaveProceso }` }>
          <span className={ `material-symbols-outlined ${ searchbar.icon }` }>
          add
          </span>
        </Link>
      </div>
    </div>
  );
};
