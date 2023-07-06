import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import { getActuacionesByidProceso } from '#@/lib/Actuaciones';
import { ActuacionCard } from '#@/components/card/ActuacionesCard';
import { Name } from '#@/components/Headings/serverSideName';

export default async function Page({
  params,
}: {
  params: {
    llaveProceso: string;
    idProceso: number;
  };
}) {
  const actuaciones =
    await getActuacionesByidProceso({
      idProceso: params.idProceso,
    });
  return (
    <>
      {actuaciones.acts &&
        actuaciones.acts.map(
          (actuacion, index, arr) => (
            <ActuacionCard
              Actuacion={actuacion}
              key={index}
            />
          )
        )}
    </>
  );
}
