'use client';
import { Route } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, Suspense } from 'react';
import card from '#@/components/card/card.module.scss';
import { useModal } from '#@/app/modal-context';
import typography from '#@/styles/fonts/typography.module.scss';
import { useNavigator } from '#@/app/search-context';
export const Card = (
  {
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
  fecha?: string;
  contenido?: string;
}
) => {
  const [
    isNavOpen,
    setIsNavOpen
  ] = useNavigator();
  const [
    isOpen,
    setIsOpen
  ] = useModal();
  const clickHandler = () => {
    setIsNavOpen(
      false
    );
    setIsOpen(
      true
    );
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
    ? despacho.replace(
      / /g,
      '-'
    ).toLocaleLowerCase().slice(
      0,
      -1
    )
    : null;

  return (
    <div className={card.container}>
      <div className={isActive
        ? card.isActive
        : card.notActive}>
        <h1 className={`${typography.titleMedium} ${card.title}`}>{name}</h1>

        <Link onClick={clickHandler} href={href} className={card.link}>
          <span className={`material-symbols-outlined ${card.icon}`}>
            {icon ?? 'open_in_new'}
          </span>
        </Link>
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
              {juzgado.replaceAll(
                'á',
                'a'
              )}
            </p>
          </Link>
        )}

        <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>
      </div>
    </div>
  );
};
