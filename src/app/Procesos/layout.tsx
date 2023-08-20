import layout from '#@/styles/layout.module.css';
import React from 'react';

export default function LayoutProcesos(
  {
    children,
    top,
    left
  }: {
  children: React.ReactNode;
  top: React.ReactNode;
  left: React.ReactNode;
}
) {
  return (
    <div className={layout.body}>
      <div className={ layout.name }>
        {top}
      </div>
      <div className={layout.left}>{left}</div>
      <div className={layout.right}>{children}</div>
    </div>
  );
}
