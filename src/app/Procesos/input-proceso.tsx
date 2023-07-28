'use client';
import { ProcesoCard } from '#@/components/card/ProcesosCard';
import Modal from '#@/components/modal';
import { intConsultaNumeroRadicacion } from '#@/lib/types/procesos';
import { notFound } from 'next/navigation';
import React from 'react';
import { SubmitHandler,
         useForm } from 'react-hook-form';

interface FormValues {
  llaveProceso: string;
}

export default function InputProceso() {
  const {
    register,
    handleSubmit,
    formState: {
      errors 
    }
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<
    FormValues
  > = async (
    data 
  ) => {
    const Request = await fetch(
      `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${ data.llaveProceso }&SoloActivos=false`
    );

    if ( !Request.ok ) {
      return notFound();
    }

    const Response
      = ( await Request.json() ) as intConsultaNumeroRadicacion;

    if ( Response.procesos.length === 0 ) {
      return notFound();
    }
    const procesos = Response.procesos;
    alert(
      procesos 
    );

    return (
      <Modal>
        {procesos.map(
          (
            proceso 
          ) => {
            return (
              <ProcesoCard
                key={proceso.idProceso}
                proceso={proceso}
              />
            );
          } 
        )}
      </Modal>
    );
  };
  console.log(
    errors 
  );

  return (
    <form onSubmit={handleSubmit(
      onSubmit 
    )}>
      <input
        type='text'
        placeholder='llaveProceso'
        {...register(
          'llaveProceso', {
            required : true,
            maxLength: 23
          } 
        )}
      />

      <input type='submit' />
    </form>
  );
}
