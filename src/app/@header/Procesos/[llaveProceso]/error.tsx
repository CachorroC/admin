'use client';
import box from '#@/styles/box.module.css';
import React from 'react';
import layout from '#@/styles/layout.module.css';
import typography from '#@/styles/fonts/typography.module.css';
import navbar from '#@/components/navbar/navbar.module.css';

export default function Error(
  {
    error,
    reset
  }: any 
) {
  React.useEffect(
    () => {
      console.log(
        'logging error:', error 
      );
    }, [
      error
    ] 
  );

  return (
    <div className={layout.header}>
      <h1
        className={typography.displayLarge}
        style={{
          color: 'var(--error)'
        }}>
        Error
      </h1>
      <p
        className={typography.bodyLarge}
        style={{
          color: 'var(--on-surface-container)'
        }}>
        {error?.message}
      </p>
      <button
        onClick={() => {
          return reset();
        }}
        className={navbar.button}>
        Try Again
      </button>
    </div>
  );
}
