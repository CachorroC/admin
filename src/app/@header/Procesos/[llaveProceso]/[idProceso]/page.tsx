import { Name } from '#@/components/nota/notas';

export default async function Page(
  {
    params,
  }: {
  params: { llaveProceso: string; idProceso: number };
}
) {
  return (
    <>
      <Name llaveProceso={params.llaveProceso} />
    </>
  );
}
