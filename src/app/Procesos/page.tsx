import SearchOutputList from '#@/components/search/SearchProcesosOutput';
import SearchOutputListSkeleton from '#@/components/search/SearchProcesosOutputSkeleton';
import { arrayMergerByllaveProceso } from '#@/lib/arrayMerger';
import { monDemandado } from '#@/lib/types/mongodb';
import { Suspense, Fragment } from 'react';
import layout from '#@/styles/scss/layout.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';
import { getCarpetas } from '#@/lib/Carpetas';
import { Card } from '#@/components/card/card';
import { fixDemandado } from '#@/lib/fix';
import { JuzgadosByllaveProceso } from '#@/lib/RamaJudicial/juzgados';
import CardSkeleton from '#@/components/card/card-skeleton';
import { getProcesos } from '#@/lib/procesos';
import Link from 'next/link';
import { fetchFechas } from '#@/lib/Actuaciones';
import { Juzgados } from '#@/lib/RamaJudicial';
import { monCarpetaDemandado } from '#@/lib/types/demandados';

export async function List (
  { procesos, carpetas }: { procesos: monDemandado[];  carpetas: monCarpetaDemandado[]}
) {
  const fechas = await fetchFechas(
    { procesos: carpetas }
  );
  return (
    <SearchOutputList
      path={ '/Procesos' }
      fechas={ fechas } procesos={ procesos} />
  );
}

export default async function Page () {
  const procesos = await getProcesos();
  const carpetas = await getCarpetas();
  const fechas = await fetchFechas(
    {
      procesos: carpetas
    }
  );
  const Request = await Juzgados(
    {
      procesos: carpetas
    }
  );
  return (
    <div className={layout.body}>
      <div className={ layout.name }>
        <h1 className={ typography.displayMedium }>Procesos</h1>

      </div>
      <div className={ layout.main }>
        <Suspense fallback={<SearchOutputListSkeleton />}>
          <List procesos={procesos} carpetas={carpetas} />
        </Suspense>
      </div>
    </div>
  );
}