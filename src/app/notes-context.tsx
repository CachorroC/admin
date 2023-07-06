'use client';

import {Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
  useState,} from 'react';

import { SetStateAction } from 'react';

const NoteContext = createContext<
  | [boolean, Dispatch<SetStateAction<boolean>>]
  | null
> (
  null
);

export function NoteProvider(
  {
    children,
  }: {
  children: ReactNode;
}
) {
  const [
    isShowing,
    setIsShowing
  ] =
    useState (
      false
    );
  return (
    <NoteContext.Provider
      value={[
        isShowing,
        setIsShowing
      ]}>
      {children}
    </NoteContext.Provider>
  );
}

export function useNoter() {
  const context = useContext (
    NoteContext
  );

  if (context === null) {
    throw new Error (
      'useModal must be used within NoteProvider'
    );
  }

  return context;
}
