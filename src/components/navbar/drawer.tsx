'use client';
import { useNavigator } from '#@/app/search-context';
import { ReactNode, Suspense } from 'react';
import navbar from '#@/components/navbar/navbar.module.css';
import layout from '#@/styles/layout.module.css';
import InputSearchBar from '#@/components/search/InputSearchBar';
import useMedia from './mediaQuery';
import typeface from '#@/components/typográficos/typeface.module.css';
import SearchOutputListSkeleton from '../search/SearchProcesosOutputSkeleton';
import { BackwardsButton,
         DrawerMenuButton,
         ForwardButton,
         HomeButton } from '../Buttons/NavButtons';
import Title from '#@/components/Headings/title';
import { ButtonSkeleton } from '../Buttons/ButtonSkeleton';

export default function Drawer(
  {
    children
  }: {
  children: ReactNode;
} 
) {
  const isDesktop = useMedia(
    2 
  );

  const isMobile = useMedia(
    0 
  );

  const [
    isNavOpen,
    setIsNavOpen
  ]
    = useNavigator();

  if ( isNavOpen ) {
    if ( isMobile ) {
      return (
        <nav className={navbar.drawer}>
          <DrawerMenuButton />

          <Title />

          <ForwardButton />

          <BackwardsButton />

          <InputSearchBar />

          <HomeButton />

          <div className={navbar.sidenav}>
            {children}
          </div>
        </nav>
      );
    }

    return (
      <nav className={navbar.drawer}>
        <InputSearchBar />

        <DrawerMenuButton />

        <Title />

        <div className={navbar.sidenav}>
          {children}
        </div>
      </nav>
    );
  }

  return null;
}
