import { Card } from '#@/components/card/card';
import { getCarpetas, getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import {
  getActuacionesByidProceso,
  getConsultaNumeroRadicion,
} from '#@/lib/RamaJudicial';
import { Fragment, Suspense } from 'react';
import typography from '#@/styles/fonts/typography.module.scss';
import SearchOutputListSkeleton from '#@/components/search/SearchProcesosOutputSkeleton';
import layout from '#@/styles/scss/layout.module.scss';
import { fixDemandado } from '#@/lib/fix';
import { ActuacionCard } from '#@/components/card/ActuacionesCard';
import { ProcesoCard } from '#@/components/card/ProcesosCard';
import { CarpetaCard } from '#@/components/card/CarpetasCard';

async function Acts(
  { idProceso }: { idProceso: number }
) {
  const actuaciones = await getActuacionesByidProceso(
    { idProceso: idProceso }
  );
  return (
    <>
      {actuaciones.acts &&
        actuaciones.acts.map(
          (
            act, i, arr
          ) => {
            const { idRegActuacion } = act;
            return <ActuacionCard Actuacion={act} key={idRegActuacion} />;
          }
        )}
    </>
  );
}

export default async function PageProcesosLeftllaveProceso(
  {
    params,
  }: {
  params: {
    llaveProceso: string;
  };
}
) {
  const Carpetas = getCarpetasByllaveProceso(
    {
      llaveProceso: params.llaveProceso,
    }
  );
  const Procesos = getConsultaNumeroRadicion(
    {
      llaveProceso: params.llaveProceso,
    }
  );
  // Wait for the promises to resolve
  const [
    carpetas,
    procesos
  ] = await Promise.all(
    [
      Carpetas,
      Procesos
    ]
  );
  const cantidadProcesos = procesos.length;
  const cantidadCarpetas = carpetas.length;
  const carpetasMap = carpetas.map(
    (
      carpeta
    ) => (
      <Fragment key={carpeta._id.toString()}>
        <CarpetaCard Carpeta={carpeta} />
      </Fragment>
    )
  );
  const procesosMap = procesos.map(
    (
      proceso
    ) => (
      <Fragment key={proceso.idProceso}>
        <Acts idProceso={proceso.idProceso} />
      </Fragment>
    )
  );
  switch (cantidadProcesos) {
  case 0:
    return (
      <>
        {carpetas.map(
          (
            carpeta
          ) => (
            <CarpetaCard Carpeta={carpeta} key={carpeta._id.toString()} />
          )
        )}
      </>
    );
  case 1:
    return (
      <>
        <Suspense fallback={<p>loading</p>}>{procesosMap}</Suspense>
      </>
    );
  case 2:
    return procesosMap;
  default:
    return procesosMap ?? carpetasMap;
  }
}
