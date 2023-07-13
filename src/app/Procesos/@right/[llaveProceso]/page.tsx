import { ProcesoCard } from '#@/components/card/ProcesosCard';
import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import { getConsultaNumeroRadicion } from '#@/lib/RamaJudicial';

export default async function PageProcesosRightllaveProceso(
  {
    params
  }: {
      params: {
        llaveProceso: string
      };
}
) {
  const carpeta = await getCarpetasByllaveProceso(
    {
      llaveProceso: params.llaveProceso
    }
  );

  const Procesos = await getConsultaNumeroRadicion(
    {
      llaveProceso: params.llaveProceso
    }
  );

  return (
    <>
      { Procesos.map(
        (
          proceso
        ) => {
          return (
            <ProcesoCard proceso={ proceso } key={proceso.idProceso} />
          );
        }
      )}
    </>
  );

}
