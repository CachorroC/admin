'use client';

import { useNuevaCarpetaContext } from '#@/hooks/formContext';
import { IntCarpeta } from '#@/lib/types/carpeta';
import { HTMLInputTypeAttribute } from 'react';
import { FieldPath,
         RegisterOptions,
         useController,
         useFormContext } from 'react-hook-form';
import form from '#@/components/form/form.module.css';
import typography from '#@/styles/fonts/typography.module.css';

export const SelectSection = (
  {
    name,
    title,
    options
  }: {
  name: FieldPath<IntCarpeta>;
  title: string;
  options: string[];
} 
) => {
  const rules = {
    required: true
  };

  const {
    register,
    control,
    formState: {
      errors 
    }
  } = useFormContext<IntCarpeta>();

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
        htmlFor={name}>
        {title}
      </label>

      <select
        key={name}
        {...register(
          name, rules 
        )}
        className={form.selectArea}>
        {options.map(
          (
            option, index 
          ) => {
            return (
              <option
                value={option}
                key={index}>
                {option}
              </option>
            );
          } 
        )}
      </select>
    </section>
  );
};
