'use client';
import { useNavigator } from '#@/app/search-context';
import { ReactNode, Suspense } from 'react';
import navbar from '#@/components/navbar/navbar.module.css';
import InputSearchBar from '#@/components/search/InputSearchBar';
import Title from '#@/components/Headings/title';
import Link from 'next/link';
import typography from '#@/styles/fonts/typography.module.css';
import type { Route } from 'next';

export default function Drawer(
  {
    children
  }: {
  children: ReactNode;
} 
) {
  const [
    isNavOpen,
    setIsNavOpen
  ]
    = useNavigator();

  if ( !isNavOpen ) {
    return null;
  }

  return (
    <nav className={navbar.drawer}>
      <button
        type={'button'}
        className={navbar.button}
        onClick={() => {
          setIsNavOpen(
            !isNavOpen 
          );
        }}>
        <span
          className={`material-symbols-outlined ${ navbar.icon }`}>
          {isNavOpen
            ? 'close'
            : 'menu'}
        </span>
      </button>
      <InputSearchBar />
      <Title />
      <div className={navbar.sidenav}>
        {children}
      </div>
      <Link
        className={navbar.button}
        href={'/Carpetas'}>
        <span
          className={`material-symbols-outlined ${ navbar.icon }`}>
          {' '}
          folder
        </span>
        <p className={typography.labelMedium}>
          {'Carpetas'}
        </p>
      </Link>
      <Link
        className={navbar.button}
        href={'/Contacto'}>
        <span
          className={`material-symbols-outlined ${ navbar.icon }`}>
          {' '}
          folder
        </span>
        <p className={typography.labelMedium}>
          {'Contacto'}
        </p>
      </Link>
      <Link
        className={navbar.button}
        href={'/QuienesSomos'}>
        <span
          className={`material-symbols-outlined ${ navbar.icon }`}>
          {' '}
          folder
        </span>
        <p className={typography.labelMedium}>
          {'Quienes Somos'}
        </p>
      </Link>
      <Link
        className={navbar.button}
        href={'/Procesos' as Route}>
        <span
          className={`material-symbols-outlined ${ navbar.icon }`}>
          {' '}
          folder
        </span>
        <p className={typography.labelMedium}>
          {'Procesos'}
        </p>
      </Link>
      <Link
        className={navbar.button}
        href={'/Notas'}>
        <span
          className={`material-symbols-outlined ${ navbar.icon }`}>
          {' '}
          folder
        </span>
        <p className={typography.labelMedium}>
          {'Notas'}
        </p>
      </Link>
      <Link
        className={navbar.button}
        href={'/Procesos/Nueva'}>
        <span
          className={`material-symbols-outlined ${ navbar.icon }`}>
          {' '}
          folder
        </span>
        <p className={typography.labelMedium}>
          {'Nueva carpeta'}
        </p>
      </Link>
    </nav>
  );
}
