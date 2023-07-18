'use client';
import { useFormContext } from 'react-hook-form';
import form from '#@/components/form/form.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';
import { Accordion } from '#@/components/Accordion';
import { IntCarpeta } from '#@/lib/types/demandados';

export function NuevaLiquidacionSection() {
  const { register } = useFormContext<IntCarpeta>();

  return (
    <section className={form.section}>
      <h3 className={`${form.title} ${typography.displayMedium}`}>
        Liquidacion
      </h3>

      <section className={form.section}>
        <label
          className={form.label}
          htmlFor='Liquidacion.Fecha.Aprobacion'>
          Fecha de aprobacion de la liquidacion
        </label>
        <input
          className={form.textArea}
          type='date'
          placeholder='Liquidacion.Fecha.Aprobacion'
          {...register('Liquidacion.Fecha.Aprobacion', {})}
        />
      </section>
      <section className={form.section}>
        <label
          className={form.label}
          htmlFor='Liquidacion.Fecha.Presentacion'>
          Fecha de presentacion de liquidacion
        </label>
        <input
          className={form.textArea}
          type='date'
          placeholder='Liquidacion.Fecha.Presentacion'
          {...register('Liquidacion.Fecha.Presentacion', {})}
        />
      </section>
      <section className={form.section}>
        <label
          className={form.label}
          htmlFor='Liquidacion.Fecha.Solicitud'>
          Fecha de Solicitud de la liquidacion
        </label>
        <input
          className={form.textArea}
          type='date'
          placeholder='Liquidacion.Fecha.Solicitud'
          {...register('Liquidacion.Fecha.Solicitud', {})}
        />
      </section>
      <h4 className={`${form.title} ${typography.displaySmall}`}>Costas</h4>
      <section className={form.section}>
        <section className={form.section}>
          <label
            className={form.label}
            htmlFor='Liquidacion.Costas.FechaAprobacion'>
            Fecha de Aprobacion
          </label>
          <input
            className={form.textArea}
            type='date'
            placeholder='Liquidacion.Costas.FechaAprobacion'
            {...register('Liquidacion.Costas.FechaAprobacion', {})}
          />
        </section>
        <section className={form.section}>
          <label
            className={form.label}
            htmlFor='Liquidacion.Costas.Valor'>
            Valor
          </label>
          <input
            className={form.textArea}
            type='number'
            placeholder='Liquidacion.Costas.Valor'
            {...register('Liquidacion.Costas.Valor', {})}
          />
        </section>
      </section>
      <section className={form.section}>
        <label
          className={form.label}
          htmlFor='Liquidacion.Fecha.Sentencia'>
          Fecha de sentencia de la Liquidacion
        </label>
        <input
          className={form.textArea}
          type='date'
          placeholder='Liquidacion.Fecha.Sentencia'
          {...register('Liquidacion.Fecha.Sentencia', {})}
        />
      </section>
      <section className={form.section}>
        <label
          className={form.label}
          htmlFor='Liquidacion.ValorCredito'>
          Valor del crédito
        </label>
        <input
          className={form.textArea}
          type='number'
          placeholder='Liquidacion.ValorCredito'
          {...register('Liquidacion.ValorCredito', {})}
        />
      </section>
    </section>
  );
}
