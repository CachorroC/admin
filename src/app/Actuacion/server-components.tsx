import { getActuaciones } from '#@/lib/Actuaciones';
import { fixFechas, sleep } from '#@/lib/fix';
import { MonCarpeta } from '#@/lib/types/carpeta';
import typography from '#@/styles/fonts/typography.module.css';
import { Fragment } from 'react';
import card from '#@/components/card/card.module.scss';
import { ConsultaActuacion,
         actuacionConvert } from '#@/lib/types/actuaciones';
import { getProceso } from '#@/lib/Procesos';
import { ProcesoCard } from '#@/components/card/ProcesosCard/card';

export const ProcesoComponent = async (
  {
    carpeta,
    index
  }: {
  carpeta: MonCarpeta;
  index: number;
}
) => {
  if ( !carpeta.llaveProceso ) {
    return null;
  }

  const procesos = await getProceso(
    {
      llaveProceso: carpeta.llaveProceso,
      index       : index
    }
  );

  if ( !procesos || procesos.length === 0 ) {
    return null;
  }

  return (
    <Fragment key={carpeta.llaveProceso}>
      {procesos.map(
        (
          proceso
        ) => {
          return (
            <ProcesoCard
              key={proceso.idProceso}
              proceso={proceso}
            />
          );
        }
      )}
    </Fragment>
  );
};

export const FechaActuacionComponent = async (
  {
    carpeta,
    index
  }: {
  carpeta: MonCarpeta;
  index: number;
}
) => {
  if ( !carpeta.idProceso ) {
    return null;
  }

  const actuaciones = await getActuaciones(
    {
      carpeta: carpeta,
      index  : index
    }
  );

  if (
    !actuaciones
    || actuaciones.length === 0
    || !carpeta.ultimaActuacion
  ) {
    return null;
  }

  const ultimaActuacion = actuaciones
    ? actuaciones[ 0 ]
    : carpeta.ultimaActuacion;

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
