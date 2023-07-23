// To parse this data:
//
//   import { Convert } from "./file";
//
//   const intCarpeta = Convert.toIntCarpeta(json);

export interface IntCarpeta {
  numero: number;
  fechaIngreso: Date;
  deudor: Deudor;
  capitalAdeudado: number;
  vencimientoPagare: Date;
  clase: ClaseProceso;
  codeudor?: Codeudor;
  grupo: Grupo;
  idProceso: number[];
  llaveProceso: string;
  reparto: boolean;
  tipoBien: string;
  tipoProceso: TipoProceso;
  obligacion?:  ( number | string )[];
}

export type ClaseProceso = 'VEHICULO' | 'INMUEBLE' | 'BANCOS' | 'SALARIO' | 'ESTABLECIMIENTO'

export type Grupo = 'Bancolombia' | 'Reintegra' | 'LiosJuridicos'



export interface Codeudor {
  nombre: string[] | string;
  cedula: number[] | number | string;
  direccion?: string;
  tel?: number | string;
}

export interface Tel {
  celular?: number;
  fijo?: number;
}

export interface Deudor {
  cedula?: number;
  direccion?: string;
  primerApellido: string;
  primerNombre: string;
  email?: string;
  segundoApellido?: string;
  segundoNombre?: string;
  tel?: Tel;
}

export interface MonCarpeta extends IntCarpeta {
  _id: string;
}



export type TipoProceso =
  | 'SINGULAR'
  | 'HIPOTECARIO'
  | 'PRENDARIO';

// Converts JSON strings to/from your types
export class Convert {
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

  public static toCodeudor(
    json: string
  ): Codeudor {
    return JSON.parse(
      json
    );
  }

  public static codeudorToJson(
    value: Codeudor
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
}
