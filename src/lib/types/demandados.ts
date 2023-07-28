// To parse this data:
//
//   import { Convert } from "./file";
//
//   const intCarpeta = Convert.toIntCarpeta(json);

import { WithId } from 'mongodb';
import { intActuacion } from './procesos';

export interface IntCarpeta {
  numero: number;
  llaveProceso: string;
  deudor: deudor;
  codeudor?: Codeudor;
  demanda: Demanda;
  obligacion: Obligacion[];
  vencimientoPagare: Date;
  tipoProceso: TipoProceso;
  capitalAdeudado: number;
  entregaGarantiasAbogado: Date;
  grupo: string;
  fechaIngreso: Date;
  reparto: boolean;
  etapaProcesal: EtapaProcesal;
  idProceso: number;
  clase: string;
  bien?: Bien;
    fecha?: Date ;
}

export interface Obligacion {
  texto?: string | number;
  tipo?: string | number;
}

export interface Bien {
  tipo: string;
  id?: string;
}

export interface Codeudor {
  cedula: number | string;
  nombre: string;
  tel?: number | string;
  direccion?: string;
}

export interface Demanda {
  departamento: Departamento;
  municipio: string;
  juzgado: Juzgado;
  ubicacion?: string;
  radicado?: string;
}

export type Departamento = 'CUNDINAMARCA';

export interface Juzgado {
  origen: Ejecucion;
  ejecucion?: Ejecucion;
}

export interface Ejecucion {
  url?: string;
  id: string;
}

export interface deudor {
  cedula?: number;
  primerNombre: string;
  segundoNombre?: string;
  primerApellido: string;
  tel?: Tel;
  email?: string;
  direccion?: string;
  segundoApellido?: string;
}

export interface Tel {
  celular?: number;
  fijo?: number;
}

export type EtapaProcesal =
  | 'EMPLAZAMIENTO'
  | 'EJECUCION'
  | 'CONTESTACION DEMANDA'
  | 'ADMISION DE LA DEMANDA';

export type TipoProceso =
  | 'PRENDARIO'
  | 'SINGULAR'
  | 'HIPOTECARIO';

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
      nombre, _id, ...newCarpeta
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
    const nmb = carpeta.deudor.segundoApellido
      ? carpeta.deudor.segundoNombre
        ? `${ carpeta.deudor.primerNombre } ${ carpeta.deudor.segundoNombre } ${ carpeta.deudor.primerApellido } ${ carpeta.deudor.segundoApellido }`
        : `${ carpeta.deudor.primerNombre } ${ carpeta.deudor.primerApellido } ${ carpeta.deudor.segundoApellido }`
      : `${ carpeta.deudor.primerNombre } ${ carpeta.deudor.primerApellido }`;

    const fixedCarpeta: MonCarpeta = {
      ...carpeta,
      _id   : carpeta._id.toString(),
      nombre: nmb
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
