'use client';
import form from '#@/components/form/form.module.scss';
import { HTMLInputTypeAttribute,
         JSXElementConstructor,
         MutableRefObject,
         PromiseLikeOfReactNode,
         ReactElement,
         ReactNode,
         ReactPortal,
         useRef,
         useState } from 'react';
import { ControllerProps, Field, FieldName, RegisterOptions,
         UseControllerProps,
         useController,
         useFormContext } from 'react-hook-form';
import typography from '#@/styles/fonts/typography.module.scss';
import { useNuevaCarpetaContext } from '#@/hooks/formContext';
import { IntCarpeta } from '#@/lib/types/carpeta';

export function InputSection (
  {
    name,
    type, title, rls
  }: {

  name: UseControllerProps<IntCarpeta>;
  title: string;
  type: HTMLInputTypeAttribute;
  rls?: RegisterOptions;
  }
) {
  const sectionRef = useRef(
    new Map()
  );

  const rules = rls ?? {
    required: false
  };

  const {
    register, control
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

  const [
    map,
    setMap
  ] = useNuevaCarpetaContext();

  return (
    <section
      className={ form.section }
      ref={ (
        node
      ) => {
        if ( node ) {
          map.set(
            name, node
          );
        } else {
          map.delete(
            name
          );
        }
      } }
    >
      <label
        className={ `${ form.label } ${ typography.titleLarge }` }
        htmlFor={ field.name }
      >
        { title }
      </label>
      <input
        { ...field }
        className={ form.textArea }
        type={ type }
        placeholder={ field.name } />
    </section>
  );
}
