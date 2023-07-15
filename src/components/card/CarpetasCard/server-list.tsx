import { IntCarpeta, MonCarpeta } from '#@/lib/types/demandados';

import { fixFechas } from '#@/lib/fix';
import styles from './carpetas.module.scss';
import type { Route } from 'next';
import { Fragment, ReactNode, Suspense } from 'react';
import { Loader } from '#@/components/Loader';
import { getActuaciones } from '#@/lib/Actuaciones';
import typography from '#@/styles/fonts/typography.module.scss';
import { DemandaContainer } from '.';
import Link from 'next/link';
import { getCarpetas,
         getCarpetasByllaveProceso,
         getCarpetasNew } from '#@/lib/Carpetas';
import { NombreCompleto } from '../../../lib/types/carpetas';
import { NombreComponent } from '../Nombre';

async function Fecha(
  {
    idProceso,
    index
  }: {
  idProceso: number;
  index: number;
}
) {
  const actuaciones = await getActuaciones(
    idProceso,
    index
  );

  if ( idProceso === 0 || actuaciones.length === 0 ) {
    return null;
  }

  return (
    <div className={styles.date}>
      <p className={typography.labelSmall}>
        {fixFechas(
          actuaciones[ 0 ].fechaActuacion
        )}
      </p>
    </div>
  );
}

export async function ListCardCarpetasNFechasServer() {
  const carpetas = await getCarpetas();

  const sortedCarpetas = [
    ...carpetas
  ].sort(
    (
      a, b
    ) => {
      if ( !a.ultimaActuacion || a.ultimaActuacion.fechaActuacion === undefined ) {
        return 1;
      }

      if ( !b.ultimaActuacion || b.ultimaActuacion.fechaActuacion === undefined ) {
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
      { sortedCarpetas.map(
        (
          carpeta, index, arr
        ) => {
          const newName = new NombreCompleto(
            {
              PrimerNombre   : carpeta.Deudor.PrimerNombre,
              PrimerApellido : carpeta.Deudor.PrimerApellido,
              SegundoNombre  : carpeta.Deudor.SegundoNombre,
              SegundoApellido: carpeta.Deudor.SegundoApellido
            }
          );

          return (
            <CarpetaCard
              Carpeta={carpeta}
              key={ carpeta.id }>
              <h1>{ newName.Nombre }</h1>
              <Suspense fallback={<Loader />}>
                <Fecha
                  idProceso={carpeta.idProceso}
                  index={index}
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
  Carpeta: MonCarpeta;
  children: ReactNode;
}
) => {
  const {
    llaveProceso, idProceso, Deudor, id, Demanda
  } = Carpeta;

  const {
    Tel, Direccion, Email
  } = Deudor;
  const path = '/Procesos';

  const href = (
    llaveProceso
      ? idProceso
        ? `${ path }/${ llaveProceso }/${ idProceso }`
        : `${ path }/${ llaveProceso }`
      : `${ path }`
  ) as Route;

  return (
    <Fragment key={id}>
      <DemandaContainer demanda={Demanda} />
      <div
        className={styles.container}
        key={id}>
        <div className={styles.cardInactive}>
          <NombreComponent Deudor={Deudor} />
          <p className={styles.content}>{Direccion ?? 'sin direccion'}</p>
          <div className={styles.links}>
            <Link
              className={styles.button}
              href={href}>
              <span className={`material-symbols-outlined ${ styles.icon }`}>
                folder_open
              </span>
              <span className={styles.tooltiptext}>Abrir</span>
            </Link>
            {children}
            {Tel && Tel.Celular && (
              <Link
                className={styles.button}
                href={`tel:${ Tel.Celular }`}>
                <span className={`material-symbols-outlined ${ styles.icon }`}>
                  phone_iphone
                </span>
                <span className={styles.tooltiptext}>Numero Celular</span>
              </Link>
            )}
            {Email && (
              <Link
                className={styles.button}
                href={`mailto:${ Email }`}>
                <span className={`material-symbols-outlined ${ styles.icon }`}>
                  forward_to_inbox
                </span>
                <span className={styles.tooltiptext}>Email</span>
              </Link>
            )}
            {Tel && Tel.Fijo && (
              <Link
                className={styles.button}
                href={`tel:${ Tel.Fijo }`}>
                <span className={`material-symbols-outlined ${ styles.icon }`}>
                  call
                </span>
                <span className={styles.tooltiptext}>Numero Fijo</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
