'use client';
import React, { useEffect,
                useState } from 'react';
import { DefaultValues,
         FormProvider,
         FormState,
         SubmitHandler,
         useForm } from 'react-hook-form';
import form from '#@/components/form/form.module.scss';

import { InputSection } from '#@/components/form/InputSection';
import { IntCarpeta,
         MonCarpeta,
         carpetaConvert } from '#@/lib/types/demandados';
import { ObligacionesArray } from './obligaciones-array';
import typography from '#@/styles/fonts/typography.module.scss';
import { SelectSection } from '#@/components/form/SelectSection';


export function EditProceso(
  {
    uri,
    carpeta
  }: {
  uri: string;
  carpeta: MonCarpeta;
}
) {
  const defaultValues: DefaultValues<IntCarpeta> = carpetaConvert.toIntCarpeta(
    carpeta
  );

  const methods = useForm<IntCarpeta>(
    { defaultValues }
  );

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
  > = async (
    data
  ) => {
    alert(
      JSON.stringify(
        uri + dirtyFields
      )
    );
    alert(
      JSON.stringify(
        data
      )
    );

    const postNewNote = await fetch(
      `${ uri }/api/Carpetas`,
      {
        method : 'PUT',
        headers: { 'content-type': 'application/json' },
        body   : JSON.stringify(
          data
        )
      }
    );

    if ( postNewNote.status === 201 ) {
      const message = await postNewNote.text();
      alert(
        message
      );
    }

    if ( postNewNote.status === 200 ) {
      const result = await postNewNote.json();
      alert(
        JSON.stringify(
          result
        )
      );
    }

    if ( postNewNote.status === 304 ) {
      alert(
        'nothing updated'
      );
    }
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
            <InputSection name={ 'capitalAdeudado' } title={ 'Capital Adeudado' } type={ 'number' } rls={{
              required: true,
              min     : 1000000
            } } />
            <SelectSection name={'clase'} title={ 'clase' } options={[
              'EmbargoVehiculo',
              'EmbargoInmueble',
              'EmbargoSalario',
              'EmbargoCuentasBancarias',
              'EmbargoEstablecimientoComercial'
            ] } />
            <section className={ form.section }>
              <SelectSection name={ 'demanda.departamento' } title={ 'Departamento' } options={ [
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
              ] } />
              <section className={form.section}>
                <InputSection name={ 'demanda.juzgado.origen.id' } title={ 'despacho numero' } type={ 'number' } rls={ { required: true } } />
                <SelectSection name={ 'demanda.juzgado.origen.tipo' } title={ 'tipo de despacho' } options={ [
                  'Civil Municipal de Ejecucion',
                  'Civil Municipal',
                  'Promiscuo Municipal',
                  'Pequeñas Causas y Competencias Multiples'
                ] } />
                <InputSection name={ 'demanda.juzgado.origen.url' } title={ 'link' } type={ 'url' } rls={{ required: true }} />
              </section>
              <InputSection name={ 'demanda.municipio' } title={ 'Municipio' } type={ 'text' } rls={ { required: true } } />
              <InputSection name={ 'demanda.radicado' } title={ 'Radicado'} type={'text'} />
            </section>
            <section className={ form.section }>
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
            <InputSection name={ 'entregaGarantiasAbogado' } title={ 'Entrega de las garantias al abogado' } type={ 'date' } rls={ { required: true } } />
            <SelectSection name={ 'etapaProcesal' } title={ 'Etapa Procesal' } options={ [
              'EJECUCION',
              'CONTESTACION DEMANDA',
              'EMPLAZAMIENTO',
              'ADMISION DE LA DEMANDA'
            ] } />
            <InputSection name={ 'fechaIngreso' } title={ 'Fecha en que ingresa el proceso al sistema de RyS' } type={ 'date' } rls={ { required: true } } />
            <SelectSection name={ 'grupo' } title={ 'Grupo al que pertenece' } options={ [
              'Bancolombia',
              'Reintegra',
              'Lios Juridicos',
              'Terminados'
            ] } />
            <InputSection name={ 'llaveProceso' } title={ 'llaveProceso' } type={ 'text' } rls={{
              required : true,
              maxLength: 23,
              minLength: 23
            }} />
            <InputSection
              name={'numero'}
              title={'Carpeta numero'}
              type={'number'}
              rls={{ required: true }}
            />
            <ObligacionesArray />
            <InputSection name={ 'reparto' } title={ '¿ya entró a reparto? o se envió el 1099' } type={ 'checkbox' }  />
            <SelectSection name={ 'tipoBien' } title={ 'Bien' } options={ [
              'BANCOS',
              'VEHICULO',
              'INMUEBLE',
              'SALARIO',
              'ESTABLECIMIENTO'
            ] } />
            <SelectSection name={ 'tipoProceso' } title={ 'Proceso del Tipo' } options={ [
              'SINGULAR',
              'HIPOTECARIO',
              'PRENDARIO'
            ] } />
            <InputSection name={ 'vencimientoPagare' } title={ 'vencimiento del pagare' } type={ 'date' } rls={{ required: true }} />
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
}
