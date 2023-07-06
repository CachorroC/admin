'use client';
import { Route } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, Suspense } from 'react';
import { useModal } from '#@/app/modal-context';
import typography from '#@/styles/fonts/typography.module.scss';
import carpeta from './carpeta.module.scss';
import { useNavigator } from '#@/app/search-context';
import Image from 'next/image';
import Title from '../Headings/title';
import { Name } from '../Headings/clientSideName';

export const CardCarpeta = ({
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
}) => {
  const [isNavOpen, setIsNavOpen] =
    useNavigator();
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
    pathname ===
      `${path}/${llaveProceso}/${idProceso}` ||
    pathname === `${path}/${llaveProceso}` ||
    pathname === path;
  return (
    <div
      className={
        isActive
          ? carpeta.cardIsActive
          : carpeta.card
      }>
      <div className={carpeta.cardInner}>
        <div className={carpeta.cardFront}>
          <Name helper={name} />
        </div>
        <div className={carpeta.cardBack}>
          <Suspense fallback={<p>Loading...</p>}>
            {children}
          </Suspense>
        </div>
      </div>
    </div>
  );
};
