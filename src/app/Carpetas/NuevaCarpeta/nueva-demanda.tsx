'use client';
import form from '#@/components/form/form.module.scss';
import { IntCarpeta } from '#@/lib/types/demandados';
import { UseFormRegister, useFormContext } from 'react-hook-form';
import typography from '#@/styles/fonts/typography.module.scss';
import { Accordion } from '#@/components/Accordion';
import { InputSection } from '#@/components/form/InputSection';

export function NuevaDemandaSection() {
  const { register } = useFormContext<IntCarpeta>();

  return (
    <section className={form.section}>
      <h3 className={`${form.title} ${typography.displayMedium}`}>Demanda</h3>

      <section className={form.section}>
        <label
          htmlFor='Demanda.Departamento'
          className={form.label}>
          Departamento:
        </label>
        <select
          className={form.textArea}
          {...register('Demanda.Departamento', {
            required: false
          })}>
          <option value='CO-AMA'>Amazonas</option>
          <option value='CO-ANT'>Antioquia</option>
          <option value='CO-ARA'>Arauca</option>
          <option value='CO-ATL'>Atlántico</option>
          <option value='CO-BOL'>Bolívar</option>
          <option value='CO-BOY'>Boyacá</option>
          <option value='CO-CAL'>Caldas</option>
          <option value='CO-CAQ'>Caquetá</option>
          <option value='CO-CAS'>Casanare</option>
          <option value='CO-CAU'>Cauca</option>
          <option value='CO-CES'>Cesar</option>
          <option value='CO-CHO'>Chocó</option>
          <option value='CO-COR'>Córdoba</option>
          <option value='CO-CUN'>Cundinamarca</option>
          <option value='CO-DC'>Distrito Capital de Bogotá</option>
          <option value='CO-GUA'>Guainía</option>
          <option value='CO-GUV'>Guaviare</option>
          <option value='CO-HUI'>Huila</option>
          <option value='CO-LAG'>La Guajira</option>
          <option value='CO-MAG'>Magdalena</option>
          <option value='CO-MET'>Meta</option>
          <option value='CO-NAR'>Nariño</option>
          <option value='CO-NSA'>Norte de Santander</option>
          <option value='CO-PUT'>Putumayo</option>
          <option value='CO-QUI'>Quindío</option>
          <option value='CO-RIS'>Risaralda</option>
          <option value='CO-SAP'>
            San Andrés, Providencia y Santa Catalina
          </option>
          <option value='CO-SAN'>Santander</option>
          <option value='CO-SUC'>Sucre</option>
          <option value='CO-TOL'>Tolima</option>
          <option value='CO-VAC'>Valle del Cauca</option>
          <option value='CO-VAU'>Vaupés</option>
          <option value='CO-VID'>Vichada</option>
        </select>
      </section>
      <InputSection
        name={'Demanda.Municipio'}
        title={'Municipio'}
        type={'text'}
      />
      <InputSection
        name={'Demanda.VencimientoPagare'}
        title={'Vencimiento pagare'}
        type={'date'}
      />
      <InputSection
        name={'Demanda.EntregadeGarantiasAbogado'}
        title={'Entrega de garantias abogado'}
        type={'date'}
      />
      <InputSection
        name={'Demanda.Radicado'}
        title={'Radicado número'}
        type={'text'}
        rls={{
          required: false,
          pattern: /\d\d\d\d\s+-\s+\d\d\d\d\d/gi
        }}
      />

      <section className={form.section}>
        <label
          className={form.label}
          htmlFor='Demanda.CapitalAdeudado'>
          Capital Adeudado
        </label>
        <input
          className={form.textArea}
          type='number'
          placeholder='Demanda.CapitalAdeudado'
          {...register('Demanda.CapitalAdeudado', {
            required: false
          })}
        />
      </section>
      <section className={form.section}>
        <label
          className={form.label}
          htmlFor='Demanda.Proceso.tipo'>
          Tipo de proceso
        </label>
        <select
          {...register('Demanda.Proceso.Tipo', {
            required: false
          })}>
          <option value='HIPOTECARIO'>HIPOTECARIO</option>
          <option value='PRENDARIO'>PRENDARIO</option>
          <option value='SINGULAR'>SINGULAR</option>
        </select>
      </section>
      <section className={form.section}>
        <label
          className={form.label}
          htmlFor='Demanda.Ubicacion.Juzgado'>
          Ubicacion del juzgado
        </label>
        <input
          className={form.textArea}
          type='text'
          placeholder='Demanda.Ubicacion.Juzgado'
          {...register('Demanda.Ubicacion.Juzgado', {
            required: false
          })}
        />
      </section>
      <section className={form.section}>
        <section className={form.section}>
          <label
            className={form.label}
            htmlFor='Demanda.Juzgado.Origen.id'>
            Nombre del Juzgado de origen
          </label>
          <input
            className={form.textArea}
            type='text'
            placeholder='Juzgado de Origen'
            {...register('Demanda.Juzgado.Origen.id', {
              required: false
            })}
          />
        </section>
        <section className={form.section}>
          <label
            className={form.label}
            htmlFor='Demanda.Juzgado.Origen.url'>
            Link para el juzgado de origen
          </label>
          <input
            className={form.textArea}
            type='text'
            placeholder='Link del juzgado'
            {...register('Demanda.Juzgado.Origen.url', {
              required: false
            })}
          />
        </section>
      </section>
      <section className={form.section}>
        <section className={form.section}>
          <label
            className={form.label}
            htmlFor='Demanda.Juzgado.Ejecucion.id'>
            Nombre del Juzgado de ejecucion
          </label>
          <input
            className={form.textArea}
            type='text'
            placeholder='Juzgado de ejecucion'
            {...register('Demanda.Juzgado.Ejecucion.id', {})}
          />
        </section>
        <section className={form.section}>
          <label
            className={form.label}
            htmlFor='Demanda.Juzgado.Ejecucion.url'>
            Link para el juzgado de ejecucion
          </label>
          <input
            className={form.textArea}
            type='text'
            placeholder='Link del juzgado'
            {...register('Demanda.Juzgado.Ejecucion.url', {})}
          />
        </section>
      </section>
      <section className={form.section}>
        <label
          className={form.label}
          htmlFor='Demanda.Obligacion.0'>
          Obligacion 0
        </label>
        <input
          className={form.textArea}
          type='text'
          placeholder='Demanda.Obligacion.0'
          {...register('Demanda.Obligacion.0', {})}
        />
      </section>
      <section className={form.section}>
        <label
          className={form.label}
          htmlFor='Demanda.Obligacion.1'>
          Obligacion 1
        </label>
        <input
          className={form.textArea}
          type='text'
          placeholder='Demanda.Obligacion.1'
          {...register('Demanda.Obligacion.1', {})}
        />
      </section>
      <section className={form.section}>
        <label
          className={form.label}
          htmlFor='Demanda.Obligacion.2'>
          Obligacion 2
        </label>
        <input
          className={form.textArea}
          type='text'
          placeholder='Demanda.Obligacion.2'
          {...register('Demanda.Obligacion.2', {})}
        />
      </section>
    </section>
  );
}
