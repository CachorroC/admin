'use client';

import { ReactNode,
         createContext,
         useContext,
         useState } from 'react';

const CarpetaContext = createContext(
  null 
);

export function CarpetaProvider(
  {
    children 
  }: {
  children: ReactNode;
} 
) {
  const [
    contextCarpeta,
    setContextCarpeta
  ]
    = useState();

  return (
    <CarpetaContext.Provider
      value={[
        contextCarpeta,
        setContextCarpeta
      ]}
    >
      {children}
    </CarpetaContext.Provider>
  );
}

export function useCarpetaContext() {
  const context = useContext(
    CarpetaContext 
  );

  if ( !context ) {
    throw new Error(
      'useNavigator must be used within a NavProvider' 
    );
  }

  return context;
}
