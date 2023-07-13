'use client';
import * as React from 'react';
import { useForm, useFieldArray, useWatch, Control } from 'react-hook-form';
import { usePathname } from 'next/navigation';
import { intNota, intNotaFormValues } from '#@/lib/types/notas';
import note from '#@/components/nota/note.module.scss';
import { Fragment, useState } from 'react';
import accordion from './accordion.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';

export function NewNota(
  {
    llaveProceso,
    uri
  }: {
  llaveProceso: string;
  uri: string;
} 
) {
  const pathname = usePathname();

  const {
    register,
    watch,
    control,
    setValue,
    handleSubmit,
    formState: {
      errors 
    }
  } = useForm<intNotaFormValues>(
    {
      defaultValues: {
        nota  : '',
        tareas: [
          {
            tarea  : '',
            isDone : false,
            dueDate: new Date().toISOString()
          }
        ]
      },
      mode: 'onBlur'
    } 
  );

  const {
    fields, append, remove 
  } = useFieldArray(
    {
      name: 'tareas',
      control
    } 
  );

  const onSubmit = async (
    data: intNotaFormValues 
  ) => {
    const newData: intNota = {
      ...data,
      llaveProceso: llaveProceso,
      pathname    : pathname,
      fecha       : new Date().toString()
    };
    alert(
      JSON.stringify(
        newData 
      ) 
    );

    const postNewNote = await fetch(
      '/api/Notas',
      {
        method : 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(
          newData 
        )
      } 
    ).then(
      (
        fullfilled 
      ) => {
        alert(
          fullfilled.status 
        );

        return fullfilled;
      } 
    );
    const responsePostNewNote = await postNewNote.json();
    alert(
      responsePostNewNote 
    );

    return responsePostNewNote;
  };

  const [
    isActive,
    setIsActive
  ] = useState(
    false 
  );

  return (
    <div className={note.container}>
      <form
        className={note.form}
        onSubmit={handleSubmit(
          onSubmit 
        )}>
        <div className={note.section}>
          <label
            htmlFor='nota'
            className={`${ note.label } ${ typography.titleMedium }`}>
            Nota
          </label>
          <input
            type='text'
            placeholder='agregue su nota'
            id='nota'
            className={note.textArea}
            {...register(
              'nota',
              {
                required: true
              } 
            )}
          />
        </div>
        <button
          className={accordion.title}
          type='button'
          onClick={() => {
            return setIsActive(
              !isActive 
            );
          }}>
          <span className='material-symbols-outlined'>
            {isActive
              ? 'expand_less'
              : 'expand_more'}
          </span>
          <span className={typography.titleSmall}>Tareas</span>
        </button>
        {isActive && (
          <div className={accordion.content}>
            {fields.map(
              (
                field, index 
              ) => {
                const watchIsDone = watch(
                  `tareas.${ index }.isDone` 
                );

                return (
                  <Fragment key={field.id}>
                    <div className={note.section}>
                      <label
                        htmlFor={`tareas.${ index }.tarea`}
                        className={note.label}>
                      Tarea:
                      </label>
                      <input
                        type='text'
                        placeholder='tarea'
                        {...register(
                          `tareas.${ index }.tarea`,
                          {} 
                        )}
                        className={note.textArea}
                        defaultValue={field.tarea}
                      />
                    </div>
                    <div className={note.section}>
                    2
                      <p className={note.label}>
                        {watchIsDone
                          ? '¡ tarea completa !'
                          : '¿ completar tarea ?'}
                      </p>
                      <button
                        type='button'
                        className={note.button}
                        onClick={() => {
                          setValue(
                            `tareas.${ index }.isDone`,
                            watchIsDone
                              ? false
                              : true
                          );
                        }}>
                        <span className='material-symbols-outlined'>
                          {watchIsDone
                            ? 'check_box'
                            : 'check_box_outline_blank'}
                        </span>
                      </button>
                    </div>
                    <div className={note.section}>
                      <label
                        htmlFor={`tareas.${ index }.dueDate`}
                        className={note.label}>
                      Para cuándo es?:
                      </label>
                      <input
                        type='date'
                        className={note.textArea}
                        placeholder={`tareas.${ index }.dueDate`}
                        {...register(
                          `tareas.${ index }.dueDate`,
                          {} 
                        )}
                      />
                    </div>
                    <div className={note.buttonsRow}>
                      <button
                        className={note.submitButton}
                        type='button'
                        onClick={() => {
                          return remove(
                            index 
                          );
                        }}>
                        <span className='material-symbols-outlined'>remove</span>
                      </button>
                      <button
                        type='button'
                        className={note.submitButton}
                        onClick={() => {
                          return append(
                            {
                              tarea  : '',
                              isDone : false,
                              dueDate: new Date().toISOString()
                            } 
                          );
                        }}>
                        <span className='material-symbols-outlined'>add</span>
                      </button>
                    </div>
                  </Fragment>
                );
              } 
            )}
          </div>
        )}
        <div className={note.section}>
          <button
            type='submit'
            className={note.submitButton}>
            <span className='material-symbols-outlined'>send</span>
          </button>
        </div>
      </form>
    </div>
  );
}
