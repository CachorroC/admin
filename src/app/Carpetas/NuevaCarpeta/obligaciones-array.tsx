import React, { Fragment } from 'react';
import {
  useFieldArray,
  useFormContext
} from 'react-hook-form';
import form from '#@/components/form/form.module.scss';
import { IntCarpeta } from '#@/lib/types/demandados';
let renderCount = 0;

export function ObligacionesArray() {
  const {
    register,
    control,
    setValue,
    getValues
  } = useFormContext<IntCarpeta>();

  const { fields, append, remove, prepend } =
    useFieldArray({
      name: 'obligacion',
      control
    });

  renderCount++;

  return (
    <>
      {fields.map((item, index) => {
        return (
          <Fragment key={item.id}>
            <section
              key={item.id}
              className={form.section}
            >
              <label
                className={form.label}
                htmlFor={`obligacion.${index}.texto`}
              >
                Obligacion 1
              </label>
              <input
                className={form.textArea}
                type='text'
                placeholder={`obligacion.${index}.texto`}
                {...register(
                  `obligacion.${index}.texto` as const
                )}
              />
              <button
                type='button'
                onClick={() => {
                  return remove(index);
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
                htmlFor={`obligacion.${index}.tipo`}
              >
                Obligacion 1
              </label>
              <input
                className={form.textArea}
                type='text'
                placeholder={`obligacion.${index}.tipo`}
                {...register(
                  `obligacion.${index}.tipo` as const,
                  {
                    required: false
                  }
                )}
              />
              <button
                type='button'
                onClick={() => {
                  return remove(index);
                }}
              >
                Delete
              </button>
            </section>
          </Fragment>
        );
      })}

      <section className={form.section}>
        <button
          type='button'
          onClick={() => {
            append({
              texto: 'obligacion',
              tipo: 'obligacion'
            });
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
