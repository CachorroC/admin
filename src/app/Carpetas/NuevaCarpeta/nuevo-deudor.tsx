'use client';
import { Deudor, IntCarpeta } from '#@/lib/types/demandados';
import form from '#@/components/form/form.module.scss';
import { UseFormRegister, useForm, useFormContext } from 'react-hook-form';
import typography from '#@/styles/fonts/typography.module.scss';




export function NuevoDeudorSection (){
  const {
    register
  } = useFormContext();

  return (
    <section className={ form.section }>
      <h4 className={`${ form.title } ${ typography.displaySmall }`}>Deudor</h4>
      <section className={form.section}>
        <label className={`${ form.label } ${ form.required }`} htmlFor='Deudor.PrimerNombre'>Primer Nombre</label>
        <input
          className={form.textArea}
          type='text'
          placeholder='Primer Nombre'
          {...register(
            'Deudor.PrimerNombre',
            {
              required: true
            }
          )}
        />


      </section>
      <section className={form.section}>
        <label className={form.label} htmlFor='Deudor.SegundoNombre'>Segundo Nombre</label>
        <input
          className={form.textArea}
          type='text'
          placeholder='Segundo Nombre'
          {...register(
            'Deudor.SegundoNombre',
            {
              required: false
            }
          )}
        />

      </section>
      <section className={form.section}>
        <label className={`${ form.label } ${ form.required }`} htmlFor='Deudor.PrimerApellido'>Primer Apellido</label>
        <input
          className={form.textArea}
          type='text'
          placeholder='Primer Apellido'
          {...register(
            'Deudor.PrimerApellido',
            {
              required: true
            }
          )}
        />

      </section>
      <section className={form.section}>
        <label className={form.label} htmlFor='Deudor.SegundoApellido'>Segundo Apellido</label>
        <input
          className={form.textArea}
          type='text'
          placeholder='Segundo Apellido'
          {...register(
            'Deudor.SegundoApellido',
            {
              required: false
            }

          ) } />
      </section>

      <section className={form.section}>
        <label className={`${ form.label } ${ form.required }`} htmlFor='Deudor.Id'>Cédula</label>
        <input
          className={form.textArea}
          type='number'
          placeholder='Deudor.Id'
          {...register(
            'Deudor.Id',
            {
              required: true
            }
          )}
        />


      </section>
      <section className={form.section}>
        <label className={form.label} htmlFor='Deudor.Email'>Email</label>
        <input
          className={form.textArea}
          type='text'
          placeholder='Deudor.Email'
          {...register(
            'Deudor.Email',
            {
              required: false,
              pattern : /^\S+@\S+$/i
            }
          )}
        />

      </section>
      <section className={form.section}>
        <label className={form.label} htmlFor=''></label>
        <input
          className={form.textArea}
          type='tel'
          placeholder='Deudor.Tel.Fijo'
          {...register(
            'Deudor.Tel.Fijo',
            {
              required : false,
              maxLength: 10
            }
          )}
        />

      </section>
      <section className={form.section}>
        <label className={form.label} htmlFor=''></label>
        <input
          className={form.textArea}
          type='tel'
          placeholder='Deudor.Tel.Celular'
          {...register(
            'Deudor.Tel.Celular',
            {
              required : false,
              maxLength: 10
            }
          )}
        />

      </section>
      <section className={form.section}>
        <label className={form.label} htmlFor=''></label>
        <input
          className={form.textArea}
          type='text'
          placeholder='Deudor.Direccion'
          {...register(
            'Deudor.Direccion',
            {
              required: false
            }
          )}
        />

      </section>
    </section>

  );
}
