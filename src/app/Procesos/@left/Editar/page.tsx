'use client';
import FormProvider from '#@/components/card/CarpetasCard/Context';
import {
  FormCard,
  PersonalInfo,
  BillingInfo,
  ConfirmPurchase,
  FormCompleted
} from '#@/components/card/CarpetasCard/form-Card';
import { useState } from 'react';

export default function PageProcesosEditarLeft() {
  const [formStep, setFormStep] = useState(0);

  const nextFormStep = () => {
    return setFormStep((currentStep) => {
      return currentStep + 1;
    });
  };

  const prevFormStep = () => {
    return setFormStep((currentStep) => {
      return currentStep - 1;
    });
  };

  return (
    <FormProvider>
      <FormCard
        currentStep={formStep}
        prevFormStep={prevFormStep}>
        {formStep >= 0 && (
          <PersonalInfo
            formStep={formStep}
            nextFormStep={nextFormStep}
          />
        )}
        {formStep >= 1 && (
          <BillingInfo
            formStep={formStep}
            nextFormStep={nextFormStep}
          />
        )}
        {formStep >= 2 && (
          <ConfirmPurchase
            formStep={formStep}
            nextFormStep={nextFormStep}
          />
        )}
        {formStep > 2 && <FormCompleted />}
      </FormCard>
    </FormProvider>
  );
}
