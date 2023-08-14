'use client';
import form from '#@/components/form/form.module.scss';
import { HTMLInputTypeAttribute,
         MutableRefObject,
         useRef,
         useState } from 'react';
import { FieldPath, FieldValues, RegisterOptions,
         UseControllerProps,
         useController,
         useFormContext } from 'react-hook-form';
import typography from '#@/styles/fonts/typography.module.scss';
import { useNuevaCarpetaContext } from '#@/hooks/formContext';
import { CarpetaKeys, IntCarpeta } from '#@/lib/types/carpeta';

export const InputSection = (
  {
    title,
    type, name, rules
  }: { title: string; type: HTMLInputTypeAttribute;
      name: FieldPath<IntCarpeta>;
      rules?:
    | Omit<
        RegisterOptions<IntCarpeta, CarpetaKeys>,
        'setValueAs' | 'disabled' | 'valueAsNumber' | 'valueAsDate'
      >
    | undefined;
    }
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
        {...field}
        className={form.textArea}
        type={type}
        placeholder={field.name}
      />
    </section>
  );
};
