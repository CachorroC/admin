import { CarpetaCard } from '#@/components/card/CarpetasCard';
import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';

export default async function DefaultProcesosRightLLaveProceso(
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

  return (
    <>
      {carpetas.map(
        (
          carpeta, index, arr 
        ) => {
          return (
            <CarpetaCard
              carpeta={carpeta}
              key={carpeta.id}>
              <span className='material-symbols-outlined'>
              disabled_by_default
              </span>
            </CarpetaCard>
          );
        } 
      )}
    </>
  );
}
