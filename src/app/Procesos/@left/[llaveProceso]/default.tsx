
import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import { getConsultaNumeroRadicion } from '#@/lib/RamaJudicial';
import { Fragment, Suspense } from 'react';
import typography from '#@/styles/fonts/typography.module.scss';
import SearchOutputListSkeleton from '#@/components/search/SearchProcesosOutputSkeleton';
import { CarpetaCard } from '#@/components/card/CarpetasCard';
import { ProcesoCard } from '#@/components/card/ProcesosCard';

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

  const Procesos = await getConsultaNumeroRadicion(
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

          return (
            <CarpetaCard
              carpeta={carpeta}
              key={carpeta.id}>
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
