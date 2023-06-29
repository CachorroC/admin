import { Name } from '#@/components/Headings/serverSideName';


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
