import 'server-only';
import { fetchActuaciones, getActuaciones } from '#@/lib/Actuaciones';
import card from '#@/components/card/card.module.scss';
import { fixFechas } from '#@/lib/fix';
import { Card } from './card/card';
import { NombreComponent } from './card/Nombre';
import { MonCarpeta } from '#@/lib/types/carpeta';
import { Fragment } from 'react';

export const FechaActuacionComponent = async (
  {
    carpeta,
    index
  }: {
  carpeta: MonCarpeta;
  index: number;
}
) => {
  const rowsActs = [];

  const {
    idProceso
  } = carpeta;


  const actuaciones = await fetchActuaciones(
    {
      idProceso: idProceso,
      index    : index
    }
  );

  if ( actuaciones.length === 0 ) {
    return null;
  }
  const ultimaActuacion = actuaciones[ 0 ];
  rowsActs.push(
    <sub className={card.updated} key={carpeta._id}>
      {fixFechas(
        ultimaActuacion.fechaActuacion
      )}
    </sub>
  );


  return (
    <Fragment key={carpeta._id}>
      {rowsActs}
    </Fragment>
  );
};
