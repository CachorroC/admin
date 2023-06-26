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
import Name from '../Headings/nombre';

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
  const {  Demandado, fecha, llaveProceso, idProceso } = proceso;
  const {Nombre, Id, Direccion, Tel} = Demandado;
  const params = useParams();
  const pathname = usePathname();
  const [
    isNavOpen,
    setIsNavOpen
  ] = useNavigator();


  const href = (
    llaveProceso
      ? idProceso !== 0
        ? `${path}/${llaveProceso}/${idProceso}`
        : `${path}/${llaveProceso}`
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

  };
  return (
    <div className={ `${ searchbar.container } ${ isActive && searchbar.active }` }>
      <Name helper={Nombre}/>
      <Link
        className={ isActive
          ? searchbar.linkIsActive
          : searchbar.link  }
        onClick={ clickHandler }
        href={ href}      >

        <span className={`${searchbar.icon} material-symbols-outlined`}>file_open</span>

      </Link>

      <div className={ searchbar.section }>
        <sub className={ searchbar.date }>
          {fixFechas(
            fecha
          )}
        </sub>
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
