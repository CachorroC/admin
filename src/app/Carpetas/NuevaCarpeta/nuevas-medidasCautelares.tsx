'use client';
import { IntCarpeta } from '#@/lib/types/demandados';
import { UseFormRegister, useFormContext } from 'react-hook-form';
import form from '#@/components/form/form.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';

export function NuevasMedidasCautelaresSection () {
  const {
    register
  } = useFormContext();

  return (
    <section className={ form.section }>
      <h4 className={`${ form.title } ${ typography.displaySmall }`}>Medidas Cautelares</h4>
      <section className={form.section}>
        <label className={form.label} htmlFor=''></label>
        <input
          className={form.textArea}
          type='text'
          placeholder='MedidasCautelares.Bienes'
          {...register(
            'MedidasCautelares.Bienes',
            {}
          )}
        />

      </section>
      <section className={form.section}>
        <label className={form.label} htmlFor=''></label>
        <input
          className={form.textArea}
          type='text'
          placeholder='MedidasCautelares.MedidaSolicitada'
          {...register(
            'MedidasCautelares.MedidaSolicitada',
            {}
          )}
        />

      </section>
      <section className={form.section}>
        <label className={form.label} htmlFor=''></label>
        <input
          className={form.textArea}
          type='text'
          placeholder='MedidasCautelares.extra'
          {...register(
            'MedidasCautelares.Extra',
            {}
          )}
        />

      </section>
      <section className={form.section}>
        <label className={form.label} htmlFor=''></label>
        <input
          className={form.textArea}
          type='text'
          placeholder='MedidasCautelares.PlacaoNumeroMatricula'
          {...register(
            'MedidasCautelares.PlacaoNumeroMatricula',
            {}
          )}
        />

      </section>
      <section className={form.section}>
        <label className={form.label} htmlFor=''></label>
        <input
          className={form.textArea}
          type='text'
          placeholder='MedidasCautelares.DescripcionMedida'
          {...register(
            'MedidasCautelares.DescripcionMedida',
            {}
          )}
        />

      </section>
      <section className={form.section}>
        <label className={form.label} htmlFor=''></label>
        <input
          className={form.textArea}
          type='datetime'
          placeholder='MedidasCautelares.Fecha.Captura'
          {...register(
            'MedidasCautelares.Fecha.Captura',
            {}
          )}
        />

      </section>
      <section className={form.section}>
        <label className={form.label} htmlFor=''></label>
        <input
          className={form.textArea}
          type='text'
          placeholder='MedidasCautelares.Fecha.Secuestro'
          {...register(
            'MedidasCautelares.Fecha.Secuestro',
            {}
          )}
        />

      </section>
      <section className={form.section}>
        <label className={form.label} htmlFor=''></label>
        <input
          className={form.textArea}
          type='datetime'
          placeholder='MedidasCautelares.Fecha.DecretoSecuestrooCaptura'
          {...register(
            'MedidasCautelares.Fecha.DecretoSecuestrooCaptura',
            {}
          )}
        />

      </section>
      <section className={form.section}>
        <label className={form.label} htmlFor=''></label>
        <input
          className={form.textArea}
          type='datetime'
          placeholder='MedidasCautelares.Fecha.SolicitudCapturaoSecuestro'
          {...register(
            'MedidasCautelares.Fecha.SolicitudCapturaoSecuestro',
            {}
          )}
        />

      </section>
    </section>
  );
}