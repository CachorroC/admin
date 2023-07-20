// To parse this data:
//
//   import { Convert } from "./file";
import { ObjectId, WithId } from 'mongodb';
import { intActuacion } from './procesos';
//
//   const intCarpeta = Convert.toIntCarpeta(json);

export interface IntCarpeta {
  Numero: number;
  Deudor: Deudor;
  Demanda: Demanda;
  EtapaProcesal?: EtapaProcesal;
  Liquidacion?: Liquidacion;
  MedidasCautelares?: MedidasCautelares;
  Notificaciones?: Notificaciones;
  SuspencionProceso?: SuspencionProceso;
  Terminacion?: Terminacion;
  idProceso: number[];
  llaveProceso: string;
  ultimaActuacion?: intActuacion;
  Codeudor?: Codeudor;
  Avaluo?: intAvaluo;
}

export interface MonCarpeta extends IntCarpeta {
  _id: string;
  despacho?: Ejecucion;
  nombre?: string;
}

export interface IntAvaluo {
  fechas?: Fecha[];
  valores?: Valor[];
}

export interface Fecha {
  adjudicacion?: Date;
  remate?: Date;
}

export interface Valor {
  resultadoAvaluador?: number;
  cuotas?: number;
}

export interface Adjudicacion {
  Fecha: Date;
}

export interface Codeudor {
  Id: number[] | number;
  Nombre: string[] | string;
  Direccion?: string;
  Tel?: Tel;
}

export interface Tel {
  Fijo: number;
  Celular: number;
}

export interface Demanda {
  VencimientoPagare?: Date;
  Obligacion?: number[];
  CapitalAdeudado: number;
  EntregadeGarantiasAbogado?: Date;
  Departamento: string;
  Municipio: string;
  Juzgado: Juzgado;
  Ubicacion: string;
  tipoProceso: Tipo;
  Radicado: string;
}

export interface Juzgado {
  Origen: Ejecucion;
  Ejecucion?: Ejecucion;
}

export interface Ejecucion {
  id: string;
  url: string;
}

export interface Obligacion {
  '1': number | string;
  '2': number | string;
}

export interface Proceso {
  Tipo: Tipo;
}

export type Tipo =
  | 'PRENDARIO'
  | 'SINGULAR'
  | 'HIPOTECARIO';

export type BienIncautado =
  | 'VEHICULO'
  | 'INMUEBLE'
  | 'CUENTABANCARIA'
  | 'SALARIO'
  | 'ESTABLECIMIENTOCOMERCIAL';

export interface Ubicacion {
  Juzgado: string;
}

export interface Deudor {
  Id?: number;
  Email?: string;
  PrimerNombre: string;
  SegundoNombre?: string;
  PrimerApellido: string;
  Direccion?: string;
  Tel?: Tel;
  SegundoApellido?: string;
}

export interface EtapaProcesal {
  Etapa: string;
  Fecha?: EtapaProcesalFecha;
}

export interface EtapaProcesalFecha {
  MandamientodePago?: Date;
  PresentacionDemanda?: Date;
}

export interface Liquidacion {
  Costas?: Costas;
  Fecha: LiquidacionFecha;
  ValorCredito?: number;
}

export interface Costas {
  FechaAprobacion: Date;
  Valor?: number;
}

export interface LiquidacionFecha {
  Aprobacion?: Date;
  Presentacion?: Date;
  Solicitud?: Date;
  Sentencia?: Date;
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
  RespuestaEmbargo?: boolean;
  FechaOrdena?: Date;
  Oficio?: Oficio;
}

export interface MedidasCautelaresFecha {
  Captura?: Date;
  Secuestro?: Date;
  DecretoSecuestrooCaptura?: Date;
  SolicitudCapturaoSecuestro?: Date;
}

export interface Oficio {
  Fecha: Date;
  Numero: number;
}

export interface Oficios {
  FechaRetiro: Date;
}

export interface Notificaciones {
  '291': The291;
  '292'?: The291;
  AutoNotificado?: Date;
  Certimail?: boolean;
  Fisico?: boolean;
  Tipo?: string;
}

export interface The291 {
  AportaNotificacion?: Date;
  Recibo?: Date;
  Resultado?: boolean;
}

export interface SuspencionProceso {
  TerminoSuspencion: string;
  Fecha: Date;
}

export interface Terminacion {
  Causal: string;
  Fecha: TerminacionFecha;
}

export interface TerminacionFecha {
  AutoTerminacion: Date;
  RadicacionMemorial: Date;
}

export interface UltimaActuacion {
  idRegActuacion: number;
  llaveProceso: string;
  consActuacion: number;
  fechaActuacion: Date;
  actuacion: string;
  anotacion: string;
  fechaInicial: Date | null;
  fechaFinal: Date | null;
  fechaRegistro: Date;
  codRegla: CodRegla;
  conDocumentos: boolean;
  cant: number;
}

export interface intFecha extends MonCarpeta {
  fecha: Date | undefined | null;
}

export type CodRegla =
  '00                              ';

// Converts JSON strings to/from your types
export class carpetaConvert {
  public static toIntCarpetas(
    json: string
  ): IntCarpeta[] {
    return JSON.parse(json);
  }

  public static intCarpetasToJson(
    value: IntCarpeta[]
  ): string {
    return JSON.stringify(value);
  }

  public static toIntCarpeta(
    carpeta: MonCarpeta
  ): IntCarpeta {
    const {
      despacho,
      nombre,
      _id,
      ...newCarpeta
    } = carpeta;

    return newCarpeta;
  }

  public static intCarpetaToJson(
    value: IntCarpeta
  ): string {
    return JSON.stringify(value);
  }
  public static toMonCarpeta(
    carpeta: WithId<IntCarpeta>
  ): MonCarpeta {
    const dsp =
      carpeta.Demanda.Juzgado.Ejecucion ??
      carpeta.Demanda.Juzgado.Origen;

    const nmb = carpeta.Deudor.SegundoApellido
      ? carpeta.Deudor.SegundoNombre
        ? `${carpeta.Deudor.PrimerNombre} ${carpeta.Deudor.SegundoNombre} ${carpeta.Deudor.PrimerApellido} ${carpeta.Deudor.SegundoApellido}`
        : `${carpeta.Deudor.PrimerNombre} ${carpeta.Deudor.PrimerApellido} ${carpeta.Deudor.SegundoApellido}`
      : `${carpeta.Deudor.PrimerNombre} ${carpeta.Deudor.PrimerApellido}`;

    const fixedCarpeta: MonCarpeta = {
      ...carpeta,
      _id: carpeta._id.toString(),
      despacho: dsp,
      nombre: nmb
    };

    return fixedCarpeta;
  }
  public static toMonCarpetas(
    carpetas: WithId<IntCarpeta>[]
  ): MonCarpeta[] {
    const newCarpetas = carpetas.map(
      (carpeta) => {
        return this.toMonCarpeta(carpeta);
      }
    );

    return newCarpetas;
  }

  public static toIntAvaluo(
    json: string
  ): IntAvaluo {
    return JSON.parse(json);
  }

  public static intAvaluoToJson(
    value: IntAvaluo
  ): string {
    return JSON.stringify(value);
  }

  public static toFecha(json: string): Fecha {
    return JSON.parse(json);
  }

  public static fechaToJson(
    value: Fecha
  ): string {
    return JSON.stringify(value);
  }

  public static toValor(json: string): Valor {
    return JSON.parse(json);
  }

  public static valorToJson(
    value: Valor
  ): string {
    return JSON.stringify(value);
  }
  public static toAdjudicacion(
    json: string
  ): Adjudicacion {
    return JSON.parse(json);
  }

  public static adjudicacionToJson(
    value: Adjudicacion
  ): string {
    return JSON.stringify(value);
  }

  public static toCodeudor(
    json: string
  ): Codeudor {
    return JSON.parse(json);
  }

  public static codeudorToJson(
    value: Codeudor
  ): string {
    return JSON.stringify(value);
  }

  public static toTel(json: string): Tel {
    return JSON.parse(json);
  }

  public static telToJson(value: Tel): string {
    return JSON.stringify(value);
  }

  public static toDemanda(json: string): Demanda {
    return JSON.parse(json);
  }

  public static demandaToJson(
    value: Demanda
  ): string {
    return JSON.stringify(value);
  }

  public static toJuzgado(json: string): Juzgado {
    return JSON.parse(json);
  }

  public static juzgadoToJson(
    value: Juzgado
  ): string {
    return JSON.stringify(value);
  }

  public static toEjecucion(
    json: string
  ): Ejecucion {
    return JSON.parse(json);
  }

  public static ejecucionToJson(
    value: Ejecucion
  ): string {
    return JSON.stringify(value);
  }

  public static toObligacion(
    json: string
  ): Obligacion {
    return JSON.parse(json);
  }

  public static obligacionToJson(
    value: Obligacion
  ): string {
    return JSON.stringify(value);
  }

  public static toProceso(json: string): Proceso {
    return JSON.parse(json);
  }

  public static procesoToJson(
    value: Proceso
  ): string {
    return JSON.stringify(value);
  }

  public static toUbicacion(
    json: string
  ): Ubicacion {
    return JSON.parse(json);
  }

  public static ubicacionToJson(
    value: Ubicacion
  ): string {
    return JSON.stringify(value);
  }

  public static toDeudor(json: string): Deudor {
    return JSON.parse(json);
  }

  public static deudorToJson(
    value: Deudor
  ): string {
    return JSON.stringify(value);
  }

  public static toEtapaProcesal(
    json: string
  ): EtapaProcesal {
    return JSON.parse(json);
  }

  public static etapaProcesalToJson(
    value: EtapaProcesal
  ): string {
    return JSON.stringify(value);
  }

  public static toEtapaProcesalFecha(
    json: string
  ): EtapaProcesalFecha {
    return JSON.parse(json);
  }

  public static etapaProcesalFechaToJson(
    value: EtapaProcesalFecha
  ): string {
    return JSON.stringify(value);
  }

  public static toLiquidacion(
    json: string
  ): Liquidacion {
    return JSON.parse(json);
  }

  public static liquidacionToJson(
    value: Liquidacion
  ): string {
    return JSON.stringify(value);
  }

  public static toCostas(json: string): Costas {
    return JSON.parse(json);
  }

  public static costasToJson(
    value: Costas
  ): string {
    return JSON.stringify(value);
  }

  public static toLiquidacionFecha(
    json: string
  ): LiquidacionFecha {
    return JSON.parse(json);
  }

  public static liquidacionFechaToJson(
    value: LiquidacionFecha
  ): string {
    return JSON.stringify(value);
  }

  public static toMedidasCautelares(
    json: string
  ): MedidasCautelares {
    return JSON.parse(json);
  }

  public static medidasCautelaresToJson(
    value: MedidasCautelares
  ): string {
    return JSON.stringify(value);
  }

  public static toMedidasCautelaresFecha(
    json: string
  ): MedidasCautelaresFecha {
    return JSON.parse(json);
  }

  public static medidasCautelaresFechaToJson(
    value: MedidasCautelaresFecha
  ): string {
    return JSON.stringify(value);
  }

  public static toOficio(json: string): Oficio {
    return JSON.parse(json);
  }

  public static oficioToJson(
    value: Oficio
  ): string {
    return JSON.stringify(value);
  }

  public static toOficios(json: string): Oficios {
    return JSON.parse(json);
  }

  public static oficiosToJson(
    value: Oficios
  ): string {
    return JSON.stringify(value);
  }

  public static toNotificaciones(
    json: string
  ): Notificaciones {
    return JSON.parse(json);
  }

  public static notificacionesToJson(
    value: Notificaciones
  ): string {
    return JSON.stringify(value);
  }

  public static toThe291(json: string): The291 {
    return JSON.parse(json);
  }

  public static the291ToJson(
    value: The291
  ): string {
    return JSON.stringify(value);
  }

  public static toSuspencionProceso(
    json: string
  ): SuspencionProceso {
    return JSON.parse(json);
  }

  public static suspencionProcesoToJson(
    value: SuspencionProceso
  ): string {
    return JSON.stringify(value);
  }

  public static toTerminacion(
    json: string
  ): Terminacion {
    return JSON.parse(json);
  }

  public static terminacionToJson(
    value: Terminacion
  ): string {
    return JSON.stringify(value);
  }

  public static toTerminacionFecha(
    json: string
  ): TerminacionFecha {
    return JSON.parse(json);
  }

  public static terminacionFechaToJson(
    value: TerminacionFecha
  ): string {
    return JSON.stringify(value);
  }

  public static toUltimaActuacion(
    json: string
  ): UltimaActuacion {
    return JSON.parse(json);
  }

  public static ultimaActuacionToJson(
    value: UltimaActuacion
  ): string {
    return JSON.stringify(value);
  }
}

export class NombreCompleto {
  Nombre: string;
  constructor({
    PrimerNombre,
    SegundoNombre,
    PrimerApellido,
    SegundoApellido
  }: {
    PrimerNombre: string;
    PrimerApellido: string;
    SegundoNombre?: string;
    SegundoApellido?: string;
  }) {
    this.Nombre = SegundoApellido
      ? SegundoNombre
        ? `${PrimerNombre} ${SegundoNombre} ${PrimerApellido} ${SegundoApellido}`
        : `${PrimerNombre} ${PrimerApellido} ${SegundoApellido}`
      : `${PrimerNombre} ${PrimerApellido}`;
  }
}
