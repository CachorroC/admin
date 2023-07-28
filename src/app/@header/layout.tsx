import 'server-only';
import { ReactNode, Suspense } from 'react';
import Header from '#@/components/navbar/Header';
import Drawer from '#@/components/navbar/drawer';
import { Loader } from '#@/components/Loader';
import { ListDrawer } from './list';

export default function Layout(
  {
    children
  }: {
  children: ReactNode;
} 
) {
  return (
    <Header>
      {children}
      <Drawer>
        <Suspense fallback={<Loader />}>
          <ListDrawer />
        </Suspense>
      </Drawer>
    </Header>
  );
}
