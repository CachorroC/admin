import { Suspense } from 'react';
import { Loader } from '#@/components/Loader';
import { ListCardCarpetasNFechas } from '#@/components/card/CarpetasCard/list';
import { getCarpetas } from '#@/lib/Carpetas';
import { fetchFecha, fetchFechas } from '#@/lib/Actuaciones';
import SearchOutputList from '#@/components/search/SearchProcesosOutput';
import { MonCarpeta } from '#@/lib/types/demandados';
import { CardSearchList } from '#@/components/search/CardSearchList';


async function LeftFechas (
  {
    path, carpetas
  }: { path: string;  carpetas: MonCarpeta[]}
) {
  const fechas = await fetchFechas(
    { carpetas: carpetas }
  );

  return (
    <SearchOutputList
      path={path}
      fechas={fechas}
    />
  );
}

export default async function PageProcesosLeft() {
  const carpetas = await getCarpetas();

  return (
    <>
      <Suspense fallback={<SearchOutputList path={ '/Procesos' } fechas={ carpetas} />}>
        <LeftFechas path={ '/procesos' } carpetas={ carpetas } />
      </Suspense>

    </>
  );
}
