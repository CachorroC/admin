'use client';
import form from '#@/components/form/form.module.css';
import { HTMLInputTypeAttribute,
         MutableRefObject,
         useRef,
         useState } from 'react';
import { FieldPath, FieldValues, RegisterOptions,
         UseControllerProps,
         useController,
         useFormContext } from 'react-hook-form';
import typography from '#@/styles/fonts/typography.module.css';
import { useNuevaCarpetaContext } from '#@/hooks/formContext';
import { CarpetaKeys, IntCarpeta } from '#@/lib/types/carpeta';


interface improvCarp extends UseControllerProps<IntCarpeta>
{
  title: string;
  type: HTMLInputTypeAttribute;
}

export const InputSection = (
  {
    name, rules, title, type
  }: improvCarp
) => {


  const {
    register, control
  }
    = useFormContext<IntCarpeta>();

  const {
    field, fieldState
  } = useController(
    {
      name,
      rules,
      control
    }
  );

  const [
    map,
    setMap
  ] = useNuevaCarpetaContext();

  return (
    <section
      className={form.section}
    >
      <label
        className={`${ form.label } ${ typography.titleLarge }`}
        htmlFor={field.name}
      >
        {title}
      </label>
      <input
        { ...field }
        /*
        className={form.textArea}
        type={type}
        placeholder={field.name} */
      />
    </section>
  );
};
