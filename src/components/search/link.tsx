'use client';
import Link from 'next/link';
import { useSelectedLayoutSegment,
         usePathname,
         useSelectedLayoutSegments,
         useParams } from 'next/navigation';
import type { Route } from 'next';
import searchbar from '#@/components/search/searchbar.module.scss';
import { fixFechas } from '#@/lib/fix';
import { useNavigator } from '#@/app/search-context';
import { useModal } from '#@/app/modal-context';
import { Name } from '../Headings/clientSideName';
import { useRouter } from 'next/navigation';
import { NombreComponent } from '../card/Nombre';
import { MonCarpeta } from '#@/lib/types/demandados';

export const LinkCard = (
  {
    path,
    carpeta
  }: {
  path: string;
  carpeta: MonCarpeta;
}
) => {
  const [
    isOpen,
    setIsOpen
  ] = useModal();

  const {
    deudor,
    fecha,
    llaveProceso,
    idProceso,
    _id
  } = carpeta;

  const {
    cedula, direccion, tel, email
  } = deudor;
  const params = useParams();
  const pathname = usePathname();

  const [
    isNavOpen,
    setIsNavOpen
  ]
    = useNavigator();

  const href = (
    carpeta.llaveProceso
      ? carpeta.idProceso
        ? `${ path }/${ carpeta.llaveProceso }/${ carpeta.idProceso }`
        : `${ path }/${ carpeta.llaveProceso }`
      : path
  ) as Route;

  const isActive
    = pathname === href
    || pathname
      === `${ path }/${ llaveProceso }/${ idProceso }`
    || pathname === `${ path }/${ llaveProceso }`;
  const router = useRouter();

  return (
    <div
      className={searchbar.container}
      key={_id}
    >
      <Link
        href={href}
        onClick={() => {
          return setIsNavOpen(
            false
          );
        }}
        className={
          isActive
            ? searchbar.isActive
            : searchbar.notActive
        }
      >
        <NombreComponent deudor={deudor} />
        <sub className={searchbar.date}>
          {fixFechas(
            fecha
          )}
        </sub>
      </Link>
    </div>
  );
};
