import { Suspense } from 'react';
import { Loader } from '#@/components/Loader';
import { ListCardCarpetasNFechas } from '#@/components/card/CarpetasCard/list';
import { getCarpetas } from '#@/lib/Carpetas';
import { fetchFecha, fetchFechas } from '#@/lib/Actuaciones';
import SearchOutputList from '#@/components/search/SearchProcesosOutput';

export default async function PageProcesosLeft() {
  const carpetas = await getCarpetas();

  const fechas = await fetchFechas(
    { carpetas: carpetas }
  );



  return (
    <>
      <Suspense fallback={<Loader />}>
        <SearchOutputList path={ '/Procesos' } fechas={ fechas} />
      </Suspense>

    </>
  );
}
