'use client';
import { useCallback, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useModal } from '#@/app/modal-context';
import modal from '#@/components/modal/modal.module.scss';
import { BackwardsButton, ForwardButton } from '../navbar/Buttons';

export default function Modal(
  { children }: { children: React.ReactNode }
) {
  const overlay = useRef(
    null
  );
  const wrapper = useRef(
    null
  );
  const router = useRouter();
  const [
    isOpen,
    setIsOpen
  ] = useModal();

  const onDismiss = useCallback(
    () => {
      setIsOpen(
        false
      );
      router.back();
    },
    [
      router,
      setIsOpen
    ]
  );

  const onClick = useCallback(
    (
      e: { target: undefined }
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
      e: { key: string }
    ) => {
      if (e.key === 'Escape') {
        onDismiss();
      }
    },
    [
      onDismiss
    ]
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
    [
      onKeyDown
    ]
  );
  if (isOpen) {
    return (
      <div
        ref={overlay}
        className={modal.modal}
        onClick={() => {
          onClick;
        }}
      >
        <div ref={wrapper} className={modal.wrapper}>
          <ForwardButton />
          {children}
          <BackwardsButton />
        </div>
      </div>
    );
  }
}
