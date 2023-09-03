import { Edit } from '#@/components/nota/Edit';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import { getNotaById } from '#@/lib/notas';
import { Fragment } from 'react';
import note from '#@/components/nota/note.module.css';

export default async function page(
  {
    params,
    searchParams
  }: {
  params: {
    llaveProceso: string;
  };
  searchParams: {
    _id: string;
  };
} 
) {
  const _id = searchParams._id;

  const nota = await getNotaById(
    {
      _id: _id
    } 
  );

  return (
    <div className={note.container}>
      <div className={note.nota}>
        {nota.map(
          (
            ntext, i 
          ) => {
            return (
              <Fragment key={ntext._id}>
                <Edit
                  key={
                    searchParams._id
                  ?? params.llaveProceso
                  }
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
