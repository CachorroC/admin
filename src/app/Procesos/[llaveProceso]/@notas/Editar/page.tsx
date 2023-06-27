import { getBaseUrl } from '#@/lib/getBaseUrl';
import typeface from '#@/styles/fonts/typeface.module.scss';
import note from '#@/components/nota/note.module.scss';
import { getNotaById } from '#@/lib/notas';
import { Edit } from '#@/components/nota/Edit';
import { Fragment } from 'react';

export default async function page(
  {
    params,
    searchParams,
  }: {
  params: { llaveProceso: string };
  searchParams: { _id: string };
}
) {
  const llaveProceso = params.llaveProceso;
  const _id = searchParams._id;
  const nota = await getNotaById(
    { _id: _id }
  );

  return (
    <div className={note.container}>
      {nota.map(
        (
          ntext, i
        ) => (
          <Fragment key={ntext._id.toString()}>
            <h1 key={i} className={typeface.title}>
              {ntext.nota}
            </h1>
            <Edit uri={getBaseUrl()} nota={ntext} />
          </Fragment>
        )
      )}
    </div>
  );
}
