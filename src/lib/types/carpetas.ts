// To parse this data:
//
//   import { Convert } from "./file";
//
//   const intCarpeta = Convert.toIntCarpeta(json);

import { ObjectId, WithId } from 'mongodb';

export interface IntCarpeta {
    Avaluo?:            Avaluo;
    Demanda:            Demanda;
    Deudor:             Deudor;
    EtapaProcesal?:     EtapaProcesal;
    Liquidacion?:       Liquidacion;
    MedidasCautelares?: MedidasCautelares;
    Notificaciones?:    Notificaciones;
    Numero:             number;
    SuspencionProceso?: SuspencionProceso;
    Terminacion?:       Terminacion;
    _id?:                ObjectId;
    idProceso:          number;
    llaveProceso:       string;
    ultimaActuacion?:   UltimaActuacion;
    Codeudor?:          Codeudor;
}

export interface MonCarpeta extends IntCarpeta
{
 id: string
}

export interface Avaluo {
    Adjudicacion?: Adjudicacion;
    Remate?:       Adjudicacion;
    Valor?:        string;
}

export interface Adjudicacion {
    Fecha: Date | string;
}

export interface Codeudor {
    Id:         number[] | number;
    Nombre:     string[] | string;
    Direccion?: string;
    Tel?:       Tel;
}

export interface Tel {
    Celular: number;
    Fijo:    number;
}

export interface Demanda {
    CapitalAdeudado?:           string;
    Departamento:               Departamento;
    EntregadeGarantiasAbogado?: Date | string;
    Municipio:                  string;
    Proceso:                    Proceso;
    Radicado:                   string;
    Ubicacion:                  Ubicacion;
    VencimientoPagare?:         Date | string;
    Juzgado?:                   Juzgado;
    Obligacion?:                Obligacion;
}

export type Departamento = 'CUNDINAMARCA';

export interface Juzgado {
    Origen:     Ejecucion;
    Ejecucion?: Ejecucion;
}

export interface Ejecucion {
    id:  string;
    url: string;
}

export interface Obligacion {
    '1': number | string;
    '2': number | string;
}

export interface Proceso {
    Tipo: Tipo;
}

export type Tipo = 'PRENDARIO' | 'SINGULAR' | 'HIPOTECARIO';

export interface Ubicacion {
    Juzgado: string;
}

export interface Deudor {
    Direccion?:       string;
    Email?:           string;
    Id?:              number;
    Nombre?:          string;
    Tel?:             Tel;
    PrimerApellido?:  string;
    PrimerNombre?:    string;
    SegundoNombre?:   string;
    SegundoApellido?: string;
}

export interface EtapaProcesal {
    Etapa:  string;
    Fecha?: EtapaProcesalFecha;
}

export interface EtapaProcesalFecha {
    MandamientodePago?:   Date | string;
    PresentacionDemanda?: Date | string;
}

export interface Liquidacion {
    Costas?:       Costas;
    Fecha:         LiquidacionFecha;
    ValorCredito?: string;
}

export interface Costas {
    FechaAprobacion: Date | string;
    Valor?:          number;
}

export interface LiquidacionFecha {
    Aprobacion?:   Date | string;
    Presentacion?: Date | string;
    Solicitud?:    Date | string;
    Sentencia?:    Date | string;
}

export interface MedidasCautelares {
    Bienes:                 string;
    DescripcionMedida?:     string;
    Extra?:                 string;
    Fecha?:                 MedidasCautelaresFecha;
    FechaRadicaccion?:      string;
    MedidaSolicitada:       string;
    Oficios?:               Oficios;
    PlacaoNumeroMatricula?: string;
    RespuestaEmbargo?:      boolean;
    FechaOrdena?:           Date | string;
    Oficio?:                Oficio;
}

export interface MedidasCautelaresFecha {
    Captura?:                    number;
    DecretoSecuestrooCaptura?:   Date | string;
    Secuestro?:                  string;
    SolicitudCapturaoSecuestro?: Date | string;
}

export interface Oficio {
    Fecha:  Date | string;
    Numero: number;
}

export interface Oficios {
    FechaRetiro: Date | string;
}

export interface Notificaciones {
    '291':           The291;
    '292'?:          The291;
    AutoNotificado?: Date | string;
    Certimail?:      boolean;
    Fisico?:         boolean;
    Tipo?:           string;
}

export interface The291 {
    AportaNotificacion?: Date | string;
    Recibo?:             Date | string;
    Resultado?:          boolean;
}

export interface SuspencionProceso {
    Fecha:             Date | string;
    TerminoSuspencion: string;
}

export interface Terminacion {
    Causal: string;
    Fecha:  TerminacionFecha;
}

export interface TerminacionFecha {
    AutoTerminacion:    Date | string;
    RadicacionMemorial: Date | string;
}

export interface UltimaActuacion {
    actuacion:      string;
    anotacion:      string;
    cant:           number;
    codRegla:       CodRegla;
    conDocumentos:  boolean;
    consActuacion:  number;
    fechaActuacion: Date | string;
    fechaFinal:     Date | string | null;
    fechaInicial:   Date | string | null;
    fechaRegistro:  Date | string;
    idRegActuacion: number;
    llaveProceso:   string;
}

export type CodRegla = '00                              ';

// Converts JSON strings to/from your types
export class Convert {
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
  public static toMonCarpeta(
    carpeta: WithId<IntCarpeta>
  ): MonCarpeta {
    const newCarpeta = {
      ...carpeta,
      id: carpeta._id.toString()
    };

    return newCarpeta;
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

  public static toAvaluo(
    json: string
  ): Avaluo {
    return JSON.parse(
      json
    );
  }

  public static avaluoToJson(
    value: Avaluo
  ): string {
    return JSON.stringify(
      value
    );
  }

  public static toAdjudicacion(
    json: string
  ): Adjudicacion {
    return JSON.parse(
      json
    );
  }

  public static adjudicacionToJson(
    value: Adjudicacion
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

  public static toObligacion(
    json: string
  ): Obligacion {
    return JSON.parse(
      json
    );
  }

  public static obligacionToJson(
    value: Obligacion
  ): string {
    return JSON.stringify(
      value
    );
  }

  public static toProceso(
    json: string
  ): Proceso {
    return JSON.parse(
      json
    );
  }

  public static procesoToJson(
    value: Proceso
  ): string {
    return JSON.stringify(
      value
    );
  }

  public static toUbicacion(
    json: string
  ): Ubicacion {
    return JSON.parse(
      json
    );
  }

  public static ubicacionToJson(
    value: Ubicacion
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

  public static toEtapaProcesal(
    json: string
  ): EtapaProcesal {
    return JSON.parse(
      json
    );
  }

  public static etapaProcesalToJson(
    value: EtapaProcesal
  ): string {
    return JSON.stringify(
      value
    );
  }

  public static toEtapaProcesalFecha(
    json: string
  ): EtapaProcesalFecha {
    return JSON.parse(
      json
    );
  }

  public static etapaProcesalFechaToJson(
    value: EtapaProcesalFecha
  ): string {
    return JSON.stringify(
      value
    );
  }

  public static toLiquidacion(
    json: string
  ): Liquidacion {
    return JSON.parse(
      json
    );
  }

  public static liquidacionToJson(
    value: Liquidacion
  ): string {
    return JSON.stringify(
      value
    );
  }

  public static toCostas(
    json: string
  ): Costas {
    return JSON.parse(
      json
    );
  }

  public static costasToJson(
    value: Costas
  ): string {
    return JSON.stringify(
      value
    );
  }

  public static toLiquidacionFecha(
    json: string
  ): LiquidacionFecha {
    return JSON.parse(
      json
    );
  }

  public static liquidacionFechaToJson(
    value: LiquidacionFecha
  ): string {
    return JSON.stringify(
      value
    );
  }

  public static toMedidasCautelares(
    json: string
  ): MedidasCautelares {
    return JSON.parse(
      json
    );
  }

  public static medidasCautelaresToJson(
    value: MedidasCautelares
  ): string {
    return JSON.stringify(
      value
    );
  }

  public static toMedidasCautelaresFecha(
    json: string
  ): MedidasCautelaresFecha {
    return JSON.parse(
      json
    );
  }

  public static medidasCautelaresFechaToJson(
    value: MedidasCautelaresFecha
  ): string {
    return JSON.stringify(
      value
    );
  }

  public static toOficio(
    json: string
  ): Oficio {
    return JSON.parse(
      json
    );
  }

  public static oficioToJson(
    value: Oficio
  ): string {
    return JSON.stringify(
      value
    );
  }

  public static toOficios(
    json: string
  ): Oficios {
    return JSON.parse(
      json
    );
  }

  public static oficiosToJson(
    value: Oficios
  ): string {
    return JSON.stringify(
      value
    );
  }

  public static toNotificaciones(
    json: string
  ): Notificaciones {
    return JSON.parse(
      json
    );
  }

  public static notificacionesToJson(
    value: Notificaciones
  ): string {
    return JSON.stringify(
      value
    );
  }

  public static toThe291(
    json: string
  ): The291 {
    return JSON.parse(
      json
    );
  }

  public static the291ToJson(
    value: The291
  ): string {
    return JSON.stringify(
      value
    );
  }

  public static toSuspencionProceso(
    json: string
  ): SuspencionProceso {
    return JSON.parse(
      json
    );
  }

  public static suspencionProcesoToJson(
    value: SuspencionProceso
  ): string {
    return JSON.stringify(
      value
    );
  }

  public static toTerminacion(
    json: string
  ): Terminacion {
    return JSON.parse(
      json
    );
  }

  public static terminacionToJson(
    value: Terminacion
  ): string {
    return JSON.stringify(
      value
    );
  }

  public static toTerminacionFecha(
    json: string
  ): TerminacionFecha {
    return JSON.parse(
      json
    );
  }

  public static terminacionFechaToJson(
    value: TerminacionFecha
  ): string {
    return JSON.stringify(
      value
    );
  }

  public static toUltimaActuacion(
    json: string
  ): UltimaActuacion {
    return JSON.parse(
      json
    );
  }

  public static ultimaActuacionToJson(
    value: UltimaActuacion
  ): string {
    return JSON.stringify(
      value
    );
  }
}
