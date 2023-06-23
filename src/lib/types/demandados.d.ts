// Generated by https://quicktype.io
//
// To change quicktype's target language, run command:
//
//   "Set quicktype target language"

export interface intCarpetaDemandado {
  Carpeta: number;
  Demandado: Demandado;
  Proceso: Proceso;

  idProceso: number;
  llaveProceso: string;
  Codeudor?: Codeudor;
}

export interface Codeudor {
  Id: number[] | number;
  Nombre: string[] | string;
  Direccion?: string;
  Tel?: Tel;
}

export interface Tel {
  Celular?: number;
  Fijo?: number;
}

export interface Demandado {
  Direccion: string;
  Email?: string;
  Id: number;
  Nombre: string;
  Tel: Tel;
}

export interface Proceso {
  CapitalAdeudado: number | string;
  Departamento: Departamento;
  EtapaProcesal: string;
  Fechas: ProcesoFechas;
  Juzgado: Juzgado;
  MedidasCautelares?: MedidasCautelares;
  NumeroRadicado: string;
  Obligacion: { [ key: string ]: number | string };
  Tipo: Tipo;
  Notificaciones?: Notificaciones;
  ValorAvaluo?: string;
  ValorLiquidacionCredito?: string;
  Costas?: Costas;
}

export interface Costas {
  Aprobacion: number;
}

export enum Departamento {
  Cundinamarca = 'CUNDINAMARCA',
}

export interface ProcesoFechas {
  '291'?: The291;
  '292'?: The292;
  AutoNotificacion?: number | string;
  Captura?: number;
  EntregaDeGarantíasAbogado: number | string;
  MandamientoDePago?: number | string;
  PresentacionDemanda?: number | string;
  Secuestro?: string;
  VencimientoPagare?: number | string;
  PresentacionLiquidacion?: number | string;
  SolicitudLiquidacion?: number;
  AprobacionLiquidacionCredito?: number | string;
  Sentencia?: number | string;
  AprobacionCostas?: number | string;
}

export interface The291 {
  AportaNotificacion?: string;
  Recibido?: number | string;
  Resultado?: boolean;
}

export interface The292 {
  AportaNotificacion?: string;
  Resultado: boolean;
  Recibido?: number;
}

export interface Juzgado {
  Ciudad: string;
  Origen: string;
  UbicacionActual: string;
  Ejecucion?: string;
}

export interface MedidasCautelares {
  Bienes: string;
  DescripcionMedida?: string;
  Fechas: MedidasCautelaresFechas;
  MedidaSolicitada: string;
  NumeroOficio: number | string;
  PlacaoMatricula?: string;
  RespuestaEmbargo: boolean;
}

export interface MedidasCautelaresFechas {
  DecretaSecuestrooCaptura?: number | string;
  Oficio: number | string;
  Radicacion?: number | string;
  RetiroOficios?: number | string;
  OrdenaMedidasCautelares?: number | string;
  SolicitudSecuestrooCaptura?: string;
}

export interface Notificaciones {
  Certimail?: boolean;
  Fisico?: boolean;
  Tipo?: string;
}

export enum Tipo {
  Hipotecario = 'HIPOTECARIO',
  Prendario = 'PRENDARIO',
  Singular = 'SINGULAR',
}

export interface monCarpetaDemandado extends intCarpetaDemandado {
  _id: string;
}
