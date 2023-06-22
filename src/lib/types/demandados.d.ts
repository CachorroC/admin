import { WithId } from 'mongodb';


export interface intCarpetaDemandado {
  carpeta: string;
  llaveProceso: string;
  idProceso: number;
  demandado: Demandado;
  codeudor?: Codeudor;
}
export interface Demandado {
  cedula: string;
  nombre: string;
  email?: string;
  tel?: {
    fijo?: string;
    celular?: string;
  };
  direccion?: string;
}


interface intProceso {
  idProceso: number;
  idConexion: number;
  llaveProceso: string;
  fechaProceso?: string | null;
  fechaUltimaActuacion?: string | null;
  despacho: string;
  departamento: string;
  sujetosProcesales: string;
  esPrivado: boolean;
  cantFilas: number;
}

export interface Codeudor {
  cedula?: string;
  nombre?: string;
  tel?: {
    fijo?: string;
    celular?: string;
  };
  email?: string;
  direccion?: string
}

export interface monCarpetaDemandado extends intCarpetaDemandado {
  _id: string;
}


export interface intJuzgados {
  llaveProceso: string;
  text: {
    statusCode: number;
    message: string;
  };
  procesos?: intProceso[];
}