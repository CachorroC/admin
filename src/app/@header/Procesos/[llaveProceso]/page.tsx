import { NombreComponent } from '#@/components/card/Nombre';
import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import { notFound } from 'next/navigation';

export default async function Page(
  {
    params
  }: {
  params: { llaveProceso: string };
} 
) {
  const proceso = await getCarpetasByllaveProceso(
    {
      llaveProceso: params.llaveProceso 
    }
  );

  if ( !proceso ) {
    notFound();
  }

  return (
    <NombreComponent deudor={proceso.deudor} />
  );
}
