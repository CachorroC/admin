import layout from '#@/styles/layout.module.css';
import React, { ReactNode,
                Suspense } from 'react';


export const dynamicParams = true;

export default function LayoutProcesos(
  {
    children,
    top,
    right
  }: {
  children: ReactNode;
  top: ReactNode;
  right: ReactNode;
}
) {
  return (
    <div className={layout.body}>
      <div className={layout.name}>{top}</div>
      <div className={layout.left}>
        {children}
      </div>
      <div className={layout.right}>{right}</div>
    </div>
  );
}
