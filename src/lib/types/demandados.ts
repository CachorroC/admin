// To parse this data:
//
//   import { Convert } from "./file";
//
//   const intCarpeta = Convert.toIntCarpeta(json);

export interface IntCarpeta {
    capitalAdeudado: number | string;
    clase:           string;
    codeudor?:       Codeudor;
    deudor:          Deudor;
    fechaIngreso:    Date;
    grupo:           string;
    idProceso:      number[];
    llaveProceso:    string;
    numero:          number;
    reparto:         boolean;
    tipoBien:        string;
    tipoProceso:     TipoProceso;
  obligacion?: Obligacion;
}

export interface Obligacion {
    '1': number | string;
    '2': number | string;
}

export interface Codeudor {
    Nombre:     string[] | string;
    cedula:     number[] | number;
    direccion?: string;
    tel?:       Tel;
}

export interface Tel {
    celular: number;
    fijo:    number;
}

export interface Deudor {
    cedula?:          number;
    direccion?:       string;
    primerApellido:   string;
    primerNombre:     string;
    email?:           string;
    segundoApellido?: string;
    segundoNombre?:   string;
    tel?:             Tel;
}

export interface MonCarpeta extends IntCarpeta
{
  _id : string
}

export type Grupo = 'Bancolombia';

export type TipoProceso = 'SINGULAR' | 'HIPOTECARIO' | 'PRENDARIO';

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
