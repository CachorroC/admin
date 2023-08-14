
import { InputSection } from '#@/components/form/InputSection';
import { SelectSection } from '#@/components/form/SelectSection';
import { NuevaCarpetaProvider } from '#@/hooks/formContext';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import { NuevoProceso } from '../../sinEspecificar/new-carpeta';
import form from '#@/components/form/form.module.scss';
import { getDepartamentos } from '#@/lib/RamaJudicial';
import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import { notFound } from 'next/navigation';

export default async function PageProcesosEditarLeft (
  {
    params
  }: { params: { llaveProceso: string } }
) {

  const carpeta = await getCarpetasByllaveProceso(
    {
      llaveProceso: params.llaveProceso
    }
  );
  const departamentos = await getDepartamentos();

  if ( !departamentos ) {
    return null;
  }

  const descripciones = departamentos.result.map(
    (
      res
    ) => {
      return res.descripcion;
    }
  );

  if ( !carpeta ) {
    notFound();
  }

  return (
    <NuevaCarpetaProvider>
      <NuevoProceso carpeta={carpeta} uri={ `${ getBaseUrl() }` } >
        <InputSection
          name={'capitalAdeudado'}
          title={'Capital Adeudado'}
          type={'number'}
          rules={{
            required: true,
            min     : 1000000
          }}
        />

        <section className={ form.section }>

          <SelectSection
            name={'demanda.departamento'}
            title={'Departamento'}
            options={descripciones}
          />
          <section className={form.section}>
            <InputSection
              name={
                'demanda.juzgado.0.id'
              }
              title={'despacho numero'}
              type={'number'}
              rules={{
                required: true
              }}
            />
            <SelectSection
              name={
                'demanda.juzgado.0.tipo'
              }
              title={'tipo de despacho'}
              options={[
                'Civil Municipal de Ejecucion',
                'Civil Municipal',
                'Promiscuo Municipal',
                'Pequeñas Causas y Competencias Multiples'
              ]}
            />
            <InputSection
              name={
                'demanda.juzgado.0.url'
              }
              title={'link'}
              type={'url'}
              rules={{
                required: true
              }}
            />
          </section>
          <InputSection
            name={'demanda.ciudad'}
            title={'Municipio'}
            type={'text'}
            rules={{
              required: true
            }}
          />
          <InputSection
            name={'demanda.radicado'}
            title={'Radicado'}
            type={'text'}
          />
        </section>
        <section className={ form.section }>
          <InputSection
            name={'deudor.primerNombre'}
            title={'Primer Nombre'}
            type={'text'}
            rules={{
              required: true
            }}
          />
          <InputSection
            name={'deudor.segundoNombre'}
            title={'Segundo Nombre'}
            type={'text'}
          />
          <InputSection
            name={'deudor.primerApellido'}
            title={'Primer Apellido'}
            type={'text'}
            rules={{
              required: true
            }}
          />
          <InputSection
            name={'deudor.segundoApellido'}
            title={'Segundo Apellido'}
            type={'text'}
          />
          <InputSection
            name={'deudor.cedula'}
            title={'cedula'}
            type={'number'}
            rules={{
              required: true
            }}
          />
          <InputSection
            name={'deudor.direccion'}
            title={
              'Direccion de residencia o trabajo'
            }
            type={'text'}
          />


          <InputSection
            name={'deudor.tel.fijo'}
            title={'Telefono fijo'}
            type={'tel'}
            rules={{
              required : false,
              maxLength: 10,
              minLength: 10
            }}
          />
          <InputSection
            name={'deudor.tel.celular'}
            title={'Telefono celular'}
            type={'tel'}
            rules={{
              required : false,
              minLength: 10,
              maxLength: 10
            }}
          />
          <InputSection
            name={'deudor.email'}
            title={'Correo electrónico'}
            type={'email'}
            rules={{
              required: false,
              pattern : /^\S+@\S+$/i
            }}
          />


        </section>
        <InputSection
          name={'demanda.entregaGarantiasAbogado'}
          title={
            'Entrega de las garantias al abogado'
          }
          type={'date'}
          rules={{
            required: true
          }}
        />
        <SelectSection
          name={'demanda.etapaProcesal'}
          title={'Etapa Procesal'}
          options={[
            'EJECUCION',
            'CONTESTACION DEMANDA',
            'EMPLAZAMIENTO',
            'ADMISION DE LA DEMANDA'
          ]}
        />

        <SelectSection
          name={'grupo'}
          title={'Grupo al que pertenece'}
          options={[
            'Bancolombia',
            'Reintegra',
            'Lios Juridicos',
            'Terminados'
          ]}
        />
        <InputSection
          name={'llaveProceso'}
          title={'llaveProceso'}
          type={'text'}
          rules={{
            required : true,
            maxLength: 23,
            minLength: 23
          }}
        />
        <InputSection
          name={'numero'}
          title={'Carpeta numero'}
          type={'number'}
          rules={{
            required: true
          }}
        />


        <SelectSection
          name={'tipoProceso'}
          title={'Proceso del Tipo'}
          options={[
            'SINGULAR',
            'HIPOTECARIO',
            'PRENDARIO'
          ]}
        />
        <InputSection
          name={'demanda.vencimientoPagare'}
          title={'vencimiento del pagare'}
          type={'date'}
          rules={{
            required: true
          }}
        />
      </NuevoProceso>
    </NuevaCarpetaProvider>
  );
}
