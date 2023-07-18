import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import {  getProceso } from '#@/lib/RamaJudicial';
import { Fragment, Suspense } from 'react';
import typography from '#@/styles/fonts/typography.module.scss';
import SearchOutputListSkeleton from '#@/components/search/SearchProcesosOutputSkeleton';
import { CarpetaCard } from '#@/components/card/CarpetasCard';
import { ProcesoCard } from '#@/components/card/ProcesosCard';
import { intProceso } from '#@/lib/types/procesos';

export default async function DefaultProcesosLeftllaveProceso(
  {
    params: {
      llaveProceso
    }
  }: {
  params: { llaveProceso: string };
}
) {
  const carpetas = await getCarpetasByllaveProceso(
    {
      llaveProceso: llaveProceso
    }
  );

  const Procesos = await getProceso(
    {
      llaveProceso: llaveProceso
    }
  );

  return (
    <>
      <p>default</p>
      {carpetas.map(
        (
          carpeta, index, arr
        ) => {
          const proceso = Procesos.find(
            (
              pr
            ) => {
              return pr.idProceso === carpeta.idProceso;
            }
          );

          const {
            _id, ...newCarpeta
          } = carpeta;

          return (
            <CarpetaCard
              carpeta={carpeta}
              key={carpeta._id}>
              <span className='material-symbols-outlined'>
              disabled_by_default
              </span>
              {proceso && <ProcesoCard proceso={proceso} />}
            </CarpetaCard>
          );
        }
      )}
    </>
  );
}
