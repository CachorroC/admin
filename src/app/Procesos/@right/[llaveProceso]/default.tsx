import { CarpetaCard } from '#@/components/card/CarpetasCard';
import { ListCardCarpetasNFechas } from '#@/components/card/CarpetasCard/list';
import { NotasListSkeleton } from '#@/components/card/NotasCard/skeleton';
import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import { Suspense } from 'react';

export default function DefaultProcesosRightLLaveProceso () {
  return (
    <>
      <p>default</p>
      <Suspense fallback={<NotasListSkeleton />}>
        <ListCardCarpetasNFechas />
      </Suspense>
    </>
  );
}
