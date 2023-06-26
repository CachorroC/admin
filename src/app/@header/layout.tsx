import { ReactNode, Suspense } from 'react';
import Header from '#@/components/navbar/Header';
export default function Layout(
  { children }: { children: ReactNode }
) {
  return (
    <Suspense>
      <Header>{children}</Header>
    </Suspense>
  );
}
