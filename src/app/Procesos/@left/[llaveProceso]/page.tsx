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
            const {

              idRegActuacion,

            } = act;
            return (
              <ActuacionCard Actuacion={ act } key={idRegActuacion} />
            );
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
      carpeta, indexC, arrC
    ) => {
      const { idProceso, llaveProceso, _id, Demandado } = carpeta;
      const { Tel, Nombre, Direccion, Email } = Demandado;
      const { Fijo, Celular } = Tel;
      return (
        <Card name={Nombre} path='/Procesos' key={_id.toString()}>
          <p>{Direccion}</p>
        </Card>
      );
    }
  );
  const procesosMap = procesos.map(
    (
      proceso, indexP, arrP
    ) => {
      const { idProceso, llaveProceso, sujetosProcesales, despacho, esPrivado } =
      proceso;
      if (esPrivado) {
        return null;
      }
      return (
        <Card
          name={fixDemandado(
            sujetosProcesales
          )}
          path='/Procesos'
          key={idProceso}
          despacho={despacho}
          llaveProceso={llaveProceso}
          idProceso={idProceso}
        >
          <p className={typography.bodyMedium}>{despacho}</p>
        </Card>
      );
    }
  );
  switch (cantidadProcesos) {
  case 0:
    return carpetasMap;
  case 1:
    return procesosMap ?? carpetasMap;
  case 2:
    return procesosMap;
  default:
    return procesosMap ?? carpetasMap;
  }
}
