// To parse this data:
//
//   import { Convert } from "./file";
//
//   const carpeta = Convert.toCarpeta(json);

import { intProceso } from './procesos';

export interface Carpeta {
  capitalAdeudado: number;
  demanda: Demanda;
  deudor: Deudor;
  fecha?: Date;
  grupo: Grupo;
  id: number;
  idProceso?: number[];
  llaveProceso?: string;
  numero: number;
}

export interface Demanda {
  ciudad: string | null;
  departamento: Departamento | null;
  entregaGarantiasAbogado: Date | null;
  etapaProcesal: string | null;
  juzgado: Juzgado[];
  obligacion: Array<
    number | null | string
  > | null;
  radicado: number | string | null;
  vencimientoPagare: Date | null;
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
  direccion: string | null;
  primerApellido: string;
  primerNombre: string;
  segundoApellido: string | null;
  segundoNombre: string | null;
  tel: Tel;
  email: string | null;
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
  | 'HIPOTECARIO';

// Converts JSON strings to/from your types
export class Convert {
  public static toCarpeta(
    json: string 
  ): Carpeta {
    return JSON.parse(
      json 
    );
  }

  public static carpetaToJson(
    value: Carpeta
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
