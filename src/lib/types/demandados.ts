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
  Avaluo?: Avaluo;
  Carpeta?: number;
  Demanda: intDemanda;
  Deudor: Deudor;
  EtapaProcesal?: EtapaProcesal;
  Liquidacion?: Liquidacion;
  MedidasCautelares?: MedidasCautelares;
  Notificaciones?: Notificaciones;
  SuspencionProceso?: SuspencionProceso;
  Terminacion?: Terminacion;
  idProceso: number;
  llaveProceso: string;
  Codeudor?: Codeudor;
}

export interface Avaluo {
  Adjudicacion?: Adjudicacion;
  Remate?: Adjudicacion;
  Valor?: string;
}

export interface Adjudicacion {
  Fecha: string;
}

export interface Codeudor {
  Id: number | string;
  Nombre: string;
  Direccion?: string;
  Tel?: Tel;
}

export interface Tel {
  Fijo: number;
  Celular: number;
}

export interface intDemanda {
  Departamento: Departamento;
  Municipio: string;
  VencimientoPagare?: string;
  EntregadeGarantiasAbogado?: string;
  Radicado: string;
  CapitalAdeudado?: string;
  Proceso: Proceso;
  Ubicacion: Ubicacion;
  Juzgado?: Juzgado;
  Obligacion?: Obligacion;
}

export enum Departamento {
  Cundinamarca = 'CUNDINAMARCA',
}

export interface Juzgado {
  Origen: string;
  Ejecucion?: string;
}

export interface Obligacion {
  '1': number | string;
  '2': number | string;
}

export interface Proceso {
  Tipo: Tipo;
}

export enum Tipo {
  Hipotecario = 'HIPOTECARIO',
  Prendario = 'PRENDARIO',
  Singular = 'SINGULAR',
}

export interface Ubicacion {
  Juzgado: string;
}

export interface Deudor {
  Id?: number;
  Email?: string;
  Nombre: string;
  Direccion?: string;
  Tel?: Tel;
}

export interface EtapaProcesal {
  Etapa: string;
  Fecha?: EtapaProcesalFecha;
}

export interface EtapaProcesalFecha {
  MandamientodePago?: string;
  PresentacionDemanda?: string;
}

export interface Liquidacion {
  Costas?: Costas;
  Fecha: LiquidacionFecha;
  ValorCredito?: string;
}

export interface Costas {
  FechaAprobacion: string;
  Valor?: number;
}

export interface LiquidacionFecha {
  Aprobacion?: string;
  Presentacion?: string;
  Solicitud?: string;
  Sentencia?: string;
}

export interface MedidasCautelares {
  Bienes: string;
  MedidaSolicitada: string;
  Extra?: string;
  PlacaoNumeroMatricula?: string;
  DescripcionMedida?: string;
  Fecha?: MedidasCautelaresFecha;
  FechaRadicaccion?: string;
  Oficios?: Oficios;
  RespuestaEmbargo?: boolean | string;
  FechaOrdena?: string;
  Oficio?: Oficio;
}

export interface MedidasCautelaresFecha {
  Captura?: number;
  Secuestro?: string;
  DecretoSecuestrooCaptura?: string;
  SolicitudCapturaoSecuestro?: string;
}

export interface Oficio {
  Numero: number | string;
  Fecha: string;
}

export interface Oficios {
  FechaRetiro: string;
}

export interface Notificaciones {
  '291': The291;
  '292'?: The291;
  AutoNotificado?: string;
  Certimail?: boolean;
  Fisico?: boolean;
  Tipo?: string;
}

export interface The291 {
  AportaNotificacion?: string;
  Recibo?: string;
  Resultado?: boolean;
}

export interface SuspencionProceso {
  TerminoSuspencion: string;
  Fecha: string;
}

export interface Terminacion {
  Causal: string;
  Fecha: TerminacionFecha;
}

export interface TerminacionFecha {
  AutoTerminacion: string;
  RadicacionMemorial: string;
}

// Converts JSON strings to/from your types

export interface monCarpetaDemandado extends intCarpetaDemandado {
  _id: string;
}

export interface intFecha extends monCarpetaDemandado {
  fecha: string | null | undefined;
}

// To parse this data:
//

export class ConvertCarpetas {
  public static toMonCarpetaDemandado(
    json: string
  ): monCarpetaDemandado[] {
      return JSON.parse (
        json
      );
  }

  public static monCarpetaDemandadoToJson(
    value: monCarpetaDemandado[],
  ): string {
      return JSON.stringify (
        value
      );
  }

  public static toMonCarpeta(
    json: string
  ): monCarpetaDemandado {
      return JSON.parse (
        json
      );
  }

  public static monCarpetaToJson(
    value: monCarpetaDemandado
  ): string {
      return JSON.stringify (
        value
      );
  }

  public static toAvaluo(
    json: string
  ): Avaluo {
      return JSON.parse (
        json
      );
  }

  public static avaluoToJson(
    value: Avaluo
  ): string {
      return JSON.stringify (
        value
      );
  }

  public static toAdjudicacion(
    json: string
  ): Adjudicacion {
      return JSON.parse (
        json
      );
  }

  public static adjudicacionToJson(
    value: Adjudicacion
  ): string {
      return JSON.stringify (
        value
      );
  }

  public static toCodeudor(
    json: string
  ): Codeudor {
      return JSON.parse (
        json
      );
  }

  public static codeudorToJson(
    value: Codeudor
  ): string {
      return JSON.stringify (
        value
      );
  }

  public static toTel(
    json: string
  ): Tel {
      return JSON.parse (
        json
      );
  }

  public static telToJson(
    value: Tel
  ): string {
      return JSON.stringify (
        value
      );
  }

  public static toDemanda(
    json: string
  ): intDemanda {
      return JSON.parse (
        json
      );
  }

  public static demandaToJson(
    value: intDemanda
  ): string {
      return JSON.stringify (
        value
      );
  }

  public static toJuzgado(
    json: string
  ): Juzgado {
      return JSON.parse (
        json
      );
  }

  public static juzgadoToJson(
    value: Juzgado
  ): string {
      return JSON.stringify (
        value
      );
  }

  public static toObligacion(
    json: string
  ): Obligacion {
      return JSON.parse (
        json
      );
  }

  public static obligacionToJson(
    value: Obligacion
  ): string {
      return JSON.stringify (
        value
      );
  }

  public static toProceso(
    json: string
  ): Proceso {
      return JSON.parse (
        json
      );
  }

  public static procesoToJson(
    value: Proceso
  ): string {
      return JSON.stringify (
        value
      );
  }

  public static toUbicacion(
    json: string
  ): Ubicacion {
      return JSON.parse (
        json
      );
  }

  public static ubicacionToJson(
    value: Ubicacion
  ): string {
      return JSON.stringify (
        value
      );
  }

  public static toDeudor(
    json: string
  ): Deudor {
      return JSON.parse (
        json
      );
  }

  public static deudorToJson(
    value: Deudor
  ): string {
      return JSON.stringify (
        value
      );
  }

  public static toEtapaProcesal(
    json: string
  ): EtapaProcesal {
      return JSON.parse (
        json
      );
  }

  public static etapaProcesalToJson(
    value: EtapaProcesal
  ): string {
      return JSON.stringify (
        value
      );
  }

  public static toEtapaProcesalFecha(
    json: string
  ): EtapaProcesalFecha {
      return JSON.parse (
        json
      );
  }

  public static etapaProcesalFechaToJson(
    value: EtapaProcesalFecha
  ): string {
      return JSON.stringify (
        value
      );
  }

  public static toLiquidacion(
    json: string
  ): Liquidacion {
      return JSON.parse (
        json
      );
  }

  public static liquidacionToJson(
    value: Liquidacion
  ): string {
      return JSON.stringify (
        value
      );
  }

  public static toCostas(
    json: string
  ): Costas {
      return JSON.parse (
        json
      );
  }

  public static costasToJson(
    value: Costas
  ): string {
      return JSON.stringify (
        value
      );
  }

  public static toLiquidacionFecha(
    json: string
  ): LiquidacionFecha {
      return JSON.parse (
        json
      );
  }

  public static liquidacionFechaToJson(
    value: LiquidacionFecha
  ): string {
      return JSON.stringify (
        value
      );
  }

  public static toMedidasCautelares(
    json: string
  ): MedidasCautelares {
      return JSON.parse (
        json
      );
  }

  public static medidasCautelaresToJson(
    value: MedidasCautelares
  ): string {
      return JSON.stringify (
        value
      );
  }

  public static toMedidasCautelaresFecha(
    json: string
  ): MedidasCautelaresFecha {
      return JSON.parse (
        json
      );
  }

  public static medidasCautelaresFechaToJson(
    value: MedidasCautelaresFecha,
  ): string {
      return JSON.stringify (
        value
      );
  }

  public static toOficio(
    json: string
  ): Oficio {
      return JSON.parse (
        json
      );
  }

  public static oficioToJson(
    value: Oficio
  ): string {
      return JSON.stringify (
        value
      );
  }

  public static toOficios(
    json: string
  ): Oficios {
      return JSON.parse (
        json
      );
  }

  public static oficiosToJson(
    value: Oficios
  ): string {
      return JSON.stringify (
        value
      );
  }

  public static toNotificaciones(
    json: string
  ): Notificaciones {
      return JSON.parse (
        json
      );
  }

  public static notificacionesToJson(
    value: Notificaciones
  ): string {
      return JSON.stringify (
        value
      );
  }

  public static toThe291(
    json: string
  ): The291 {
      return JSON.parse (
        json
      );
  }

  public static the291ToJson(
    value: The291
  ): string {
      return JSON.stringify (
        value
      );
  }

  public static toSuspencionProceso(
    json: string
  ): SuspencionProceso {
      return JSON.parse (
        json
      );
  }

  public static suspencionProcesoToJson(
    value: SuspencionProceso
  ): string {
      return JSON.stringify (
        value
      );
  }

  public static toTerminacion(
    json: string
  ): Terminacion {
      return JSON.parse (
        json
      );
  }

  public static terminacionToJson(
    value: Terminacion
  ): string {
      return JSON.stringify (
        value
      );
  }

  public static toTerminacionFecha(
    json: string
  ): TerminacionFecha {
      return JSON.parse (
        json
      );
  }

  public static terminacionFechaToJson(
    value: TerminacionFecha
  ): string {
      return JSON.stringify (
        value
      );
  }
}
