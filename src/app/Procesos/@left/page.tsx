import { Suspense } from 'react';
import { Loader } from '#@/components/Loader';
import { ListCardCarpetasNFechas } from '#@/components/card/CarpetasCard/list';
import { getCarpetas } from '#@/lib/Carpetas';
import { getProceso, getProcesos } from '#@/lib/RamaJudicial';
import { ProcesoCard } from '#@/components/card/ProcesosCard';

export default async function PageProcesosLeft() {
  const carpetas = await getCarpetas();

  const llavesProceso = carpetas.map(
    (
      carpeta
    ) => {
      return carpeta.llaveProceso;
    }
  );

  const procesosRaw = await getProcesos(
    {
      llavesProceso: llavesProceso
    }
  );

  const procesos = Array.from(
    procesosRaw.values()
  );

  return (
    <>
      <Suspense fallback={ <Loader /> }>
        {
          procesos.map(
            (
              proceso
            ) => {
              return (
                <ProcesoCard proceso={ proceso } key={proceso.idProceso}/>
              );
            }
          )

        }
      </Suspense>
      <Suspense fallback={<Loader />}>
        <ListCardCarpetasNFechas />
      </Suspense>

    </>
  );
}
