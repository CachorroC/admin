'use client';
import { useNavigator } from '#@/app/search-context';
import { ReactNode, Suspense } from 'react';
import navbar from '#@/components/navbar/navbar.module.css';
import InputSearchBar from '#@/components/search/InputSearchBar';
import Title from '#@/components/Headings/title';

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
    </nav>
  );
}
