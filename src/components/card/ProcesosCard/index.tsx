import { fixDemandado } from '#@/lib/fix';
import { intProceso } from '#@/lib/types/procesos';
import Link from 'next/link';
import styles from './procesos.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';
import type { Route } from 'next';

export const ProcesoCard = ({proceso,}: {
  proceso: intProceso;
}) => {
  const {
    idProceso,
    llaveProceso,
    sujetosProcesales,
    despacho,
    esPrivado,
  } = proceso;
  if (esPrivado) {
    return null;
  }

  const juzgado = despacho
    ? despacho
      .replace (
        / /g,
        '-'
      )
      .toLocaleLowerCase ()
      .slice (
        0,
        -1
      )
    : null;
  return (
    <div className={styles.container}>
      {' '}
      <div className={styles.card}>
        {' '}
        <h1
          className={`${ typography.titleLarge } ${ styles.title }`}>
          {' '}
          {fixDemandado (sujetosProcesales)}{' '}
        </h1>{' '}
        <Link
          className={styles.button}
          href={
            `/Procesos/${ llaveProceso }/${ idProceso }` as Route
          }>
          {' '}
          <span
            className={`material-symbols-outlined ${ styles.icon }`}>
            {' '}
            open_in_new{' '}
          </span>{' '}
        </Link>{' '}
        <p
          className={`${ typography.bodyMedium } ${ styles.content }`}>
          {' '}
          {despacho}{' '}
        </p>{' '}
        {juzgado && (
          <Link
            className={styles.button}
            href={`https://ramajudicial.gov.co/web/${ juzgado.replaceAll (
              'á',
              'a'
            ) }`}>
            {' '}
            <p className={typography.bodySmall}>
              {' '}
              {juzgado.replaceAll (
                'á',
                'a'
              )}{' '}
            </p>{' '}
          </Link>
        )}{' '}
      </div>{' '}
    </div>
  );
};
