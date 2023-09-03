import { Nota } from '#@/components/nota/notas';
import { getNotasByllaveProceso } from '#@/lib/notas';
import { Fragment } from 'react';

export default async function Default(
  {
    params
  }: {
  params: { llaveProceso: string };
} 
) {
  const notas = await getNotasByllaveProceso(
    {
      llaveProceso: params.llaveProceso
    } 
  );

  return (
    <Fragment key={'defaultRightllaveProceso'}>
      {notas.map(
        (
          nota, index, arr 
        ) => {
          return (
            <Nota
              notaRaw={nota}
              i={index}
              arr={arr}
              key={nota._id}
            />
          );
        } 
      )}
    </Fragment>
  );
}
