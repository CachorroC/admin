import { Name } from '#@/components/Headings/serverSideName';
import Title from '#@/components/Headings/title';
import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';

export default async function Page({
  params
}: {
  params: { llaveProceso: string };
}) {
  const proceso = await getCarpetasByllaveProceso(
    {
      llaveProceso: params.llaveProceso
    }
  );

  const nombre = proceso
    .map((prc) => {
      return prc.Deudor.PrimerNombre;
    })
    .toString();

  return (
    <Title
      key={params.llaveProceso}
      helper={nombre}
    />
  );
}
