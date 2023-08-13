
import { ReactNode } from 'react';
import layout from '#@/styles/scss/layout.module.scss';
import { NuevaCarpetaProvider } from '#@/hooks/formContext';

export default function LayoutCarpetas(
  {
    children
  }: {
  children: ReactNode;
}
) {
  return (
    <NuevaCarpetaProvider>
      {children}
    </NuevaCarpetaProvider>
  );
}
