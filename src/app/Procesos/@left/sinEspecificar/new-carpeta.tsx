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
import { DeudorFormComponent } from '#@/components/form/deudor-form';
import Fields from './fieldArray-juzgados';
import { Despacho } from '#@/lib/types/despachos';
import { NuevaCarpetaProvider } from '#@/hooks/formContext';
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
    fijo: [
      6051567
    ],
    celular: [
      3506144932
    ]
  },
  cedula: 1022352429
};


const defaultValues: DefaultValues<IntCarpeta> = {

  demanda     : defaultDemanda,
  deudor      : defaultDeudor,
  category    : 'Bancolombia',
  idProceso   : 0,
  llaveProceso: '12345678912345678912345',
  numero      : 574,
  tipoProceso : 'SINGULAR',

};

export const NuevoProceso = (
  {
    uri, descripciones, despachos, carpeta
  }: {
      uri: string; descripciones: Departamento[]; despachos: Despacho[], carpeta?: IntCarpeta
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
    <NuevaCarpetaProvider>
      <FormProvider {...methods}>
        <div className={form.container}>

          <pre>
            {
              JSON.stringify(
                {
                  errors,
                  dirtyFields,
                  submitCount,
                  isSubmitting,
                  isSubmitSuccessful,
                  isLoading,
                  carpeta
                },
                null,
                2
              )
            }</pre>

          <form
            className={form.form}
            onSubmit={handleSubmit(
              onSubmit
            )}
          >

            <section className={ form.section }>
              <DeudorFormComponent />
            </section>
            <section className={ form.section }>
              { descripciones.map(
                (
                  descr, i
                ) => {
                  return (
                    <button key={ descr.codigo } type='button' className={ form.selectArea } onClick={ () => {
                      setValue(
                        'demanda.departamento', descr
                      );
                    } }>
                      <strong>{ descr.descripcion}</strong>

                    </button>
                  );
                }
              )}
            </section>
            <Fields options={ despachos} />

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
