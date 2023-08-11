'use client';
import { Dispatch,
         ReactNode,
         SetStateAction,
         createContext,
         createRef,
         useContext,
         useState } from 'react';

const NuevaCarpetaContext = createContext<
  | [
      Map<any, any>,
      Dispatch<SetStateAction<Map<any, any>>>
    ]
  | null
>(
  null
);

export const NuevaCarpetaProvider = (
  {
    children
  }: {
  children: ReactNode;
}
) => {
  const [
    map,
    setMap
  ] = useState(
    new Map()
  );

  return (
    <NuevaCarpetaContext.Provider
      value={[
        map,
        setMap
      ]}
    >
      {children}
    </NuevaCarpetaContext.Provider>
  );
};

export const useNuevaCarpetaContext = () => {
  const context = useContext(
    NuevaCarpetaContext
  );

  if ( context === null ) {
    throw new Error(
      'useNavigator must be used within a NavProvider'
    );
  }

  return context;
};
