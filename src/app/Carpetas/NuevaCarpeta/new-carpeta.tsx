'use client';
import React, { useEffect, useState } from 'react';
import { DefaultValues, FormProvider, FormState, SubmitHandler, useForm } from 'react-hook-form';
import form from '#@/components/form/form.module.scss';
import { IntCarpeta,
         MonCarpeta,
         carpetaConvert,
         intFecha } from '#@/lib/types/demandados';
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
import { InputSection } from '#@/components/form/InputSection';
import { updateCarpeta } from '#@/lib/Carpetas/update';
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


  const [
    values,
    setValues
  ] = useState(
    defaultValues
  );

  if ( carpeta ) {
    const givenCarpeta =  carpetaConvert.toIntCarpeta(
      carpeta
    );
    setValues(
      givenCarpeta
    );
  }



  const methods = useForm<IntCarpeta>(
    {
      defaultValues: values,
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

        formState.dirtyFields
      )
    );
    alert(
      JSON.stringify(
        data
      )
    );

    await sleep(
      2000
    );

    const updated = await updateCarpeta(
      {
        carpeta: data
      }
    );

    alert(
      `updated count: ${ updated.matchedCount }`
    );

    alert(
      `modified count: ${ updated.modifiedCount }`
    );

    alert(
      `updated count: ${ updated.upsertedCount }`
    );

    alert(
      `updated count: ${ updated.upsertedId }`
    );

    /*   const postNewNote = await fetch(
      `${ uri }/api/Carpetas${ carpeta && `?_id=${ carpeta._id }` }`,
      {
        method : 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(
          formState.dirtyFields
        )
      }
    );

 */
    alert(
      JSON.stringify(
        data.Deudor.PrimerNombre
      )
    );

  };


  return (
    <>
      <FormProvider {...methods}>
        <div className={ form.container }>
          <form
            className={form.form}
            onSubmit={handleSubmit(
              onSubmit
            ) }>
            <section className={form.section}>
              <input
                className={form.textArea}
                type='submit'
              />
            </section>
            <InputSection name={ 'Numero' } title={ 'Carpeta numero' } type={ 'number' } rls={{
              required: true
            }} />
            <InputSection name={ 'idProceso' } title={ 'idProceso' } type={ 'number' } rls={{
              required: true
            }} />
            <InputSection name={'llaveProceso'} title={'Expediente judicial'} type={'text'} rls={{
              required : true,
              minLength: 23
            }} />
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
