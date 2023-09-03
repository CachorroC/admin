import { NewNota } from '#@/components/nota/NuevaNota';
import { Nota } from '#@/components/nota/notas';
import { LinkCard } from '#@/components/search/link';
import { getCarpetaByidProceso } from '#@/lib/Carpetas';
import { getNotasByllaveProceso } from '#@/lib/notas';
import { Fragment } from 'react';

export default async function Page (
  {
    params
  }: { params: { llaveProceso: string;  idProceso: string} }
) {
  const notas = await getNotasByllaveProceso(
    {
      llaveProceso: params.llaveProceso
    }
  );

  const carpeta = await getCarpetaByidProceso(
    {
      idProceso: Number(
        params.idProceso
      )
    }
  );

  return (
    <Fragment key={ params.idProceso }>
      <NewNota llaveProceso={ params.llaveProceso } key={params.llaveProceso}/>
      { carpeta && (
        <LinkCard key={params.idProceso} path={ '/Procesos' } carpeta={ carpeta } />
      )}
      { notas.map(
        (
          nota, index, arr
        ) => {
          return (
            <Nota notaRaw={ nota} i={index } arr={ arr} key={nota._id}/>
          );
        }
      )}
    </Fragment>
  );
}