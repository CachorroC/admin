import 'server-only';
import { getActuaciones } from '#@/lib/Actuaciones';
import card from '#@/components/card/card.module.scss';
import { fixFechas } from '#@/lib/fix';
import { Card } from './card/card';
import { NombreComponent } from './card/Nombre';
import { MonCarpeta } from '#@/lib/types/demandados';

export async function FechaActuacionComponent(
  {
    carpeta,
    index
  }: {
  carpeta: MonCarpeta;
  index: number;
}
) {
  const actuaciones = await getActuaciones(
    {
      idProceso: carpeta.idProceso,
      index    : index
    }
  );

  if ( actuaciones.length === 0 ) {
    return null;
  }
  const ultimaActuacion = actuaciones[ 0 ];

  return (
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