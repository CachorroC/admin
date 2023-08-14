'use client';

import { DefaultValues,
         FormProvider,
         SubmitHandler,
         useForm,
         useWatch } from 'react-hook-form';
import form from '#@/components/form/form.module.css';
import { Demanda,
         Deudor,
         IntCarpeta } from '#@/lib/types/carpeta';
import typography from '#@/styles/fonts/typography.module.css';
import { SelectSection } from '#@/components/form/SelectSection';
import { ReactNode } from 'react';
let renderCount = 0;

const defaultDemanda: Demanda = {
  departamento           : 'CUNDINAMARCA',
  entregaGarantiasAbogado: new Date(),
  juzgado                : [
    {
      id  : 0,
      tipo: 'Civil Municipal',
      url : 'https://app.rsasesorjuridico.com'
    }
  ],
  obligacion: [
    '1772345678',
    654567890
  ],
  ciudad  : 'Bogota',
  radicado: '000 - 00000',

  etapaProcesal    : 'ADMISION DE LA DEMANDA',
  vencimientoPagare: new Date()
};

const defaultDeudor: Deudor = {
  primerApellido : 'Perez',
  primerNombre   : 'Pepito',
  segundoNombre  : 'Joaquin',
  segundoApellido: 'Jimenez',
  email          : 'juankpato87@gmail.com',
  direccion      : 'carrera 63 # 22 - 31',
  tel            : {
    fijo   : 6051567,
    celular: 3506144932
  },
  cedula: 1022352429
};


const defaultValues: DefaultValues<IntCarpeta> = {
  capitalAdeudado: 1000000,
  demanda        : defaultDemanda,
  deudor         : defaultDeudor,
  grupo          : 'Bancolombia',
  idProceso      : 0,
  llaveProceso   : '12345678912345678912345',
  numero         : 500,
  tipoProceso    : 'SINGULAR',

};

export const NuevoProceso = (
  {
    uri, carpeta, children
  }: {
      uri: string; carpeta?: IntCarpeta; children: ReactNode
}
) => {
  const methods = useForm<IntCarpeta>(
    {
      defaultValues,
      values: carpeta
    }
  );

  const {
    register,
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

  const onSubmit: SubmitHandler<
    IntCarpeta
  > = async (
    data
  ) => {
    alert(
      JSON.stringify(
        dirtyFields
      )
    );
    alert(
      JSON.stringify(
        data
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

    return console.log(
      data
    );
  };

  renderCount++;

  return (
    <>
      <span className='counter'>
        Render Count: {renderCount}
      </span>
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
      <FormProvider {...methods}>
        <div className={form.container}>
          <form
            className={form.form}
            onSubmit={handleSubmit(
              onSubmit
            )}
          >
            { children }

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
        </div>
      </FormProvider>

    </>
  );
};
