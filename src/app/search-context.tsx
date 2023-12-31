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
  | null
>(
  null 
);

const CategoryContext = createContext<
  | [string, Dispatch<SetStateAction<string>>]
  | null
>(
  null 
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

  const [
    category,
    setCategory
  ]
    = useState(
      'todos' 
    );

  return (
    <NavContext.Provider
      value={[
        isNavOpen,
        setIsNavOpen
      ]}>
      <CategoryContext.Provider
        value={[
          category,
          setCategory
        ]}>
        <SearchContext.Provider
          value={[
            search,
            setSearch
          ]}>
          {children}
        </SearchContext.Provider>
      </CategoryContext.Provider>
    </NavContext.Provider>
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

  if ( context === null ) {
    throw new Error(
      'useNavigator must be used within a NavProvider'
    );
  }

  return context;
}

export function useCategory() {
  const context = useContext(
    CategoryContext 
  );

  if ( context === null ) {
    throw new Error(
      'el contexto para la categoria solo debe ser aplicado dentro de un hijo del contexto. '
    );
  }

  return context;
}
