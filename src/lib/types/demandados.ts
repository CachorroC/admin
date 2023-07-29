// To parse this data:
//
//   import { Convert } from "./file";
//
//   const intCarpeta = Convert.toIntCarpeta(json);

import { WithId } from 'mongodb';
import { intActuacion } from './procesos';

export interface IntCarpeta {
  bien?: Bien | null;
  capitalAdeudado: number;
  clase: string |null;
  codeudor?: Codeudor | null;
  demanda: Demanda;
  deudor: Deudor;
  entregaGarantiasAbogado: Date;
  etapaProcesal: EtapaProcesal;
  fechaIngreso: Date;
  grupo: Grupo;
  idProceso: number;
  llaveProceso: string;
  numero: number;
  obligacion:  Array<ObligacionClass | number | string>;
  reparto: boolean;
  tipoBien?: TipoBien | null;
  tipoProceso: TipoProceso;
  vencimientoPagare: Date;
    fecha?: Date ;
}

export type TipoBien = 'BANCOS' | 'INMUEBLE' | 'VEHICULO' | 'SALARIO'|'ESTABLECIMIENTO'

export interface Bien {
    id?:          string;
    tipo:         TipoBien;
    descripcion?: string;
}

export interface Codeudor {
    cedula:     number | string;
    direccion?: string;
    nombre:     string;
    tel?:       number | string;
}

export interface Demanda {
    departamento: string;
    juzgado:      Juzgado;
    municipio:    string;
    radicado?:    string;
    ubicacion?:   string;
}



export interface Juzgado {
    origen:     Despacho;
    ejecucion?: Despacho;
}

export interface Despacho {
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

export type Grupo = 'Bancolombia' | 'Reintegra' | 'Lios Juridicos'| 'terminados';

export interface ObligacionClass {
    texto: number | string;
    tipo:  number | string;
}

export type TipoProceso = 'SINGULAR' | 'HIPOTECARIO' | 'PRENDARIO' ;

export interface MonCarpeta extends IntCarpeta {
  _id: string;
  nombre: string;

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

  public static toIntCarpeta(
    carpeta: MonCarpeta
  ): IntCarpeta {
    const {
      nombre, ...newCarpeta
    }
      = carpeta;

    return newCarpeta;
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
      _id   : carpeta._id.toString(),
      nombre: `${ carpeta.deudor.primerNombre } ${ carpeta.deudor.primerApellido }`
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
  ): Despacho {
    return JSON.parse(
      json
    );
  }

  public static ejecucionToJson(
    value: Despacho
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
        : `${ primerNombre } ${ primerApellido } ${ segundoApellido  }`
      : `${ primerNombre } ${ primerApellido }`;
  }
}
