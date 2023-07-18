'use client';
import React, { useEffect, useState } from 'react';
import { DefaultValues,
         FormProvider,
         FormState,
         SubmitHandler,
         useForm } from 'react-hook-form';
import form from '#@/components/form/form.module.scss';
import { IntCarpeta, MonCarpeta, intFecha } from '#@/lib/types/demandados';
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
type UnknownArrayOrObject = unknown[] | Record<string, unknown>;

const defaultValues: DefaultValues<IntCarpeta> = {
  Numero : 501,
  Demanda: {
    Departamento: 'CUNDINAMARCA',
    Municipio   : 'Bogotá',
    Radicado    : '2023 - 00000',
    Proceso     : {
      Tipo: 'PRENDARIO'
    },
    Juzgado: {
      Origen: {
        id : '001 Cm',
        url: 'https://app.rsasesorjuridico.com'
      }
    },
    Ubicacion: {
      Juzgado: 'Juzgados Carrera décima'
    }
  },
  Deudor: {
    PrimerNombre  : 'Pepito',
    PrimerApellido: 'Perez'
  },
  idProceso   : 0,
  llaveProceso: '00000000000000000000000'
};

export function NuevoProceso(
  {
    uri,
    carpeta
  }: {
  uri: string;
  carpeta?: MonCarpeta | intFecha;
}
) {
  const methods = useForm<IntCarpeta>(
    {
      defaultValues: carpeta ?? defaultValues
    }
  );

  const {
    register, handleSubmit, formState, control
  } = methods;

  const onSubmit: SubmitHandler<IntCarpeta> = async (
    data
  ) => {
    alert(
      JSON.stringify(
        uri + formState.dirtyFields
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
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(
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
            )}>
            <section className={form.section}>
              <input
                className={form.textArea}
                type='submit'
              />
            </section>
            <p>{formState.submitCount && formState.submitCount}</p>
            <p>{formState.isSubmitted
              ? 'submitted'
              : 'not submitted'}</p>
            <p>{formState.isSubmitting
              ? 'submitting'
              : 'submitted'}</p>
            <p>
              {formState.isSubmitSuccessful
                ? 'submit successful'
                : 'not submit successful'}{' '}
            </p>
            <p>{formState.isLoading
              ? 'loading'
              : 'loaded'}</p>
            <p>{formState.errors && JSON.stringify(
              formState.errors
            )}</p>
            <InputSection
              name={'Numero'}
              title={'Carpeta numero'}
              type={'number'}
              rls={{
                required: true
              }}
            />
            <InputSection
              name={'idProceso'}
              title={'idProceso'}
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
                required : true,
                minLength: 23
              }}
            />
            <NuevoDeudorSection />
            <NuevoCodeudorSection />
            <NuevaDemandaSection />
            <NuevasNotificacionesSection />
            <NuevasMedidasCautelaresSection />
            <NuevaEtapaProcesalSection />
            <NuevoAvaluoSection />
            <NuevaSuspencionProcesoSection />
            <NuevaTerminacionSection />
            <NuevaLiquidacionSection />
          </form>

          <pre>{JSON.stringify(
            formState,
            null,
            2
          )}</pre>
        </div>
      </FormProvider>
    </>
  );
}
