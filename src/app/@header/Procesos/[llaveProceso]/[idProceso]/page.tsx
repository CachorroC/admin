import Title from '#@/components/modal/title';
import { arrayMergerByllaveProceso } from '#@/lib/arrayMerger';
import { getNotasByllaveProceso } from '#@/lib/notas';
import { getProcesosByllaveProceso } from '#@/lib/procesos';

export default async function Page (
  { params }: { params: { llaveProceso: string; idProceso: number } }
) {

  return (
    <Title />
  );
}