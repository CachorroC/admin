import form from '#@/components/form/form.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';
import { Accordion } from '#@/components/Accordion';
import { InputSection } from '#@/components/form/InputSection';

export function NuevoDeudorSection() {
  return (
    <section className={form.section}>
      <h3
        className={`${ form.title } ${ typography.displayMedium }`}
      >
        Deudor
      </h3>

      <InputSection
        name={'Deudor.PrimerNombre'}
        title={'Nombre del deudor'}
        type={'text'}
        rls={{ required: true }}
      />
      <InputSection
        name={'Deudor.SegundoNombre'}
        title={'segundo nombre'}
        type={'text'}
      />
      <InputSection
        name={'Deudor.PrimerApellido'}
        title={'Apellido del deudor'}
        type={'text'}
        rls={{ required: true }}
      />
      <InputSection
        name={'Deudor.SegundoApellido'}
        title={'Segundo apellido'}
        type={'text'}
      />
      <InputSection
        name={'Deudor.Id'}
        title={'Cedula del deudor'}
        type={'number'}
        rls={{ required: true }}
      />
    </section>
  );
}
