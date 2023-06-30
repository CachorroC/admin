import { fixDemandado } from '#@/lib/fix';
import { intProceso } from '#@/lib/types/procesos';
import Link from 'next/link';
import styles from './procesos.module.scss';
export const ProcesoCard = (
  { proceso }: { proceso: intProceso }
) => {
  const { idProceso, llaveProceso, sujetosProcesales, despacho, esPrivado } = proceso;
  if (esPrivado){
    return null;
  }
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.nombres}>{fixDemandado(
          sujetosProcesales
        ) }</h1>
        <Link href={`/Procesos/${llaveProceso}/${idProceso}` }>
          <span className='material-symbols.outlined'>open_in_new</span>
        </Link>
        <p>{despacho}</p>
      </div>
    </div>
  );
};
