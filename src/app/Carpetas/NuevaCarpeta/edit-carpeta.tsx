'use client';
import React, {
  useEffect,
  useState
} from 'react';
import {
  DefaultValues,
  FormProvider,
  FormState,
  SubmitHandler,
  useForm
} from 'react-hook-form';
import form from '#@/components/form/form.module.scss';
import { NuevoDeudorSection } from '#@/app/Carpetas/NuevaCarpeta/nuevo-deudor';
import { NuevaDemandaSection } from '#@/app/Carpetas/NuevaCarpeta/nueva-demanda';
import { NuevaEtapaProcesalSection } from '#@/app/Carpetas/NuevaCarpeta/nueva-etapaProcesal';
import { NuevaLiquidacionSection } from '#@/app/Carpetas/NuevaCarpeta/nueva-liquidacion';
import { NuevasMedidasCautelaresSection } from '#@/app/Carpetas/NuevaCarpeta/nuevas-medidasCautelares';
import { NuevoAvaluoSection } from '#@/app/Carpetas/NuevaCarpeta/nuevo-avaluo';
import { NuevoCodeudorSection } from '#@/app/Carpetas/NuevaCarpeta/nuevo-codeudor';
import { NuevasNotificacionesSection } from '#@/app/Carpetas/NuevaCarpeta/nuevas-notificaciones';
import { NuevaSuspencionProcesoSection } from './nueva-suspencionProceso';
import { NuevaTerminacionSection } from '#@/app/Carpetas/NuevaCarpeta/nueva-terminacion';

import { InputSection } from '#@/components/form/InputSection';
import {
  IntCarpeta,
  MonCarpeta
} from '#@/lib/types/demandados';
import { ObligacionesArray } from './obligaciones-array';
import typography from '#@/styles/fonts/typography.module.scss';
type UnknownArrayOrObject =
  | unknown[]
  | Record<string, unknown>;

export function EditProceso({
  uri,
  carpeta
}: {
  uri: string;
  carpeta: MonCarpeta;
}) {
  const methods = useForm<IntCarpeta>({
    defaultValues: carpeta
  });

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
  > = async (data) => {
    alert(JSON.stringify(uri + dirtyFields));
    alert(JSON.stringify(data));

    const postNewNote = await fetch(
      `${uri}/api/Carpetas`,
      {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      }
    );

    if (postNewNote.status === 201) {
      const message = await postNewNote.text();
      alert(message);
    }

    if (postNewNote.status === 200) {
      const result = await postNewNote.json();
      alert(JSON.stringify(result));
    }

    if (postNewNote.status === 304) {
      alert('nothing updated');
    }
  };

  return (
    <>
      <FormProvider {...methods}>
        <div className={form.container}>
          <form
            className={form.form}
            onSubmit={handleSubmit(onSubmit)}
          >
            <section className={form.section}>
              <input
                className={form.textArea}
                type='submit'
              />
            </section>
            <p>{submitCount && submitCount}</p>
            <p>
              {isSubmitted
                ? 'submitted'
                : 'not submitted'}
            </p>
            <p>
              {isSubmitting
                ? 'submitting'
                : 'submitted'}
            </p>
            <p>
              {isSubmitSuccessful
                ? 'submit successful'
                : 'not submit successful'}{' '}
            </p>
            <p>
              {isLoading ? 'loading' : 'loaded'}
            </p>
            <p>
              {errors && JSON.stringify(errors)}
            </p>
            <InputSection
              name={'numero'}
              title={'Carpeta numero'}
              type={'number'}
              rls={{
                required: true
              }}
            />

            <InputSection
              name={'llaveProceso'}
              title={'Expediente judicial'}
              type={'text'}
              rls={{
                required: true,
                minLength: 23
              }}
            />
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
                name={'deudor.segundoApellido'}
                title={'segundo apellido'}
                type={'text'}
              />
              <InputSection
                name={'deudor.cedula'}
                title={'Cedula de Ciudadania'}
                type={'nuumber'}
              />
              <InputSection
                name={'deudor.email'}
                title={'Correo electrónico'}
                type={'text'}
                rls={{
                  required: false,
                  pattern: /^\S+@\S+$/i
                }}
              />
              <InputSection
                name={'deudor.tel.fijo'}
                title={'Telefono fijo'}
                type={'tel'}
                rls={{
                  required: false,
                  maxLength: 10,
                  minLength: 10
                }}
              />
              <InputSection
                name={'deudor.tel.celular'}
                title={'Telefono celular'}
                type={'tel'}
                rls={{
                  required: false,
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
            <NuevoCodeudorSection />
            <NuevaDemandaSection />
            <ObligacionesArray />
            <InputSection
              name={'vencimientoPagare'}
              title={'Vencimiento pagare'}
              type={'date'}
              rls={{
                required: true
              }}
            />
            <InputSection
              name={'capitalAdeudado'}
              title={'capital adeudado'}
              type={'number'}
              rls={{
                required: true
              }}
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
                {...register('tipoProceso', {
                  required: true
                })}
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
            <InputSection
              name={'entregaGarantiasAbogado'}
              title={
                'Entrega de garantias abogado'
              }
              type={'date'}
              rls={{
                required: true
              }}
            />
            <InputSection
              name={'grupo'}
              title={
                'Es de bancolombia o reintegra o lios juridicos'
              }
              type={'text'}
              rls={{
                required: true
              }}
            />
            <InputSection
              name={'fechaIngreso'}
              title={
                'fecha de ingreso del deudor al sistema de RyS'
              }
              type={'date'}
              rls={{
                required: true
              }}
            />
            <InputSection
              name={'reparto'}
              title={'¿Ya se envió aa reparto?'}
              type={'checkbox'}
              rls={{
                required: true
              }}
            />
            <section className={form.section}>
              <label
                className={form.label}
                htmlFor='etapaProcesal'
              >
                Tipo de proceso
              </label>
              <select
                className={form.textArea}
                {...register('etapaProcesal', {
                  required: true
                })}
              >
                <option value='EMPLAZAMIENTO'>
                  emplazamiento
                </option>
                <option value='EJECUCION'>
                  ejecucion
                </option>
                <option value='CONTESTACION DEMANDA'>
                  contestacion demanda
                </option>
                <option value='ADMISION DE LA DEMANDA'>
                  admision demanda
                </option>
              </select>
            </section>
            <section className={form.section}>
              <label
                className={form.label}
                htmlFor='clase'
              >
                Tipo de proceso
              </label>
              <select
                className={form.textArea}
                {...register('clase', {
                  required: true
                })}
              >
                <option value='INMUEBLE'>
                  inmueble
                </option>
                <option value='VEHICULO'>
                  vehiculo
                </option>
                <option value='CUENTABANCARIA'>
                  cuenta bancaria
                </option>
                <option value='SALARIO'>
                  salario
                </option>
                <option value='ESTABLECIMIENTOCOMERCIAL'>
                  establecimiento comercial
                </option>
              </select>
            </section>
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
}
