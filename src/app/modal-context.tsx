'use client';

import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useState,
  SetStateAction,
} from 'react';

const ModalContext = createContext<
  [boolean, Dispatch<SetStateAction<boolean>>] | undefined
>(
  undefined
);

export function ModalProvider(
  { children }: { children: ReactNode }
) {
  const [
    isOpen,
    setIsOpen
  ] = useState(
    false
  );

  return (
    <ModalContext.Provider value={[
      isOpen,
      setIsOpen
    ]}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(
    ModalContext
  );

  if (context === undefined) {
    throw new Error(
      'useModal must be used within a ModalProvider'
    );
  }

  return context;
}
