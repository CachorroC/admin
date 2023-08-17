import { CarpetaCard } from '#@/components/card/CarpetasCard';
import { NombreComponent } from '#@/components/card/Nombre';
import { ProcesoCard } from '#@/components/card/ProcesosCard';
import { ProcesoCardSkeleton } from '#@/components/card/ProcesosCard/skeleton';
import { getCarpetas } from '#@/lib/Carpetas';
import { getProceso } from '#@/lib/Procesos';
import { Fragment, Suspense } from 'react';
import 'server-only';

async function ProcesoComponent(
  {
    llaveProceso,
    idProceso,
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

  return (
    <>
      { procesos.map(
        (
          proceso
        ) => {
          return (
            <ProcesoCard
              key={proceso.idProceso}
              proceso={proceso}
            />
          );
        }
      )}
    </>
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
          return (
            <Suspense
              key={carpeta._id}
              fallback={<ProcesoCardSkeleton key={carpeta._id} />}
            >
              <ProcesoComponent
                key={carpeta._id}
                llaveProceso={carpeta.llaveProceso}
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
