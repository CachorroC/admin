import { fixFechas } from '#@/lib/fix';
import styles from './actuaciones.module.css';
import typography from '#@/styles/fonts/typography.module.css';
import Link from 'next/link';
import { Actuacion } from '#@/lib/types/actuaciones';

export const ActuacionCard = (
  {
    act
  }: {
  act: Actuacion;
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
  } = act;

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
          href={`/Notas/${ llaveProceso }/NuevaNota`}
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
    actuaciones
  }: {
  actuaciones: Actuacion[];
} 
) => {
  return (
    <>
      {actuaciones.map(
        (
          act, ind, arr 
        ) => {
          const {
            idRegActuacion 
          } = act;

          return (
            <ActuacionCard
              act={act}
              key={idRegActuacion}
            />
          );
        } 
      )}
    </>
  );
};
