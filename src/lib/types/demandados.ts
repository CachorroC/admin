// To parse this data:
//
//   import { Convert } from "./file";
//
//   const intCarpeta = Convert.toIntCarpeta(json);

import { WithId } from 'mongodb';
// To parse this data:
//
//   import { Convert } from "./file";
//
//   const intCarpeta = Convert.toIntCarpeta(json);

export interface IntCarpeta {
  capitalAdeudado: number;
  demanda: Demanda;
  deudor: Deudor;
  grupo: Grupo;
  id: number;
  numero: number;
  llaveProceso: null | string;
  idProceso: number;
  tipoProceso: TipoProceso | null;
}

export interface Demanda {
  ciudad: null | string;
  departamento: Departamento | null;
  entregaGarantiasAbogado: Date;
  etapaProcesal: null | string;
  juzgado: Juzgado[];
  obligacion: Array<number | string> | null;
  radicado: number | null | string;
  vencimientoPagare: Date;
}

export type Departamento =
  | 'CUNDINAMARCA'
  | 'BOYACÁ'
  | 'TOLIMA';

export interface Juzgado {
  id: number;
  tipo: string;
  url: string;
}

export interface Deudor {
  cedula: number;
  primerNombre: string;
  segundoNombre: null | string;
  primerApellido: string;
  segundoApellido: null | string;
  tel: Tel;
  email: null | string;
  direccion: null | string;
}

export interface Tel {
  celular: number;
  fijo: number;
}

export type Grupo =
  | 'Reintegra'
  | 'Insolvencia'
  | 'Bancolombia'
  | 'LiosJuridicos';

export type TipoProceso =
  | 'PRENDARIO'
  | 'SINGULAR'
  | 'HIPOTECARIO'
  | 'HMM PISO 1';

export interface MonCarpeta extends IntCarpeta {
  _id: string;
  nombre: string;
  fechas?: idFecha[];
}

export interface idFecha {
  idProceso: number;
  fecha: Date;
}

// Converts JSON strings to/from your types/ Converts JSON strings to/from your types
export class carpetaConvert {
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

  public static intCarpetaToJson(
    value: IntCarpeta
  ): string {
    return JSON.stringify(
      value
    );
  }
  public static toMonCarpeta(
    carpeta: WithId<IntCarpeta>
  ): MonCarpeta {
    const fixedCarpeta: MonCarpeta = {
      ...carpeta,
      _id: carpeta._id.toString(),
      get nombre() {
        return (
          this.deudor.primerNombre
            + ' '
            + this.deudor.segundoNombre
          ?? ' '
            + ' '
            + this.deudor.primerApellido
            + this.deudor.segundoApellido
          ?? ' '
        );
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
    this.Nombre = segundoApellido
      ? segundoNombre
        ? `${ primerNombre } ${ segundoNombre } ${ primerApellido } ${ segundoApellido }`
        : `${ primerNombre } ${ primerApellido } ${ segundoApellido }`
      : `${ primerNombre } ${ primerApellido }`;
  }
}
