import 'server-only';
import { NewNota } from '#@/components/nota/NuevaNota';
import { Notas } from '#@/components/nota/notas';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import { getNotas } from '#@/lib/notas';
import { NotasList } from '#@/components/card/NotasCard';
import { fetchFechas } from '#@/lib/Actuaciones';
import { IntCarpeta,
         MonCarpeta } from '#@/lib/types/demandados';
import { getCarpetas } from '#@/lib/Carpetas';
import { Suspense } from 'react';
import { Loader } from '#@/components/Loader';
import SearchOutputList from '#@/components/search/SearchProcesosOutput';
import { NotasListSkeleton } from '#@/components/card/NotasCard/skeleton';

export default async function PageProcesosRight() {
  const notas = await getNotas();
  const procesos = await getCarpetas();

  return (
    <>
      <NewNota
        llaveProceso={'Procesos'}
        uri={`${ getBaseUrl() }`}
      />
      <Suspense fallback={<NotasListSkeleton />}>
        <NotasList notas={notas} />
      </Suspense>
    </>
  );
}
