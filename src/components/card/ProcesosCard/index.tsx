import { fixDemandado } from '#@/lib/fix';
import { intProceso } from '#@/lib/types/procesos';
import styles from './procesos.module.scss';
export const ProcesoCard = (
  { proceso }: { proceso: intProceso }
) => {
  const {idProceso, llaveProceso, sujetosProcesales, despacho} = proceso;
  return (
    <div className={ styles.container }>
      <div className={ styles.card }>
        <h1 className={styles.nombres}>{fixDemandado(
          sujetosProcesales
        )}</h1>
      </div>

    </div>
  );
};