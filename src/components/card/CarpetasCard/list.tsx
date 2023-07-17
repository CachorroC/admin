import 'server-only';
import { getCarpetas } from '#@/lib/Carpetas';
import { fixFechas } from '#@/lib/fix';
import type { Demanda, IntCarpeta, MonCarpeta } from '#@/lib/types/demandados';
import Link from 'next/link';
import { Fragment, ReactNode, Suspense, useEffect, useState } from 'react';
import styles from './carpetas.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';
import { getActuaciones } from '#@/lib/Actuaciones';
import { Loader } from '#@/components/Loader';
import { Card } from '#@/components/card/card-with-carpeta';

const Fecha = async ({
  idProceso,
  index
}: {
  idProceso: number;
  index: number;
}) => {
  const acts = await getActuaciones(idProceso, index);

  if (acts.length === 0) {
    return null;
  }

  return <div className={styles.date}>{fixFechas(acts[0].fechaActuacion)}</div>;
};

export const DemandaContainer = ({ demanda }: { demanda: Demanda }) => {
  const {
    Departamento,
    Municipio,
    VencimientoPagare,
    EntregadeGarantiasAbogado,
    Radicado,
    CapitalAdeudado,
    Proceso,
    Ubicacion,
    Juzgado,
    Obligacion
  } = demanda;

  return (
    <div className={styles.section}>
      <h1 className={typography.headlineMedium}>{Radicado}</h1>
      <h2
        className={
          typography.titleMedium
        }>{`${Departamento}: ${Municipio}`}</h2>
      {VencimientoPagare && (
        <p className={typography.labelMedium}>{fixFechas(VencimientoPagare)}</p>
      )}
      {EntregadeGarantiasAbogado && (
        <p className={typography.labelSmall}>
          {fixFechas(EntregadeGarantiasAbogado)}
        </p>
      )}
      {CapitalAdeudado && (
        <p className={typography.labelSmall}>{CapitalAdeudado}</p>
      )}
    </div>
  );
};

export async function ListCardCarpetasNFechas() {
  const carpetas = await getCarpetas();

  const sortedCarpetas = [...carpetas].sort((a, b) => {
    if (!a.ultimaActuacion || a.ultimaActuacion.fechaActuacion === undefined) {
      return 1;
    }

    if (!b.ultimaActuacion || b.ultimaActuacion.fechaActuacion === undefined) {
      return -1;
    }
    const x = a.ultimaActuacion.fechaActuacion;
    const y = b.ultimaActuacion.fechaActuacion;

    if (x < y) {
      return 1;
    }

    if (x > y) {
      return -1;
    }

    return 0;
  });

  return (
    <>
      {sortedCarpetas.map((carpeta, index, arr) => {
        return (
          <Card
            key={carpeta._id}
            path={'/Procesos'}
            carpeta={carpeta}>
            <Suspense fallback={<Loader />}>
              <Fecha
                idProceso={carpeta.idProceso}
                index={index}
              />
            </Suspense>
          </Card>
        );
      })}
    </>
  );
}
