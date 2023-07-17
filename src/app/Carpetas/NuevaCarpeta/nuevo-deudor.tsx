import form from '#@/components/form/form.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';
import { Accordion } from '#@/components/Accordion';
import { InputSection } from '#@/components/form/InputSection';

export function NuevoDeudorSection() {


  return (
    <section className={form.section}>
      <h4 className={ `${ form.title } ${ typography.displayMedium }` }>Deudor</h4>
      <Accordion>
        <InputSection name={ 'Deudor.PrimerNombre' } title={ 'Nombre del deudor' } type={ 'text' } rls={{
          required: true
        } } />
        <InputSection name={ 'Deudor.SegundoNombre' } title={ 'segundo nombre' } type={ 'text' }  />
        <InputSection name={ 'Deudor.PrimerApellido' } title={ 'Apellido del deudor' } type={ 'text' } rls={{
          required: true
        } } />
        <InputSection name={ 'Deudor.SegundoApellido' } title={ 'Segundo apellido' } type={ 'text' } />
        <InputSection name={ 'Deudor.Id' } title={ 'Cedula del deudor' } type={ 'number' } rls={{
          required: true
        } } />
        <InputSection name={ 'Deudor.Email' } title={ 'Correo electrónico' } type={ 'text' } rls={{
          required: false,
          pattern : /^\S+@\S+$/i
        } } />
        <InputSection name={ 'Deudor.Tel.Fijo' } title={ 'Telefono fijo' } type={ 'tel' } rls={{
          required : false,
          maxLength: 10
        }}/>
        <InputSection name={ 'Deudor.Tel.Celular' } title={ 'Telefono celular' } type={ 'tel' } rls={{
          required : false,
          maxLength: 10
        } } />
        <InputSection name={ 'Deudor.Direccion' } title={ 'Direccion de residencia o trabajo' } type={ 'text' } />
      </Accordion>
    </section>
  );
}
