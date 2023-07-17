'use client';
import form from '#@/components/form/form.module.scss';
import { IntCarpeta } from '#@/lib/types/demandados';
import { HTMLInputTypeAttribute, useState } from 'react';
import { Control,
         Field,
         FieldName,
         FieldPath,
         FieldValues,
         InternalFieldName,
         RegisterOptions,
         useController,
         useFormContext } from 'react-hook-form';
import typography from '#@/styles/fonts/typography.module.scss';

export const InputSection = (
  {
    name,
    rls,
    title,
    type
  }: {
  name: string;
  title: string;
  type: HTMLInputTypeAttribute;
  rls?:
    | Omit<
        RegisterOptions<FieldValues, string>,
        'setValueAs' | 'disabled' | 'valueAsNumber' | 'valueAsDate'
      >
    | undefined;
}
) => {
  const rules = rls ?? {
    required: false
  };

  const {
    register, control
  } = useFormContext();

  const {
    field, fieldState
  } = useController(
    {
      name,
      control,
      rules
    }
  );

  return (
    <section className={form.section}>
      <label
        className={`${ form.label } ${ typography.titleLarge }`}
        htmlFor={field.name}>
        {title}
      </label>
      <input
        {...field}
        className={form.textArea}
        type={type}
        placeholder={field.name}
      />
      <p>{fieldState.isTouched && 'Touched'}</p>
      <p>{ fieldState.error && 'error' }</p>
      <p>{fieldState.isDirty && 'Dirty'}</p>
      <p>{fieldState.invalid
        ? 'invalid'
        : 'valid'}</p>

    </section>
  );
};