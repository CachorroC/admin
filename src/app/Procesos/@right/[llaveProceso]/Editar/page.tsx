import { NuevoProceso } from '#@/app/Procesos/sinEspecificar/new-carpeta';
import { Card } from '#@/components/card/card';
import { NewNota } from '#@/components/nota/NuevaNota';
import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import { getBaseUrl } from '#@/lib/getBaseUrl';

export default async function PageRightEditar(
  {
    params,
    searchParams
  }: {
  params: { llaveProceso: string };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
} 
) {
  const _id = searchParams._id;

  const carpeta = await getCarpetasByllaveProceso(
    {
      llaveProceso: params.llaveProceso
    }
  );

  if ( _id || !carpeta ) {
    return null;
  }

  return (
    <Card
      path={'/Procesos'}
      carpeta={carpeta}>
      <NewNota
        llaveProceso={params.llaveProceso}
        uri={getBaseUrl()}
      />
    </Card>
  );
}
