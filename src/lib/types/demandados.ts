// To parse this data:
//
//   import { Convert } from "./file";
//
//   const intCarpeta = Convert.toIntCarpeta(json);

import { WithId } from 'mongodb';
import { intActuacion } from './procesos';

export interface IntCarpeta
{
  capitalAdeudado: number;
    demanda:         Demanda;
    deudor:          Deudor;
    grupo:           Grupo;
    id:              number | null;
    idProceso?:       number;
    llaveProceso?:   string;
    numero:          number;
  tipoProceso?: TipoProceso;
  fecha?: Date | string
}

export type TipoBien =
  | 'BANCOS'
  | 'INMUEBLE'
  | 'VEHICULO'
  | 'SALARIO'
  | 'ESTABLECIMIENTO';

export interface Bien {
  id?: string;
  tipo: TipoBien;
  descripcion?: string;
}

export interface Codeudor {
  cedula: number | string;
  direccion?: string;
  nombre: string;
  tel?: number | string;
}

export interface Demanda
{
   ciudad?:                 string;
    departamento?:           Departamento;
    entregaGarantiasAbogado: Date | null;
    etapaProcesal?:          string;
    juzgado:                 Juzgado[];
    obligacion?:             Array<number | null | string>;
    radicado?:               number | string;
    vencimientoPagare:       Date | null;
}


export type Departamento = 'CUNDINAMARCA' | 'BOYACÁ' | 'TOLIMA';

export interface Juzgado {
    id:   number;
    tipo: string;
    url?: string;
}

export interface Deudor {
    cedula:           number ;
    direccion?:       string;
    primerApellido:   string;
    primerNombre:     string;
    segundoApellido?: string;
    segundoNombre?:   string;
    tel:              Tel;
    email?:           number | string;
}

export interface Tel {
    celular: number | null;
    fijo:    number | null;
}

export type TipoProceso = 'PRENDARIO' | 'SINGULAR' | 'HIPOTECARIO'

export type Tipo =
  | 'Civil Municipal de Ejecucion'
  | 'Pequeñas Causas y Competencias Multiples'
  | 'Civil Municipal'
  | 'Promiscuo Municipal'
  | 'unknown'
  | 'Civil Municipal de Ejecucion'
  | 'Civil Municipal'
  | ' CCTO EJ'
  | ' CIVIL CTO'
  | ' PM'
  | ' C CTO E'
  | 'Pequeñas Causas y Competencias Multiples'
  | 'Civil Municipal/ Civil Municipal'
  | ' CCTOEJ'
  | 'Civil Municipal // Civil Municipal'
  | ' CCTO/ CCTOE'
  | 'Civil Municipal //  PCCivil Municipal'
  | 'Civil Municipal DESG / Civil Municipal'
  | '  Pequeñas Causas y Competencias Multiples'
  | 'SINGULAR'
  | ' Pequeñas Causas y Competencias Multiples'
  | ' Pequeñas Causas y Competencias Multiples/ Civil Municipal'
  | 'Civil Municipal / PCC'
  | ' CCTO'
  | 'Civil Municipal/Civil Municipal'
  | ' CC'
  | 'Civil Municipal/Civil Municipal de Ejecucion'
  | ' Civil Municipal';

export type EtapaProcesal =
  | 'EJECUCION'
  | 'CONTESTACION DEMANDA'
  | 'EMPLAZAMIENTO'
  | 'ADMISION DE LA DEMANDA';

export type Grupo =
  | 'Bancolombia'
  | 'Reintegra'
  | 'Lios Juridicos'
  | 'terminados';

export interface ObligacionClass {
  texto: number | string;
  tipo: number | string;
}

export interface MonCarpeta extends IntCarpeta {
  _id: string;
  nombre: string;
  fecha?: Date

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
      _id  : carpeta._id.toString(),
      fecha: new Date(
        carpeta.fecha ?? '1990'
      ),
      get nombre(){
        return this.deudor.primerNombre + ' ' + this.deudor.primerApellido;
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
