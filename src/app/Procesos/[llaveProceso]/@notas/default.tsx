import { Notas } from '#@/components/nota/notas';

export default function DefaultNota(
  {
    params: { llaveProceso },
  }: {
  params: { llaveProceso: string };
}
) {
  return <Notas />;
}
