import 'server-only';
import { fetchActuaciones, getActuaciones } from '#@/lib/Actuaciones';
import card from '#@/components/card/card.module.css';
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


  const actuaciones = await getActuaciones(
    {
      idProceso: idProceso,
      index    : index
    }
  );

  if ( actuaciones.length === 0 ) {
    return null;
  }
  const ultimaActuacion = actuaciones[ 0 ];

  const fixedfecha = fixFechas(
    ultimaActuacion.fechaActuacion
  );

  return (
    <sub className={card.updated} key={carpeta._id}>
      {`actuacion registrada el ${ fixedfecha }`}
    </sub>
  );
};
