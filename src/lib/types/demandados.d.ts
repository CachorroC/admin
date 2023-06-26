// To parse this data:
//
//   import { Convert } from "./file";
//
//   const intCarpetaDemandado = Convert.toIntCarpetaDemandado(json);
// To parse this data:
//
//   import { Convert } from "./file";
//
//   const intCarpetaDemandado = Convert.toIntCarpetaDemandado(json);

export interface intCarpetaDemandado {
  Carpeta: number;
  Demandado: Demandado;
  llaveProceso: string;
  Category: Category;
  idProceso: number;
  Codeudor?: Codeudor;
}

export type Category = 'Bancolombia';

export interface Codeudor {
  Id: number | string;
  Nombre: string;
  Tel?: Tel;
  Direccion?: string;
}

export interface Tel {
  Celular?: number;
  Fijo?: number;
}

export interface Demandado {
  Id: number;
  Nombre: string;
  Tel: Tel;
  Email?: string;
  Direccion: string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toIntCarpetaDemandado (
    json: string
  ): intCarpetaDemandado[] {
    return JSON.parse(
      json
    );
  }

  public static intCarpetaDemandadoToJson (
    value: intCarpetaDemandado[]
  ): string {
    return JSON.stringify(
      value
    );
  }
}


export interface monCarpetaDemandado extends intCarpetaDemandado {
  _id: string;
}

export interface intFecha extends monCarpetaDemandado {
  fecha: string | null | undefined;
}
