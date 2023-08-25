import { getActuaciones } from '#@/lib/Actuaciones';
import { fixFechas, sleep } from '#@/lib/fix';
import { MonCarpeta } from '#@/lib/types/carpeta';
import typography from '#@/styles/fonts/typography.module.css';
import { Fragment } from 'react';
import card from '#@/components/card/card.module.scss';

export const FechaActuacionComponent = async (
  {
    carpeta,
    index
  }: {
  carpeta: MonCarpeta;
  index: number;
} 
) => {
  const awaitTime = index * 10;
  await sleep(
    awaitTime 
  );

  const today = new Date()
        .getDate();

  if (
    carpeta.lastModified
    && today === carpeta.lastModified.getDate()
  ) {
    const lastDay
      = carpeta.lastModified.getDate();

    return (
      <div className={card.date}>
        {carpeta.ultimaActuacion?.actuacion && (
          <h5
            className={` ${ card.actuacion } ${ typography.titleSmall }`}>
            {carpeta.ultimaActuacion.actuacion}
          </h5>
        )}
        {carpeta.ultimaActuacion?.anotacion && (
          <p
            className={` ${ card.anotacion } ${ typography.labelSmall }`}>
            {carpeta.ultimaActuacion.anotacion}
          </p>
        )}
        <sub className={card.fecha}>
          {`actuacion registrada el: ${ fixFechas(
            carpeta.ultimaActuacion
                  ?.fechaActuacion
          ) }`}
        </sub>
      </div>
    );
  }

  const actuaciones = await getActuaciones(
    {
      idProceso: carpeta.idProceso,
      index    : index
    } 
  );

  if ( !actuaciones || actuaciones.length === 0 ) {
    return null;
  }

  const ultimaActuacion = actuaciones[ 0 ];

  return (
    <div className={card.date}>
      {ultimaActuacion.actuacion && (
        <h5
          className={` ${ card.actuacion } ${ typography.titleSmall }`}>
          {ultimaActuacion.actuacion}
        </h5>
      )}
      {ultimaActuacion.anotacion && (
        <p
          className={` ${ card.anotacion } ${ typography.labelSmall }`}>
          {ultimaActuacion.anotacion}
        </p>
      )}
      <sub className={card.fecha}>
        {`actuacion registrada el: ${ fixFechas(
          ultimaActuacion.fechaActuacion
        ) }`}
      </sub>
    </div>
  );
};
