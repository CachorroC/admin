'use client';
import box from '#@/styles/scss/box.module.scss';
import React from 'react';
import layout from '#@/styles/scss/layout.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';

export default function Error(
  {
    error,
    reset,
  }: any
) {

  React.useEffect (
    () => {

      console.log (
        'logging error:',
        error
      );
    
    },
    [
      error
    ]
  );

  return (
    <div className={layout.body}>
      <div
        className={layout.name}
        style={{
          backgroundColor:
            'var(--error-container)',
        }}>
        <h2
          className={typography.displayLarge}
          style={{
            color: 'var(--on-error-container)',
          }}>
          Error
        </h2>
        <p className={typography.bodyLarge}>
          {error?.message}
        </p>
      </div>
      <div className={layout.right}>
        <button
          onClick={() => reset ()}
          className={layout.button}>
          Try Again
        </button>
      </div>
    </div>
  );

}
