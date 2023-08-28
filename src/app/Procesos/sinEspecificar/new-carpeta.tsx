'use client';

import { DefaultValues,
         FormProvider,
         SubmitHandler,
         useForm,
         useWatch } from 'react-hook-form';
import form from '#@/components/form/form.module.css';
import { Demanda,
         Departamento,
         Deudor,
         IntCarpeta } from '#@/lib/types/carpeta';
import typography from '#@/styles/fonts/typography.module.css';
import { SelectSection } from '#@/components/form/SelectSection';
import { ReactNode } from 'react';
import { getCarpetaById } from '#@/lib/Carpetas';
import Fields from './fieldArray-juzgados';
import { Despacho } from '#@/lib/types/despachos';
import { NuevaCarpetaProvider } from '#@/hooks/formContext';
import { InputSection } from '#@/components/form/InputSection';
import { zodResolver } from '@hookform/resolvers/zod';
import { IntCarpetaElement,
         IntCarpetaElementSchema } from '#@/lib/types/zod-schema';
let renderCount = 0;

const defaultDemanda: Demanda = {
  entregagarantiasAbogado: new Date(),
  juzgados               : [
    {
      id  : 0,
      tipo: 'Civil Municipal',
      url : 'https://app.rsasesorjuridico.com'
    }
  ],
  obligacion: {
    '1': '1772345678',
    '2': 654567890
  },
  municipio: 'Bogota',
  radicado : '000 - 00000',

  etapaProcesal    : 'ADMISION DE LA DEMANDA',
  vencimientoPagare: new Date(),
  fechaPresentacion: new Date(),
  departamento     : {
    descripcion           : 'CUNDINAMARCA',
    idCatalogoDetallePadre: 1,
    idCatalogoDetalle     : 13,
    codigo                : '25'
  },
  capitalAdeudado: 10000000,
  expediente     : '12345678912345678912345'
};

const defaultDeudor: Deudor = {
  primerApellido : 'Montoya',
  primerNombre   : 'Pedro',
  segundoNombre  : 'Pablo',
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
  demanda     : defaultDemanda,
  deudor      : defaultDeudor,
  category    : 'Bancolombia',
  categoryTag : 1,
  idProceso   : 0,
  llaveProceso: '12345678912345678912345',
  numero      : 574,
  tipoProceso : 'SINGULAR'
};

export const NuevoProceso = (
  {
    uri,
    descripciones,
    despachos,
    carpeta
  }: {
  uri: string;
  descripciones: Departamento[];
  despachos: Despacho[];
  carpeta?: IntCarpeta;
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
    setFocus,
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
      `/api/Carpetas/${ data.llaveProceso }`,
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

    const nAlert = await postNewNote.json();

    return alert(
      JSON.stringify(
        nAlert 
      ) 
    );
  };

  renderCount++;

  return (
    <NuevaCarpetaProvider>
      <FormProvider {...methods}>
        <div className={form.container}>
          <form
            className={form.form}
            onSubmit={handleSubmit(
              onSubmit 
            )}>
            <button
              type={'button'}
              className={form.addButton}
              onClick={() => {
                setFocus(
                  'numero', {
                    shouldSelect: true
                  } 
                );
              }}>
              <span>{'primerNombre'}</span>
            </button>
            <section className={form.section}>
              <section className={form.section}>
                <section className={form.section}>
                  <InputSection
                    name={'deudor.primerNombre'}
                    title={'Primer Nombre'}
                    type={'text'}
                    rls={{
                      required: true
                    }}
                  />
                  <InputSection
                    name={'deudor.segundoNombre'}
                    title={'Segundo Nombre'}
                    type={'text'}
                    rls={{
                      required: false
                    }}
                  />
                  <InputSection
                    name={'deudor.primerApellido'}
                    title={'Primer Apellido'}
                    type={'text'}
                    rls={{
                      required: true
                    }}
                  />
                  <InputSection
                    name={
                      'deudor.segundoApellido'
                    }
                    title={'Segundo Apellido'}
                    type={'text'}
                    rls={{
                      required: false
                    }}
                  />
                </section>
                <InputSection
                  name={'deudor.cedula'}
                  title={'Cédula de Ciudadanía'}
                  type={'number'}
                  rls={{
                    required: true
                  }}
                />
                <InputSection
                  name={'deudor.direccion'}
                  title={'Dirección'}
                  type={'textarea'}
                  rls={{
                    required: false
                  }}
                />
                <InputSection
                  name={'deudor.email'}
                  title={'Correo Electrónico'}
                  type={'email'}
                  rls={{
                    required: false,
                    pattern : /^\S+@\S+$/i
                  }}
                />
              </section>
              <InputSection
                name={'numero'}
                title={'Carpeta Numero'}
                rls={{
                  required: true
                }}
                type={'number'}
              />
              <InputSection
                name={'llaveProceso'}
                title={'Expediente'}
                rls={{
                  required : true,
                  maxLength: 23,
                  minLength: 22
                }}
                type={'text'}
              />

              <Fields options={despachos} />

              <SelectSection
                name={'category'}
                title={'Grupo al que pertenece'}
                options={[
                  'Bancolombia',
                  'Insolvencia',
                  'Reintegra',
                  'LiosJuridicos',
                  'Terminados'
                ]}
              />

              <SelectSection
                name={'tipoProceso'}
                title={'Proceso del Tipo'}
                options={[
                  'SINGULAR',
                  'HIPOTECARIO',
                  'PRENDARIO'
                ]}
              />
            </section>
            <button
              type='submit'
              className={form.button}>
              <sub
                className={typography.labelSmall}>
                Enviar
              </sub>
              <span className='material-symbols-outlined'>
                send
              </span>
            </button>
            <section className={form.section}>
              <section className={form.section}>
                <pre>
                  {JSON.stringify(
                    {
                      errors
                    },
                    null,
                    2
                  )}
                </pre>
              </section>
              <section className={form.section}>
                <pre>
                  {JSON.stringify(
                    {
                      dirtyFields
                    },
                    null,
                    2
                  )}
                </pre>
              </section>
              <section className={form.section}>
                <pre>
                  {JSON.stringify(
                    {
                      submitCount
                    },
                    null,
                    2
                  )}
                </pre>
              </section>
              <section className={form.section}>
                <pre>
                  {JSON.stringify(
                    {
                      isSubmitting
                    },
                    null,
                    2
                  )}
                </pre>
              </section>
              <section className={form.section}>
                <pre>
                  {JSON.stringify(
                    {
                      isSubmitSuccessful
                    },
                    null,
                    2
                  )}
                </pre>
              </section>
              <section className={form.section}>
                <pre>
                  {JSON.stringify(
                    {
                      isLoading
                    },
                    null,
                    2
                  )}
                </pre>
              </section>
              <section className={form.section}>
                <pre>
                  {JSON.stringify(
                    {
                      carpeta
                    },
                    null,
                    2
                  )}
                </pre>
              </section>
            </section>
          </form>
        </div>
      </FormProvider>
    </NuevaCarpetaProvider>
  );
};
