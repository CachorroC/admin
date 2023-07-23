import styles from './carpetas.module.scss';
import type { Demanda,
              IntCarpeta,
              MonCarpeta } from '#@/lib/types/demandados';
import typography from '#@/styles/fonts/typography.module.scss';
import Link from 'next/link';
import type { Route } from 'next';
import { fixFechas, fixMoney } from '#@/lib/fix';
import { Loader } from '#@/components/Loader';
import { ReactNode, Fragment } from 'react';
import { Accordion } from '#@/components/Accordion';
import { NombreComponent } from '../Nombre';


export const DemandaContainer = (
  {
    demanda
  }: {
  demanda: Demanda;
}
) => {
  const {
    departamento, municipio,
    radicado
  } = demanda;

  return (
    <div className={styles.section}>
      <h1 className={typography.headlineMedium}>
        {radicado}
      </h1>
      <h2
        className={typography.titleMedium}
      >{`${ departamento }: ${ municipio }`}</h2>


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
    _id,
    deudor, vencimientoPagare, entregaGarantiasAbogado, demanda, capitalAdeudado
  } = carpeta;

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
          <NombreComponent
            Deudor={carpeta.deudor}
          />

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
            <Accordion>{children}</Accordion>
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
            ) }
            {vencimientoPagare && (
              <p className={typography.labelMedium}>
                {fixFechas(
                  vencimientoPagare
                )}
              </p>
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
            ) }
            {entregaGarantiasAbogado && (
              <p className={typography.labelSmall}>
                {fixFechas(
                  entregaGarantiasAbogado
                )}
              </p>
            )}
            <p>
              {capitalAdeudado
          && fixMoney(
            {
              valor: capitalAdeudado
            }
          )}
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
