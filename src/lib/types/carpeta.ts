// To parse this data:
//
//   import { Convert } from "./file";
//
//   const intCarpeta = Convert.toIntCarpeta(json);

import { WithId } from 'mongodb';
import { toNameString } from '../fix';

export interface IntCarpeta {
  demanda: Demanda;
  category: Category;
  deudor: Deudor;
  numero: number;
  llaveProceso: string;
  tipoProceso: TipoProceso;
  idProceso: number;
}

export type Category =
  | 'Terminados'
  | 'LiosJuridicos'
  | 'Bancolombia'
  | 'Reintegra'
  | 'Insolvencia';

export interface Demanda {
  departamento: Departamento | null;
  capitalAdeudado: number | null;
  entregagarantiasAbogado: Date;
  etapaProcesal: null | string;
  fechaPresentacion?: Date;
  municipio: string;
  obligacion: { [key: string]: number | string };
  radicado: string;
  vencimientoPagare?: Date;
  expediente: string;
  juzgados: Juzgado[];
}

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

export interface Deudor {
  tel: Tel;
  primerNombre: string;
  segundoNombre: string;
  primerApellido: string;
  segundoApellido: string;
  cedula: number | null;
  direccion?: string;
  email?: string;
}

export interface Tel {
  fijo: number[] | null;
  celular: number[] | null;
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
        const rawName
          = this.deudor.primerNombre
            + ' '
            + this.deudor.segundoNombre
          ?? ' '
            + ' '
            + this.deudor.primerApellido
            + this.deudor.segundoApellido
          ?? ' ';

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
    segundoNombre: string | null;
    segundoApellido: string | null;
  } 
  ) {
    this.Nombre = segundoApellido
      ? segundoNombre
        ? `${ primerNombre } ${ segundoNombre } ${ primerApellido } ${ segundoApellido }`
        : `${ primerNombre } ${ primerApellido } ${ segundoApellido }`
      : `${ primerNombre } ${ primerApellido }`;
  }
}
