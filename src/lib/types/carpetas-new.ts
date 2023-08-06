// To parse this data:
//
//   import { Convert } from "./file";
//
//   const carpetas = Convert.toCarpetas(json);

export interface Carpeta {
  numero: number;
  id: string;
  deudor: Deudor;
  capitalAdeudado: number;
  llaveProceso?: string;
  grupo: Grupo;
  demanda?: Demanda;
  tipoProceso?: TipoProceso;
}

export interface Demanda {
  vencimientoPagare?: string;
  obligacion?: number | string;
  obligacion2?: number | string;
  entregaGarantiasAbogado?: string;
  departamento?: Departamento;
  ciudad?: string;
  juzgado?: Juzgado;
  radicado?: number | string;
  etapaProcesal?: string;
}

export type Departamento =
  | 'CUNDINAMARCA'
  | 'TOLIMA'
  | 'BOYACÁ';

export interface Juzgado {
  origen: Ejecucion;
  ejecucion?: Ejecucion;
}

export interface Ejecucion {
  idytipo: string;
  url?: string;
}

export interface Deudor {
  cedula: number | string;
  nombreCompleto: string;
  tel?: number | string;
  email?: number | string;
  direccion?: string;
}

export type Grupo =
  | 'Terminados'
  | 'LiosJuridicos'
  | 'Bancolombia'
  | 'Reintegra'
  | 'Insolvencia';

export type TipoProceso =
  | 'PRENDARIO'
  | 'HIPOTECARIO'
  | 'SINGULAR'
  | 'HMM PISO 1';

// Converts JSON strings to/from your types
export class Convert {
  public static toCarpetas(
    json: string
  ): Carpeta {
    return JSON.parse(
      json 
    );
  }

  public static carpetasToJson(
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

  public static toEjecucion(
    json: string
  ): Ejecucion {
    return JSON.parse(
      json 
    );
  }

  public static ejecucionToJson(
    value: Ejecucion
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
