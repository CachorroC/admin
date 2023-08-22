import { fixDemandado,
         fixFechas } from '#@/lib/fix';
import Link from 'next/link';
import styles from './procesos.module.css';
import typography from '#@/styles/fonts/typography.module.css';
import type { Route } from 'next';
import { Proceso } from '#@/lib/types/procesos';

export const ProcesoCard = (
  {
    proceso
  }: {
  proceso: Proceso;
} 
) => {
  if ( !proceso ) {
    return null;
  }

  const {
    idProceso,
    llaveProceso,
    sujetosProcesales,
    despacho,
    esPrivado,
    fechaUltimaActuacion
  } = proceso;

  if ( esPrivado ) {
    return null;
  }

  const juzgado = despacho
    ? despacho
          .replace(
            / /g, '-' 
          )
          .toLocaleLowerCase()
          .slice(
            0, -1 
          )
    : null;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1
          className={`${ typography.titleLarge } ${ styles.title }`}
        >
          {fixDemandado(
            sujetosProcesales 
          )}
        </h1>
        <Link
          className={styles.button}
          href={
            `/Procesos/${ llaveProceso }/${ idProceso }` as Route
          }
        >
          <span
            className={`material-symbols-outlined ${ styles.icon }`}
          >
            open_in_new
          </span>
        </Link>
        <p
          className={`${ typography.bodyMedium } ${ styles.content }`}
        >
          {despacho}
        </p>
        {fechaUltimaActuacion && (
          <sub className={styles.date}>
            {fixFechas(
              fechaUltimaActuacion 
            )}
          </sub>
        )}
        {juzgado && (
          <Link
            className={styles.button}
            href={`https://ramajudicial.gov.co/web/${ juzgado.replaceAll(
              'á',
              'a'
            ) }`}
          >
            <p className={typography.bodySmall}>
              {juzgado.replaceAll(
                'á', 'a' 
              )}
            </p>
          </Link>
        )}
      </div>
    </div>
  );
};
