import 'server-only';
import { MonCarpeta } from '#@/lib/types/demandados';
import { getCarpetas } from '#@/lib/Carpetas';
import { Suspense } from 'react';
import { getProceso } from '#@/lib/RamaJudicial';
import { ProcesoCard } from '#@/components/card/ProcesosCard';
import { ProcesoCardSkeleton } from '#@/components/card/ProcesosCard/skeleton';
import { NuevoProceso } from '#@/app/Carpetas/NuevaCarpeta/new-carpeta';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import { CarpetaCard } from '#@/components/card/CarpetasCard';
import { NombreComponent } from '#@/components/card/Nombre';

async function ProcesoComponent(
  {
    llaveProceso, idProceso,
    index
  }: {
      llaveProceso: string;
      idProceso?: number;
  index: number;
}
) {
  const procesos = await getProceso(
    {
      llaveProceso: llaveProceso,
      index       : index
    }
  );

  const proceso = procesos.find(
    (
      prc
    ) => {
      return prc.idProceso === idProceso;
    }
  );

  if ( procesos.length === 0 || !proceso ) {
    return null;
  }

  return (
    <ProcesoCard
      key={proceso.idProceso}
      proceso={proceso}
    />
  );
}

export default async function PageProcesosRight() {
  const carpetas = await getCarpetas();

  return (
    <>
      {carpetas.map(
        (
          carpeta, index
        ) => {
          if ( !carpeta.llaveProceso ) {
            return ( <CarpetaCard key={carpeta._id}carpeta={ carpeta } >
              <NombreComponent key={carpeta._id} deudor={ carpeta.deudor} />
            </CarpetaCard> );
          }

          return (
            <Suspense
              key={carpeta._id}
              fallback={<ProcesoCardSkeleton />}
            >
              <ProcesoComponent
                key={carpeta._id}
                llaveProceso={ carpeta.llaveProceso }
                idProceso={carpeta.idProceso}
                index={index}
              />
            </Suspense>
          );
        }
      )}
    </>
  );
}
