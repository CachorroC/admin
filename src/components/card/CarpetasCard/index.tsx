'use client';
import styles from './carpetas.module.scss';
import { monCarpetaDemandado } from '#@/lib/types/demandados';
import typography from '#@/styles/fonts/typography.module.scss';
import Link from 'next/link';
import type { Route } from 'next';
import { usePathname } from 'next/navigation';

export const CarpetaCard = (
  { Carpeta }: { Carpeta: monCarpetaDemandado }
) => {

  const pathname = usePathname();


  const { llaveProceso, idProceso, Demandado, Codeudor, _id } = Carpeta;
  const { Nombre, Tel, Direccion, Email } = Demandado;
  const { Fijo, Celular } = Tel;
  const path = '/Procesos';
  const href = (
    llaveProceso
      ? idProceso
        ? `${path}/${llaveProceso}/${idProceso}`
        : `${path}/${llaveProceso}`
      : `${path}`
  ) as Route;
  const isActive =
    pathname === href ||
    pathname === `${path}/${llaveProceso}/${idProceso}` ||
    pathname === `${path}/${llaveProceso}` ||
    pathname === path;
  return (
    <div className={styles.container} key={_id}>
      <div className={isActive
        ? styles.cardActive
        : styles.cardInactive}>
        <h1 className={`${typography.titleMedium} ${styles.title}`}>
          {Nombre}
        </h1>
        <p className={ styles.content }>{ Direccion }</p>
        <div className={ styles.links }>

          <Link
            className={styles.button}
            href={href}
          >
            <span className={`material-symbols-outlined ${styles.icon}`}>
            folder_open
            </span>
            <span className={styles.tooltiptext}>Abrir</span>
          </Link>

          {Celular && (
            <Link className={styles.button} href={`tel:${Celular}`}>
              <span className={`material-symbols-outlined ${styles.icon}`}>
              phone_iphone
              </span>
              <span className={styles.tooltiptext}>Numero Celular</span>
            </Link>
          )}
          {Email && (
            <Link className={styles.button} href={`mailto:${Email}`}>
              <span className={`material-symbols-outlined ${styles.icon}`}>
              forward_to_inbox
              </span>
              <span className={styles.tooltiptext}>Email</span>
            </Link>
          )}
          {Fijo && (
            <Link className={styles.button} href={`tel:${Fijo}`}>
              <span className={`material-symbols-outlined ${styles.icon}`}>
              call
              </span>
              <span className={styles.tooltiptext}>Numero Fijo</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
