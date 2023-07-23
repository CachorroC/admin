'use client';
import { Dispatch,
         ReactNode,
         SetStateAction,
         createContext,
         useContext,
         useRef,
         useState } from 'react';
const notasMap = new Map();

const NoteSliderContext = createContext<
  | [
      Map<any, any>,
      Dispatch<SetStateAction<Map<any, any>>>
    ]
  | undefined
>(
  undefined 
);

export function NoteSliderProvider(
                {
                  children
                }: {
  children: ReactNode;
} 
) {
  const [
    noteSliderMap,
    setNoteSliderMap
  ]
    = useState(
      new Map() 
    );

  return (
    <NoteSliderContext.Provider
      value={[
        noteSliderMap,
        setNoteSliderMap
      ]}
    >
      {children}
    </NoteSliderContext.Provider>
  );
}

export function useNoteSlider() {
  const context = useContext(
    NoteSliderContext 
  );

  if ( context === undefined ) {
    throw new Error(
      'useNoteSlider should be used inside a NoteSliderProvider'
    );
  }

  return context;
}
