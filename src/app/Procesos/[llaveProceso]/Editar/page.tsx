import 'server-only';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import { NuevoProceso } from '../../sinEspecificar/new-carpeta';
import { getDepartamentos,
         getDespachos } from '#@/lib/RamaJudicial';
import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import { notFound } from 'next/navigation';

export default async function PageProcesosEditarLeft(
  {
    params
  }: {
  params: { llaveProceso: string };
}
) {
  const carpeta = await getCarpetasByllaveProceso(
    {
      llaveProceso: params.llaveProceso
    }
  );

  const despachos = await getDespachos();

  if ( !carpeta ) {
    return notFound();
  }

  return (
    <NuevoProceso key={params.llaveProceso}
      carpeta={carpeta}
      despachos={despachos}
    />
  );
}
