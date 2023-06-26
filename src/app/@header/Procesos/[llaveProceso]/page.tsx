import Drawer from '#@/components/navbar/drawer';
import Title from '#@/components/modal/title';
import { Suspense } from 'react';
import SearchOutputList from '#@/components/search/SearchProcesosOutput';
import SearchOutputListSkeleton from '#@/components/search/SearchProcesosOutputSkeleton';
import { getCarpetas, getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import { fetchFechas } from '#@/lib/Actuaciones';

export default async function Page(
  {
    params,
  }: {
  params: {
    llaveProceso: string;
  };
}
) {
  const procesos = await getCarpetas();
  const proceso = await getCarpetasByllaveProceso(
    {
      llaveProceso: params.llaveProceso,
    }
  );

  const fechas = await fetchFechas(
    { procesos: procesos }
  );

  return (
    <Drawer>
      {proceso.map(
        (
          prc, i, prcArr
        ) => (
          <Title key={prc._id.toString()} helper={prc.Demandado.Nombre} />
        )
      )}

      <Suspense fallback={<SearchOutputListSkeleton />}>
        <SearchOutputList
          path={'/Procesos'}
          fechas={fechas}
        />
      </Suspense>
    </Drawer>
  );
}
