'use client';
import { Accordion } from '#@/components/Accordion';
import { IntCarpeta } from '#@/lib/types/demandados';
import { UseFormRegister, useFormContext } from 'react-hook-form';
import form from '#@/components/form/form.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';

export function NuevaTerminacionSection() {
  const {
    register
  } = useFormContext<IntCarpeta>();

  return (

    <section className={form.section}>
      <h3 className={`${ form.title } ${ typography.displayMedium }`}>
        Terminacion
      </h3>
      <Accordion>

        <section className={form.section}>
          <label
            className={form.label}
            htmlFor='Terminacion.Causal'>
          Causal de Terminacion
          </label>
          <input
            className={form.textArea}
            type='text'
            placeholder='Terminacion.Causal'
            {...register(
              'Terminacion.Causal',
              {
                required: false
              }
            )}
          />
        </section>
        <section className={form.section}>
          <label
            className={form.label}
            htmlFor='Terminacion.Fecha'>
          Fecha de la Terminacion
          </label>
          <input
            className={form.textArea}
            type='date'
            placeholder='Terminacion.Fecha'
            {...register(
              'Terminacion.Fecha',
              {
                required: false
              }
            )}
          />
        </section>
      </Accordion>
    </section>
  );
}
