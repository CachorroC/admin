'use client';
import layout from '#@/styles/scss/layout.module.scss';
import useMedia from './mediaQuery';
import typeface from '#@/components/typográficos/typeface.module.scss';
import InputSearchBar from '#@/components/search/InputSearchBar';
import { Suspense } from 'react';
import {
  BackwardsButton,
  DrawerMenuButton,
  ForwardButton,
  HomeButton,
} from './Buttons';
import Drawer from './drawer';
import { ButtonSkeleton } from './ButtonSkeleton';
export default function Header (
  { children }: { children: React.ReactNode }
) {
  const isDesktop = useMedia(
    '(min-width: 600px)'
  );
  const isMobile = useMedia(
    '(max-width: 600px)'
  );
  if ( isDesktop ) {
    return (
      <>
        <Suspense fallback={ <ButtonSkeleton /> }>
          <HomeButton />
        </Suspense>
        <Suspense fallback={ <sub className={ typeface.title }>Loading</sub> }>
          { children }
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
        <DrawerMenuButton />
      </>
    );
  }
  return (
    <>
      <Suspense fallback={ <ButtonSkeleton /> }>
        <HomeButton />
      </Suspense>
      <DrawerMenuButton />
      <Suspense fallback={ <sub className={ typeface.title }>Loading</sub> }>
        { children }
      </Suspense>
      <Suspense fallback={ <ButtonSkeleton /> }>
        <DrawerMenuButton />
      </Suspense>

    </>
  );
}
