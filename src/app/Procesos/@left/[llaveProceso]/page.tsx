import {
  getCarpetas,
  getCarpetasByllaveProceso
} from '#@/lib/Carpetas';
import {
  getActuacionesByidProceso,
  getConsultaNumeroRadicion
} from '#@/lib/RamaJudicial';
import { Fragment, Suspense } from 'react';
import { ActuacionCard } from '#@/components/card/ActuacionesCard';
import { CarpetaCard } from '#@/components/card/CarpetasCard';
import { Loader } from '#@/components/Loader/index';

async function Acts({
  idProceso
}: {
  idProceso: number;
}) {
  const actuaciones =
    await getActuacionesByidProceso({
      idProceso: idProceso
    });

  return (
    <>
      {actuaciones.acts &&
        actuaciones.acts.map((act, i, arr) => {
          const { idRegActuacion } = act;

          return (
            <ActuacionCard
              Actuacion={act}
              key={idRegActuacion}
            />
          );
        })}
    </>
  );
}

export default async function PageProcesosLeftllaveProceso({
  params
}: {
  params: {
    llaveProceso: string;
  };
}) {
  const Carpetas = getCarpetasByllaveProceso({
    llaveProceso: params.llaveProceso
  });

  const Procesos = getConsultaNumeroRadicion({
    llaveProceso: params.llaveProceso
  }); // Wait for the promises to resolve

  const [carpetas, procesos] = await Promise.all([
    Carpetas,
    Procesos
  ]);
  const cantidadProcesos = procesos.length;
  const cantidadCarpetas = carpetas.length;

  const carpetasMap = carpetas.map((carpeta) => {
    return (
      <Fragment key={carpeta._id}>
        <CarpetaCard Carpeta={carpeta}>
          <span className='material-symbols-outlined'>
            star
          </span>
        </CarpetaCard>
      </Fragment>
    );
  });

  const procesosMap = procesos.map((proceso) => {
    return (
      <Fragment key={proceso.idProceso}>
        <Acts idProceso={proceso.idProceso} />
      </Fragment>
    );
  });

  switch (cantidadProcesos) {
    case 0:
      return (
        <>
          {carpetas.map((carpeta) => {
            const txt = '';

            return (
              <CarpetaCard
                Carpeta={carpeta}
                key={carpeta._id}>
                <span className='material-symbols-outlined'>
                  star
                </span>
              </CarpetaCard>
            );
          })}
        </>
      );
    case 1:
      return (
        <>
          <Suspense fallback={<Loader />}>
            {procesosMap}
          </Suspense>
        </>
      );
    case 2:
      return procesosMap;
    default:
      return procesosMap ?? carpetasMap;
  }
}
