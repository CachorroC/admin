import { Suspense } from 'react';
import { Loader } from '#@/components/Loader';
import { ListCardCarpetasNFechas } from '#@/components/card/CarpetasCard/list';
import { getCarpetas } from '#@/lib/Carpetas';

export default async function PageProcesosLeft() {
  const carpetas = await getCarpetas();

  return (
    <>
      <Suspense fallback={<Loader />}>
        <ListCardCarpetasNFechas />
      </Suspense>
    </>
  );
}
