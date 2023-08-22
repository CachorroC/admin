import { getActuaciones } from '#@/lib/Actuaciones';
import { fixFechas, sleep } from '#@/lib/fix';
import { MonCarpeta } from '#@/lib/types/carpeta';
import typography from '#@/styles/fonts/typography.module.css';
import { Fragment } from 'react';
import styles from '#@/components/Actuacion/actuacion.module.scss';

export const FechaActuacionComponent = async (
  {
    idProceso,
    index
  }: {
  idProceso: number;
  index: number;
}
) => {

  const awaitTime =  index > 250
    ? index /2 * 1000
    : index * 1000;
  await sleep(
    awaitTime
  );

  const actuaciones = await getActuaciones(
    {
      idProceso: idProceso,
      index    : index
    }
  );

  if ( !actuaciones || actuaciones.length === 0 ) {
    return null;
  }

  const ultimaActuacion = actuaciones[ 0 ];

  return (
    <div className={styles.container}>
      <div className={styles.date}>
        {ultimaActuacion.actuacion && (
          <h5
            className={` ${ styles.actuacion } ${ typography.titleSmall }`}
          >
            {ultimaActuacion.actuacion}
          </h5>
        )}
        {ultimaActuacion.anotacion && (
          <p
            className={` ${ styles.anotacion } ${ typography.labelSmall }`}
          >
            {ultimaActuacion.anotacion}
          </p>
        )}
        <sub className={styles.fecha}>
          {`actuacion registrada el: ${ fixFechas(
            ultimaActuacion.fechaActuacion
          ) }`}
        </sub>
      </div>
    </div>
  );
};
