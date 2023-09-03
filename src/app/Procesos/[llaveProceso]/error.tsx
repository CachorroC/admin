'use client';
import box from '#@/styles/box.module.css';
import React, { useEffect } from 'react';
import layout from '#@/styles/layout.module.css';
import typography from '#@/styles/fonts/typography.module.css';
import navbar from '#@/components/navbar/navbar.module.css';

export default function Error(
  {
    error,
    reset
  }: any 
) {
  useEffect(
    () => {
      console.log(
        'logging error:', error 
      );
    }, [
      error
    ] 
  );

  return (
    <div
      style={{
        backgroundColor: 'var(--error-comntainer)'
      }}>
      <h2
        className={typography.displayLarge}
        style={{
          color: 'var(--on-error-container)'
        }}>
        {' Error'}
      </h2>
      <p className={typography.bodyLarge}>
        {error?.message}
      </p>
      <button
        style={{
          backgroundColor: 'var(--error)',
          color          : 'var(--on-error)',
          borderRadius   : '2vmin',
          boxShadow      : 'var(--dp16)'
        }}
        type={'button'}
        onClick={() => {
          return reset();
        }}>
        <span className='material-symbols-outlined'>
          refresh
        </span>
      </button>
    </div>
  );
}
