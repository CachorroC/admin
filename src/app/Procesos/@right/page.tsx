import 'server-only';
import { MonCarpeta } from '#@/lib/types/demandados';
import { getCarpetas } from '#@/lib/Carpetas';
import { Suspense } from 'react';
import {  getProceso } from '#@/lib/RamaJudicial';
import { ProcesoCard } from '#@/components/card/ProcesosCard';
import { ProcesoCardSkeleton } from '#@/components/card/ProcesosCard/skeleton';


async function ProcesoComponent (
  {
    carpeta, index
  }: { carpeta: MonCarpeta; index: number }
) {
  const procesos = await getProceso(
    {
      llaveProceso: carpeta.llaveProceso,
      index       : index
    }
  );



  const proceso = procesos.find(
    (
      prc
    ) => {
      return prc.idProceso === carpeta.idProceso;
    }
  );

  if ( procesos.length === 0 || !proceso ) {
    return null;
  }

  return (

    <ProcesoCard key={proceso.idProceso} proceso={ proceso } />


  );
}

export default async function PageProcesosRight() {

  const carpetas = await getCarpetas();



  return (
    <>

      { carpetas.map(
        (
          carpeta, index
        ) => {
          return(
            <Suspense key={carpeta._id} fallback={<ProcesoCardSkeleton />}>
              <ProcesoComponent key={carpeta._id} carpeta={ carpeta } index={ index } />
            </Suspense>
          );

        }
      )}

    </>
  );
}
