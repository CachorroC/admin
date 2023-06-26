'use client';
import { useNavigator } from '#@/app/search-context';
import { ReactNode, Suspense } from 'react';
import navbar from '#@/components/navbar/navbar.module.scss';
import layout from '#@/styles/css/layout.module.css';
import InputSearchBar from '#@/components/search/InputSearchBar';
import useMedia from './mediaQuery';
import typeface from '#@/components/typográficos/typeface.module.scss';
import SearchOutputListSkeleton from '../search/SearchProcesosOutputSkeleton';
import {
  BackwardsButton,
  DrawerMenuButton,
  ForwardButton,
  HomeButton,
} from './Buttons';
import Title from '#@/components/modal/title';
import { ButtonSkeleton } from './ButtonSkeleton';
export default function Drawer (
  { children }: { children: ReactNode }
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
  ] = useNavigator();

  if ( isNavOpen ) {
    if ( isMobile ) {
      return (
        <nav className={ navbar.drawer }>
          <Suspense fallback={ <ButtonSkeleton /> }>
            <DrawerMenuButton />
          </Suspense>
          <Suspense fallback={ <ButtonSkeleton /> }>
            <Title />
          </Suspense>
          <Suspense fallback={ <ButtonSkeleton /> }>
            <ForwardButton />
          </Suspense>
          <Suspense fallback={ <ButtonSkeleton /> }>
            <BackwardsButton />
          </Suspense>
          <Suspense fallback={ <ButtonSkeleton /> }>
            <InputSearchBar />
          </Suspense>
          <Suspense fallback={ <ButtonSkeleton /> }>
            <HomeButton />
          </Suspense>
          <div className={ navbar.sidenav }>{ children }</div>
        </nav>
      );
    }
    return (
      <nav className={ navbar.drawer }>
        <Suspense fallback={ <ButtonSkeleton /> }>
          <InputSearchBar />
        </Suspense>
        <Suspense fallback={ <ButtonSkeleton /> }>
          <DrawerMenuButton />
        </Suspense>
        <Suspense fallback={ <ButtonSkeleton /> }>
          <Title />
        </Suspense>
        <div className={ navbar.sidenav }>{ children }</div>
      </nav>
    );
  }
  return null;
}
