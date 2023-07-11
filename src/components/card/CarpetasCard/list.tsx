import 'server-only';
import { getCarpetaById, getCarpetas } from '#@/lib/Carpetas';
import { fixFechas } from '#@/lib/fix';
import { intDemanda, monCarpetaDemandado } from '#@/lib/types/demandados';
import Link from 'next/link';
import { Fragment, ReactNode, Suspense, useEffect, useState } from 'react';
import styles from './carpetas.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';
import { getActuaciones } from '#@/lib/Actuaciones';
import { Loader } from '#@/components/Loader';
import type { Route } from 'next';
import { CarpetaCard } from '#@/components/card/CarpetasCard';

const Fecha = async (
  {
    idProceso
  }:{idProceso: number}
) => {
  const acts = await getActuaciones (
    idProceso
  );
  if ( acts.length === 0 ) {
    return null;
  }
  return (
    <div className={ styles.date }>
      {fixFechas (
        acts[ 0 ].fechaActuacion
      )}
    </div>
  );
};

export const DemandaContainer = (
  {
    demanda
  }: {
  demanda: intDemanda;
}
) => {
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
      <h1 className={typography.headlineMedium}>
        {Radicado}
      </h1>
      <h2
        className={
          typography.titleMedium
        }>{`${ Departamento }: ${ Municipio }`}</h2>
      {VencimientoPagare && (
        <p className={typography.labelMedium}>
          {fixFechas (
            VencimientoPagare
          )}
        </p>
      )}
      {EntregadeGarantiasAbogado && (
        <p className={typography.labelSmall}>
          {fixFechas (
            EntregadeGarantiasAbogado
          )}
        </p>
      )}
      {CapitalAdeudado && (
        <p className={typography.labelSmall}>
          {CapitalAdeudado}
        </p>
      )}
    </div>
  );
};

export async function ListCardCarpetasNFechas () {
  const carpetas = await getCarpetas ();
  return (
    <>
      { carpetas.map (
        (
          carpeta, index, arr
        ) => {
          return (
            <CarpetaCard Carpeta={ carpeta } key={ carpeta._id } >
              <Suspense fallback={<Loader />}>
                <Fecha key={carpeta._id + 'fecha'} idProceso={carpeta.idProceso} />
              </Suspense>
            </CarpetaCard>
          );
        }
      )}
    </>
  );

};