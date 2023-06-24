import SearchOutputList from '#@/components/search/SearchProcesosOutput';
import SearchOutputListSkeleton from '#@/components/search/SearchProcesosOutputSkeleton';
import { fetchFechas, getConsultaNumeroRadicion, getJuzgados } from '#@/lib/RamaJudicial';
import { arrayMergerByllaveProceso } from '#@/lib/arrayMerger';
import { monDemandado } from '#@/lib/types/mongodb';
import { Suspense, Fragment } from 'react';
import layout from '#@/styles/scss/layout.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';
import { getCarpetas } from '#@/lib/Carpetas';
import { LinkCard } from '#@/components/search/link';
import { Card } from '#@/components/card/card';
import { fixDemandado } from '#@/lib/fix';
import { JuzgadosByllaveProceso } from '#@/lib/RamaJudicial/juzgados';
import CardSkeleton from '#@/components/card/card-skeleton';
import { getProcesos } from '#@/lib/procesos';
import Link from 'next/link';
import { CardCarpeta } from '#@/components/card/cardCarpeta';
import { monCarpetaDemandado } from '../../lib/types/demandados';

/* export async function List (
  { procesos }: { procesos: monCarpetaDemandado[] }
) {
  const fechas = await fetchFechas(
    { procesos: procesos }
  );
  return (
    <SearchOutputList
      path={ '/Procesos' }
      procesos={ procesos }
      fechas={ fechas } />
  );
} */

export default async function Page () {
  const procesos = await getProcesos();
  const carpetas = await getCarpetas();
  const Request = await getJuzgados(
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

        <div className={ layout.right }>
          <Suspense fallback={ <SearchOutputListSkeleton /> }>
            {
              carpetas.map(
                async (
                  carpeta, index, arr
                ) => {

                  let subIndice = `${ index + 1 } de ${ arr.length }`;
                  const nombre =  carpeta.Demandado.Nombre;

                  return (
                    <Card name={ nombre } key={ carpeta._id } path={ '/Procesos' } llaveProceso={ carpeta.llaveProceso }>
                      { carpeta.idProceso && carpeta.idProceso.map(
                        (
                          proceso
                        ) => (
                          <Link key={ proceso } href={ `/Procesos/${carpeta.llaveProceso}/${proceso}` }>
                            <p>{proceso}</p>
                          </Link>
                        )
                      )}
                      <sup>{ subIndice }</sup>
                      <JuzgadosByllaveProceso llaveProceso={carpeta.llaveProceso } />
                    </Card>

                  );
                }
              )}
          </Suspense>
        </div>
        <div className={ layout.left }>
          {Request}
        </div>


      </div>
    </div>
  );
}
