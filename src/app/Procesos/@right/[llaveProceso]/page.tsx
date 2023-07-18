import { ProcesoCard } from '#@/components/card/ProcesosCard';
import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import {  getProceso } from '#@/lib/RamaJudicial';
import typography from '#@/styles/fonts/typography.module.scss';

export default async function PageProcesosRightllaveProceso(
  {
    params
  }: {
  params: {
    llaveProceso: string;
  };
}
) {
  const carpeta = await getCarpetasByllaveProceso(
    {
      llaveProceso: params.llaveProceso
    }
  );

  const Procesos = await getProceso(
    {
      llaveProceso: params.llaveProceso
    }
  );

  return (
    <>
      <p>page</p>
      <h1 className={typography.displayMedium}>Procesos Disponibles</h1>
      {Procesos.map(
        (
          proceso
        ) => {
          return (
            <ProcesoCard
              proceso={proceso}
              key={proceso.idProceso}
            />
          );
        }
      )}
    </>
  );
}
