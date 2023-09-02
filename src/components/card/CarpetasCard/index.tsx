import styles from './carpetas.module.css';
import type { Demanda,
              IntCarpeta,
              MonCarpeta } from '#@/lib/types/carpeta';
import typography from '#@/styles/fonts/typography.module.css';
import Link from 'next/link';
import type { Route } from 'next';
import { fixFechas, fixMoney } from '#@/lib/fix';
import { Loader } from '#@/components/Loader';
import { ReactNode, Fragment } from 'react';
import { Accordion } from '#@/components/Accordion';
import { NombreComponent } from '../../nombre';
import card from '#@/components/card/card.module.css';

export const DemandaContainer = (
  {
    demanda
  }: {
  demanda: Demanda;
}
) => {
  const {
    departamento,
    municipio,
    radicado,
    juzgados
  } = demanda;

  return (
    <div className={styles.section}>
      <h1 className={typography.headlineMedium}>
        {radicado}
      </h1>
      <h2
        className={
          typography.titleMedium
        }>{`${ departamento }: ${ municipio }`}</h2>
      {juzgados && juzgados.map(
        (
          despacho, index
        ) => {
          switch ( index ) {
                  case 0:
                    return (
                      <Link
                        href={juzgados[ 0 ].url as Route}>
                        <span className='material-symbols-outlined'>
                  enable
                        </span>
                        <sub
                          className={
                            typography.displaySmall
                          }>
                          {juzgados[ 0 ].id}
                        </sub>
                        <p
                          className={
                            typography.labelSmall
                          }>
                          {`Juzgado de origen: ${ juzgados[ 0 ].tipo }`}
                        </p>
                      </Link>
                    );
                  case 1:
                    return (
                      <Link
                        href={juzgados[ 1 ].url as Route}>
                        <span className='material-symbols-outlined'>
                  trip_origin
                        </span>
                        <sub
                          className={
                            typography.displaySmall
                          }>
                          {juzgados[ 1 ].id}
                        </sub>
                        <p
                          className={
                            typography.labelSmall
                          }>
                          {`Juzgado de origen: ${ juzgados[ 1 ].tipo }`}
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
    carpeta
  }: {
  carpeta: MonCarpeta;
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
        key={_id}>
        <div className={styles.cardInactive}>
          <NombreComponent
            deudor={carpeta.deudor}
          />

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

            {tel.celular && (
              <Link
                key={tel.celular}
                className={card.link}
                href={`tel:${ tel.celular }`}>
                <span
                  className={`material-symbols-outlined ${ styles.icon }`}>
                  phone_iphone
                </span>
                <span
                  className={styles.tooltiptext}>
                  {tel.celular.toString()}
                </span>
              </Link>
            )}
            {tel.fijo && (
              <Link
                key={tel.fijo}
                className={card.link}
                href={`tel:${ tel.fijo }`}>
                <span
                  className={`material-symbols-outlined ${ styles.icon }`}>
                  call
                </span>
                <span
                  className={styles.tooltiptext}>
                  {tel.fijo.toString()}
                </span>
              </Link>
            )}
            {carpeta.demanda
                  .vencimientoPagare && (
              <p
                className={
                  typography.labelMedium
                }>
                {fixFechas(
                  carpeta.demanda
                        .vencimientoPagare
                )}
              </p>
            )}
            {email && (
              <Link
                className={styles.button}
                href={`mailto:${ email }`}>
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

            {carpeta.demanda
                  .entregagarantiasAbogado && (
              <p
                className={typography.labelSmall}>
                {fixFechas(
                  carpeta.demanda
                        .entregagarantiasAbogado
                )}
              </p>
            )}
            <p>
              {carpeta.demanda.capitalAdeudado
                && fixMoney(
                  {
                    valor: Number(
                      carpeta.demanda
                            .capitalAdeudado
                    )
                  }
                )}
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
