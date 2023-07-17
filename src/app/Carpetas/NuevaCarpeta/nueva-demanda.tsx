'use client';
import form from '#@/components/form/form.module.scss';
import { IntCarpeta } from '#@/lib/types/demandados';
import { UseFormRegister, useFormContext } from 'react-hook-form';
import typography from '#@/styles/fonts/typography.module.scss';
import { Accordion } from '#@/components/Accordion';

export function NuevaDemandaSection() {
  const { register } = useFormContext<IntCarpeta>();

  return (
    <section className={form.section}>
      <h3 className={`${form.title} ${typography.displayMedium}`}>Demanda</h3>
      <Accordion>
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
            <option value='Amazonas'>Amazonas</option>
            <option value='Vichada'>Vichada</option>
            <option value='Meta'> Meta</option>
            <option value='Caquetá'>Caquetá</option>
            <option value='Guainía'>Guainía</option>
            <option value='Antioquia'>Antioquia</option>
            <option value='Vaupés'>Vaupés</option>
            <option value='Guaviare'>Guaviare</option>
            <option value='Chocó'>Chocó</option>
            <option value='Casanare'>Casanare</option>
            <option value='Nariño'>Nariño</option>
            <option value='Santander'>Santander</option>
            <option value='Cauca'>Cauca</option>
            <option value='Bolívar'>Bolívar</option>
            <option value='Córdoba'>Córdoba</option>
            <option value='Putumayo'>Putumayo</option>
            <option value='Arauca'>Arauca</option>
            <option value='Tolima'>Tolima</option>
            <option value='Boyacá'>Boyacá</option>
            <option value='Magdalena'>Magdalena</option>
            <option value='Cesar'>Cesar</option>
            <option value='CUNDINAMARCA'>Cundinamarca</option>
            <option value='Valle del Cauca'>Valle del Cauca</option>
            <option value='Norte de Santander'>Norte de Santander</option>
            <option value='La Guajira'>La Guajira</option>
            <option value='Huila'>Huila</option>
            <option value='Sucre'>Sucre</option>
            <option value='Caldas'>Caldas</option>
            <option value='Risaralda'>Risaralda</option>
            <option value='Atlántico'>Atlántico</option>
            <option value='Quindío'>Quindío</option>
            <option value='Bogotá, Distrito Capital'>
              Bogotá, Distrito Capital
            </option>
            <option value='San Andrés y Providencia'>
              San Andrés y Providencia
            </option>
          </select>
        </section>
        <section className={form.section}>
          <label
            className={form.label}
            htmlFor='Demanda.Municipio'>
            Municipio
          </label>
          <input
            className={form.textArea}
            type='text'
            placeholder='Demanda.Municipio'
            {...register('Demanda.Municipio', {})}
          />
        </section>
        <section className={form.section}>
          <label
            className={form.label}
            htmlFor='Demanda.VencimientoPagare'>
            Fecha del Vencimiento del Pagaré
          </label>
          <input
            className={form.textArea}
            type='date'
            placeholder='Demanda.VencimientoPagaré'
            {...register('Demanda.VencimientoPagare', {
              required: false,
              valueAsDate: true
            })}
          />
        </section>
        <section className={form.section}>
          <label
            className={form.label}
            htmlFor='Demanda.EntregaGarantiasAbogado'>
            Fecha de Entrega Garantias a la Abogada
          </label>
          <input
            className={form.textArea}
            type='date'
            placeholder='Demanda.EntregaGarantiasAbogado'
            {...register('Demanda.EntregadeGarantiasAbogado', {
              valueAsDate: true,
              required: false
            })}
          />
        </section>
        <section className={form.section}>
          <label
            className={form.label}
            htmlFor='Demanda.Radicado'>
            Radicado número:
          </label>
          <input
            className={form.textArea}
            type='text'
            placeholder='Demanda.Radicado'
            {...register('Demanda.Radicado', {
              required: false,
              pattern: /\d\d\d\d\s+-\s+\d\d\d\d\d/gi
            })}
          />
        </section>
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
      </Accordion>
    </section>
  );
}
