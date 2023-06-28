import { Name } from '#@/components/nota/notas';

export default async function Page(
  {
    params,
  }: {
  params: { llaveProceso: string };
}
) {
  return (
    <>
      <Name llaveProceso={params.llaveProceso} />
    </>
  );
}
