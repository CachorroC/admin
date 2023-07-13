import { Name } from '#@/components/Headings/serverSideName';
import Title from '#@/components/Headings/title';

export default async function Page(
  {
    params
  }: {
  params: { llaveProceso: string };
}
) {
  return <Title key={params.llaveProceso} />;
}
