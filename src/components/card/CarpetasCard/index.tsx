import styles from './carpetas.module.scss';
import type { Demanda, IntCarpeta, MonCarpeta } from '#@/lib/types/demandados';
import typography from '#@/styles/fonts/typography.module.scss';
import Link from 'next/link';
import type { Route } from 'next';
import { fixFechas } from '#@/lib/fix';
import { Loader } from '#@/components/Loader';
import { ReactNode, Fragment } from 'react';
import { Accordion } from '#@/components/Accordion';
import { Notificaciones } from '#@/lib/types/demandados';

const NotificacionesContainer = (
  {
    notificaciones
  }: {
  notificaciones: Notificaciones;
} 
) => {
  const {
    AutoNotificado, Certimail, Fisico, Tipo 
  } = notificaciones;

  return (
    <Accordion>
      <div>
        <p>{fixFechas(
          AutoNotificado 
        )}</p>
      </div>
    </Accordion>
  );
};

export const DemandaContainer = (
  {
    demanda 
  }: { demanda: Demanda } 
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
      <h1 className={typography.headlineMedium}>{Radicado}</h1>
      <h2
        className={
          typography.titleMedium
        }>{`${ Departamento }: ${ Municipio }`}</h2>
      {VencimientoPagare && (
        <p className={typography.labelMedium}>{fixFechas(
          VencimientoPagare 
        )}</p>
      )}
      {EntregadeGarantiasAbogado && (
        <p className={typography.labelSmall}>
          {fixFechas(
            EntregadeGarantiasAbogado 
          )}
        </p>
      )}
      {CapitalAdeudado && (
        <p className={typography.labelSmall}>{CapitalAdeudado}</p>
      )}
    </div>
  );
};

export const CarpetaCard = (
  {
    carpeta,
    children
  }: {
  carpeta: MonCarpeta;
  children: ReactNode;
} 
) => {
  const {
    llaveProceso,
    idProceso,
    Deudor,
    id,
    Demanda,
    ultimaActuacion,
    Codeudor,
    Carpeta,
    EtapaProcesal,
    Notificaciones
  } = carpeta;

  const {
    Nombre, Tel, Direccion, Email 
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
          <h1 className={`${ typography.titleMedium } ${ styles.title }`}>
            {Nombre}
          </h1>
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
            <Accordion>{children}</Accordion>
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
            {Notificaciones && (
              <NotificacionesContainer notificaciones={Notificaciones} />
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
