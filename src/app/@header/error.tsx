'use client';
import box from '#@/styles/scss/box.module.scss';
import React from 'react';
import layout from '#@/styles/scss/layout.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';

export default function Error(
  { error, reset }: any
) {
  React.useEffect(
    () => {
      console.log(
        'logging error:',
        error
      );
    },
    [ error ]
  );

  return (
    <div className={layout.header}>
      <h1 className={typography.displayLarge} style={{ color: 'var(--error)' }}>
        Error
      </h1>
      <p
        className={typography.bodyLarge}
        style={{ color: 'var(--on-surface-container)' }}
      >
        {error?.message}
      </p>

      <button onClick={() => reset()} className={layout.button}>
        Try Again
      </button>
    </div>
  );
}
