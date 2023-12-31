'use client';
import { usePathname } from 'next/navigation';
import searchbar from '#@/components/search/searchbar.module.css';
import { useNavigator,
         useSearch } from '#@/app/search-context';

export default function InputSearchBar() {
  const [
    search,
    setSearch
  ] = useSearch();

  const [
    isNavOpen,
    setIsNavOpen
  ]
    = useNavigator();

  const pathname = usePathname();

  const isHome = pathname === '/'
    ? true
    : false;

  return (
    <input
      type='text'
      className={searchbar.input}
      name='search'
      value={search}
      placeholder={isHome
        ? 'Buscar'
        : pathname}
      onBeforeInput={() => {
        setIsNavOpen(
          true 
        );
      }}
      onChange={(
        input 
      ) => {
        input.preventDefault();
        setSearch(
          input.target.value 
        );
      }}
    />
  );
}
