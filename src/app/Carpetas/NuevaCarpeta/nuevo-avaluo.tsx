'use client';
import { IntCarpeta } from '#@/lib/types/demandados';
import { UseFormRegister, useFormContext } from 'react-hook-form';
import form from '#@/components/form/form.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';
import { Accordion } from '#@/components/Accordion';
import { InputSection } from '#@/components/form/InputSection';

export function NuevoAvaluoSection() {
  return (
    <section className={form.section}>
      <h3 className={`${ form.title } ${ typography.displayMedium }`}>Avaluo</h3>

      <InputSection
        name={'Avaluo.Adjudicacion.Fecha'}
        title={'Fecha de adjudicación del avaluo'}
        type={'date'}
      />
      <InputSection
        name={'Avaluo.Remate.Fecha'}
        title={'Fecha del remate'}
        type={'date'}
      />
      <InputSection
        name={'Avaluo.Valor'}
        title={'Valor del avaluo'}
        type={'number'}
      />
    </section>
  );
}
