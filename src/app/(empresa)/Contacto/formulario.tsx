'use client';
import React from 'react';
import {useForm,
  SubmitHandler,} from 'react-hook-form';
type FormValues = {
  Nombres: string;
  Apellidos: string;
  Email: string;
  Telefono: number;
  Title: string;
  RecibirInfo: boolean;
  Comentarios: string;
};

export default function Formulario() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues> ();

  const onSubmit: SubmitHandler<FormValues> = (
    data
  ) => alert (JSON.stringify (data));
  return (
    <form onSubmit={handleSubmit (onSubmit)}>
      {' '}
      <input
        type='text'
        placeholder='Nombres'
        {...register (
          'Nombres',
          {
            required : true,
            maxLength: 80,
          }
        )}
      />{' '}
      <input
        type='text'
        placeholder='Apellidos'
        {...register (
          'Apellidos',
          {
            required : true,
            maxLength: 100,
          }
        )}
      />{' '}
      <input
        type='text'
        placeholder='Email'
        {...register (
          'Email',
          {
            required: true,
            pattern : /^\S+@\S+$/i,
          }
        )}
      />{' '}
      <input
        type='tel'
        placeholder='Télefono'
        {...register (
          'Telefono',
          {
            required : true,
            maxLength: 10,
            minLength: 10,
          }
        )}
      />{' '}
      <select
        {...register (
          'Title',
          {required: true,}
        )}>
        {' '}
        <option value='Mr'>Mr</option>{' '}
        <option value='Mrs'>Mrs</option>{' '}
        <option value='Miss'>Miss</option>{' '}
        <option value='Dr'>Dr</option>{' '}
      </select>{' '}
      <input
        {...register (
          'RecibirInfo',
          {required: true,}
        )}
        type='radio'
        value='Yes'
      />{' '}
      <input
        {...register (
          'RecibirInfo',
          {required: true,}
        )}
        type='radio'
        value='No'
      />{' '}
      <textarea
        {...register (
          'Comentarios',
          {}
        )}
      />{' '}
      <input type='submit' />{' '}
    </form>
  );
}
