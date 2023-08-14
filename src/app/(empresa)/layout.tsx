import layout from '#@/styles/scss/layout.module.css';
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
