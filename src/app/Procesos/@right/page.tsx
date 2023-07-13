import 'server-only';
import { NewNota } from '#@/components/nota/NuevaNota';
import { Notas } from '#@/components/nota/notas';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import { getNotas } from '#@/lib/notas';
import { NotasList } from '#@/components/card/NotasCard';
import { fetchFechas } from '#@/lib/Actuaciones';
import { IntCarpeta, MonCarpeta } from '#@/lib/types/demandados';
import { getCarpetas } from '#@/lib/Carpetas';
import { Suspense } from 'react';
import { Loader } from '#@/components/Loader';
import SearchOutputList from '#@/components/search/SearchProcesosOutput';

async function Fechs(
  {
    procesos
  }: { procesos: MonCarpeta[] }
) {
  const fechas = await fetchFechas(
    {
      procesos: procesos
    }
  );

  return (
    <SearchOutputList
      path={'/Procesos'}
      fechas={fechas}
    />
  );
}

export default async function PageProcesosRight () {

  const notas = await getNotas();
  const procesos = await getCarpetas();

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Fechs procesos={procesos} />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Fechs procesos={procesos} />
      </Suspense>
      <NewNota
        llaveProceso={'Procesos'}
        uri={`${ getBaseUrl() }`}
      />
      <NotasList notas={notas} />
    </>
  );
}
