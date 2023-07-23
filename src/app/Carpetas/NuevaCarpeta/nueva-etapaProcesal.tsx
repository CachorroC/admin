'use client';
import { IntCarpeta } from '#@/lib/types/demandados';
import { UseFormRegister,
         useFormContext } from 'react-hook-form';
import form from '#@/components/form/form.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';
import { Accordion } from '#@/components/Accordion';
import { InputSection } from '#@/components/form/InputSection';

export function NuevaEtapaProcesalSection() {
  const {
    register 
  }
    = useFormContext<IntCarpeta>();

  return (
    <section className={form.section}>
      <h3
        className={`${ form.title } ${ typography.displayMedium }`}
      >
        Etapa Procesal
      </h3>
      <InputSection
        name={'EtapaProcesal.Etapa'}
        title={'Etapa procesal'}
        type={'text'}
      />
      <InputSection
        name={
          'EtapaProcesal.Fecha.MandamientodePago'
        }
        title={'fecha del mandamiento de pago'}
        type={'date'}
      />
      <InputSection
        name={
          'EtapaProcesal.Fecha.PresentacionDemanda'
        }
        title={
          'fecha de Presentacion de la demanda '
        }
        type={'date'}
      />
    </section>
  );
}
