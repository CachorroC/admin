import { ReactNode, Suspense } from 'react';
import Header from '#@/components/navbar/Header';
import Title from '#@/components/modal/title';
import Drawer from '#@/components/navbar/drawer';
import InputSearchBar from '#@/components/search/InputSearchBar';
import SearchOutputList from '#@/components/search/SearchProcesosOutput';
import SearchOutputListSkeleton from '#@/components/search/SearchProcesosOutputSkeleton';
import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
export default async function Layout(
  {
    children,
    params,
  }: {
  children: ReactNode;
  params: { llaveProceso: string };
}
) {
  const procesos = await getCarpetasByllaveProceso(
    {
      llaveProceso: params.llaveProceso,
    }
  );
  const nombre = procesos.map(
    (
      prc
    ) => prc.Demandado.Nombre
  ).toString();
  return (
    <Suspense>
      <Header>
        <Title helper={nombre} />

        <Drawer>
          <InputSearchBar />
          { children }
        </Drawer>
      </Header>
    </Suspense>
  );
}
