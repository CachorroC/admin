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
    <div className={layout.body}>
      <div
        className={layout.name}
        style={{
          backgroundColor:
            'var(--error-container)'
        }}
      >
        <h2
          className={typography.displayLarge}
          style={{
            color: 'var(--on-error-container)'
          }}
        >
          Error
        </h2>
        <p className={typography.bodyLarge}>
          {error?.message}
        </p>
      </div>
      <div className={layout.right}>
        <button
          onClick={() => {
            return reset();
          }}
          className={navbar.button}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
