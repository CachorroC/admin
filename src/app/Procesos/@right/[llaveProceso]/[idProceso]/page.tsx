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
  const carpeta = await getCarpetasByllaveProceso(
    {
      llaveProceso: params.llaveProceso 
    }
  );

  const notasllaveProceso
    = await getNotasByllaveProceso(
      {
        llaveProceso: params.llaveProceso 
      } 
    );
  const cantidadNotas = notasllaveProceso.length;
  const notas = await getNotas();

  switch ( cantidadNotas ) {
    case 0:
      return (
        <>
          <NewNota
            llaveProceso={params.llaveProceso}
            uri={`${ getBaseUrl() }`}
          />
          <Notas />
        </>
      );
    case 1:
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
    case 2:
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
    default:
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
}
