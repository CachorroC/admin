'use client';

import { useNuevaCarpetaContext } from '#@/hooks/formContext';
import { IntCarpeta } from '#@/lib/types/carpeta';
import { HTMLInputTypeAttribute } from 'react';
import { RegisterOptions,
         useController,
         useFormContext } from 'react-hook-form';
import form from '#@/components/form/form.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';

export const SelectSection = (
  {
    name,
    title,
    options
  }: {
  name: string;
  title: string;
  options: string[];
}
) => {
  const rules = {
    required: true 
  };

  const {
    register, control
  }
    = useFormContext<IntCarpeta>();

  const {
    field, fieldState
  } = useController(
    {
      name,
      control,
      rules
    }
  );

  const [
    map,
    setMap
  ] = useNuevaCarpetaContext();

  return (
    <section className={form.section}>
      <label
        className={`${ form.label } ${ typography.titleLarge }`}
        htmlFor={field.name}
      >
        {title}
      </label>

      <select
        {...field}
        className={form.selectArea}
      >
        {options.map(
          (
            option, index
          ) => {
            return (
              <option
                value={option}
                key={index}
              >
                {option}
              </option>
            );
          }
        )}
      </select>
    </section>
  );
};
