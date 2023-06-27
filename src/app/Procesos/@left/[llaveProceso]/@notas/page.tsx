import { Nota } from '#@/components/nota/notas';
import { getNotasByllaveProceso } from '#@/lib/notas';

export default async function Page({
  params: { llaveProceso },
}: {
  params: { llaveProceso: string };
}) {
  const notas = await getNotasByllaveProceso({ llaveProceso: llaveProceso });

  if (notas.length === 0) {
    return null;
  }
  return (
    <>
      {notas.map((
        nota, index, arrNotas
      ) => (
        <Nota key={nota._id} nota={nota} />
      ))}
    </>
  );
}
