import form from '#@/components/form/form.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';
import { InputSection } from '#@/components/form/InputSection';
import { Accordion } from '#@/components/Accordion';

export function NuevoCodeudorSection() {
  return (
    <section className={form.section}>
      <h4
        className={`${ form.title } ${ typography.displayMedium }`}
      >
        Codeudor
      </h4>

      <InputSection
        name={'codeudor.cedula'}
        title={'cedula del codeudor'}
        type={'number'}
      />
      <InputSection
        name={'codeudor.nombre'}
        title={'Codeudor.Nombre'}
        type={'text'}
      />
      <InputSection
        name={'codeudor.tel'}
        title={'Telefono del codeudor'}
        type={'tel'}
      />
      <InputSection
        name={'codeudor.direccion'}
        title={'Direccion del codeudor '}
        type={'text'}
      />
    </section>
  );
}
