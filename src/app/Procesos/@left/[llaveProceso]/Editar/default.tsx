import { getBaseUrl } from '#@/lib/getBaseUrl';
import typeface from '#@/styles/fonts/typeface.module.scss';
import note from '#@/components/nota/note.module.scss';
import { getNotaById } from '#@/lib/notas';
import { Edit } from '#@/components/nota/Edit';
import { Fragment } from 'react';

export default async function Default(
                {
                  params,
                  searchParams
                }: {
  params: { llaveProceso: string };
  searchParams: { id: string };
} 
) {
  const llaveProceso = params.llaveProceso;
  const id = searchParams.id;

  const nota = await getNotaById(
    {
      id: id
    } 
  );

  return (
    <div className={note.container}>
      <div className={note.note}>
        {nota.map(
          (
            ntext, i 
          ) => {
            return (
              <Fragment key={ntext.id}>
                <h1
                  key={i}
                  className={typeface.title}
                >
                  {ntext.nota}
                </h1>
                <Edit
                  uri={getBaseUrl()}
                  nota={ntext}
                />
              </Fragment>
            );
          } 
        )}
      </div>
    </div>
  );
}
