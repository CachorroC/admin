'use client';
import { IntCarpeta } from '#@/lib/types/demandados';
import { UseFormRegister, useFormContext } from 'react-hook-form';
import form from '#@/components/form/form.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';

export function NuevoAvaluoSection () {
  const {
    register
  } = useFormContext();

  return (
    <section className={form.section}>
      <h4 className={ `${ form.title } ${ typography.displaySmall }` }>Avaluo</h4>
      <section className={form.section}>
        <label className={form.label} htmlFor='Avaluo.Adjudicacion.Fecha'>Fecha de adjudicación del avaluo</label>
        <input
          className={form.textArea}
          type='date'
          placeholder='Avaluo.Adjudicacion.Fecha'
          {...register(
            'Avaluo.Adjudicacion.Fecha',
            {
              required: false
            }
          )}
        />

      </section>
      <section className={form.section}>
        <label className={form.label} htmlFor='Avaluo.Remate.Fecha'>Fecha del remate</label>
        <input
          className={form.textArea}
          type='date'
          placeholder='Avaluo.Remate.Fecha'
          {...register(
            'Avaluo.Remate.Fecha',
            {
              required: false
            }
          )}
        />

      </section>
      <section className={form.section}>
        <label className={form.label} htmlFor='Avaluo.Valor'>Valor del Avaluo</label>
        <input
          className={form.textArea}
          type='number'
          placeholder='Avaluo.Valor'
          {...register(
            'Avaluo.Valor',
            {
              required: false
            }
          )}
        />
      </section>
    </section>
  );
}
