'use client';
import { ReactNode, useState } from 'react';
import styles from './accordion.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';

export function Accordion(
  {
    children
  }: { children: ReactNode }
) {
  const [
    isActive,
    setIsActive
  ] = useState(
    false
  );

  return (
    <div className={styles.accordion}>
      <div className={styles.item}>
        <button
          type='button'
          className={styles.title}
          onClick={() => {
            return setIsActive(
              !isActive
            );
          }}>
          <span className='material-symbols-outlined'>
            {isActive
              ? 'expand_less'
              : 'expand_more'}
          </span>
        </button>
        {isActive && <div className={styles.content}>{children}</div>}
      </div>
    </div>
  );
}
