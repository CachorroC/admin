import styles from './carpetas.module.scss';
import type { Demanda,
              IntCarpeta,
              MonCarpeta } from '#@/lib/types/carpeta';
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
    departamento,
    ciudad,
    radicado,
    juzgado
  } = demanda;

  return (
    <div className={styles.section}>
      <h1 className={typography.headlineMedium}>
        {radicado}
      </h1>
      <h2
        className={typography.titleMedium}
      >{`${ departamento }: ${ ciudad }`}</h2>
      {juzgado.map(
        (
          despacho, index
        ) => {
          switch ( index ) {
            case 0:
              return (
                <Link
                  href={juzgado[ 0 ].url as Route}
                >
                  <span className='material-symbols-outlined'>
                  enable
                  </span>
                  <sub
                    className={
                      typography.displaySmall
                    }
                  >
                    {juzgado[ 0 ].id}
                  </sub>
                  <p
                    className={
                      typography.labelSmall
                    }
                  >
                    {`Juzgado de origen: ${ juzgado[ 0 ].tipo }`}
                  </p>
                </Link>
              );
            case 1:
              return (
                <Link
                  href={juzgado[ 1 ].url as Route}
                >
                  <span className='material-symbols-outlined'>
                  trip_origin
                  </span>
                  <sub
                    className={
                      typography.displaySmall
                    }
                  >
                    {juzgado[ 1 ].id}
                  </sub>
                  <p
                    className={
                      typography.labelSmall
                    }
                  >
                    {`Juzgado de origen: ${ juzgado[ 1 ].tipo }`}
                  </p>
                </Link>
              );
          }

          return null;
        }
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
    llaveProceso, idProceso, _id
  }
    = carpeta;

  const {
    tel, direccion, email
  }
    = carpeta.deudor;
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
      <DemandaContainer
        demanda={carpeta.demanda}
      />
      <div
        className={styles.container}
        key={_id}
      >
        <div className={styles.cardInactive}>
          <NombreComponent
            deudor={carpeta.deudor}
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
            )}
            {carpeta.vencimientoPagare && (
              <p
                className={typography.labelMedium}
              >
                {fixFechas(
                  carpeta.vencimientoPagare
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
            )}
            {carpeta.entregaGarantiasAbogado && (
              <p
                className={typography.labelSmall}
              >
                {fixFechas(
                  carpeta.entregaGarantiasAbogado
                )}
              </p>
            )}
            <p>
              {carpeta.capitalAdeudado
                && fixMoney(
                  {
                    valor: carpeta.capitalAdeudado 
                  }
                )}
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
