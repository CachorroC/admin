'use client';
import React, { useEffect, useState } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { IntCarpeta } from '#@/lib/types/carpeta';
import  form  from '#@/components/form/form.module.css';
import { Despacho } from '#@/lib/types/despachos';
import { Accordion } from '#@/components/Accordion';
let renderCount = 0;

export default function Fields(
  {
    options
  }: {options: Despacho[]}
) {
  const [
    despachoSelected,
    setDespachoSelected
  ] = useState<Despacho>();

  const {
    register, control, setValue, getValues
  } = useFormContext<IntCarpeta>();

  const {
    fields, append, remove, prepend
  } = useFieldArray(
    {
      control,
      name: 'demanda.juzgado'
    }
  );

  renderCount++;

  return (
    <>
      <ul>
        {fields.map(
          (
            item, index
          ) => {
            return (
              <section className={ form.section } key={ item.id }>
                <h2 className={form.label}>
                  {index === 0
                    ? 'Juzgado de Origen'
                    : 'Juzgado de Ejecucion'}
                </h2>
                <section className={form.section}>
                  <label className={form.label} htmlFor={`demanda.juzgado.${ index }.id`}>Juzgado número</label>
                  <input type={'number'} {...register(
                    `demanda.juzgado.${ index }.id`
                  )} />

                </section>

                <section className={ form.section }>

                  <label className={form.label} htmlFor={`demanda.juzgado.${ index }.id`}>Juzgado número</label>
                  <select  {...register(
                    `demanda.juzgado.${ index }.tipo`
                  ) } >
                    { options.map(
                      (
                        option, i
                      ) => {
                        return (
                          <option
                            value={option.url}
                            key={index}
                          >
                            {option.nombre}
                          </option>
                        );
                      }
                    )}
                  </select>


                </section>
                <section className={form.section}>
                  <label className={form.label} htmlFor={`demanda.juzgado.${ index }.url`}>url</label>

                  <input type={ 'text' } { ...register(
                    `demanda.juzgado.${ index }.url`
                  )} />

                </section>

                <section className={ form.section }>
                  <Accordion>

                    { options.map(
                      (
                        option, i
                      ) => {
                        return (
                          <button type={'button'} key={i} onClick={ () => {
                            setValue(
                              'demanda.juzgado', [
                                ...( getValues().demanda.juzgado || [] ),
                                {
                                  tipo: option.nombre,
                                  id  : Number(
                                    option.nombre.replace(
                                      /[^0-9]/g, ''
                                    )
                                  ),
                                  url: `https://www.ramajudicial.gov.co${ option.url }`
                                }
                              ]
                            );
                          }}>
                            <h2>{option.especialidad}</h2>
                            <p>{option.nombre}</p>
                          </button>
                        );
                      }
                    ) }

                  </Accordion>
                </section>
                <button type="button" onClick={() => {
                  return remove(
                    index
                  );
                }}>
                Delete
                </button>

              </section>
            );
          }
        )}
      </ul>

      <section>
        <button
          type="button"
          onClick={() => {
            append(
              {
                tipo: 'Civil Municipal',
                id  : 0,
                url : 'https://ramajudicial.gov.co'
              }
            );
          }}
        >
          append
        </button>

        <button
          type="button"
          onClick={() => {
            setValue(
              'demanda.juzgado', [
                ...( getValues().demanda.juzgado || [] ),
                {
                  tipo: 'Civil Municipal',
                  id  : 0,
                  url : 'https://ramajudicial.gov.co'
                }
              ]
            );
          }}
        >
          Append Nested
        </button>

        <button
          type="button"
          onClick={() => {
            prepend(
              {
                tipo: 'Civil Municipal',
                id  : 0,
                url : 'https://ramajudicial.gov.co'
              }
            );
          }}
        >
          prepend
        </button>

        <button
          type="button"
          onClick={() => {
            setValue(
              'demanda.juzgado', [
                {
                  tipo: 'Civil Municipal',
                  id  : 0,
                  url : 'https://ramajudicial.gov.co'
                },
                ...( getValues().demanda.juzgado || [] )
              ]
            );
          }}
        >
          prepend Nested
        </button>
      </section>

      <span className="counter">Render Count: {renderCount}</span>
    </>
  );
}
