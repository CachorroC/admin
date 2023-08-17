'use client';
import Link from 'next/link';
import { useSelectedLayoutSegment,
         usePathname,
         useSelectedLayoutSegments,
         useParams } from 'next/navigation';
import type { Route } from 'next';
import searchbar from '#@/components/search/searchbar.module.css';
import { fixFechas } from '#@/lib/fix';
import { useNavigator } from '#@/app/search-context';
import { useModal } from '#@/app/modal-context';
import { Name } from '../Headings/clientSideName';
import { useRouter } from 'next/navigation';
import { NombreComponent } from '../card/Nombre';
import { MonCarpeta } from '#@/lib/types/carpeta';

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
  const Nombre = carpeta.nombre;
  const isCarpeta = path === '/Carpetas';

  const {
    cedula, direccion, tel, email
  }
    = deudor;
  const params = useParams();
  const pathname = usePathname();

  const [
    isNavOpen,
    setIsNavOpen
  ]
    = useNavigator();

  const carpetaHref
    = `${ path }/${ carpeta._id }` as Route;

  const procesosHref = (
    carpeta.llaveProceso
      ? carpeta.idProceso
        ? `${ path }/${ carpeta.llaveProceso }/${ carpeta.idProceso }`
        : `${ path }/${ carpeta.llaveProceso }`
      : path
  ) as Route;

  const isActive
    = pathname === procesosHref
    || pathname
      === `${ path }/${ llaveProceso }/${ idProceso }`
    || pathname === `${ path }/${ llaveProceso }`;
  const router = useRouter();

  return (
    <div className={searchbar.container}>
      <Link
        href={
          isCarpeta
            ? carpetaHref
            : procesosHref
        }
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
        <sup>{carpeta.numero}</sup>
        <NombreComponent deudor={ deudor } />
        { Nombre }

        <sub className={searchbar.date}>
          {fixFechas(
            fecha
          )}
        </sub>
      </Link>
    </div>
  );
};
