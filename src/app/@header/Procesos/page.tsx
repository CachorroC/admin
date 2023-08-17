import Title from '#@/components/Headings/title';
import { getCarpetas } from '#@/lib/Carpetas';
import Drawer from '#@/components/navbar/drawer';
import SearchOutputList from '#@/components/search/SearchProcesosOutput';
import Header from '#@/components/navbar/Header';
import { Suspense } from 'react';
import SearchOutputListSkeleton from '#@/components/search/SearchProcesosOutputSkeleton';
import { Loader } from '#@/components/Loader/index';
import { LinkCard } from '#@/components/search/link';

export default async function Page() {
  const carpetas = await getCarpetas();

  return (

    <Title />

  );
}
