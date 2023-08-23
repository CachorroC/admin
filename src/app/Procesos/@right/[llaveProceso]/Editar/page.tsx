import { Card } from '#@/components/card/card';
import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';

export default async function PageRightEditar(
  {
    params,
    searchParams,
  }: {
  params: { llaveProceso: string }
  searchParams: { [key: string]: string | string[] | undefined }
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
    <Card path={ '/Procesos' } carpeta={ carpeta }>
      <p>{'idk'}</p>
    </Card>
  );



}