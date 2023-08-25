// To parse this data:
//
//   import { Convert } from "./file";
//
//   const intCarpeta = Convert.toIntCarpeta(json);

import { WithId } from 'mongodb';
import { toNameString } from '../fix';
import { Actuacion } from './actuaciones';

export interface IntCarpeta {
  demanda: Demanda;
  category: Category;
  categoryTag: number;
  deudor: Deudor;

  numero: number;
  llaveProceso: string;
  tipoProceso: TipoProceso;
  idProceso?: number;

  lastModified?: Date;
}

export type Category =
  | 'Terminados'
  | 'LiosJuridicos'
  | 'Bancolombia'
  | 'Reintegra'
  | 'Insolvencia';

export interface Demanda {
  departamento: Departamento | null;
  capitalAdeudado: CapitalAdeudado;
  entregagarantiasAbogado: Date;

  etapaProcesal: null | string;
  fechaPresentacion?: Date | string;
  municipio: string;
  obligacion: { [key: string]: Obligacion };
  radicado: string;
  vencimientoPagare?: Date | string;
  expediente: string;
  juzgados: Juzgado[];
}

export type CapitalAdeudado = number | string;

export interface Departamento {
  idCatalogoDetalle: number;
  idCatalogoDetallePadre: number;
  descripcion: string;
  codigo: string;
}

export type Descripcion =
  | 'CUNDINAMARCA'
  | 'TOLIMA';

export interface Juzgado {
  id: number;
  tipo: string;
  url: string;
}

export type Obligacion = number | string;

export interface Deudor {
  tel: Tel;
  primerNombre: string;
  segundoNombre?: string;
  primerApellido: string;
  segundoApellido?: string;
  cedula: number | null;
  direccion?: string;
  email?: string;
}

export interface Tel {
  fijo: number | null;
  celular: number | null;
}

export type TipoProceso =
  | 'HIPOTECARIO'
  | 'PRENDARIO'
  | 'SINGULAR'
  | 'SINGULAR ACUMULADO CON HIPOTECARIO'
  | 'SINGULAR ACUM HIPOTECARIO'
  | '11001400308320170071700'
  | '25473418900120170092400'
  | 'PRENDARO'
  | ' HIPOTECARIO'
  | 'HMM PISO 1'
  | '  SINGULAR'
  | 'HIPOTECARIA'
  | 'HIPOTECARO'
  | 'SINGULAR ACUMULADO CON HIPOTECARIO CAJA SOCIAL'
  | 'SOACHA';

export interface MonCarpeta extends IntCarpeta {
  _id: string;
  nombre: string;
  fecha?: Date;

  ultimaActuacion?: Actuacion;
}

export type CarpetaKeys = keyof IntCarpeta;

// Converts JSON strings to/from your types
export class carpetaConvert {
  public static toMonCarpeta(
    carpeta: WithId<IntCarpeta>
  ): MonCarpeta {
    const fixedCarpeta: MonCarpeta = {
      ...carpeta,
      _id: carpeta._id.toString(),
      get nombre() {
        const nombres = this.deudor.segundoNombre
          ? this.deudor.primerNombre
            + ' '
            + this.deudor.segundoNombre
          : this.deudor.primerNombre;

        const apellidos = this.deudor
              .segundoApellido
          ? this.deudor.primerApellido
            + ' '
            + this.deudor.segundoApellido
          : this.deudor.primerApellido;

        const rawName = nombres + ' ' + apellidos;

        const nameOutput = toNameString(
          {
            nameRaw: rawName
          } 
        );

        return nameOutput;
      }
    };

    return fixedCarpeta;
  }
  public static toMonCarpetas(
    carpetas: WithId<IntCarpeta>[]
  ): MonCarpeta[] {
    const newCarpetas = carpetas.map(
      (
        carpeta 
      ) => {
        return this.toMonCarpeta(
          carpeta 
        );
      }
    );

    return newCarpetas;
  }
  public static toIntCarpetas(
    json: string
  ): IntCarpeta[] {
    return JSON.parse(
      json 
    );
  }

  public static intCarpetasToJson(
    value: IntCarpeta[]
  ): string {
    return JSON.stringify(
      value 
    );
  }

  public static toIntCarpeta(
    json: string
  ): IntCarpeta {
    return JSON.parse(
      json 
    );
  }

  public static intCarpetaToJson(
    value: IntCarpeta
  ): string {
    return JSON.stringify(
      value 
    );
  }

  public static toDemanda(
    json: string 
  ): Demanda {
    return JSON.parse(
      json 
    );
  }

  public static demandaToJson(
    value: Demanda
  ): string {
    return JSON.stringify(
      value 
    );
  }

  public static toDepartamento(
    json: string
  ): Departamento {
    return JSON.parse(
      json 
    );
  }

  public static departamentoToJson(
    value: Departamento
  ): string {
    return JSON.stringify(
      value 
    );
  }

  public static toJuzgado(
    json: string 
  ): Juzgado {
    return JSON.parse(
      json 
    );
  }

  public static juzgadoToJson(
    value: Juzgado
  ): string {
    return JSON.stringify(
      value 
    );
  }

  public static toDeudor(
    json: string 
  ): Deudor {
    return JSON.parse(
      json 
    );
  }

  public static deudorToJson(
    value: Deudor
  ): string {
    return JSON.stringify(
      value 
    );
  }

  public static toTel(
    json: string 
  ): Tel {
    return JSON.parse(
      json 
    );
  }

  public static telToJson(
    value: Tel 
  ): string {
    return JSON.stringify(
      value 
    );
  }
}

export class NombreCompleto {
  Nombre: string;
  constructor(
    {
      primerNombre,
      segundoNombre,
      primerApellido,
      segundoApellido
    }: {
    primerNombre: string;
    primerApellido: string;
    segundoNombre?: string;
    segundoApellido?: string;
  } 
  ) {
    const nombres = segundoNombre
      ? primerNombre + ' ' + segundoNombre
      : primerNombre;

    const apellidos = segundoApellido
      ? primerApellido + ' ' + segundoApellido
      : primerApellido;

    const rawName = nombres + ' ' + apellidos;

    const nameOutput = toNameString(
      {
        nameRaw: rawName
      } 
    );

    this.Nombre = nameOutput;
  }
}
