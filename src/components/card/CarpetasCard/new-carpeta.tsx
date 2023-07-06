'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import form from '#@/components/form/form.module.scss';
import { intCarpetaDemandado } from '#@/lib/types/demandados';

export function NuevoProceso(
  {
    uri,
  }: {
  uri: string;
}
) {
  const {
    register,
    handleSubmit,
    formState: {
      errors 
    },
  } = useForm<intCarpetaDemandado> ();

  const onSubmit = async (
    data: intCarpetaDemandado
  ) => {
    alert (
      JSON.stringify (
        data
      )
    );
    const postNewNote = await fetch (
      `${ uri }/api/Demandados`,
      {
        method : 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify (
          data
        ),
      }
    ).then (
      (
        fullfilled
      ) => {
        alert (
          fullfilled.status
        );
        return fullfilled;
      }
    );
    const responsePostNewNote =
      await postNewNote.json ();
    alert (
      responsePostNewNote
    );
    return responsePostNewNote;
  };
  return (
    <div className={form.container}>
      <form
        className={form.form}
        onSubmit={handleSubmit (
          onSubmit
        )}>
        <input
          type='number'
          placeholder='Carpeta'
          {...register (
            'Carpeta',
            {
              required: true,
            }
          )}
        />
        <input
          type='number'
          placeholder='Deudor.Id'
          {...register (
            'Deudor.Id',
            {
              required: true,
            }
          )}
        />
        <input
          type='text'
          placeholder='Deudor.Nombre'
          {...register (
            'Deudor.Nombre',
            {
              required: true,
            }
          )}
        />
        <input
          type='text'
          placeholder='Deudor.Email'
          {...register (
            'Deudor.Email',
            {
              pattern: /^\S+@\S+$/i,
            }
          )}
        />
        <input
          type='tel'
          placeholder='Deudor.Tel.Fijo'
          {...register (
            'Deudor.Tel.Fijo',
            {
              maxLength: 10,
            }
          )}
        />
        <input
          type='tel'
          placeholder='Deudor.Tel.Celular'
          {...register (
            'Deudor.Tel.Celular',
            {
              maxLength: 10,
            }
          )}
        />
        <input
          type='text'
          placeholder='Deudor.Direccion'
          {...register (
            'Deudor.Direccion',
            {
            }
          )}
        />
        <input
          type='number'
          placeholder='Codeudor.Cedula'
          {...register (
            'Codeudor.Id',
            {
            }
          )}
        />
        <input
          type='text'
          placeholder='Codeudor.Nombre'
          {...register (
            'Codeudor.Nombre',
            {
            }
          )}
        />
        <input
          type='tel'
          placeholder='Codeudor.Tel.Fijo'
          {...register (
            'Codeudor.Tel.Fijo',
            {
              maxLength: 10,
            }
          )}
        />
        <input
          type='tel'
          placeholder='Codeudor.Tel.Celular'
          {...register (
            'Codeudor.Tel.Celular',
            {
              maxLength: 10,
            }
          )}
        />
        <input
          type='number'
          placeholder='idProceso'
          {...register (
            'idProceso',
            {
              required: true,
            }
          )}
        />
        <input
          type='text'
          placeholder='llaveProceso'
          {...register (
            'llaveProceso',
            {
              minLength: 23,
            }
          )}
        />
        <input
          type='datetime'
          placeholder='Avaluo.Adjudicacion.Fecha'
          {...register (
            'Avaluo.Adjudicacion.Fecha',
            {
            }
          )}
        />
        <input
          type='datetime'
          placeholder='Avaluo.Remate.Fecha'
          {...register (
            'Avaluo.Remate.Fecha',
            {
            }
          )}
        />
        <input
          type='number'
          placeholder='Avaluo.Valor'
          {...register (
            'Avaluo.Valor',
            {
            }
          )}
        />
        <select
          {...register (
            'Demanda.Departamento'
          )}>
          <option value='Amazonas'>
            Amazonas
          </option>
          <option value='Vichada'>
            {' '}
            Vichada
          </option>
          <option value='Meta'> Meta</option>
          <option value='Caquetá'>
            {' '}
            Caquetá
          </option>
          <option value='Guainía'>
            {' '}
            Guainía
          </option>
          <option value='Antioquia'>
            {' '}
            Antioquia
          </option>
          <option value='Vaupés'> Vaupés</option>
          <option value='Guaviare'>
            {' '}
            Guaviare
          </option>
          <option value='Chocó'> Chocó</option>
          <option value='Casanare'>
            {' '}
            Casanare
          </option>
          <option value='Nariño'> Nariño</option>
          <option value='Santander'>
            {' '}
            Santander
          </option>
          <option value='Cauca'> Cauca</option>
          <option value='Bolívar'>
            {' '}
            Bolívar
          </option>
          <option value='Córdoba'>
            {' '}
            Córdoba
          </option>
          <option value='Putumayo'>
            {' '}
            Putumayo
          </option>
          <option value='Arauca'> Arauca</option>
          <option value='Tolima'> Tolima</option>
          <option value='Boyacá'> Boyacá</option>
          <option value='Magdalena'>
            {' '}
            Magdalena
          </option>
          <option value='Cesar'> Cesar</option>
          <option value='CUNDINAMARCA'>
            {' '}
            Cundinamarca
          </option>
          <option value='Valle del Cauca'>
            {' '}
            Valle del Cauca
          </option>
          <option value='Norte de Santander'>
            {' '}
            Norte de Santander
          </option>
          <option value='La Guajira'>
            {' '}
            La Guajira
          </option>
          <option value='Huila'> Huila</option>
          <option value='Sucre'> Sucre</option>
          <option value='Caldas'> Caldas</option>
          <option value='Risaralda'>
            {' '}
            Risaralda
          </option>
          <option value='Atlántico'>
            {' '}
            Atlántico
          </option>
          <option value='Quindío'>
            {' '}
            Quindío
          </option>
          <option value='Bogotá, Distrito Capital'>
            {' '}
            Bogotá, Distrito Capital
          </option>
          <option value='San Andrés y Providencia'>
            {' '}
            San Andrés y Providencia
          </option>
        </select>
        <input
          type='text'
          placeholder='Demanda.Municipio'
          {...register (
            'Demanda.Municipio',
            {
            }
          )}
        />
        <input
          type='datetime'
          placeholder='Demanda.VencimientoPagaré'
          {...register (
            'Demanda.VencimientoPagare',
            {
            }
          )}
        />
        <input
          type='datetime'
          placeholder='Demanda.EntregaGarantiasAbogado'
          {...register (
            'Demanda.EntregadeGarantiasAbogado',
            {
            }
          )}
        />
        <input
          type='text'
          placeholder='Demanda.Radicado'
          {...register (
            'Demanda.Radicado',
            {
              pattern:
              /"\d\d\d\d\s+-\s+\d\d\d\d\d"/i,
            }
          )}
        />
        <input
          type='number'
          placeholder='Demanda.CapitalAdeudado'
          {...register (
            'Demanda.CapitalAdeudado',
            {
            }
          )}
        />
        <select
          {...register (
            'Demanda.Proceso.Tipo'
          )}>
          <option value='HIPOTECARIO'>
            HIPOTECARIO
          </option>
          <option value='PRENDARIO'>
            PRENDARIO
          </option>
          <option value='SINGULAR'>
            SINGULAR
          </option>
        </select>
        <input
          type='text'
          placeholder='Demanda.Ubicacion.Juzgado'
          {...register (
            'Demanda.Ubicacion.Juzgado',
            {
            }
          )}
        />
        <input
          type='text'
          placeholder='Demanda.Juzgado.Origen'
          {...register (
            'Demanda.Juzgado.Origen',
            {
            }
          )}
        />
        <input
          type='text'
          placeholder='Demanda.Juzgado.Ejecucion'
          {...register (
            'Demanda.Juzgado.Ejecucion',
            {
            }
          )}
        />
        <input
          type='text'
          placeholder='Demanda.Obligacion.1'
          {...register (
            'Demanda.Obligacion.1',
            {
            }
          )}
        />
        <input
          type='text'
          placeholder='Demanda.Obligacion.2'
          {...register (
            'Demanda.Obligacion.2',
            {
            }
          )}
        />
        <input
          type='text'
          placeholder='EtapaProcesal.Etapa'
          {...register (
            'EtapaProcesal.Etapa',
            {
            }
          )}
        />
        <input
          type='datetime'
          placeholder='EtapaProcesal.Fecha.MandamientodePago'
          {...register (
            'EtapaProcesal.Fecha.MandamientodePago',
            {
            }
          )}
        />
        <input
          type='datetime'
          placeholder='Liquidacion.Costas.FechaAprobacion'
          {...register (
            'Liquidacion.Costas.FechaAprobacion',
            {
            }
          )}
        />
        <input
          type='number'
          placeholder='Liquidacion.Costas.Valor'
          {...register (
            'Liquidacion.Costas.Valor',
            {
            }
          )}
        />
        <input
          type='datetime'
          placeholder='Liquidacion.Fecha.Aprobacion'
          {...register (
            'Liquidacion.Fecha.Aprobacion',
            {
            }
          )}
        />
        <input
          type='datetime'
          placeholder='Liquidacion.Fecha.Presentacion'
          {...register (
            'Liquidacion.Fecha.Presentacion',
            {
            }
          )}
        />
        <input
          type='datetime'
          placeholder='Liquidacion.Fecha.Solicitud'
          {...register (
            'Liquidacion.Fecha.Solicitud',
            {
            }
          )}
        />
        <input
          type='datetime'
          placeholder='Liquidacion.Fecha.Sentencia'
          {...register (
            'Liquidacion.Fecha.Sentencia',
            {
            }
          )}
        />
        <input
          type='text'
          placeholder='MedidasCautelares.Bienes'
          {...register (
            'MedidasCautelares.Bienes',
            {
            }
          )}
        />
        <input
          type='text'
          placeholder='MedidasCautelares.MedidaSolicitada'
          {...register (
            'MedidasCautelares.MedidaSolicitada',
            {
            }
          )}
        />
        <input
          type='text'
          placeholder='MedidasCautelares.extra'
          {...register (
            'MedidasCautelares.Extra',
            {
            }
          )}
        />
        <input
          type='text'
          placeholder='MedidasCautelares.PlacaoNumeroMatricula'
          {...register (
            'MedidasCautelares.PlacaoNumeroMatricula',
            {
            }
          )}
        />
        <input
          type='text'
          placeholder='MedidasCautelares.DescripcionMedida'
          {...register (
            'MedidasCautelares.DescripcionMedida',
            {
            }
          )}
        />
        <input
          type='datetime'
          placeholder='MedidasCautelares.Fecha.Captura'
          {...register (
            'MedidasCautelares.Fecha.Captura',
            {
            }
          )}
        />
        <input
          type='text'
          placeholder='MedidasCautelares.Fecha.Secuestro'
          {...register (
            'MedidasCautelares.Fecha.Secuestro',
            {
            }
          )}
        />
        <input
          type='datetime'
          placeholder='MedidasCautelares.Fecha.DecretoSecuestrooCaptura'
          {...register (
            'MedidasCautelares.Fecha.DecretoSecuestrooCaptura',
            {
            }
          )}
        />
        <input
          type='datetime'
          placeholder='MedidasCautelares.Fecha.SolicitudCapturaoSecuestro'
          {...register (
            'MedidasCautelares.Fecha.SolicitudCapturaoSecuestro',
            {
            }
          )}
        />

        <input type='submit' />
      </form>
    </div>
  );
}
