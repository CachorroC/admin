import {
  useState,
  createContext,
  useContext,
  ReactNode,
  SetStateAction,
  Dispatch,
  useMemo,
  useCallback,
} from 'react';

type vals = {
  data: {};
  setFormValues: (values: any) => void;
};
export const FormContext =
  createContext<vals | null>(null);

export default function FormProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [data, setData] = useState({});

  const setFormValues = useCallback(
    (values: {}) => {
      setData((prevValues) => {
        return {
          ...prevValues,
          ...values,
        };
      });
    },
    []
  );
  const contextValue = useMemo(() => {
    return {
      data,
      setFormValues,
    };
  }, [data, setFormValues]);

  return (
    <FormContext.Provider value={contextValue}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormData() {
  const context = useContext(FormContext);

  if (context === null) {
    throw new Error(
      'useSearch must be used inside a SearchProvider'
    );
  }
  return context;
}
