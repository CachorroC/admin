import { ReactNode, Suspense } from 'react';
import { BackwardsButton,
         DrawerMenuButton,
         ForwardButton,
         HomeButton } from '#@/components/Buttons/NavButtons';
import layout from '#@/styles/layout.module.scss';
import InputSearchBar from '#@/components/search/InputSearchBar';

export default async function Layout(
  {
    children
  }: {
  children: ReactNode;
} 
) {
  return (
    <div className={layout.header}>
      {children}
    </div>
  );
}
