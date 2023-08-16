'use client';
import form from '#@/components/form/form.module.css';
import { HTMLInputTypeAttribute,
         InputHTMLAttributes,
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


interface improvProps extends UseControllerProps<IntCarpeta>
{
  title: string;
  type: HTMLInputTypeAttribute

}

export const InputSection = (
  {
    name, title, rules, type
  }: improvProps
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
        {`${ name.replace(
          '.', ' '
        ) } y ${ title }`}
      </label>
      <input
        type={`${ type }`}
        className={form.textArea}
        placeholder={field.name}
        { ...field }

      />
    </section>
  );
};
