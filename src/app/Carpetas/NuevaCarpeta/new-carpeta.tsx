'use client';

import { FormProvider,
         SubmitHandler,
         useForm } from 'react-hook-form';
import form from '#@/components/form/form.module.scss';
import { InputSection } from '#@/components/form/InputSection';
import { IntCarpeta } from '#@/lib/types/demandados';
import typography from '#@/styles/fonts/typography.module.scss';

export const NuevoProceso = ( { uri }: {
  uri: string;
} ) => {
  const methods = useForm<IntCarpeta>();

  const {
    register,
    getValues,
    setValue,
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

  const onSubmit: SubmitHandler<
    IntCarpeta
  > = async ( data ) => {
    alert( JSON.stringify( dirtyFields ) );
    alert( JSON.stringify( data ) );

    const postNewNote = await fetch(
      '/api/Carpetas',
      {
        method : 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body   : JSON.stringify( data )
      }
    );

    return console.log( data );
  };

  return (
    <>
      <FormProvider {...methods}>
        <div className={form.container}>
          <form
            className={form.form}
            onSubmit={handleSubmit( onSubmit )}
          >
            <InputSection
              name={'numero'}
              title={'Carpeta numero'}
              type={'number'}
              rls={{ required: true }}
            />
            <section className={form.section}>
              <InputSection
                name={'deudor.primerNombre'}
                title={'Primer Nombre'}
                type={'text'}
                rls={{ required: true }}
              />
              <InputSection
                name={'deudor.primerApellido'}
                title={'Primer Nombre'}
                type={'text'}
                rls={{ required: true }}
              />
              <InputSection
                name={'deudor.segundoNombre'}
                title={'Segundo Nombre'}
                type={'text'}
              />
              <InputSection
                name={'deudor.segundoApellido'}
                title={'Segundo Apellido'}
                type={'text'}
              />
              <InputSection
                name={'deudor.cedula'}
                title={'cedula'}
                type={'number'}
                rls={{ required: true }}
              />
              <InputSection
                name={'deudor.email'}
                title={'Correo electrónico'}
                type={'text'}
                rls={{
                  required: false,
                  pattern : /^\S+@\S+$/i
                }}
              />
              <InputSection
                name={'deudor.tel.fijo'}
                title={'Telefono fijo'}
                type={'tel'}
                rls={{
                  required : false,
                  maxLength: 10,
                  minLength: 10
                }}
              />
              <InputSection
                name={'deudor.tel.celular'}
                title={'Telefono celular'}
                type={'tel'}
                rls={{
                  required : false,
                  minLength: 10,
                  maxLength: 10
                }}
              />
              <InputSection
                name={'deudor.direccion'}
                title={
                  'Direccion de residencia o trabajo'
                }
                type={'text'}
              />
            </section>
            <InputSection
              name={'fechaIngreso'}
              title={
                'fecha de ingreso del deudor al sistema de RyS'
              }
              type={'date'}
              rls={{ required: true }}
            />
            <section className={form.section}>
              <label
                className={form.label}
                htmlFor='tipoProceso'
              >
                Tipo de proceso
              </label>
              <select
                className={form.textArea}
                {...register(
                  'tipoProceso', { required: true } 
                )}
              >
                <option value='HIPOTECARIO'>
                  HIPOTECARIO
                </option>
                <option value='PRENDARIO'>
                  PRENDARIO
                </option>
                <option value='SINGULAR'>
                  SINGULAR
                </option>
              </select>
            </section>
            <input
              type='checkbox'
              placeholder='1099'
              {...register(
                'reparto', { required: true } 
              )}
            />

            <input type='submit' />

            <button
              type='submit'
              className={form.button}
            >
              <sub
                className={typography.labelSmall}
              >
                Enviar
              </sub>
              <span className='material-symbols-outlined'>
                send
              </span>
            </button>
          </form>

          <pre>
            {JSON.stringify(
              {
                errors,
                dirtyFields,
                submitCount,
                isSubmitting,
                isSubmitSuccessful,
                isLoading
              },
              null,
              2
            )}
          </pre>
        </div>
      </FormProvider>
    </>
  );
};
