'use client';
import { Route } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, Suspense } from 'react';
import card from '#@/components/card/card.module.scss';
import { useModal } from '#@/app/modal-context';
import typography from '#@/styles/fonts/typography.module.scss';
import { useNavigator } from '#@/app/search-context';
import { fixFechas } from '#@/lib/fix';
import { Name } from '#@/components/Headings/clientSideName';
export const Card = ({
  name,
  path,
  children,
  llaveProceso,
  idProceso,
  icon,
  despacho,
  fecha,
  contenido,
}: {
  name: string;
  path: string;
  children: ReactNode;
  llaveProceso?: string;
  despacho?: string;
  idProceso?: number;
  icon?: string;
  fecha?: string | null;
  contenido?: string;
}) => {
  const [isNavOpen, setIsNavOpen] = useNavigator();
  const [isOpen, setIsOpen] = useModal();
  const clickHandler = () => {
    setIsNavOpen(false);
    setIsOpen(true);
  };
  const pathname = usePathname();

  const href = (
    llaveProceso
      ? idProceso
        ? `${path}/${llaveProceso}/${idProceso}`
        : `${path}/${llaveProceso}`
      : `${path}`
  ) as Route;
  const isActive =
    pathname === href ||
    pathname === `${path}/${llaveProceso}/${idProceso}` ||
    pathname === `${path}/${llaveProceso}` ||
    pathname === path;

  const juzgado = despacho
    ? despacho.replace(/ /g, '-').toLocaleLowerCase().slice(0, -1)
    : null;

  return (
    <div className={card.container}>
      <div className={isActive ? card.isActive : card.notActive}>
        <h1 className={`${typography.titleMedium} ${card.title}`}>{name}</h1>
        <Name helper={name} />
        <div className={card.section}>
          <sub className={card.date}>{fixFechas(fecha)}</sub>

          {children}
        </div>

        <div className={card.links}>
          <Link
            className={isActive ? card.linkIsActive : card.link}
            href={`${path}/${llaveProceso}` as Route}
          >
            <span className={`material-symbols-outlined ${card.icon}`}>
              badge
            </span>
            <span className={card.tooltiptext}>Perfil del Demandado</span>
          </Link>
          <Link
            className={isActive ? card.linkIsActive : card.link}
            href={`/Notas/NuevaNota/${llaveProceso}`}
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <span className={`material-symbols-outlined ${card.icon}`}>
              add
            </span>
            <span className={card.tooltiptext}>Agregar nota</span>
          </Link>
          <Link
            className={isActive ? card.linkIsActive : card.link}
            onClick={clickHandler}
            href={href}
          >
            <span className={`${card.icon} material-symbols-outlined`}>
              file_open
            </span>
            <span className={card.tooltiptext}>Actuaciones del proceso</span>
          </Link>

          <Link onClick={clickHandler} href={href} className={card.link}>
            <span className={`material-symbols-outlined ${card.icon}`}>
              {icon ?? 'open_in_new'}
            </span>
            <span className={card.tooltiptext}>abrir</span>
          </Link>
        </div>
        {fecha && (
          <sub className={card.date}>{fecha ? fixFechas(fecha) : href}</sub>
        )}
        {contenido && (
          <p className={`${typography.bodySmall} ${card.content}`}>
            {contenido}
          </p>
        )}
        {juzgado && (
          <Link
            href={`https://ramajudicial.gov.co/web/${juzgado.replaceAll(
              'á',
              'a'
            )}`}
          >
            {' '}
            <p className={`${typography.bodySmall} ${card.content}`}>
              {juzgado.replaceAll('á', 'a')}
            </p>
          </Link>
        )}
      </div>
    </div>
  );
};
