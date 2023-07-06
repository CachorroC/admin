import typography from '#@/styles/fonts/typography.module.scss';
import layout from '#@/styles/scss/layout.module.scss';
import { ReactNode } from 'react';

export default function LayoutCarpetas(
  {
    children,
  }: {
  children: ReactNode;
}
) {

  return (
    <div className={layout.body}>
      <div className={layout.name}>
        <h1 className={typography.displaySmall}>
          Carpetas
        </h1>
      </div>
      {children}
    </div>
  );

}
