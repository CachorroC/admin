import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import typography from '#@/styles/fonts/typography.module.scss';
import { Fragment, Suspense } from 'react';
import { getActuacionesByidProceso } from '#@/lib/Actuaciones';
import { Card } from '#@/components/card/card';
import SearchOutputListSkeleton from '#@/components/search/SearchProcesosOutputSkeleton';
import { CarpetaCard } from '#@/components/card/CarpetasCard';

async function Name(
  {
    llaveProceso
  }: { llaveProceso: string }
) {
  const proceso = await getCarpetasByllaveProceso(
    {
      llaveProceso: llaveProceso
    }
  );

  const nombre = proceso
    .map(
      (
        p
      ) => {
        return p.Deudor.Nombre;
      }
    )
    .toString();

  return <h3 className={typography.displayMedium}>{nombre}</h3>;
}

export default async function DefaultProcesosllaveProceso(
  {
    params: {
      llaveProceso
    }
  }: {
  params: { llaveProceso: string };
}
) {

  const Carpetas = await getCarpetasByllaveProceso(
    {
      llaveProceso: llaveProceso
    }
  );

  return (
    <>
      { Carpetas.map(
        (
          carpeta, index, arr
        ) => {
          const {
            id
          } = carpeta;

          return (
            <Fragment key={ id }>
              <Name llaveProceso={llaveProceso} />
              <CarpetaCard Carpeta={carpeta}>
                <span className='material-symbols-outlined'>star</span>
              </CarpetaCard>
            </Fragment> );
        }
      )}
    </>
  );
}
