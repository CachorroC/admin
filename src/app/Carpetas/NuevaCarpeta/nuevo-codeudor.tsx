'use client';
import form from '#@/components/form/form.module.scss';
import { IntCarpeta } from '#@/lib/types/demandados';
import { UseFormRegister, useFormContext } from 'react-hook-form';
import typography from '#@/styles/fonts/typography.module.scss';

export function NuevoCodeudorSection () {
  const {
    register
  } = useFormContext();

  return (
    <section className={ form.section }>
      <h4 className={`${ form.title } ${ typography.displaySmall }`}>Codeudor</h4>
      <section className={form.section}>
        <label className={form.label} htmlFor=''></label>
        <input
          className={form.textArea}
          type='number'
          placeholder='Codeudor.Cedula'
          {...register(
            'Codeudor.Id',
            {}
          )}
        />

      </section>
      <section className={form.section}>
        <label className={form.label} htmlFor=''></label>
        <input
          className={form.textArea}
          type='text'
          placeholder='Codeudor.Nombre'
          {...register(
            'Codeudor.Nombre',
            {}
          )}
        />

      </section>
      <section className={form.section}>
        <label className={form.label} htmlFor=''></label>
        <input
          className={form.textArea}
          type='tel'
          placeholder='Codeudor.Tel.Fijo'
          {...register(
            'Codeudor.Tel.Fijo',
            {
              maxLength: 10
            }
          )}
        />

      </section>
      <section className={form.section}>
        <label className={form.label} htmlFor=''></label>
        <input
          className={form.textArea}
          type='tel'
          placeholder='Codeudor.Tel.Celular'
          {...register(
            'Codeudor.Tel.Celular',
            {
              maxLength: 10
            }
          )}
        />

      </section>
    </section>

  );
}
