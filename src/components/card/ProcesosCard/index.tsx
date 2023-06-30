import { fixDemandado } from '#@/lib/fix';
import { intProceso } from '#@/lib/types/procesos';
import Link from 'next/link';
import styles from './procesos.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';
export const ProcesoCard = (
  { proceso }: { proceso: intProceso }
) => {
  const { idProceso, llaveProceso, sujetosProcesales, despacho, esPrivado } = proceso;
  if (esPrivado){
    return null;
  }
  const juzgado = despacho
    ? despacho.replace(
      / /g,
      '-'
    ).toLocaleLowerCase().slice(
      0,
      -1
    )
    : null;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={`${typography.titleLarge} ${styles.title}`}>{fixDemandado(
          sujetosProcesales
        ) }</h1>
        <Link href={`/Procesos/${llaveProceso}/${idProceso}` }>
          <span className='material-symbols.outlined'>open_in_new</span>
        </Link>
        <p>{ despacho }</p>
        {juzgado && (
          <Link
            href={`https://ramajudicial.gov.co/web/${juzgado.replaceAll(
              'á',
              'a'
            )}`}
          >
            {' '}
            <p className={`${typography.bodySmall} ${styles.content}`}>
              {juzgado.replaceAll(
                'á',
                'a'
              )}
            </p>
          </Link>
        )}
      </div>
    </div>
  );
};
