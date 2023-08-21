import { fixFechas } from '#@/lib/fix';
import { intActuacion } from '#@/lib/types/procesos';
import styles from './actuaciones.module.css';
import typography from '#@/styles/fonts/typography.module.css';
import Link from 'next/link';

export const ActuacionCard = (
  {
    Actuacion
  }: {
  Actuacion: intActuacion;
} 
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
    cant
  } = Actuacion;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1
          className={`${ typography.titleMedium } ${ styles.title }`}
        >
          {actuacion.replace(
            /\s+/g, ' ' 
          )}
        </h1>
        {anotacion && (
          <p className={typography.bodyMedium}>
            {anotacion.replace(
              /\s+/g, ' ' 
            )}
          </p>
        )}
        <sub
          className={`${ typography.labelSmall } ${ styles.sub }`}
        >{`${ consActuacion } de ${ cant }`}</sub>
        <Link
          href={`/Notas/NuevaNota/${ llaveProceso }`}
          className={styles.button}
        >
          <span
            className={`material-symbols-outlined ${ styles.icon }`}
          >
            note_add
          </span>
        </Link>
        <sup
          className={`${ typography.labelMedium } ${ styles.date }`}
        >
          {fixFechas(
            fechaActuacion 
          )}
        </sup>
      </div>
    </div>
  );
};

export const ActuacionesList = (
  {
    Actuaciones
  }: {
  Actuaciones: intActuacion[];
} 
) => {
  return (
    <>
      {Actuaciones.map(
        (
          Actuacion, ind, arr 
        ) => {
          const {
            idRegActuacion 
          } = Actuacion;

          return (
            <ActuacionCard
              Actuacion={Actuacion}
              key={idRegActuacion}
            />
          );
        } 
      )}
    </>
  );
};
