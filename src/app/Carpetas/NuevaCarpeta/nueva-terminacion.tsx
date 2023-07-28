'use client';
import { Accordion } from '#@/components/Accordion';
import { IntCarpeta } from '#@/lib/types/demandados';
import { UseFormRegister,
         useFormContext } from 'react-hook-form';
import form from '#@/components/form/form.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';
import { InputSection } from '#@/components/form/InputSection';

export function NuevaTerminacionSection() {
  const {
    register 
  }
    = useFormContext<IntCarpeta>();

  return (
    <section className={form.section}>
      <h3
        className={`${ form.title } ${ typography.displayMedium }`}
      >
        Terminacion
      </h3>
      <InputSection
        name={'Terminacion.Causal'}
        title={'Causal de terminacion'}
        type={'text'}
      />
      <section className={form.section}>
        <InputSection
          name={
            'Terminacion.Fecha.AutoTerminacion'
          }
          title={'fecha de la terminacion'}
          type={'date'}
        />
        <InputSection
          name={
            'Terminacion.Fecha.RadicacionMemorial'
          }
          title={
            'Fecha de radicacion del memorial'
          }
          type={'date'}
        />
      </section>
    </section>
  );
}
