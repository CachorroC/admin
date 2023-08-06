import 'server-only';
import { Suspense } from 'react';
import SearchOutputListSkeleton from '#@/components/search/SearchProcesosOutputSkeleton';
import { getCarpetas } from '#@/lib/Carpetas';
import { fetchFechas } from '#@/lib/Actuaciones';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import type { Route } from 'next';
import { CardSearchList } from '#@/components/search/CardSearchList';
import { MonCarpeta } from '#@/lib/types/demandados';

export async function Fechitas(
  {
    path,
    carpetas
  }: {
  path: string;
  carpetas: MonCarpeta[];
} 
) {
  const fechas = await fetchFechas(
    { carpetas: carpetas } 
  );

  return (
    <CardSearchList
      path={path}
      fechas={fechas}
    />
  );
}

export default async function DefaultProcesosLeft() {
  const carpetas = await getCarpetas();

  return (
    <Suspense
      fallback={<SearchOutputListSkeleton />}
    >
      <Fechitas
        path={'/Procesos'}
        carpetas={carpetas}
      />
    </Suspense>
  );
}
