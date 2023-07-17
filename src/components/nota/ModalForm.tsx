import * as React from 'react';
import { useForm } from 'react-hook-form';
type FormValues = { mail: string };

export const ModalForm = (
  {
    mail,
    setModalFormData
  }: {
  mail: string;
  setModalFormData: React.Dispatch<React.SetStateAction<string>>;
} 
) => {
  const {
    register, reset, handleSubmit 
  } = useForm<FormValues>(
    {
      defaultValues: {
        mail
      }
    } 
  );
  React.useEffect(
    () => {
      reset(
        {
          mail
        } 
      );
    },
    [
      reset,
      mail
    ] 
  );

  const onSubmit = (
    data: FormValues 
  ) => {
    setModalFormData(
      data.mail 
    );
  };

  return (
    <form onSubmit={handleSubmit(
      onSubmit 
    )}>
      <h2>Modal</h2>
      <input
        placeholder='mail'
        {...register(
          'mail',
          {
            required: true
          } 
        )}
      />
      <input type='submit' />
    </form>
  );
};
