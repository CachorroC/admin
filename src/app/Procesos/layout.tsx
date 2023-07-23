import layout from '#@/styles/scss/layout.module.scss';
import React from 'react';

export default function LayoutProcesos(
                {
                  children,
                  right,
                  left
                }: {
  children: React.ReactNode;
  right: React.ReactNode;
  left: React.ReactNode;
} 
) {
  return (
    <div className={layout.body}>
      <div className={layout.name}>
        {children}
      </div>
      <div className={layout.left}>{left}</div>
      <div className={layout.right}>{right}</div>
    </div>
  );
}
