import { ReactNode } from 'react';
import Header from '#@/components/navbar/Header';

export default function Layout(
  { children }: { children: ReactNode }
) {
  return <Header>{children}</Header>;
}
