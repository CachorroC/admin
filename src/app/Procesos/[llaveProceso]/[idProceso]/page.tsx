import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import { getActuaciones } from '#@/lib/Actuaciones';
import { ActuacionCard } from '#@/components/card/ActuacionesCard';
import { Name } from '#@/components/Headings/serverSideName';
import { notFound } from 'next/navigation';

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
    {
      idProceso: params.idProceso,
      index    : 1
    } 
  );

  if ( params.idProceso === 1 || !actuaciones ) {
    return notFound();
  }

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
