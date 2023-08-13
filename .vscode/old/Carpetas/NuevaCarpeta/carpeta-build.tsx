'use client';

import { IntCarpeta } from '#@/lib/types/carpeta';
import React, { ReactNode } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import form from '#@/components/form/form.module.scss';

export const CarpetaFormContext = (
  {
    uri, children
  }: { uri: string;  children: ReactNode}
) =>  {
  const  methods  = useForm<IntCarpeta>();

  const {
    register,
    setFocus,
    getValues,
    setValue,
    watch,
    handleSubmit,
    formState: {
      errors,
      dirtyFields,
      submitCount,
      isSubmitting,
      isSubmitSuccessful,
      isLoading,
      isSubmitted
    },
    control
  } = methods;

  const onSubmit: SubmitHandler<IntCarpeta> = async(
    data
  ) => {
    alert(
      JSON.stringify(
        data
      )
    );
    alert(
      JSON.stringify(
        dirtyFields
      )
    );

    const postNewNote = await fetch(
      '/api/Carpetas',
      {
        method : 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          data
        )
      }
    );
    console.log(
      postNewNote.text()
    );

    return console.log(
      data
    );


  };
  console.log(
    errors
  );
  const newLocal = 'demanda.etapaProcesal';

  return (
    <FormProvider { ...methods }>
      <form
        className={form.form}
        onSubmit={handleSubmit(
          onSubmit
        )}
      >
        { children }
        <button type="submit">
          <p>Enviar</p>
          <span className='material-symbols-outlined'>send</span>
        </button>
      </form>
    </FormProvider>
  );
};