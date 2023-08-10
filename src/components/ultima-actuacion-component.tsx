import 'server-only';
import { getActuaciones } from '#@/lib/Actuaciones';
import card from '#@/components/card/card.module.scss';
import { fixFechas } from '#@/lib/fix';
import { Card } from './card/card';
import { NombreComponent } from './card/Nombre';
import { MonCarpeta } from '#@/lib/types/demandados';
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
    idProcesos 
  } = carpeta;

  for ( const idProceso of idProcesos ) {
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
    rowsActs.push(
      <Card
        key={carpeta._id}
        path={'/Procesos'}
        carpeta={carpeta}
      >
        <NombreComponent
          deudor={carpeta.deudor}
          key={carpeta._id}
        />

        <sub className={card.updated}>
          {fixFechas(
            ultimaActuacion.fechaActuacion
          )}
        </sub>
      </Card>
    );
  }

  return (
    <Fragment key={carpeta._id}>
      {' '}
      {rowsActs}{' '}
    </Fragment>
  );
};
