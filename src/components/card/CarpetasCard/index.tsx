import styles from './carpetas.module.scss';
import { monCarpetaDemandado } from '#@/lib/types/demandados';
import typography from '#@/styles/fonts/typography.module.scss';
import Link from 'next/link';
import type { Route } from 'next';
export const CarpetaCard = (
  { Carpeta }: { Carpeta: monCarpetaDemandado }
) => {
  const { llaveProceso, idProceso, Demandado, Codeudor, _id } = Carpeta;
  const { Nombre, Tel, Direccion, Email } = Demandado;
  const { Fijo, Celular } = Tel;
  return (
    <div className={ styles.container } key={_id.toString()}>
      <div className={ styles.card }>
        <h1 className={ `${ typography.titleMedium } ${ styles.title }` }>{ Nombre }</h1>
        <Link className={styles.button} href={`/Procesos/${llaveProceso}/${idProceso}` as Route}>
          <span className={`material-symbols-outlined ${styles.icon}`}>folder_open</span>
        </Link>
        <p className={ styles.content }>{ Direccion }</p>
        {Celular && (
          <Link className={styles.button} href={`tel:${Celular}`}>
            <span className={`material-symbols-outlined ${styles.icon}`}>phone_iphone</span>
          </Link>
        ) }
        { Email && (
          <Link className={ styles.button } href={ `mailto:${ Email }` }>
            <span className={`material-symbols-outlined ${styles.icon}`}>forward_to_inbox</span>
          </Link>
        )}
        {Fijo && (
          <Link className={styles.button} href={`tel:${Fijo}`}>
            <span className={`material-symbols-outlined ${styles.icon}`}>call</span>
          </Link>
        )}
      </div>
    </div>
  );
};