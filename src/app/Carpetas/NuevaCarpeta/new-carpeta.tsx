'use client';
import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
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
import { usePrettyPrintedState } from '#@/hooks/usePrettyPrintedState';
import { sleep } from '#@/lib/fix';

const defaultValues: IntCarpeta = {
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
    uri, carpeta
  }: { uri: string; carpeta? : MonCarpeta | IntCarpeta | intFecha }
) {
  const [
    value,
    setValue
  ] = usePrettyPrintedState();
  const values = carpeta ?? defaultValues;

  const methods = useForm<IntCarpeta>(
    {
      defaultValues: defaultValues
    }
  );

  const {
    register,
    handleSubmit,
    formState
  } = methods;

  const onSubmit = async (
    data: IntCarpeta
  ) => {
    alert(
      JSON.stringify(
        data
      )
    );
    await sleep(
      2000
    );

    const postNewNote = await fetch(
      `${ uri }/api/Carpetas`,
      {
        method : 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(
          data
        )
      }
    ).then(
      (
        fullfilled
      ) => {
        alert(
          fullfilled.status
        );

        return fullfilled;
      }
    );
    const responsePostNewNote = await postNewNote.json();
    alert(
      responsePostNewNote
    );

    return responsePostNewNote;
  };

  useEffect(
    () => {
      console.log(
        'touchedFields',
        formState.touchedFields
      );
      console.log(
        'Dirty',
        formState.dirtyFields
      );
      console.log(
        'submitCound',
        formState.submitCount
      );
      console.log(
        'isValid',
        formState.isValid
      );
      console.log(
        'errors',
        formState.errors
      );
    },
    [
      formState
    ]
  ); // use entire formState object as optional array arg in useEffect, not individual properties of it



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
            <section className={form.section}>
              <label className={form.label} htmlFor='Numero'>Carpeta número</label>
              <input
                className={form.textArea}
                type='number'
                placeholder='Numero de carpeta'
                {...register(
                  'Numero',
                  {
                    required: true
                  }

                )}/>
            </section>
            <section className={form.section}>
              <label className={form.label} htmlFor='idProceso'>idProceso</label>
              <input
                className={form.textArea}
                type='number'
                placeholder='idProceso'
                {...register(
                  'idProceso',
                  {
                    required: true
                  }
                )}
              />

            </section>
            <section className={form.section}>
              <label className={form.label} htmlFor='llaveProceso'>expediente</label>
              <input
                className={form.textArea}
                type='text'
                placeholder='llaveProceso'
                {...register(
                  'llaveProceso',
                  {
                    minLength: 23
                  }
                )}
              />
            </section>

            <NuevoDeudorSection  />
            <NuevoCodeudorSection  />
            <NuevaDemandaSection  />
            <NuevasNotificacionesSection  />
            <NuevasMedidasCautelaresSection  />
            <NuevaEtapaProcesalSection  />
            <NuevoAvaluoSection  />
            <NuevaSuspencionProcesoSection  />
            <NuevaTerminacionSection  />
            <NuevaLiquidacionSection  />


            <section className={form.section}>
              <input
                className={form.textArea}
                type='submit'
              />
            </section>
          </form>
        </div>
      </FormProvider>
      {value}
    </>
  );
}