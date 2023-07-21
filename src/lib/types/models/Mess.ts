// To parse this data:
//
//   import { Convert } from "./file";
//
//   const mess = Convert.toMess(json);

export interface Mess {
  _id: string;
  numero: number;
  deudor: Deudor;
  codeudor?: Codeudor;
  demanda: Demanda;
  etapaProcesal?: EtapaProcesal;
  liquidacion?: Liquidacion;
  medidasCautelares?: MedidasCautelares;
  notificaciones?: Notificaciones;
  idProceso: number[] | number;
  llaveProceso: string;
  ultimaActuacion?: UltimaActuacion;
  procesos?: ProcesoElement[];
  avaluo?: Avaluo;
}

export interface Avaluo {
  valor: string;
}

export interface Codeudor {
  direccion?: string;
  cedula: number[] | number;
  Nombre: string[] | string;
  tel?: Tel;
}

export interface Tel {
  celular: number;
  fijo: number;
}

export interface Demanda {
  capitalAdeudado?: number | string;
  departamento: DemandaDepartamento;
  entregadeGarantias?: Date | string;
  municipio: string;
  juzgado: Juzgado;
  tipoProceso?: Tipo;
  radicado: string;
  ubicacion: UbicacionClass | string;
  vencimientoPagare?: Date | string;
  fechas?: Fecha[];
  Proceso?: Proceso;
  obligacion?: { [key: string]: number | string };
}

export interface Proceso {
  tipo: string;
}

export type Tipo =
  | 'HIPOTECARIO'
  | 'SINGULAR'
  | 'PRENDARIO'
  | '';

export type DemandaDepartamento = 'CUNDINAMARCA';

export interface Fecha {
  entregaGarantias?: Date | string;
  vencimientoPagare?: Date | string;
}

export interface Juzgado {
  origen: Ejecucion;
  ejecucion?: Ejecucion;
}

export interface Ejecucion {
  id: string;
  url: string;
}

export interface UbicacionClass {
  juzgado: string;
}

export interface Deudor {
  direccion?: string;
  cedula?: number;
  primerNombre: string;
  primerApellido: string;
  email?: string;
  segundoNombre?: string;
  segundoApellido?: string;
  tel?: Tel;
}

export interface EtapaProcesal {
  etapa: string;
  fechas?: EtapaProcesalFechas;
}

export interface EtapaProcesalFechas {
  mandamientodePago?: Date | string;
  presentacionDemanda: Date | string;
}

export interface Liquidacion {
  fechas: LiquidacionFechas;
  capitalAdeudado?: number;
  costas?: Costas;
}

export interface Costas {
  aprobacion: Date | string;
  valor: number;
}

export interface LiquidacionFechas {
  aprobacion?: Date | string;
  presentacion?: Date | string;
  Sentencia?: Date | string;
  solicitud?: Date | string;
}

export interface MedidasCautelares {
  bien: string;
  descripcionMedida?: string;
  ordena: Date | string;
  radicaccion?: string;
  medidaSolicitada: string;
  oficio?: Oficio;
  oficios?: Oficios;
  placaoNumeroMatricula?: string;
  respuestaEmbargo?: boolean;
  fechas?: MedidasCautelaresFechas;
}

export interface MedidasCautelaresFechas {
  decreto?: Date | string;
  SolicitudCapturaoSecuestro?: Date | string;
}

export interface Oficio {
  fechas: Date | string;
  numero: number;
}

export interface Oficios {
  retiro: Date | string;
}

export interface Notificaciones {
  '291': The291;
  '292'?: The291;
  autoNotificado?: Date | string;
  certimail?: boolean;
  fisico?: boolean;
  tipo?: string;
}

export interface The291 {
  aporta?: Date | string;
  recibo?: Date | string;
  resultado?: boolean;
}

export interface ProcesoElement {
  idProceso: number;
  idConexion: number;
  llaveProceso: string;
  fechaProceso?: Date | string;
  fechaUltimaActuacion?: Date | string;
  despacho: string;
  departamento: ProcesoDepartamento;
  sujetosProcesales: string;
  esPrivado: boolean;
  cantFilas: number;
}

export type ProcesoDepartamento = 'BOGOTÁ';

export interface UltimaActuacion {
  idRegActuacion: number;
  llaveProceso: string;
  consActuacion: number;
  fechaActuacion: Date | string;
  actuacion: string;
  anotacion: string;
  fechaInicial?: Date | string;
  fechaFinal?: Date | string;
  fechaRegistro: Date | string;
  codRegla: CodRegla;
  conDocumentos: boolean;
  cant: number;
}

export type CodRegla =
  '00                              ';

// Converts JSON strings to/from your types
export class Convert {
  public static toMess(json: string): Mess[] {
    return JSON.parse(json);
  }

  public static messToJson(
    value: Mess[]
  ): string {
    return JSON.stringify(value);
  }
}
