// To parse this data:
//
//   import { Convert } from "./file";
//
//   const intCarpeta = Convert.toIntCarpeta(json);

import { WithId } from 'mongodb';

export interface IntCarpeta {
  capitalAdeudado: number;
  demanda:         Demanda;
  deudor:          Deudor;
    idProceso:       number;
    llaveProceso:    string;
    grupo:           Grupo;
    id:              number;
    numero:          number;
    tipoProceso?:     TipoProceso | null;
    fecha?:          Date;
}

export interface Demanda {
  departamento:            Departamento | null;
    ciudad:                  null | string;
    entregaGarantiasAbogado: Date;
    etapaProcesal:           null | string;
    juzgado:                 Juzgado[];
    obligacion:              ( number | string )[] ;
    radicado:                number | null | string;
    vencimientoPagare:       Date;
}

export type Departamento = 'CUNDINAMARCA' |'AMAZONAS'|'ANTIOQUIA'|'ARAUCA'|'ATLANTICO'|'BOLIVAR'|'BOYACA'|'CALDAS'|'CAQUETA'|'CASANARE'|'CAUCA'|'CESAR'|'CHOCO'|'CORDOBA'|'BOGOTA'|'GUAINIA'|'GUAVIARE'|'HUILA'|'LA GUAJIRA'|'MAGDALENA'|'META'|'NARIÑO'|'NORTE DE SANTANDER'|'PUTUMAYO'|'QUINDIO'|'RISARALDA'|'SAN ANDRES Y PROVIDENCIA'|'SANTANDER'|'SUCRE'|'TOLIMA'|'VALLE DEL CAUCA'|'VAUPES'|'VICHADA'

export interface Juzgado {
    id:   number;
    tipo: string;
    url:  string;
}

export interface Deudor {
    cedula:          number;
    primerNombre:    string;
    segundoNombre:   null | string;
    primerApellido:  string;
    segundoApellido: null | string;
    tel:             Tel;
    email:           null | string;
    direccion:       null | string;
}

export interface Tel {
    celular: number;
    fijo:    number;
}

export type Grupo = 'Reintegra' | 'Insolvencia' | 'Bancolombia' | 'LiosJuridicos' | 'todo';

export type TipoProceso = 'PRENDARIO' | 'SINGULAR' | 'HIPOTECARIO';

export interface MonCarpeta extends IntCarpeta
{
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