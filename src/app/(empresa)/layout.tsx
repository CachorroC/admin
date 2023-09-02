import layout from '#@/styles/layout.module.css';
import React, { ReactNode,
                Suspense } from 'react';

export default function LayoutProcesos(
  {
    children
  }: {
  children: ReactNode;
} 
) {
  return (
    <div className={layout.body}>{children}</div>
  );
}
