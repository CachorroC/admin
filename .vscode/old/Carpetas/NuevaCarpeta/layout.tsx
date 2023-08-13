import { ReactNode } from 'react';
import { CarpetaFormContext } from './carpeta-build';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import layout from '#@/styles/css/layout.module.css';
import form from '#@/components/form/form.module.scss';

export default function LayoutNuevaCarpeta (
  {
    children
  }: {children: ReactNode}
) {
  return (
    <div className={ form.container}>

      <CarpetaFormContext uri={ getBaseUrl()} >
        {children}
      </CarpetaFormContext>
)
    </div>
  );
}