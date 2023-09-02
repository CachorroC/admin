'use client';
import { useCallback,
         useRef,
         useEffect } from 'react';
import { usePathname,
         useRouter,
         useSearchParams } from 'next/navigation';
import React from 'react';
import { useModal } from '#@/app/modal-context';
import modal from '#@/components/modal/modal.module.css';
import { BackwardsButton,
         ForwardButton } from '../Buttons/NavButtons';
import { useParams } from 'next/navigation';
import { redirect } from 'next/navigation';
import type { Route } from 'next';

export default function Modal(
  {
    children
  }: {
  children: React.ReactNode;
}
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

  const onEnter = useCallback(
    () => {
      setIsOpen(
        false
      );
    }, [

      setIsOpen
    ]
  );

  const onDismiss = useCallback(
    () => {
      setIsOpen(
        !isOpen
      );
      router.back();
    }, [
      router,
      setIsOpen,
      isOpen
    ]
  );

  const onClick = useCallback(
    (
      e: { target: unknown; }
    ) => {
      if (
        e.target === overlay.current
        || e.target === wrapper.current
      ) {
        if ( onDismiss ) {
          onDismiss();
        }

        if ( onEnter ) {
          onEnter();
        }
      }
    },
    [
      onDismiss,
      onEnter,
      overlay,
      wrapper
    ]
  );

  const onKeyDown = useCallback(
    (
      e: { key: string }
    ) => {
      if ( e.key === 'Escape' ) {
        onDismiss();
      }

      if ( e.key === 'Enter' ) {
        onEnter();
      }
    },
    [
      onDismiss,
      onEnter
    ]
  );

  useEffect(
    () => {
      setIsOpen(
        true
      );
    }, [
      setIsOpen
    ]
  );

  if ( isOpen ) {
    return (
      <div
        ref={overlay}
        className={modal.modal}
        onClick={() => {
          onClick;
        }}>
        <div
          ref={wrapper}
          className={modal.wrapper}>
          <ForwardButton /> {children}
          <BackwardsButton />
        </div>
      </div>
    );
  }
}
