import { Suspense } from 'react';
import { Loader } from '#@/components/Loader';
import { ListCardCarpetasNFechas } from '#@/components/card/CarpetasCard/list';

export default function PageProcesosLeft() {
  return (
    <Suspense fallback={<Loader />}>
      <ListCardCarpetasNFechas />
    </Suspense>
  );
}
