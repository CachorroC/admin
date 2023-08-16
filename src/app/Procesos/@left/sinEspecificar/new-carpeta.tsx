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
import { getCarpetaById } from '#@/lib/Carpetas';
import { DeudorFormComponent } from '#@/components/form/deudor-form';
import { InputSection } from '#@/components/form/InputSection';
import Fields from './fieldArray-juzgados';
import { Despacho } from '#@/lib/types/despachos';
import { NuevaCarpetaProvider } from '#@/hooks/formContext';
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
    uri, descripciones, despachos, carpeta
  }: {
      uri: string; descripciones: string[]; despachos: Despacho[], carpeta?: IntCarpeta
}
) => {
  const methods = useForm<IntCarpeta>(
    {
      defaultValues: carpeta ?? defaultValues
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
    <NuevaCarpetaProvider>
      <FormProvider {...methods}>
        <div className={form.container}>
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
          <pre>{
            JSON.stringify(
              {
                carpeta
              }, null, 2
            )}</pre>

          <form
            className={form.form}
            onSubmit={handleSubmit(
              onSubmit
            )}
          >

            <section className={ form.section }>
              <DeudorFormComponent />
            </section>
            <InputSection
              name={'capitalAdeudado'}
              title={'Capital Adeudado'}
              type={'number'}
              rules={{
                required: true,
                min     : 1000000
              }}
            />

            <section className={ form.section }>


              <SelectSection
                name={'demanda.departamento'}
                title={'Departamento'}
                options={descripciones}
              />
              <Fields options={ despachos} />
              <InputSection
                name={'demanda.ciudad'}
                title={'Municipio'}
                type={'text'}
                rules={{
                  required: true
                }}
              />
              <InputSection
                name={'demanda.radicado'}
                title={'Radicado'}
                type={'text'}
              />
            </section>
            <InputSection
              name={'demanda.entregaGarantiasAbogado'}
              title={
                'Entrega de las garantias al abogado'
              }
              type={'date'}
              rules={{
                required: true
              }}
            />
            <SelectSection
              name={'demanda.etapaProcesal'}
              title={'Etapa Procesal'}
              options={[
                'EJECUCION',
                'CONTESTACION DEMANDA',
                'EMPLAZAMIENTO',
                'ADMISION DE LA DEMANDA'
              ]}
            />

            <SelectSection
              name={'grupo'}
              title={'Grupo al que pertenece'}
              options={[
                'Bancolombia',
                'Reintegra',
                'Lios Juridicos',
                'Terminados'
              ]}
            />
            <InputSection
              name={'llaveProceso'}
              title={'llaveProceso'}
              type={'text'}
              rules={{
                required : true,
                maxLength: 23,
                minLength: 23
              }}
            />
            <InputSection
              name={'numero'}
              title={'Carpeta numero'}
              type={'number'}
              rules={{
                required: true
              }}
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
            <InputSection
              name={'demanda.vencimientoPagare'}
              title={'vencimiento del pagare'}
              type={'date'}
              rules={{
                required: true
              }}
            />

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

    </NuevaCarpetaProvider>
  );
};
