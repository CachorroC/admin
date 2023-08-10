'use client';

import { DefaultValues,
         FormProvider,
         SubmitHandler,
         useForm,
         useWatch } from 'react-hook-form';
import form from '#@/components/form/form.module.scss';
import { InputSection } from '#@/components/form/InputSection';
import { Demanda,
         Deudor,
         IntCarpeta } from '#@/lib/types/demandados';
import typography from '#@/styles/fonts/typography.module.scss';
import { SelectSection } from '#@/components/form/SelectSection';
import { ObligacionesArray } from './obligaciones-array';
let renderCount = 0;

const defaultDemanda: Demanda = {
  departamento: 'CUNDINAMARCA',
  juzgado     : {
    origen: {
      id  : 0,
      tipo: 'Civil Municipal',
      url : 'https://app.rsasesorjuridico.com'
    }
  },
  municipio: 'Bogota',
  radicado : '000 - 00000'
};

const defaultDeudor: Deudor = {
  cedula         : 111111111,
  primerApellido : 'Perez',
  primerNombre   : 'Pepito',
  segundoNombre  : 'Joaquin',
  segundoApellido: 'Jimenez',
  email          : 'juankpato87@gmail.com',
  direccion      : 'carrera 63 # 22 - 31',
  tel            : {
    fijo   : 6051567,
    celular: 3506144932
  }
};

const defaultObligacion = [
  {
    texto: 100099987,
    tipo : 'cuenta bancaria'
  }
];

const defaultValues: DefaultValues<IntCarpeta> = {
  capitalAdeudado        : 1000000,
  demanda                : defaultDemanda,
  deudor                 : defaultDeudor,
  entregaGarantiasAbogado: new Date(),
  etapaProcesal          : 'ADMISION DE LA DEMANDA',
  fechaIngreso           : new Date(),
  grupo                  : 'Bancolombia',
  idProceso              : 0,
  llaveProceso           : '12345678912345678912345',
  numero                 : 500,
  obligacion             : defaultObligacion,
  reparto                : true,
  tipoBien               : 'VEHICULO',
  tipoProceso            : 'SINGULAR',
  vencimientoPagare      : new Date()
};

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
        headers: { 'Content-Type': 'application/json' },
        body   : JSON.stringify(
          data 
        )
      }
    );

    return console.log(
      data 
    );
  };

  const isReparto = watch(
    'reparto' 
  );
  renderCount++;

  return (
    <>
      <span className='counter'>
        Render Count: {renderCount}
      </span>
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
            <SelectSection
              name={'clase'}
              title={'clase'}
              options={[
                'EmbargoVehiculo',
                'EmbargoInmueble',
                'EmbargoSalario',
                'EmbargoCuentasBancarias',
                'EmbargoEstablecimientoComercial'
              ]}
            />
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
              <section className={form.section}>
                <InputSection
                  name={
                    'demanda.juzgado.origen.id'
                  }
                  title={'despacho numero'}
                  type={'number'}
                  rls={{ required: true }}
                />
                <SelectSection
                  name={
                    'demanda.juzgado.origen.tipo'
                  }
                  title={'tipo de despacho'}
                  options={[
                    'Civil Municipal de Ejecucion',
                    'Civil Municipal',
                    'Promiscuo Municipal',
                    'Pequeñas Causas y Competencias Multiples'
                  ]}
                />
                <InputSection
                  name={
                    'demanda.juzgado.origen.url'
                  }
                  title={'link'}
                  type={'url'}
                  rls={{ required: true }}
                />
              </section>
              <InputSection
                name={'demanda.municipio'}
                title={'Municipio'}
                type={'text'}
                rls={{ required: true }}
              />
              <InputSection
                name={'demanda.radicado'}
                title={'Radicado'}
                type={'text'}
              />
            </section>
            <section className={form.section}>
              <InputSection
                name={'deudor.cedula'}
                title={'cedula'}
                type={'number'}
                rls={{ required: true }}
              />
              <InputSection
                name={'deudor.direccion'}
                title={
                  'Direccion de residencia o trabajo'
                }
                type={'text'}
              />
              <InputSection
                name={'deudor.primerApellido'}
                title={'Primer Nombre'}
                type={'text'}
                rls={{ required: true }}
              />
              <InputSection
                name={'deudor.primerNombre'}
                title={'Primer Nombre'}
                type={'text'}
                rls={{ required: true }}
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
              <InputSection
                name={'deudor.segundoApellido'}
                title={'Segundo Apellido'}
                type={'text'}
              />
              <InputSection
                name={'deudor.segundoNombre'}
                title={'Segundo Nombre'}
                type={'text'}
              />
            </section>
            <InputSection
              name={'entregaGarantiasAbogado'}
              title={
                'Entrega de las garantias al abogado'
              }
              type={'date'}
              rls={{ required: true }}
            />
            <SelectSection
              name={'etapaProcesal'}
              title={'Etapa Procesal'}
              options={[
                'EJECUCION',
                'CONTESTACION DEMANDA',
                'EMPLAZAMIENTO',
                'ADMISION DE LA DEMANDA'
              ]}
            />
            <InputSection
              name={'fechaIngreso'}
              title={
                'Fecha en que ingresa el proceso al sistema de RyS'
              }
              type={'date'}
              rls={{ required: true }}
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
              rls={{ required: true }}
            />
            <ObligacionesArray />
            <section className={form.switchBox}>
              <input
                type={'checkbox'}
                className={form.primaryInput}
                {...register(
                  'reparto' 
                )}
              />
              <label
                htmlFor={'reparto'}
                className={form.label}
              >
                Ya se envió a reparto o 1099?
              </label>
            </section>
            <InputSection
              name={'reparto'}
              title={
                '¿ya entró a reparto? o se envió el 1099'
              }
              type={'checkbox'}
            />
            <SelectSection
              name={'tipoBien'}
              title={'Bien'}
              options={[
                'BANCOS',
                'VEHICULO',
                'INMUEBLE',
                'SALARIO',
                'ESTABLECIMIENTO'
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
            <InputSection
              name={'vencimientoPagare'}
              title={'vencimiento del pagare'}
              type={'date'}
              rls={{ required: true }}
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