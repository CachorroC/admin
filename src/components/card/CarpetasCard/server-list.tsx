import { IntCarpeta,
         MonCarpeta,
         NombreCompleto } from '#@/lib/types/demandados';

import { fixFechas } from '#@/lib/fix';
import styles from './carpetas.module.scss';
import type { Route } from 'next';
import { Fragment,
         ReactNode,
         Suspense } from 'react';
import { Loader } from '#@/components/Loader';
import { fetchLastActuaciones, getActuaciones } from '#@/lib/Actuaciones';
import typography from '#@/styles/fonts/typography.module.scss';
import { DemandaContainer } from '.';
import Link from 'next/link';
import { getCarpetas } from '#@/lib/Carpetas';
import { NombreComponent } from '../Nombre';

async function Fecha(
                {
                  idProceso,
                  index
                }: {
  idProceso: number[];
  index: number;
}
) {
  const idk = [];

  for ( let i = 0; i < idProceso.length; i++ ) {
    const idP = idProceso[ i ];

    const actuaciones = await fetchLastActuaciones(
      idP
    );

    if ( idP === 0 || !actuaciones.ok ) {
      return null;
    }
    const lastAct = actuaciones.value;

    if ( lastAct === null ) {
      return null;
    }

    idk.push(
      <div className={styles.date}>
        <p className={typography.labelSmall}>
          {`se revisó por última vez el ${ fixFechas(
            lastAct.lastFetch
          ) }`}
        </p>
        { lastAct.ultimaActuacion && (
          <p>{  `eltima actuacion el  ${ fixFechas(
            lastAct.ultimaActuacion.fechaActuacion
          ) }`}</p>
        )}
      </div>
    );
  }

  return ( <>{idk}</> );

}

export async function ListCardCarpetasNFechasServer() {
  const carpetas = await getCarpetas();

  const sortedCarpetas = [
    ...carpetas
  ].sort(
    (
      a, b
    ) => {
      if (
        !a.ultimaActuacion
        || a.ultimaActuacion.fechaActuacion
          === undefined
      ) {
        return 1;
      }

      if (
        !b.ultimaActuacion
        || b.ultimaActuacion.fechaActuacion
          === undefined
      ) {
        return -1;
      }
      const x = a.ultimaActuacion.fechaActuacion;
      const y = b.ultimaActuacion.fechaActuacion;

      if ( x < y ) {
        return 1;
      }

      if ( x > y ) {
        return -1;
      }

      return 0;
    }
  );

  return (
    <>
      {carpetas.map(
        (
          carpeta, index, arr
        ) => {
          return (
            <CarpetaCard
              Carpeta={ carpeta }
              key={ carpeta._id }
            >
              <NombreComponent deudor={carpeta.deudor}/>
              <Suspense fallback={ <Loader /> }>
                <Fecha
                  idProceso={ carpeta.idProceso }
                  index={ index } />
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
  Carpeta: MonCarpeta;
  children: ReactNode;
}
) => {
  const {
    llaveProceso,
    idProceso,
    deudor,
    _id,
    demanda
  } = Carpeta;

  const {
    tel, direccion, email
  } = deudor;
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
      <DemandaContainer demanda={demanda} />
      <div
        className={styles.container}
        key={_id}
      >
        <div className={styles.cardInactive}>
          <NombreComponent deudor={deudor} />
          <p className={styles.content}>
            {direccion ?? 'sin direccion'}
          </p>
          <div className={styles.links}>
            <Link
              className={styles.button}
              href={href}
            >
              <span
                className={`material-symbols-outlined ${ styles.icon }`}
              >
                folder_open
              </span>
              <span
                className={styles.tooltiptext}
              >
                Abrir
              </span>
            </Link>
            {children}
            {tel && tel.celular && (
              <Link
                className={styles.button}
                href={`tel:${ tel.celular }`}
              >
                <span
                  className={`material-symbols-outlined ${ styles.icon }`}
                >
                  phone_iphone
                </span>
                <span
                  className={styles.tooltiptext}
                >
                  Numero Celular
                </span>
              </Link>
            )}
            {email && (
              <Link
                className={styles.button}
                href={`mailto:${ email }`}
              >
                <span
                  className={`material-symbols-outlined ${ styles.icon }`}
                >
                  forward_to_inbox
                </span>
                <span
                  className={styles.tooltiptext}
                >
                  Email
                </span>
              </Link>
            )}
            {tel && tel.fijo && (
              <Link
                className={styles.button}
                href={`tel:${ tel.fijo }`}
              >
                <span
                  className={`material-symbols-outlined ${ styles.icon }`}
                >
                  call
                </span>
                <span
                  className={styles.tooltiptext}
                >
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
