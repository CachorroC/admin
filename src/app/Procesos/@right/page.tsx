import { CarpetaCard } from '#@/components/card/CarpetasCard';
import { NombreComponent } from '#@/components/card/Nombre';
import { ProcesoCard } from '#@/components/card/ProcesosCard';
import { ProcesoCardSkeleton } from '#@/components/card/ProcesosCard/skeleton';
import { getCarpetas } from '#@/lib/Carpetas';
import { getProceso } from '#@/lib/Procesos';
import { sleep } from '#@/lib/fix';
import { Fragment, Suspense } from 'react';
import 'server-only';
import PruebaList from './list';

async function ProcesoComponent(
  {
    llaveProceso,
    index
  }: {
  llaveProceso: string;
  index: number;
}
) {
  const awaitTime = index * 500;
  await sleep(
    awaitTime
  );

  const procesos = await getProceso(
    {
      llaveProceso: llaveProceso,
      index       : index
    }
  );

  if ( !procesos ) {
    return null;
  }

  return (
    <>
      {procesos.map(
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
      <PruebaList carpetas={ carpetas } />
      {carpetas.map(
        (
          carpeta, index
        ) => {
          return (
            <Fragment key={carpeta._id}>
              <Suspense
                fallback={
                  <ProcesoCardSkeleton
                    key={carpeta._id}
                  />
                }>
                <ProcesoComponent
                  key={carpeta._id}
                  llaveProceso={
                    carpeta.llaveProceso
                  }
                  index={index}
                />
              </Suspense>
            </Fragment>
          );
        }
      )}
    </>
  );
}
