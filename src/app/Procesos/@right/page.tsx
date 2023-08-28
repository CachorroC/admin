import { CarpetaCard } from '#@/components/card/CarpetasCard';
import { NombreComponent } from '#@/components/card/Nombre';
import { ProcesoCard } from '#@/components/card/ProcesosCard';
import { ProcesoCardSkeleton } from '#@/components/card/ProcesosCard/skeleton';
import { Nota } from '#@/components/nota/notas';
import { getCarpetas } from '#@/lib/Carpetas';
import { getProceso } from '#@/lib/Procesos';
import { sleep } from '#@/lib/fix';
import { getNotas } from '#@/lib/notas';
import { Fragment, Suspense } from 'react';
import 'server-only';
import typography from '#@/styles/fonts/typography.module.scss';


export default async function PageProcesosRight() {
  const carpetas = await getNotas();

  return (
    <>
      <h2 className={typography.displayMedium}>Notas</h2>
      {carpetas.map(
        (
          carpeta, index, arr
        ) => {
          return (
            <Fragment key={carpeta._id}>
              <Suspense
                fallback={
                  <ProcesoCardSkeleton
                    key={carpeta._id}
                  />
                }>
                <Nota notaRaw={ carpeta } i={ index} arr={arr} />
              </Suspense>
            </Fragment>
          );
        }
      )}
    </>
  );
}
