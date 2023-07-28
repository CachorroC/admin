'use client';
import form from '#@/components/form/form.module.scss';
import { IntCarpeta } from '#@/lib/types/demandados';
import {
  UseFormRegister,
  useFormContext
} from 'react-hook-form';
import typography from '#@/styles/fonts/typography.module.scss';
import { Accordion } from '#@/components/Accordion';
import { InputSection } from '#@/components/form/InputSection';
import { ObligacionesArray } from './obligaciones-array';

export function NuevaDemandaSection() {
  const { register } =
    useFormContext<IntCarpeta>();

  return (
    <section className={form.section}>
      <h3
        className={`${form.title} ${typography.displayMedium}`}
      >
        Demanda
      </h3>

      <section className={form.section}>
        <label
          htmlFor='demanda.departamento'
          className={form.label}
        >
          departamento:
        </label>
        <select
          className={form.textArea}
          {...register('demanda.departamento', {
            required: false
          })}
        >
          <option value='CO-AMA'>Amazonas</option>
          <option value='CO-ANT'>
            Antioquia
          </option>
          <option value='CO-ARA'>Arauca</option>
          <option value='CO-ATL'>
            Atlántico
          </option>
          <option value='CO-BOL'>Bolívar</option>
          <option value='CO-BOY'>Boyacá</option>
          <option value='CO-CAL'>Caldas</option>
          <option value='CO-CAQ'>Caquetá</option>
          <option value='CO-CAS'>Casanare</option>
          <option value='CO-CAU'>Cauca</option>
          <option value='CO-CES'>Cesar</option>
          <option value='CO-CHO'>Chocó</option>
          <option value='CO-COR'>Córdoba</option>
          <option value='CO-CUN'>
            Cundinamarca
          </option>
          <option value='CO-DC'>
            Distrito Capital de Bogotá
          </option>
          <option value='CO-GUA'>Guainía</option>
          <option value='CO-GUV'>Guaviare</option>
          <option value='CO-HUI'>Huila</option>
          <option value='CO-LAG'>
            La Guajira
          </option>
          <option value='CO-MAG'>
            Magdalena
          </option>
          <option value='CO-MET'>Meta</option>
          <option value='CO-NAR'>Nariño</option>
          <option value='CO-NSA'>
            Norte de Santander
          </option>
          <option value='CO-PUT'>Putumayo</option>
          <option value='CO-QUI'>Quindío</option>
          <option value='CO-RIS'>
            Risaralda
          </option>
          <option value='CO-SAP'>
            San Andrés, Providencia y Santa
            Catalina
          </option>
          <option value='CO-SAN'>
            Santander
          </option>
          <option value='CO-SUC'>Sucre</option>
          <option value='CO-TOL'>Tolima</option>
          <option value='CO-VAC'>
            Valle del Cauca
          </option>
          <option value='CO-VAU'>Vaupés</option>
          <option value='CO-VID'>Vichada</option>
        </select>
      </section>
      <InputSection
        name={'demanda.municipio'}
        title={'Municipio'}
        type={'text'}
      />

      <InputSection
        name={'demanda.radicado'}
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
          htmlFor='demanda.Ubicacion.Juzgado'
        >
          Ubicacion del juzgado
        </label>
        <input
          className={form.textArea}
          type='text'
          placeholder='demanda.Ubicacion.Juzgado'
          {...register('demanda.ubicacion', {
            required: false
          })}
        />
      </section>
      <section className={form.section}>
        <section className={form.section}>
          <label
            className={form.label}
            htmlFor='demanda.juzgado.origen.id'
          >
            Nombre del Juzgado de origen
          </label>
          <input
            className={form.textArea}
            type='text'
            placeholder='Juzgado de Origen'
            {...register(
              'demanda.juzgado.origen.id',
              {
                required: false
              }
            )}
          />
        </section>
        <section className={form.section}>
          <label
            className={form.label}
            htmlFor='demanda.Juzgado.Origen.url'
          >
            Link para el juzgado de origen
          </label>
          <input
            className={form.textArea}
            type='text'
            placeholder='Link del juzgado'
            {...register(
              'demanda.juzgado.origen.url',
              {
                required: false
              }
            )}
          />
        </section>
      </section>
      <section className={form.section}>
        <section className={form.section}>
          <label
            className={form.label}
            htmlFor='demanda.juzgado.ejecucion.id'
          >
            Nombre del Juzgado de ejecucion
          </label>
          <input
            className={form.textArea}
            type='text'
            placeholder='Juzgado de ejecucion'
            {...register(
              'demanda.juzgado.ejecucion.id',
              {}
            )}
          />
        </section>
        <section className={form.section}>
          <label
            className={form.label}
            htmlFor='demanda.juzgado.ejecucion.url'
          >
            Link para el juzgado de ejecucion
          </label>
          <input
            className={form.textArea}
            type='text'
            placeholder='Link del juzgado'
            {...register(
              'demanda.juzgado.ejecucion.url',
              {}
            )}
          />
        </section>
      </section>
    </section>
  );
}
