// To parse this data:
//
//   import { Convert } from "./file";
//
//   const intCarpeta = Convert.toIntCarpeta(json);

export interface IntCarpeta {
    _id:                     string;
    bien?:                   Bien | null;
    capitalAdeudado:         number;
    clase:                   string;
    codeudor?:               Codeudor | null;
    demanda:                 Demanda;
    deudor:                  Deudor;
    entregaGarantiasAbogado: Date;
    etapaProcesal:           EtapaProcesal;
    fechaIngreso:            Date;
    grupo:                   Grupo;
    idProceso:               number | null;
    llaveProceso:            string;
    numero:                  number;
    obligacion:              Array<ObligacionClass | number | string>;
    reparto:                 boolean;
    tipoBien?:               string;
    tipoProceso:             TipoProceso;
    vencimientoPagare:       Date;
    fecha?:                  Date;
    ultimasActuaciones?:     UltimasActuacione[];
}

export interface Bien {
    id?:  string;
    tipo: string;
}

export interface Codeudor {
    cedula:     number | string;
    direccion?: string;
    nombre:     string;
    tel?:       number | string;
}

export interface Demanda {
    departamento: Departamento;
    juzgado:      Juzgado;
    municipio:    string;
    radicado?:    string;
    ubicacion?:   string;
}

export type Departamento = 'CUNDINAMARCA';

export interface Juzgado {
    origen:     Ejecucion;
    ejecucion?: Ejecucion;
}

export interface Ejecucion {
    id:   number;
    tipo: Tipo;
    url:  string;
}

export type Tipo = 'Civil Municipal de Ejecucion' | 'Pequeñas Causas y Competencias Multiples' | 'Civil Municipal' | 'Promiscuo Municipal';

export interface Deudor {
    cedula:          number;
    direccion?:       string;
    primerApellido:   string;
    primerNombre:     string;
    tel?:             Tel;
    email?:           string;
    segundoApellido?: string;
    segundoNombre?:   string;
}

export interface Tel {
    fijo?:    number;
    celular?: number;
}

export type EtapaProcesal = 'EJECUCION' | 'CONTESTACION DEMANDA' | 'EMPLAZAMIENTO' | 'ADMISION DE LA DEMANDA';

export type Grupo = 'Bancolombia';

export interface ObligacionClass {
    texto: number;
    tipo:  string;
}

export type TipoProceso = 'SINGULAR' | 'HIPOTECARIO' | 'PRENDARIO' | 'HIPOTECARO';

export interface UltimasActuacione {
    idProceso:       number;
    ultimaActuacion: UltimaActuacion;
}

export interface UltimaActuacion {
    actuacion:      string;
    anotacion:      null | string;
    cant:           number;
    codRegla:       CodRegla;
    conDocumentos:  boolean;
    consActuacion:  number;
    fechaActuacion: Date;
    fechaFinal:     Date | null;
    fechaInicial:   Date | null;
    fechaRegistro:  Date;
    idRegActuacion: number;
    llaveProceso:   string;
}

export type CodRegla = '00                              ';

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

  public static toBien(
    json: string
  ): Bien {
    return JSON.parse(
      json
    );
  }

  public static bienToJson(
    value: Bien
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

  public static toObligacionClass(
    json: string
  ): ObligacionClass {
    return JSON.parse(
      json
    );
  }

  public static obligacionClassToJson(
    value: ObligacionClass
  ): string {
    return JSON.stringify(
      value
    );
  }

  public static toUltimasActuacione(
    json: string
  ): UltimasActuacione {
    return JSON.parse(
      json
    );
  }

  public static ultimasActuacioneToJson(
    value: UltimasActuacione
  ): string {
    return JSON.stringify(
      value
    );
  }

  public static toUltimaActuacion(
    json: string
  ): UltimaActuacion {
    return JSON.parse(
      json
    );
  }

  public static ultimaActuacionToJson(
    value: UltimaActuacion
  ): string {
    return JSON.stringify(
      value
    );
  }
}
