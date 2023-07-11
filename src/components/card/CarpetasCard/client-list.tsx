import {intFecha,
  monCarpetaDemandado} from '#@/lib/types/demandados';

import { fixFechas } from '#@/lib/fix';
import styles from './carpetas.module.scss';
import type { Route } from 'next';
import {Fragment,
  ReactNode,
  Suspense} from 'react';
import { Loader } from '#@/components/Loader';
import { getActuaciones } from '#@/lib/Actuaciones';
import typography from '#@/styles/fonts/typography.module.scss';
import { DemandaContainer } from '.';
import Link from 'next/link';
import {getCarpetaById,
  getCarpetas,
  getCarpetasByllaveProceso} from '#@/lib/Carpetas';

async function Fecha(
  {
    idProceso
  }: {
  idProceso: number;
}
) {
  const actuaciones = await getActuaciones (
    idProceso
  );
  if (
    idProceso === 0 ||
    actuaciones.length === 0
  ) {
    return null;
  }
  return (
    <div className={styles.date}>
      <p className={typography.labelSmall}>
        {fixFechas (
          actuaciones[ 0 ].fechaActuacion
        )}
      </p>
    </div>
  );
}

export async function ListCardCarpetasNFechasServer() {
  const carpetas = await getCarpetas ();

  return (
    <>
      {carpetas.map (
        (
          carpeta, index, arr
        ) => {
          return (
            <CarpetaCard
              Carpeta={carpeta}
              key={carpeta._id}>
              <Suspense fallback={<Loader />}>
                <Fecha
                  idProceso={carpeta.idProceso}
                />
              </Suspense>
            </CarpetaCard>
          );
        }
      )}
    </>
  );
}

const CarpetaCard = async (
  {
    Carpeta,
    children
  }: {
  Carpeta: monCarpetaDemandado;
  children: ReactNode;
}
) => {
  const {
    llaveProceso,
    idProceso,
    Deudor,
    _id,
    Demanda
  } = Carpeta;

  const {
    Nombre, Tel, Direccion, Email 
  } =
    Deudor;

  const path = '/Procesos';

  const href = (
    llaveProceso
      ? idProceso
        ? `${ path }/${ llaveProceso }/${ idProceso }`
        : `${ path }/${ llaveProceso }`
      : `${ path }`
  ) as Route;

  return (
    <Fragment key={_id}>
      <DemandaContainer demanda={Demanda} />
      <div
        className={styles.container}
        key={_id}>
        <div className={styles.cardInactive}>
          <h1
            className={`${ typography.titleMedium } ${ styles.title }`}>
            {Nombre}
          </h1>
          <p className={styles.content}>
            {Direccion ?? 'sin direccion'}
          </p>
          <div className={styles.links}>
            <Link
              className={styles.button}
              href={href}>
              <span
                className={`material-symbols-outlined ${ styles.icon }`}>
                folder_open
              </span>
              <span
                className={styles.tooltiptext}>
                Abrir
              </span>
            </Link>
            {children}
            {Tel && Tel.Celular && (
              <Link
                className={styles.button}
                href={`tel:${ Tel.Celular }`}>
                <span
                  className={`material-symbols-outlined ${ styles.icon }`}>
                  phone_iphone
                </span>
                <span
                  className={styles.tooltiptext}>
                  Numero Celular
                </span>
              </Link>
            )}
            {Email && (
              <Link
                className={styles.button}
                href={`mailto:${ Email }`}>
                <span
                  className={`material-symbols-outlined ${ styles.icon }`}>
                  forward_to_inbox
                </span>
                <span
                  className={styles.tooltiptext}>
                  Email
                </span>
              </Link>
            )}
            {Tel && Tel.Fijo && (
              <Link
                className={styles.button}
                href={`tel:${ Tel.Fijo }`}>
                <span
                  className={`material-symbols-outlined ${ styles.icon }`}>
                  call
                </span>
                <span
                  className={styles.tooltiptext}>
                  Numero Fijo
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
