'use client';
import { usePathname } from 'next/navigation';
import searchbar from '#@/components/search/searchbar.module.scss';
import { useSearch } from '#@/app/search-context';
import { useNavigator } from '#@/app/search-context';

export default function InputSearchBar() {
  const [
    search,
    setSearch
  ] = useSearch();
  const [
    isNavOpen,
    setIsNavOpen
  ] = useNavigator();
  const pathname = usePathname();

  const isHome = pathname === '/'
    ? true
    : false;

  return (
    <input
      type='text'
      className={searchbar.input}
      value={search}
      placeholder={isHome
        ? 'Buscar'
        : pathname}
      onBeforeInput={() => {
        pathname === '/' && setIsNavOpen(
          true
        );
      }}
      onChange={(
        input
      ) => {
        setIsNavOpen(
          true
        );
        setSearch(
          input.target.value
        );
      }}
    />
  );
}
