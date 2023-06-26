import layout from '#@/styles/css/layout.module.css';
import InputSearchBar from '#@/components/search/InputSearchBar';
import Drawer from '#@/components/navbar/drawer';
import SearchOutputList from '#@/components/search/SearchProcesosOutput';
import SearchOutputListSkeleton from '#@/components/search/SearchProcesosOutputSkeleton';
import { Suspense } from 'react';
import { getCarpetas, getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import { fetchFechas } from '#@/lib/Actuaciones';
import Nombre from '#@/components/Headings/nombre';

export default async function Default(
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
    <>
      <Drawer>
        <InputSearchBar />
        <Suspense fallback={<SearchOutputListSkeleton />}>
          <SearchOutputList
            path={'/Procesos'}
            fechas={fechas}
          />
        </Suspense>
      </Drawer>
      {proceso.map(
        (
          prc, i, prcArr
        ) => (
          <Name key={prc.idProceso} helper={prc.Demandado.Nombre}/>
        )
      )}
    </>
  );
}
