import { getCarpetas,
         getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import { getNotas,
         getNotasByllaveProceso } from '#@/lib/notas';
import { NewNota } from '#@/components/nota/NuevaNota';
import { Notas } from '#@/components/nota/notas';

export default async function PageProcesosRightllaveProcesoidProceso(
  {
    params
  }: {
  params: { llaveProceso: string };
}
) {
  const notasllaveProceso
    = await getNotasByllaveProceso(
      {
        llaveProceso: params.llaveProceso
      }
    );

  const cantidadNotas = notasllaveProceso.length;

  if ( cantidadNotas === 0 ) {
    return <NewNota llaveProceso={ params.llaveProceso } uri={ getBaseUrl() } />;
  }

  return (
    <>
      <NewNota
        llaveProceso={params.llaveProceso}
        uri={`${ getBaseUrl() }`}
      />
      <Notas
        llaveProceso={params.llaveProceso}
      />
    </>
  );
}
