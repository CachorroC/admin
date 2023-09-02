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

  const {
    departamento,
    municipio,
    radicado,
    juzgados
  } = carpeta.demanda;

  const path = '/Procesos';

  const href = (
    llaveProceso
      ? idProceso
        ? `${ path }/${ llaveProceso }/${ idProceso }`
        : `${ path }/${ llaveProceso }`
      : `${ path }`
  ) as Route;

  return (

    <div
      className={styles.container}
      key={_id}>
      <div className={styles.card}>
        <NombreComponent key={_id}
          deudor={carpeta.deudor}
        />
        <div className={styles.links}>
          <Link
            className={ styles.button }
            key={_id}
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
          {juzgados && juzgados.map(
            (
              despacho, index
            ) => {
              return (
                <Link key={despacho.url}              className={card.link}
                  href={despacho.url as Route}>
                  <span className={`material-symbols-outlined ${ card.icon }`}>
                  enable
                  </span>
                  <sub
                    className={
                      typography.displaySmall
                    }>
                    {`${ despacho.id }`}
                  </sub>
                  <p
                    className={
                      typography.labelSmall
                    }>
                    {`Juzgado de origen: ${ despacho.tipo }`}
                  </p>
                </Link>
              );
            }
          )}
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
  );
};
