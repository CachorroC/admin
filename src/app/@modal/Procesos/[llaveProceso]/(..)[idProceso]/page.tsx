import { ActuacionCard } from '#@/components/card/ActuacionesCard';
import ModalDialog from '#@/hooks/modal-state';
import { getActuaciones } from '#@/lib/Actuaciones';

export default async function ModalPageIdProceso (
  {
    params
  }: { params: { llaveProceso: string; idProceso: number } }
) {
  const actuaciones = await getActuaciones(
    {
      idProceso: params.idProceso,
      index    : 1
    }
  );

  if ( !actuaciones ) {
    return (
      <ModalDialog key={params.idProceso}>
        <p>{'sin Actuaciones'}</p>
      </ModalDialog>
    );
  }

  return (
    <ModalDialog key={params.idProceso}>
      { actuaciones.map(
        (
          actuacion 
        ) => {
          return (
            <ActuacionCard key={actuacion.idRegActuacion} act={ actuacion } />
          );
        }
      )}
    </ModalDialog>
  );
}