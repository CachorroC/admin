import { ProcesoCard } from '#@/components/card/ProcesosCard';
import { NewNota } from '#@/components/nota/NuevaNota';
import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import { getProceso } from '#@/lib/Procesos';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import typography from '#@/styles/fonts/typography.module.css';
import { notFound } from 'next/navigation';

export default async function PageProcesosRightllaveProceso(
  {
    params
  }: {
  params: {
    llaveProceso: string;
  };
} 
) {
  const Procesos = await getProceso(
    {
      llaveProceso: params.llaveProceso,
      index       : 1
    } 
  );

  if ( !Procesos ) {
    return notFound();
  }

  return (
    <>
      <p>page</p>
      <NewNota
        llaveProceso={params.llaveProceso}
        uri={getBaseUrl()}
      />
    </>
  );
}
