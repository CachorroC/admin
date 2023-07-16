import { Edit } from '#@/components/nota/Edit';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import { getNotaById } from '#@/lib/notas';
import { Fragment } from 'react';
import note from '#@/components/nota/note.module.scss';


export default async function page(
  {
    params
  }: {
  params: { id: string };
}
) {
  const id = params.id;

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
