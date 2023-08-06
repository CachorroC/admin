import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import { getActuaciones } from '#@/lib/Actuaciones';
import { ActuacionCard } from '#@/components/card/ActuacionesCard';
import { Name } from '#@/components/Headings/serverSideName';

export default async function Page(
  {
    params
  }: {
  params: {
    llaveProceso: string;
    idProceso: number;
  };
} 
) {
  const actuaciones = await getActuaciones(
    { idProceso: params.idProceso } 
  );

  return (
    <>
      {actuaciones.map(
        (
          actuacion, index, arr 
        ) => {
          return (
            <ActuacionCard
              Actuacion={actuacion}
              key={actuacion.idRegActuacion}
            />
          );
        }
      )}
    </>
  );
}
