import React, { ReactNode } from 'react';
import styles from './carpetas.module.scss';
import { useFormData } from './Context';
import { useForm } from 'react-hook-form';

export interface FormValues {
  checkbox: boolean;
  email: string;
  address: string;
}

export const FormCard = (
  {
    children,
    currentStep,
    prevFormStep
  }: {
  children: ReactNode;
  currentStep: number;
  prevFormStep: () => void;
} 
) => {
  return (
    <div className={styles.formCard}>
      {currentStep < 3 && (
        <>
          {currentStep > 0 && (
            <button
              className={styles.back}
              onClick={prevFormStep}
              type='button'
            >
              back
            </button>
          )}
          <span className={styles.steps}>
            Step {currentStep + 1} of 3
          </span>
        </>
      )}
      {children}
    </div>
  );
};

export const FormCompleted = () => {
  const {
    data 
  } = useFormData();

  return (
    <>
      <h2>Thank you for your purchase! 🎉</h2>
      <pre>{JSON.stringify(
        data 
      )}</pre>
    </>
  );
};

export const PersonalInfo = (
  {
    formStep,
    nextFormStep
  }: {
  formStep: number;
  nextFormStep: () => void;
} 
) => {
  const {
    setFormValues 
  } = useFormData();

  const {
    handleSubmit,
    formState: {
      errors 
    },
    register
  } = useForm(
    { defaultValues: { email: 'admin@example.com' } } 
  );

  const onSubmit = (
    values: any 
  ) => {
    setFormValues(
      values 
    );
    nextFormStep();
  };

  return (
    <div
      className={
        formStep === 0
          ? styles.showForm
          : styles.hideForm
      }
    >
      <h2>Personal Info</h2>
      <form onSubmit={handleSubmit(
        onSubmit 
      )}>
        <div className={styles.formRow}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            {...register(
              'email', { required: true } 
            )}
          />
          {errors.email && (
            <p className={styles.errorText}>
              Email is required
            </p>
          )}
        </div>
        <button type='submit'>Next</button>
      </form>
    </div>
  );
};

export const ConfirmPurchase = (
  {
    formStep,
    nextFormStep
  }: {
  formStep: number;
  nextFormStep: () => void;
} 
) => {
  const {
    setFormValues 
  } = useFormData();

  const {
    handleSubmit,
    formState: {
      errors 
    },
    register
  } = useForm(
    { defaultValues: { checkbox: false } } 
  );

  const onSubmit = (
    values: any 
  ) => {
    setFormValues(
      values 
    );
    nextFormStep();
  };

  return (
    <div
      className={
        formStep === 2
          ? styles.showForm
          : styles.hideForm
      }
    >
      <h2>Confirm Purchase</h2>
      <form onSubmit={handleSubmit(
        onSubmit 
      )}>
        <div className={styles.formRow}>
          <label htmlFor='checkbox'>
            <input
              type='checkbox'
              {...register(
                'checkbox', { required: true } 
              )}
            />
            Ready to buy?
          </label>
          {errors.checkbox && (
            <p className={styles.errorText}>
              Confirm purchase to proceed
            </p>
          )}
        </div>
        <button>Next</button>
      </form>
    </div>
  );
};

export const BillingInfo = (
  {
    formStep,
    nextFormStep
  }: {
  formStep: number;
  nextFormStep: () => void;
} 
) => {
  const {
    setFormValues 
  } = useFormData();

  const {
    handleSubmit,
    formState: {
      errors 
    },
    register
  } = useForm(
    { defaultValues: { address: 'calle 12c # 6 - 21' } } 
  );

  const onSubmit = (
    values: any 
  ) => {
    setFormValues(
      values 
    );
    nextFormStep();
  };

  return (
    <div
      className={
        formStep === 1
          ? styles.showForm
          : styles.hideForm
      }
    >
      <h2>Billing Info</h2>
      <form onSubmit={handleSubmit(
        onSubmit 
      )}>
        <div className={styles.formRow}>
          <label htmlFor='address'>Address</label>
          <input
            type='address'
            id='address'
            {...register(
              'address', { required: true } 
            )}
          />
          {errors.address && (
            <p className={styles.errorText}>
              Shipping address is required
            </p>
          )}
        </div>
        <button>Next</button>
      </form>
    </div>
  );
};
