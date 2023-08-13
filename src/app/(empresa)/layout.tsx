import layout from '#@/styles/layout.module.scss';
import React from 'react';

export default function Layout(
  {
    children
  }: {
  children: React.ReactNode;
}
) {
  return (
    <div className={layout.body}>{children}</div>
  );
}
