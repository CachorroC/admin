import form from '#@/components/form/form.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';
import { InputSection } from '#@/components/form/InputSection';
import { Accordion } from '#@/components/Accordion';

export function NuevoCodeudorSection() {
  return (
    <section className={form.section}>
      <h4 className={`${form.title} ${typography.displayMedium}`}>Codeudor</h4>
      <Accordion>
        <InputSection
          name={'Codeudor.Id'}
          title={'Codeudor.Id'}
          type={'number'}
        />
        <InputSection
          name={'Codeudor.Nombre'}
          title={'Codeudor.Nombre'}
          type={'text'}
        />
        <InputSection
          name={'Codeudor.Tel.Fijo'}
          title={'Telefono Fijo'}
          type={'tel'}
        />
        <InputSection
          name={'Codeudor.Tel.Celular'}
          title={'Telefono celular'}
          type={'tel'}
        />
      </Accordion>
    </section>
  );
}
