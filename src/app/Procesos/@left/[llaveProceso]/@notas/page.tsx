import { Nota } from '#@/components/nota/notas';
import { getNotasByllaveProceso } from '#@/lib/notas';
import { NewNota } from '#@/components/nota/NuevaNota';
import { getBaseUrl } from '#@/lib/getBaseUrl';

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
      <NewNota llaveProceso={ llaveProceso} uri={ `${getBaseUrl()}` } />
      {notas.map((
        nota, index, arrNotas
      ) => (
        <Nota key={nota._id} nota={nota} />
      ))}
    </>
  );
}
