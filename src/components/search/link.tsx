'use client';
import Link from 'next/link';
import {
  useSelectedLayoutSegment,
  usePathname,
  useSelectedLayoutSegments,
  useParams,
} from 'next/navigation';
import type { Route } from 'next';
import searchbar from '#@/components/search/searchbar.module.scss';
import { ReactNode, Fragment } from 'react';
import { intFecha } from '#@/lib/types/demandados';
import { fixFechas } from '#@/lib/fix';
import { useNavigator } from '#@/app/search-context';
import typography from '#@/styles/fonts/typography.module.scss';
import { intCarpetaDemandado } from '../../lib/types/demandados';
import useMedia from '../navbar/mediaQuery';
import { useModal } from '#@/app/modal-context';
import { Name } from '../Headings/clientSideName';

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
  const [
    isOpen,
    setIsOpen
  ] = useModal();
  const isMobile = useMedia(
    0
  );
  const { Demandado, fecha, llaveProceso, idProceso } = proceso;
  const { Nombre, Id, Direccion, Tel } = Demandado;
  const params = useParams();
  const pathname = usePathname();
  const [
    isNavOpen,
    setIsNavOpen
  ] = useNavigator();

  const href = (
    proceso.llaveProceso
      ? `${path}/${proceso.llaveProceso}`
      : path
  ) as Route;
  const isActive =
    pathname === href ||
    pathname === `${path}/${llaveProceso}/${idProceso}` ||
    pathname === `${path}/${llaveProceso}`;

  const clickHandler = () => {
    setIsNavOpen(
      false
    );
    setIsOpen(
      isOpen
        ? false
        : true
    );
  };
  if (isMobile) {
    return (
      <Link
        href={href}
        onClick={() => {
          clickHandler;
        }}
        className={isActive
          ? searchbar.linkIsActive
          : searchbar.link}
      >
        <Name helper={Nombre} />
        <span className={`material-symbols-outlined ${searchbar.icon}`}>
          badge
        </span>
        <sub className={searchbar.date}>{fixFechas(
          fecha
        )}</sub>
        {children}
      </Link>
    );
  }
  return (
    <Link className={searchbar.container} href={href}>
      <div className={isActive
        ? searchbar.isActive
        : searchbar.notActive}>
        <Name helper={Nombre} />

        <div className={searchbar.section}>
          <sub className={searchbar.date}>{fixFechas(
            fecha
          )}</sub>

          {children}
        </div>
      </div>
    </Link>
  );
};
