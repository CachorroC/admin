'use client';
import {  useFormContext } from 'react-hook-form';
import form from '#@/components/form/form.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';

export function NuevaLiquidacionSection () {
  const {
    register
  } = useFormContext();

  return (
    <section className={ form.section }>
      <h4 className={ `${ form.title } ${ typography.displaySmall }` }>Liquidacion</h4>
      <h3 className={`${ form.title } ${ typography.titleSmall }`}>Costas</h3>
      <section className={form.section}>

        <label className={form.label} htmlFor='Liquidacion.Costas.FechaAprobacion'>Fecha de Aprobacion</label>
        <input
          className={form.textArea}
          type='datetime'
          placeholder='Liquidacion.Costas.FechaAprobacion'
          {...register(
            'Liquidacion.Costas.FechaAprobacion',
            {}
          )}
        />

      </section>
      <section className={form.section}>
        <label className={form.label} htmlFor='Liquidacion.Costas.Valor'>Valor</label>
        <input
          className={form.textArea}
          type='number'
          placeholder='Liquidacion.Costas.Valor'
          {...register(
            'Liquidacion.Costas.Valor',
            {}
          )}
        />

      </section>
      <section className={form.section}>
        <label className={form.label} htmlFor='Liquidacion.Fecha.Aprobacion'>Fecha de aprobacion de la liquidacion</label>
        <input
          className={form.textArea}
          type='datetime'
          placeholder='Liquidacion.Fecha.Aprobacion'
          {...register(
            'Liquidacion.Fecha.Aprobacion',
            {}
          )}
        />

      </section>
      <section className={form.section}>
        <label className={form.label} htmlFor=''></label>
        <input
          className={form.textArea}
          type='datetime'
          placeholder='Liquidacion.Fecha.Presentacion'
          {...register(
            'Liquidacion.Fecha.Presentacion',
            {}
          )}
        />

      </section>
      <section className={form.section}>
        <label className={form.label} htmlFor=''></label>
        <input
          className={form.textArea}
          type='datetime'
          placeholder='Liquidacion.Fecha.Solicitud'
          {...register(
            'Liquidacion.Fecha.Solicitud',
            {}
          )}
        />

      </section>
      <section className={form.section}>
        <label className={form.label} htmlFor=''></label>
        <input
          className={form.textArea}
          type='datetime'
          placeholder='Liquidacion.Fecha.Sentencia'
          {...register(
            'Liquidacion.Fecha.Sentencia',
            {}
          )}
        />

      </section>
    </section>
  );
}