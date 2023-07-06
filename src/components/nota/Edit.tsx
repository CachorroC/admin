'use client';
import * as React from 'react';
import {useForm,
  useFieldArray,
  useWatch,
  Control,
  SubmitHandler,} from 'react-hook-form';
import { usePathname } from 'next/navigation';
import {intNota,
  intNotaFormValues,
  monNota,} from '#@/lib/types/notas';
import note from '#@/components/nota/note.module.scss';
import { Fragment } from 'react';
import typography from '#@/styles/fonts/typography.module.scss';

export function Edit(
  {
    uri,
    nota,
  }: {
  uri: string;
  nota: monNota;
}
) {

  const {
    register,
    control,
    setValue,
    handleSubmit,
    formState: {
      errors 
    },
  } = useForm<intNotaFormValues> ();
  const {
    fields, append, remove 
  } =
    useFieldArray (
      {
        name: 'tareas',
        control,
      }
    );

  const onSubmit: SubmitHandler<
    intNotaFormValues
  > = async (
    data: intNotaFormValues
  ) => {

    const newData = {
      ...data,
      llaveProceso: nota.llaveProceso,
      pathname    : nota.pathname,
      fecha       : nota.fecha,
    };
    alert (
      JSON.stringify (
        newData
      )
    );

    const postNewNote = await fetch (
      `${ uri }/api/Notas?id=${ nota._id }`,
      {
        method : 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify (
          newData
        ),
      }
    ).then (
      (
        fullfilled
      ) => {

        alert (
          fullfilled.status
        );
        return fullfilled;
      
      }
    );

    const responsePostNewNote =
      await postNewNote.json ();
    alert (
      responsePostNewNote
    );
    return responsePostNewNote;
  
  };
  return (
    <div className={note.container}>
      <form
        className={note.form}
        onSubmit={handleSubmit (
          onSubmit
        )}>
        <div className={note.section}>
          <label
            htmlFor={'nota'}
            className={`${ note.label } ${ typography.titleMedium }`}>
            Nota
          </label>

          <textarea
            className={note.textArea}
            defaultValue={nota.nota}
            {...register (
              'nota',
              {
                required: true,
              }
            )}
          />
        </div>
        {nota.tareas.map (
          (field, index) => (
            <Fragment key={field.tarea}>
              <div className={note.section}>
                <label
                  htmlFor={`tareas.${ index }.tarea`}
                  className={note.label}>
                Tarea:{' '}
                </label>
                <textarea
                  placeholder='tarea'
                  {...register (
                  `tareas.${ index }.tarea` as const,
                  {
                  }
                  )}
                  className={note.textArea}
                  defaultValue={field.tarea}
                />
              </div>
              <div className={note.section}>
                <label
                  htmlFor={`tareas.${ index }.isDone`}
                  className={note.label}>
                ¿Tarea completa?
                </label>
                <input
                  defaultChecked={field.isDone}
                  type='checkbox'
                  {...register (
                  `tareas.${ index }.isDone` as const,
                  {
                  }
                  )}
                  className={note.checkbox}
                />
              </div>
              <div className={note.section}>
                <label
                  htmlFor={`tareas.${ index }.dueDate`}
                  className={note.label}>
                Para cuándo es?:{' '}
                </label>
                <input
                  type='date'
                  defaultValue={field.dueDate}
                  placeholder={`tareas.${ index }.dueDate`}
                  {...register (
                    `tareas.${ index }.dueDate`,
                    {
                    }
                  )}
                />
              </div>

              <div className={note.section}>
                <button
                  className={note.submitButton}
                  type='button'
                  onClick={() => remove (
                    index
                  )}>
                  <span className='material-symbols-outlined'>
                  remove
                  </span>
                </button>

                <button
                  type='button'
                  className={note.submitButton}
                  onClick={() =>
                    append (
                      {
                        tarea : '',
                        isDone: false,
                        dueDate:
                      new Date ().toISOString (),
                      }
                    )
                  }>
                  <span className='material-symbols-outlined'>
                  add
                  </span>
                </button>
              </div>
            </Fragment>
          )
        )}

        <div className={note.section}>
          <button
            type='submit'
            className={note.submitButton}>
            <span className='material-symbols-outlined'>
              send
            </span>
          </button>
          <button
            type='button'
            onClick={() => {

              setValue (
                'nota',
                nota.nota
              );
            
            }}>
            Set All Values
          </button>
        </div>
      </form>
    </div>
  );

}
