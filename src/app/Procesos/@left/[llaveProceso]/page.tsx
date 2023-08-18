import { getCarpetas,
         getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import { ActuacionCard } from '#@/components/card/ActuacionesCard';
import { getActuaciones } from '#@/lib/Actuaciones';

async function Acts(
  {
    idProceso
  }: {
  idProceso: number;
}
) {
  const actuaciones = await getActuaciones(
    {
      idProceso: idProceso,
      index    : 1
    }
  );

  return (
    <>
      {actuaciones.map(
        (
          act, i, arr
        ) => {
          const {
            idRegActuacion
          } = act;

          return (
            <ActuacionCard
              Actuacion={act}
              key={idRegActuacion}
            />
          );
        }
      )}
    </>
  );
}

export default async function PageProcesosLeftllaveProceso(
  {
    params
  }: {
  params: {
    llaveProceso: string;
  };
}
) {
  const Carpeta = await getCarpetasByllaveProceso(
    {
      llaveProceso: params.llaveProceso
    }
  );

  if ( !Carpeta ) {
    return null;
  }

  return (
    <>
      <p>Page Left llaveProceso</p>

      <Acts
        key={Carpeta._id}
        idProceso={Carpeta.idProceso}
      />
    </>
  );
}
