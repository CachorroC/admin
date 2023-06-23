'use client';
import { Route } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
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
  }: {
  name: string;
  path: string;
  children: ReactNode;
  llaveProceso?: string;
  idProceso?: number;
  icon?: string;
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
  return (
    <div className={card.container}>
      <div className={card.layout}>
        <h1 className={typography.titleMedium}>{name}</h1>

        <div className={ card.content }>
          {children}
        </div>

        <Link
          onClick={clickHandler}
          href={href}
          className={isActive
            ? card.linkIsActive
            : card.link}
        >
          <span className={`material-symbols-outlined ${card.icon}`}>
            {icon ?? 'open_in_new'}
          </span>
        </Link>
      </div>
    </div>
  );
};
