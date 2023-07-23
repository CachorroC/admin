import { NuevaCarpetaProvider } from '#@/hooks/formContext';
import { ReactNode } from 'react';
import layout from '#@/styles/scss/layout.module.scss';

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
