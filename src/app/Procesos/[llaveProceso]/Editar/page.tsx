import { getNotaById } from '#@/lib/notas';
import typeface from '#@/styles/fonts/typeface.module.css';
import typography from '#@/styles/fonts/typography.module.css';

export default async function Page(
  {
    params,
    searchParams
  }: {
  params: { llaveProceso: string };
  searchParams: { _id: string };
}
) {
  const llaveProceso = params.llaveProceso;

  const _id = searchParams._id;

  const nota = await getNotaById(
    {
      _id: _id
    }
  );

  const ntext = nota
        .map(
          (
            nt
          ) => {
            const name = nt.nota;

            return name;
          }
        )
        .toString();

  return (
    <h1
      className={typography.titleSmall}
    >{`Editar: ${ ntext }`}</h1>
  );
}
