import React, { Fragment } from 'react';
import { useFieldArray,
         useFormContext } from 'react-hook-form';
import form from '#@/components/form/form.module.scss';
import { IntCarpeta } from '#@/lib/types/carpeta';
let renderCount = 0;

export function JuzgadosArray() {
  const {
    register,
    control,
    setValue,
    getValues
  } = useFormContext<IntCarpeta>();

  const {
    fields, append, remove, prepend
  }
    = useFieldArray(
      {
        name: 'demanda.juzgado',
        control
      }
    );

  renderCount++;

  return (
    <>
      {fields.map(
        (
          item, index
        ) => {
          return (
            <Fragment key={item.id}>
              <section
                key={item.id}
                className={form.section}
              >
                <label
                  className={form.label}
                  htmlFor={`demanda.juzgado.${ index }.tipo`}
                >
                Obligacion 1
                </label>
                <input
                  className={form.textArea}
                  type='text'
                  placeholder={`demanda.juzgado.${ index }.tipo`}
                  {...register(
                  `demanda.juzgado.${ index }.tipo` as const
                  )}
                />
                <button
                  type='button'
                  onClick={() => {
                    return remove(
                      index
                    );
                  }}
                >
                Delete
                </button>
              </section>
              <section
                key={item.id}
                className={form.section}
              >
                <label
                  className={form.label}
                  htmlFor={`demanda.juzgado.${ index }.id`}
                >
                Obligacion 1
                </label>
                <input
                  className={form.textArea}
                  type='number'
                  placeholder={`demanda.juzgado.${ index }.id`}
                  {...register(
                  `demanda.juzgado.${ index }.id` as const,
                  {
                    required: false
                  }
                  )}
                />
                <button
                  type='button'
                  onClick={() => {
                    return remove(
                      index
                    );
                  }}
                >
                Delete
                </button>
              </section>
              <section
                key={item.id}
                className={form.section}
              >
                <label
                  className={form.label}
                  htmlFor={`demanda.juzgado.${ index }.url`}
                >
                Obligacion 1
                </label>
                <input
                  className={form.textArea}
                  type='number'
                  placeholder={`demanda.juzgado.${ index }.url`}
                  {...register(
                    `demanda.juzgado.${ index }.url` as const,
                    {
                      required: false
                    }
                  )}
                />
                <button
                  type='button'
                  onClick={() => {
                    return remove(
                      index
                    );
                  }}
                >
                Delete
                </button>
              </section>
            </Fragment>
          );
        }
      )}

      <section className={form.section}>
        <button
          type='button'
          onClick={() => {
            append(
              {
                id  : 0,
                tipo: 'juzgado',
                url : 'https://www.ramajudicial.gov.co/'
              }
            );
          }}
        >
          append
        </button>
      </section>

      <span className='counter'>
        Render Count: {renderCount}
      </span>
    </>
  );
}
