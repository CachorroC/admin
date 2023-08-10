'use client';
import { Dispatch,
         ReactNode,
         SetStateAction,
         createContext,
         useContext,
         useState } from 'react';

const SearchContext = createContext<
  | [string, Dispatch<SetStateAction<string>>]
  | null
>(
  null 
);

const NavContext = createContext<
  | [boolean, Dispatch<SetStateAction<boolean>>]
  | undefined
>(
  undefined 
);

export function SearchProvider(
  {
    children
  }: {
  children: ReactNode;
} 
) {
  const [
    search,
    setSearch
  ] = useState(
    '' 
  );

  const [
    isNavOpen,
    setIsNavOpen
  ]
    = useState(
      false 
    );

  return (
    <SearchContext.Provider
      value={[
        search,
        setSearch
      ]}
    >
      <NavContext.Provider
        value={[
          isNavOpen,
          setIsNavOpen
        ]}
      >
        {children}
      </NavContext.Provider>
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(
    SearchContext 
  );

  if ( context === null ) {
    throw new Error(
      'useSearch must be used inside a SearchProvider'
    );
  }

  return context;
}

export function useNavigator() {
  const context = useContext(
    NavContext 
  );

  if ( context === undefined ) {
    throw new Error(
      'useNavigator must be used within a NavProvider'
    );
  }

  return context;
}
