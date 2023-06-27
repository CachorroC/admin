import { getNotasByllaveProceso } from '#@/lib/notas';
import typography from '#@/styles/fonts/typography.module.scss';

export default async function Page(
  {
    params,
  }: {
  params: { llaveProceso: string; idProceso: number };
}
) {
  const notas = await getNotasByllaveProceso(
    {llaveProceso:   params.llaveProceso}
  );
  return (
    <div>
      { notas.map(
        (
          nota
        ) => <h1 className={typography.displaySmall} key={nota._id}>{nota.nota}</h1>
      )}
    </div>
  );
}
