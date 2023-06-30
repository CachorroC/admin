import { fixFechas } from '#@/lib/fix';
import { intActuacion } from '#@/lib/types/procesos';
import styles from './actuaciones.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';

export const ActuacionCard = (
  { Actuacion }: { Actuacion: intActuacion }
) => {
  const {
    idRegActuacion,
    llaveProceso,
    consActuacion,
    fechaActuacion,
    actuacion,
    anotacion,
    fechaInicial,
    fechaFinal,
    fechaRegistro,
    codRegla,
    conDocumentos,
    cant,
  } = Actuacion;
  return (
    <div className={ styles.container } key={ idRegActuacion }>
      <div className={ styles.card }>
        <h1 className={typography.headlineMedium}>{ actuacion }</h1>
        { anotacion && ( <p className={typography.bodyMedium}>{ anotacion }</p> ) }
        <sub className={typography.labelSmall}>{ `${ consActuacion } de ${ cant }` }</sub>
        <sup className={typography.labelMedium}>{fixFechas(
          fechaActuacion
        )}</sup>

      </div>

    </div>
  );
};


export const ActuacionesList = (
  { Actuaciones }: { Actuaciones: intActuacion[] } 
) => (
  <>
    { Actuaciones.map(
      (
        Actuacion, ind, arr 
      ) => {
        const { idRegActuacion } = Actuacion;
        return (
          <ActuacionCard Actuacion={ Actuacion } key={idRegActuacion} />
        );
      }
    )}
  </>
);