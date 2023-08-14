import { ProcesoCard } from '#@/components/card/ProcesosCard';
import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import { getProceso } from '#@/lib/Procesos';
import typography from '#@/styles/fonts/typography.module.css';

export default async function PageProcesosRightllaveProceso(
  {
    params
  }: {
  params: {
    llaveProceso: string;
  };
}
) {

  const Procesos = await getProceso(
    {
      llaveProceso: params.llaveProceso
    }
  );

  return (
    <>
      <p>page</p>
      <h1 className={typography.displayMedium}>
        Procesos Disponibles
      </h1>
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
