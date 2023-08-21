import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import { CarpetaCard } from '#@/components/card/CarpetasCard';
import { Name } from '#@/components/Headings/serverSideName';
import { notFound } from 'next/navigation';

export default async function PageProcesosllaveProcesoidProceso(
  {
    params
  }: {
  params: {
    llaveProceso: string;
    idProceso: number;
  };
} 
) {
  const carpeta = await getCarpetasByllaveProceso(
    {
      llaveProceso: params.llaveProceso
    }
  );

  if ( !carpeta ) {
    return notFound();
  }

  return (
    <>
      <Name llaveProceso={params.llaveProceso} />

      <CarpetaCard
        key={carpeta._id}
        carpeta={carpeta}
      />
    </>
  );
}
