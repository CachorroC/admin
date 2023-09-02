import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import { fetchActuaciones,
         getActuaciones } from '#@/lib/Actuaciones';
import { ActuacionCard } from '#@/components/card/ActuacionesCard';
import { Name } from '#@/components/Headings/serverSideName';
import { notFound } from 'next/navigation';
import { sleep } from '#@/lib/fix';
import { Fragment } from 'react';

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
  const actuaciones = await fetchActuaciones(
    params.idProceso,
    1
  );

  if ( params.idProceso === 1 || !actuaciones ) {
    return notFound();
  }

  return (
    <Fragment key={params.idProceso}>
      {actuaciones.map(
        (
          actuacion, index, arr 
        ) => {
          return (
            <ActuacionCard
              act={actuacion}
              key={index}
            />
          );
        }
      )}
    </Fragment>
  );
}
