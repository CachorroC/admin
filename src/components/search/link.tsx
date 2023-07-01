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
import { ReactNode, Fragment, useCallback } from 'react';
import { intFecha } from '#@/lib/types/demandados';
import { fixFechas } from '#@/lib/fix';
import { useNavigator } from '#@/app/search-context';
import { useModal } from '#@/app/modal-context';
import { Name } from '../Headings/clientSideName';
import { useRouter } from 'next/navigation';

export const LinkCard = (
  {
    path,
    proceso,
  }: {
  path: string;
  proceso: intFecha;
}
) => {
  const [
    isOpen,
    setIsOpen
  ] = useModal();
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
      ? proceso.idProceso
        ? `${path}/${proceso.llaveProceso}/${proceso.idProceso}`
        : `${ path }/${ proceso.llaveProceso }`
      : path
  ) as Route;
  const isActive =
    pathname === href ||
    pathname === `${path}/${llaveProceso}/${idProceso}` ||
    pathname === `${ path }/${ llaveProceso }`;
  const router = useRouter();

  return (
    <Link
      href={href}
      className={ searchbar.container }
      onClick={()=> setIsNavOpen(
        false
      ) }
    >
      <div className={isActive
        ? searchbar.isActive
        : searchbar.notActive }
      >
        <Name helper={Nombre} />

        <div className={searchbar.section}>
          <sub className={searchbar.date}>{fixFechas(
            fecha
          )}</sub>
        </div>
      </div>
    </Link>
  );
};
