'use client';

import { DefaultValues,
         FormProvider,
         SubmitHandler,
         useForm,
         useWatch } from 'react-hook-form';
import form from '#@/components/form/form.module.scss';
import { InputSection } from '#@/components/form/InputSection';
import typography from '#@/styles/fonts/typography.module.scss';
import { SelectSection } from '#@/components/form/SelectSection';
import { JuzgadosArray,  } from './obligaciones-array';
import { IntCarpeta } from '#@/lib/types/carpeta';

export const NuevoProceso = (
  {
    uri
  }: {
  uri: string;
}
) => {
  const methods = useForm<IntCarpeta>(
    {}
  );

  const [
    map,
    setMap
  ] = useNuevaCarpetaContext();

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

  return (
    <>
      <FormProvider {...methods}>
        <div className={form.container}>
          <form
            className={form.form}
            onSubmit={handleSubmit(
              onSubmit
            )}
          >
            <InputSection
              name={'capitalAdeudado'}
              title={'Capital Adeudado'}
              type={'number'}
              rls={{
                required: true,
                min     : 1000000
              }}
            />

            <section className={form.section}>
              <section
                className={ form.section }
              >
                <label
                  className={ `${ form.label } ${ typography.titleLarge }` }
                  htmlFor={ field.name }
                >
                  { title }
                </label>
                <input
                  { ...field }
                  className={ form.textArea }
                  type={ type }
                  placeholder={ field.name } />
              </section>
              <InputSection
                name={'deudor.direccion'}
                title={
                  'Direccion de residencia o trabajo'
                }
                type={'text'}
              />

              <InputSection
                name={'deudor.primerNombre'}
                title={'Primer Nombre'}
                type={'text'}
                rls={{
                  required: true
                }}
              />  <InputSection
                name={'deudor.segundoNombre'}
                title={'Segundo Nombre'}
                type={'text'}
              />
              <InputSection
                name={'deudor.primerApellido'}
                title={'Primer Nombre'}
                type={'text'}
                rls={{
                  required: true
                }}
              />
              <InputSection
                name={'deudor.segundoApellido'}
                title={'Segundo Apellido'}
                type={'text'}
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
                name={'deudor.email'}
                title={'Correo electrónico'}
                type={'email'}
                rls={{
                  required: false,
                  pattern : /^\S+@\S+$/i
                }}
              />


            </section>

            <section className={form.section}>
              <SelectSection
                name={'demanda.departamento'}
                title={'Departamento'}
                options={[
                  'AMAZONAS',
                  'ANTIOQUIA',
                  'ARAUCA',
                  'ATLANTICO',
                  'BOLIVAR',
                  'BOYACA',
                  'CALDAS',
                  'CAQUETA',
                  'CASANARE',
                  'CAUCA',
                  'CESAR',
                  'CHOCO',
                  'CORDOBA',
                  'CUNDINAMARCA',
                  'BOGOTA',
                  'GUAINIA',
                  'GUAVIARE',
                  'HUILA',
                  'LA GUAJIRA',
                  'MAGDALENA',
                  'META',
                  'NARIÑO',
                  'NORTE DE SANTANDER',
                  'PUTUMAYO',
                  'QUINDIO',
                  'RISARALDA',
                  'SAN ANDRES Y PROVIDENCIA',
                  'SANTANDER',
                  'SUCRE',
                  'TOLIMA',
                  'VALLE DEL CAUCA',
                  'VAUPES',
                  'VICHADA'
                ]}
              />
              <section className={ form.section }>
                <JuzgadosArray />
              </section>
              <InputSection
                name={'demanda.ciudad'}
                title={'Municipio'}
                type={'text'}
              />
              <InputSection
                name={'demanda.radicado'}
                title={'Radicado'}
                type={ 'text' }
              />
              <InputSection name={ 'demanda.entregaGarantiasAbogado' } title={ 'Entrega de Garantias al Abogado' } type={ 'date' } />
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
              <InputSection
                name={'demanda.vencimientoPagare'}
                title={'vencimiento del pagare'}
                type={'date'}
              />

            </section>

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
              title={'Expediente'}
              type={'text'}
              rls={{
                required : true,
                maxLength: 23,
                minLength: 23
              }}
            />
            <InputSection
              name={'numero'}
              title={'Carpeta numero'}
              type={'number'}
              rls={{
                required: true
              }}
            />
            <InputSection
              name={'idProceso'}
              title={'id del proceso'}
              type={'number'}
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
            <InputSection name={ 'id' } title={ 'cedula del deudor' } type={ 'number' } rls={{
              required: true
            }}/>

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
    </>
  );
};

function useNuevaCarpetaContext (): [ any, any ] {
  throw new Error(
    'Function not implemented.' 
  );
}
