'use client';
import { IntCarpeta } from '#@/lib/types/demandados';
import { UseFormRegister, useFormContext } from 'react-hook-form';
import form from '#@/components/form/form.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';
import { Accordion } from '#@/components/Accordion';

export function NuevaEtapaProcesalSection() {
  const {
    register
  } = useFormContext<IntCarpeta>();

  return (
    <section className={form.section}>
      <h3 className={`${ form.title } ${ typography.displayMedium }`}>
        Etapa Procesal
      </h3>
      <Accordion>

        <section className={form.section}>
          <label
            className={form.label}
            htmlFor='EtapaProcesal.Etapa'>
          Etapa Procesal
          </label>
          <input
            className={form.textArea}
            type='text'
            placeholder='EtapaProcesal.Etapa'
            {...register(
              'EtapaProcesal.Etapa',
              {}
            )}
          />
        </section>
        <section className={form.section}>
          <label
            className={form.label}
            htmlFor='EtapaProcesal.Fecha.MandamientodePago'>
          Mandamiento de Pago
          </label>
          <input
            className={form.textArea}
            type='datetime'
            placeholder='EtapaProcesal.Fecha.MandamientodePago'
            {...register(
              'EtapaProcesal.Fecha.MandamientodePago',
              {}
            )}
          />
        </section>
        <section className={form.section}>
          <label
            className={form.label}
            htmlFor='EtapaProcesal.Fecha.PresentacionDemanda'>
          Mandamiento de Pago
          </label>
          <input
            className={form.textArea}
            type='datetime'
            placeholder='EtapaProcesal.Fecha.PresentacionDemanda'
            {...register(
              'EtapaProcesal.Fecha.PresentacionDemanda',
              {}
            )}
          />
        </section>
      </Accordion>
    </section>
  );
}
