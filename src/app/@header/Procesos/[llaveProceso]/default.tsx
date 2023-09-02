import { NombreComponent } from '#@/components/nombre';
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
    return null;
  }

  return (
    <NombreComponent
      key={params.llaveProceso}
      deudor={proceso.deudor}
    />
  );
}
