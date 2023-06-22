'use client';
import { useCallback, useRef, useEffect, ReactNode, MouseEvent } from 'react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useModal } from '#@/app/modal-context';
import modal from '#@/components/modal/modal.module.scss';

export default function Modal(
  { children }: { children: ReactNode }
) {
  const [
    isOpen,
    setIsOpen
  ] = useModal();
  const overlay = useRef(
    null
  );
  const wrapper = useRef(
    null
  );
  const router = useRouter();

  const onDismiss = useCallback(
    () => {
      router.back();
    },
    [ router ]
  );

  const onClick = useCallback(
    (
      e: MouseEvent<HTMLElement>
    ) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) {
          onDismiss();
        }
      }
    },
    [
      onDismiss,
      overlay,
      wrapper
    ]
  );

  const onKeyDown = useCallback(
    (
      e: any
    ) => {
      if (e.key === 'Escape') {
        onDismiss();
      }
    },
    [ onDismiss ]
  );

  useEffect(
    () => {
      document.addEventListener(
        'keydown',
        onKeyDown
      );
      return () => document.removeEventListener(
        'keydown',
        onKeyDown
      );
    },
    [ onKeyDown ]
  );

  return (
    <div ref={overlay} onClick={onClick} className={modal.modal}>
      <button
        onClick={() => {
          router.back();
        }}
      >
        <span className='material-symbols-outlined'>undo</span>
      </button>
      <button
        onClick={() => {
          router.refresh();
          router.forward();
        }}
      >
        <span className='material-symbols-outlined'>redo</span>
      </button>
      {children}
    </div>
  );
}
