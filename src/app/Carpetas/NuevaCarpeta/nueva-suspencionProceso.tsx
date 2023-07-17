import { IntCarpeta } from '#@/lib/types/demandados';
import { UseFormRegister, useFormContext } from 'react-hook-form';
import form from '#@/components/form/form.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';
import { Accordion } from '#@/components/Accordion';

export function NuevaSuspencionProcesoSection() {
  const { register } = useFormContext<IntCarpeta>();

  return (
    <section className={form.section}>
      <h3 className={`${form.title} ${typography.displayMedium}`}>
        Suspencion del Proceso
      </h3>
      <Accordion>
        <section className={form.section}>
          <label
            className={form.label}
            htmlFor='SuspencionProceso.TerminoSuspencion'>
            Término de la suspención
          </label>
          <input
            className={form.textArea}
            type='text'
            placeholder='SuspencionProceso.TerminoSuspencion'
            {...register('SuspencionProceso.TerminoSuspencion', {
              required: false
            })}
          />
        </section>
        <section className={form.section}>
          <label
            className={form.label}
            htmlFor='SuspencionProceso.Fecha'>
            Fecha de la suspencion
          </label>
          <input
            className={form.textArea}
            type='date'
            placeholder='SuspencionProceso.Fecha'
            {...register('SuspencionProceso.Fecha', {
              required: false
            })}
          />
        </section>
      </Accordion>
    </section>
  );
}
