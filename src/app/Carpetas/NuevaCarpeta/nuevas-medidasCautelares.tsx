'use client';
import { IntCarpeta } from '#@/lib/types/demandados';
import { UseFormRegister, useFormContext } from 'react-hook-form';
import form from '#@/components/form/form.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';
import { Accordion } from '#@/components/Accordion';
import { InputSection } from '#@/components/form/InputSection';

export function NuevasMedidasCautelaresSection() {
  const {
    register, control
  } = useFormContext();

  return (
    <section className={form.section}>
      <h3 className={`${ form.title } ${ typography.displayMedium }`}>
        Medidas Cautelares
      </h3>
      <Accordion>
        <InputSection name={ 'MedidasCautelares.Bienes' } title={ 'Bienes para incautar' } type={ 'text' } />
        <InputSection name={ 'MedidasCautelares.medidaSolicitada' } title={ 'Medida solicitada' } type={ 'text' } />
        <InputSection name={ 'MedidasCautelares.Extra' } title={ 'Comentarios e informacion adicional' } type={ 'text' } />
        <InputSection name={ 'MedidasCautelares.PlacaoNumeroMatricula' } title={ 'Placa o número de matrícula' } type={ 'text' } />
        <InputSection name={ 'MedidasCautelares.DescripcionMedida' } title={ ' Descripción de la medida cautelar' } type={ 'text' } />
        <section className={form.section}>
          <h4 className={`${ form.title } ${ typography.displaySmall }`}>Fechas</h4>
          <InputSection name={ 'MedidasCautelares.Fecha.Captura' } title={ 'Fecha de captura' } type={ 'date' } />
          <InputSection name={ 'MedidasCautelares.Fecha.Secuestro' } title={ 'Fecha del secuestro' } type={ 'number' } />


          <section className={form.section}>
            <label
              className={form.label}
              htmlFor='MedidasCautelares.Fecha.Secuestro'>
              Fecha del secuestro
            </label>
            <input
              className={form.textArea}
              type='date'
              placeholder='MedidasCautelares.Fecha.Secuestro'
              {...register(
                'MedidasCautelares.Fecha.Secuestro',
                {
                  required: false
                }
              )}
            />
          I</section>
          <section className={form.section}>
            <label
              className={form.label}
              htmlFor='MedidasCautelares.Fecha.DecretoSecuestrooCaptura'>
              Fecha decreto secuestro o captura
            </label>
            <input
              className={form.textArea}
              type='date'
              placeholder='MedidasCautelares.Fecha.DecretoSecuestrooCaptura'
              {...register(
                'MedidasCautelares.Fecha.DecretoSecuestrooCaptura',
                {
                  required: false
                }
              )}
            />
          </section>
          <InputSection
            name={'MedidasCautelares.Fecha.SolicitudCapturaoSecuestro'}
            type={'date'}
            title={'Fecha de solicitud de  captura o secuestro'}
          />
        </section>
        <section className={form.section}>
          <h4 className={`${ form.title } ${ typography.displaySmall }`}>
            Oficios
          </h4>

          <InputSection
            name='MedidasCautelares.Oficios.FechaRetiro'
            type={'date'}
            title={'Fecha de retiro de las medidas Cautelares'}
          />
        </section>
        <InputSection
          name='MedidasCautelares.FechaRadicacion'
          type={'text'}
          title={'Fecha de radicacion de las medidas cautelares'}
        />

        <InputSection
          name='MedidasCautelares.RespuestaEmbargo'
          type={'checkbox'}
          title={'Respuesta del embargo'}
        />
        <InputSection
          name='MedidasCautelares.FechaOrdena'
          type={'date'}
          title={'Fecha Ordena'}
        />
        <section className={form.section}>
          <h4 className={`${ form.title } ${ typography.displaySmall }`}>Oficio</h4>
          <InputSection
            name='MedidasCautelares.Oficio.Fecha'
            type={'date'}
            title={'Fecha del oficio'}
          />
          <InputSection
            name='MedidasCautelares.Oficio.Numero'
            type={'number'}
            title={'Oficio Numero'}
          />
        </section>
      </Accordion>
    </section>
  );
}
