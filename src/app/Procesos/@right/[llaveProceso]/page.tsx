import { NewNota } from '#@/components/nota/NuevaNota';
import { Nota } from '#@/components/nota/notas';
import { getProceso } from '#@/lib/Procesos';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import { getNotasByllaveProceso } from '#@/lib/notas';
import { notFound } from 'next/navigation';
import { Fragment } from 'react';

export default async function PageProcesosRightllaveProceso(
  {
    params
  }: {
  params: {
    llaveProceso: string;
  };
} 
) {
  const notas = await getNotasByllaveProceso(
    {
      llaveProceso: params.llaveProceso
    } 
  );

  return (
    <Fragment key={'pageRightllaveProceso'}>
      <p>page</p>
      <NewNota
        llaveProceso={params.llaveProceso}
        key={params.llaveProceso}
      />
      {notas.map(
        (
          nota, index, arr 
        ) => {
          return (
            <Nota
              notaRaw={nota}
              key={nota._id}
              i={index}
              arr={arr}
            />
          );
        } 
      )}
    </Fragment>
  );
}
