'use client';
import Link from 'next/link';
import {
  useSelectedLayoutSegment,
  usePathname,
  useSelectedLayoutSegments,
  useParams
} from 'next/navigation';
import type { Route } from 'next';
import searchbar from '#@/components/search/searchbar.module.scss';
import { ReactNode, Fragment, useCallback } from 'react';
import { NombreCompleto, intFecha } from '#@/lib/types/demandados';
import { fixFechas } from '#@/lib/fix';
import { useNavigator } from '#@/app/search-context';
import { useModal } from '#@/app/modal-context';
import { Name } from '../Headings/clientSideName';
import { useRouter } from 'next/navigation';
import { NombreComponent } from '../card/Nombre';

export const LinkCard = ({
  path,
  proceso
}: {
  path: string;
  proceso: intFecha;
}) => {
  const [isOpen, setIsOpen] = useModal();

  const { Deudor, fecha, llaveProceso, idProceso, id } = proceso;

  const { Id, Direccion, Tel } = Deudor;
  const params = useParams();
  const pathname = usePathname();

  const [isNavOpen, setIsNavOpen] = useNavigator();

  const href = (
    proceso.llaveProceso
      ? proceso.idProceso
        ? `${path}/${proceso.llaveProceso}/${proceso.idProceso}`
        : `${path}/${proceso.llaveProceso}`
      : path
  ) as Route;

  const isActive =
    pathname === href ||
    pathname === `${path}/${llaveProceso}/${idProceso}` ||
    pathname === `${path}/${llaveProceso}`;
  const router = useRouter();

  return (
    <div
      className={searchbar.container}
      key={id}>
      <Link
        href={href}
        onClick={() => {
          return setIsNavOpen(false);
        }}
        className={isActive ? searchbar.isActive : searchbar.notActive}>
        <NombreComponent Deudor={Deudor} />
        <sub className={searchbar.date}>{fixFechas(fecha)}</sub>
      </Link>
    </div>
  );
};
