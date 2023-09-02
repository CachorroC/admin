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
import typography from '#@/styles/fonts/typography.module.scss';
import { SelectSection } from '#@/components/form/SelectSection';
import { ReactNode } from 'react';
import { getCarpetaById } from '#@/lib/Carpetas';
import Fields from './fieldArray-juzgados';
import { Despacho } from '#@/lib/types/despachos';
import { NuevaCarpetaProvider } from '#@/hooks/formContext';
import { InputSection } from '#@/components/form/InputSection';
import layout from '#@/styles/layout.module.css';
let renderCount = 0;

const defaultValues: DefaultValues<IntCarpeta> = {
  category    : 'Bancolombia',
  categoryTag : 1,
  llaveProceso: '00000000000000000000000',
  numero      : 574,
  tipoProceso : 'SINGULAR',
  deudor      : {
    cedula         : 1022352429,
    primerApellido : 'primerApellido',
    primerNombre   : 'primerNombre',
    segundoNombre  : 'segundoNombre',
    segundoApellido: 'segundoApellido',
    email          : 'ejemplo@gmail.com',
    direccion      : 'carrera 63 # 22 - 31',
    tel            : {
      fijo   : 6016051567,
      celular: 3506144932
    }
  },
  demanda: {
    entregagarantiasAbogado: new Date(),
    municipio              : 'Bogota',
    radicado               : '000 - 00000',
    etapaProcesal          : 'ADMISION DE LA DEMANDA',
    vencimientoPagare      : new Date(),
    fechaPresentacion      : new Date(),
    capitalAdeudado        : 10000000,
    expediente             : '00000000000000000000000',
    obligacion             : [
      '1772345678',
      654567890
    ],
    departamento: {
      descripcion           : 'CUNDINAMARCA',
      idCatalogoDetallePadre: 1,
      idCatalogoDetalle     : 13,
      codigo                : '25'
    }
  }
};

export const NuevoProceso = (
  {
    despachos,
    carpeta
  }: {
  despachos: Despacho[];
  carpeta?: IntCarpeta;
}
) => {
  const methods = useForm<IntCarpeta>(
    {
      defaultValues,
      values          : carpeta,
      shouldFocusError: true
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
    data, e
  ) => {
    alert(
      JSON.stringify(
        e
      )
    );
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

    const newCarpeta: IntCarpeta = {
      ...carpeta,
      ...data
    };

    const postNewNote = await fetch(
      `/api/Carpetas/${ data.llaveProceso }`,
      {
        method : 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          newCarpeta
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
    <>
      <NuevaCarpetaProvider>
        <FormProvider {...methods}>
          <div className={layout.name}>
            <h1
              className={typography.titleMedium}>
              {carpeta?.deudor.primerNombre
                ?? defaultValues.deudor
                      ?.primerNombre}
            </h1>
          </div>
          <div className={layout.right}>
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
              <span>{'numero'}</span>
            </button>
            <button
              type={'button'}
              className={form.addButton}
              onClick={() => {
                setFocus(
                  'category', {
                    shouldSelect: true
                  }
                );
              }}>
              <span>{'categoria'}</span>
            </button>
            <button
              type={'button'}
              className={form.addButton}
              onClick={() => {
                setFocus(
                  'llaveProceso', {
                    shouldSelect: true
                  }
                );
              }}>
              <span>{'expediente'}</span>
            </button>
            <button
              type={'button'}
              className={form.addButton}
              onClick={() => {
                setFocus(
                  'tipoProceso', {
                    shouldSelect: true
                  }
                );
              }}>
              <span>{'tipo de proceso'}</span>
            </button>
            <button
              type={'button'}
              className={form.addButton}
              onClick={() => {
                setFocus(
                  'deudor.primerNombre', {
                    shouldSelect: true
                  }
                );
              }}>
              <span>{'nombre'}</span>
            </button>
            <button
              type={'button'}
              className={form.addButton}
              onClick={() => {
                setFocus(
                  'deudor.segundoNombre', {
                    shouldSelect: true
                  }
                );
              }}>
              <span>{'segundo nombre'}</span>
            </button>
          </div>

          <div className={layout.left}>
            <div className={form.container}>
              <form
                className={form.form}
                onSubmit={handleSubmit(
                  onSubmit
                )}>
                <section className={form.section}>
                  <section
                    className={form.section}>
                    <h3
                      className={
                        typography.displaySmall
                      }>
                      {'Deudor'}
                    </h3>
                    <InputSection
                      name={'deudor.primerNombre'}
                      title={'Primer Nombre'}
                      type={'text'}
                      rls={{
                        required: true
                      }}
                    />
                    <InputSection
                      key={'deudor.segundoNombre'}
                      name={
                        'deudor.segundoNombre'
                      }
                      title={'Segundo Nombre'}
                      type={'text'}
                      rls={{
                        required: false
                      }}
                    />
                    <InputSection
                      name={
                        'deudor.primerApellido'
                      }
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
                    <InputSection
                      name={'deudor.cedula'}
                      title={
                        'Cédula de Ciudadanía'
                      }
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
                    <section
                      className={form.section}>
                      <InputSection
                        name={
                          'deudor.tel.celular'
                        }
                        title={'celular'}
                        type={'tel'}
                      />
                      <InputSection
                        name={'deudor.tel.fijo'}
                        title={'fijo'}
                        type={'tel'}
                      />
                    </section>
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
                      required: true,
                      pattern : /\d{23}/g
                    }}
                    type={'text'}
                  />

                  <Fields options={despachos} />

                  <SelectSection
                    name={'category'}
                    title={
                      'Grupo al que pertenece'
                    }
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
                  <section
                    className={form.section}>
                    <InputSection
                      name={'demanda.radicado'}
                      title={'Radicado'}
                      type={'text'}
                      rls={{
                        required: true,
                        pattern:
                          /\d{4}\s-\s\d{5}/g
                      }}
                    />
                    <InputSection
                      name={
                        'demanda.capitalAdeudado'
                      }
                      title={'Capital Adeudado'}
                      type={'number'}
                      rls={{
                        required: true
                      }}
                    />
                    <InputSection
                      name={
                        'demanda.entregagarantiasAbogado'
                      }
                      title={
                        'Entrega de Garantias'
                      }
                      type={'date'}
                    />
                    <InputSection
                      name={
                        'demanda.etapaProcesal'
                      }
                      title={'etapa procesal'}
                      type={'text'}
                    />
                    <InputSection
                      name={
                        'demanda.fechaPresentacion'
                      }
                      title={
                        'fecha de presentacion de la demanda'
                      }
                      type={'date'}
                    />
                    <InputSection
                      name={'demanda.municipio'}
                      title={'Municipio'}
                      type={'textarea'}
                    />
                    <InputSection
                      name={
                        'demanda.obligacion.1'
                      }
                      title={'Obligacion'}
                      type={'text'}
                    />
                    <InputSection
                      name={
                        'demanda.obligacion.2'
                      }
                      title={'Obligacion'}
                      type={'text'}
                    />
                    <InputSection
                      name={
                        'demanda.vencimientoPagare'
                      }
                      title={
                        'Vencimiento del pagaré'
                      }
                      type={'date'}
                    />
                  </section>
                </section>
                <button
                  type='submit'
                  className={form.button}>
                  <sub
                    className={
                      typography.labelSmall
                    }>
                    Enviar
                  </sub>
                  <span className='material-symbols-outlined'>
                    send
                  </span>
                </button>
                <section className={form.section}>
                  <section
                    className={form.section}>
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
                  <section
                    className={form.section}>
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
                  <section
                    className={form.section}>
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
                  <section
                    className={form.section}>
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
                  <section
                    className={form.section}>
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
                  <section
                    className={form.section}>
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
                  <section
                    className={form.section}>
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
          </div>
        </FormProvider>
      </NuevaCarpetaProvider>
    </>
  );
};
