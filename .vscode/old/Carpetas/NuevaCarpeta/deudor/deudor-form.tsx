'use client';

import { IntCarpeta } from '#@/lib/types/carpeta';
import { useFormContext } from 'react-hook-form';
import form from '#@/components/form/form.module.scss';

export const DeudorFormComponent = () =>
{


  const {
    register, handleSubmit, control
  } = useFormContext<IntCarpeta>();

  return (
    <div className={ form.section }>


      <input type="text" placeholder="deudor.primerNombre" {...register(
        'deudor.primerNombre', {
          required: true
        }
      ) } />
      <input type="text" placeholder="deudor.segundoNombre" {...register(
        'deudor.segundoNombre', {}
      ) } />
      <input type="text" placeholder="deudor.primerApellido" {...register(
        'deudor.primerApellido', {
          required: true
        }
      )} />
      <input type="text" placeholder="deudor.segundoApellido" {...register(
        'deudor.segundoApellido', {}
      )} />

      <input type="text" placeholder="deudor.email" {...register(
        'deudor.email', {
          required: false,
          pattern : /^\S+@\S+$/i
        }
      )} />
      <input type="tel" placeholder="deudor.tel.celular" {...register(
        'deudor.tel.celular', {
          required : false,
          maxLength: 10
        }
      )} />

      <input type="text" placeholder="deudor.cedula" {...register(
        'deudor.cedula', {
          required: true,
          pattern : /[0-9]/i
        }
      )} />
      <input type="tel" placeholder="deudor.tel.fijo" {...register(
        'deudor.tel.fijo', {
          required : false,
          maxLength: 10
        }
      )} />
      <input type="text" placeholder="deudor.direccion" {...register(
        'deudor.direccion', {}
      )} />

</div>
  );
};