'use client';
import layout from '#@/styles/layout.module.css';
import useMedia from './mediaQuery';
import InputSearchBar from '#@/components/search/InputSearchBar';
import { Suspense } from 'react';
import { BackwardsButton,
         DrawerMenuButton,
         ForwardButton,
         HomeButton } from '../Buttons/NavButtons';
import Drawer from './drawer';
import { ButtonSkeleton } from '../Buttons/ButtonSkeleton';
import typeface from '#@/styles/fonts/typeface.module.css';

export default function Header(
  {
    children
  }: {
  children: React.ReactNode;
} 
) {
  const isDesktop = useMedia(
    2 
  );

  const isMobile = useMedia(
    0 
  );

  const isBigDesktop = useMedia(
    3 
  );

  if ( isDesktop || isBigDesktop ) {
    return (
      <div className={layout.header}>
        <HomeButton />
        {children}
        <BackwardsButton />
        <ForwardButton />
        <InputSearchBar />
        <DrawerMenuButton />
      </div>
    );
  }

  if ( isMobile ) {
    return (
      <div className={layout.header}>
        <HomeButton />
        {children}
        <DrawerMenuButton />
      </div>
    );
  }

  return (
    <div className={layout.header}>
      <HomeButton />
      {children}
      <BackwardsButton />
      <ForwardButton />
      <InputSearchBar />
      <DrawerMenuButton />
    </div>
  );
}
