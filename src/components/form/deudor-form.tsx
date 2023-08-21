import { useFormContext } from 'react-hook-form';
import form from './form.module.css';
import { IntCarpeta } from '#@/lib/types/carpeta';
import typography from '#@/styles/fonts/typography.module.css';

export function DeudorFormComponent() {
  const {
    register, control 
  }
    = useFormContext<IntCarpeta>();

  return (
    <>
      <section className={form.section}>
        <label
          className={`${ form.label } ${ typography.titleLarge }`}
          htmlFor={'deudor.primerNombre'}
        >
          Primer Nombre
        </label>
        <input
          type='text'
          className={form.textArea}
          placeholder='deudor.primerNombre'
          {...register(
            'deudor.primerNombre', {
              required: true
            } 
          )}
        />
      </section>

      <section className={form.section}>
        <label
          className={`${ form.label } ${ typography.titleLarge }`}
          htmlFor={'deudor.segundoNombre'}
        >
          Segundo Nombre
        </label>
        <input
          className={form.textArea}
          type='text'
          placeholder='deudor.segundoNombre'
          {...register(
            'deudor.segundoNombre', {
              required: false
            } 
          )}
        />
      </section>

      <section className={form.section}>
        <label
          className={`${ form.label } ${ typography.titleLarge }`}
          htmlFor={'deudor.primerApellido'}
        >
          Primer Apellido
        </label>
        <input
          className={form.textArea}
          type='text'
          placeholder='deudor.primerApellido'
          {...register(
            'deudor.primerApellido', {
              required: true
            } 
          )}
        />
      </section>

      <section className={form.section}>
        <label
          className={`${ form.label } ${ typography.titleLarge }`}
          htmlFor={'deudor.segundoApellido'}
        >
          Segundo Apellido
        </label>
        <input
          className={form.textArea}
          type='text'
          placeholder='deudor.segundoApellido'
          {...register(
            'deudor.segundoApellido', {
              required: false
            } 
          )}
        />
      </section>

      <section className={form.section}>
        <label
          className={`${ form.label } ${ typography.titleLarge }`}
          htmlFor={'deudor.cedula'}
        >
          Cédula de ciudadania
        </label>
        <input
          className={form.textArea}
          type='text'
          placeholder='deudor.cedula'
          {...register(
            'deudor.cedula', {
              required: true,
              pattern : /[0-9]/i
            } 
          )}
        />
      </section>

      <section className={form.section}>
        <label
          className={`${ form.label } ${ typography.titleLarge }`}
          htmlFor={'deudor.email'}
        >
          Correo Electrónico
        </label>
        <input
          className={form.textArea}
          type='text'
          placeholder='deudor.email'
          {...register(
            'deudor.email', {
              required: false,
              pattern : /^\S+@\S+$/i
            } 
          )}
        />
      </section>

      <section className={form.section}>
        <label
          className={`${ form.label } ${ typography.titleLarge }`}
          htmlFor={'deudor.tel.celular'}
        >
          Telefono celular
        </label>
        <input
          className={form.textArea}
          type='tel'
          placeholder='deudor.tel.celular'
          {...register(
            'deudor.tel.celular', {
              required : false,
              maxLength: 10
            } 
          )}
        />
      </section>

      <section className={form.section}>
        <label
          className={`${ form.label } ${ typography.titleLarge }`}
          htmlFor={'deudor.tel.fijo'}
        >
          Telefono Fijo
        </label>

        <input
          className={form.textArea}
          type='tel'
          placeholder='deudor.tel.fijo'
          {...register(
            'deudor.tel.fijo', {
              required : false,
              maxLength: 10
            } 
          )}
        />
      </section>

      <section className={form.section}>
        <label
          className={`${ form.label } ${ typography.titleLarge }`}
          htmlFor={'deudor.direccion'}
        >
          Direccion
        </label>
        <input
          className={form.textArea}
          type='text'
          placeholder='deudor.direccion'
          {...register(
            'deudor.direccion', {
              required: false
            } 
          )}
        />
      </section>
    </>
  );
}
