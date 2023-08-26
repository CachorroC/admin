
import * as z from 'zod';
import * as fs from 'fs/promises';


export const CategorySchema = z.enum(
  [
    'Bancolombia',
    'Insolvencia',
    'LiosJuridicos',
    'Reintegra',
    'Terminados',
  ]
);

export type Category = z.infer<typeof CategorySchema>;


export const DescripcionSchema = z.enum(
  [
    'CUNDINAMARCA',
    'TOLIMA',
  ]
);

export type Descripcion = z.infer<typeof DescripcionSchema>;


export const TipoProcesoSchema = z.enum(
  [
    'HIPOTECARIA',
    'HIPOTECARIO',
    'HIPOTECARO',
    'HMM PISO 1',
    'PRENDARIO',
    'PRENDARO',
    'HIPOTECARIO ',
    'SINGULAR',
    'SINGULAR ACUM HIPOTECARIO',
    'SINGULAR ACUMULADO CON HIPOTECARIO',
    'SINGULAR ACUMULADO CON HIPOTECARIO CAJA SOCIAL',
    'SOACHA',
    '11001400308320170071700',
    '25473418900120170092400',
    ' HIPOTECARIO',
    '  SINGULAR',
  ]
);

export type TipoProceso = z.infer<typeof TipoProcesoSchema>;


export const CodReglaSchema = z.enum(
  [
    '00                              ',
  ]
);

export type CodRegla = z.infer<typeof CodReglaSchema>;

export const UltimaActuacionSchema = z.object(
  {
    'idRegActuacion': z.number(),
    'llaveProceso'  : z.string(),
    'consActuacion' : z.number(),
    'fechaActuacion': z.coerce.date(),
    'actuacion'     : z.string(),
    'anotacion'     : z.union(
      [
        z.null(),
        z.string()
      ]
    ),
    'fechaInicial': z.union(
      [
        z.coerce.date(),
        z.null()
      ]
    ),
    'fechaFinal': z.union(
      [
        z.coerce.date(),
        z.null()
      ]
    ),
    'fechaRegistro': z.coerce.date(),
    'codRegla'     : CodReglaSchema,
    'conDocumentos': z.boolean(),
    'cant'         : z.number(),
  }
);

export type UltimaActuacion = z.infer<typeof UltimaActuacionSchema>;

export const TelSchema = z.object(
  {
    'fijo': z.union(
      [
        z.coerce.number(),
        z.null()
      ]
    ),
    'celular': z.union(
      [
        z.coerce.number(),
        z.null()
      ]
    ),
  }
);

export type Tel = z.infer<typeof TelSchema>;

export const DeudorSchema = z.object(
  {
    'tel'          : TelSchema,
    'primerNombre' : z.coerce.string(),
    'segundoNombre': z.union(
      [
        z.null(),
        z.coerce.string()
      ]
    ),
    'primerApellido' : z.coerce.string(),
    'segundoApellido': z.union(
      [
        z.null(),
        z.coerce.string()
      ]
    ),
    'cedula': z.union(
      [
        z.coerce.number(),
        z.null()
      ]
    ),
    'direccion': z.coerce.string(),
    'email'    : z.coerce.string(),
  }
);

export type Deudor = z.infer<typeof DeudorSchema>;

export const JuzgadoSchema = z.object(
  {
    'id'  : z.coerce.number(),
    'tipo': z.coerce.string(),
    'url' : z.coerce.string(),
  }
);

export type Juzgado = z.infer<typeof JuzgadoSchema>;

export const DepartamentoSchema = z.object(
  {
    'idCatalogoDetalle'     : z.number(),
    'idCatalogoDetallePadre': z.number(),
    'descripcion'           : DescripcionSchema,
    'codigo'                : z.string(),
  }
);

export type Departamento = z.infer<typeof DepartamentoSchema>;

export const DemandaSchema = z.object(
  {
    'departamento': z.union(
      [
        DepartamentoSchema,
        z.null()
      ]
    ),
    'capitalAdeudado': z.union(
      [
        z.coerce.number(),
        z.coerce.string()
      ] 
    ),
    'entregagarantiasAbogado': z.coerce.date(),
    'etapaProcesal'          : z.union(
      [
        z.null(),
        z.string()
      ]
    ),
    'fechaPresentacion': z.coerce.date(),
    'municipio'        : z.string(),
    'obligacion'       : z.record(
      z.coerce.string(), z.union(
        [
          z.number(),
          z.string()
        ]
      )
    ),
    'radicado'         : z.string(),
    'vencimientoPagare': z.coerce.date(),
    'expediente'       : z.string(),
    'juzgados'         : z.array(
      JuzgadoSchema
    ),
  }
);

export type Demanda = z.infer<typeof DemandaSchema>;

export const IntCarpetaElementSchema = z.object(
  {
    '_id'         : z.coerce.string(),
    'demanda'     : DemandaSchema,
    'category'    : CategorySchema,
    'categoryTag' : z.coerce.number(),
    'deudor'      : DeudorSchema,
    'numero'      : z.coerce.number(),
    'llaveProceso': z.coerce.string(),
    'tipoProceso' : TipoProcesoSchema,
    'idProceso'   : z.union(
      [
        z.coerce.number(),
        z.null()
      ]
    )
          .optional(),
    'fecha': z.union(
      [
        z.coerce.date(),
        z.null()
      ]
    )
          .optional(),
    'lastModified': z.union(
      [
        z.coerce.date(),
        z.null()
      ]
    )
          .optional(),
    'ultimaActuacion': z.union(
      [
        UltimaActuacionSchema,
        z.null()
      ]
    )
          .optional(),
  }
);

export type IntCarpetaElement = z.infer<typeof IntCarpetaElementSchema>;