import { ObjectId } from 'mongodb';
import { MedidasCautelares,
         IntCarpeta,
         Avaluo,
         Codeudor,
         Demanda,
         Deudor,
         EtapaProcesal,
         Liquidacion,
         Notificaciones,
         SuspencionProceso,
         Terminacion,
         UltimaActuacion,
         MonCarpeta } from './demandados';

export class Carpeta implements MonCarpeta {
  llaveProceso: string;
  idProceso: number;
  _id: ObjectId;
  id: string;
  Numero: number;
  Demanda: Demanda;
  Deudor: Deudor;
  Avaluo: Avaluo | undefined;
  EtapaProcesal: EtapaProcesal | undefined;
  Liquidacion: Liquidacion | undefined;
  MedidasCautelares: MedidasCautelares | undefined;
  Notificaciones: Notificaciones | undefined;
  SuspencionProceso: SuspencionProceso | undefined;
  Terminacion: Terminacion | undefined;
  ultimaActuacion: UltimaActuacion | undefined;
  Codeudor: Codeudor | undefined;
  Nombre: () => string;
  despacho: () => string;

  constructor(
    {
      _id,
      Avaluo,
      Numero,
      Demanda,
      Deudor,
      EtapaProcesal,
      Liquidacion,
      MedidasCautelares,
      Notificaciones,
      SuspencionProceso,
      Terminacion,
      idProceso,
      llaveProceso,
      ultimaActuacion,
      Codeudor
    }: IntCarpeta
  ) {
    this.llaveProceso = llaveProceso;
    this.idProceso = idProceso;
    this._id = _id;
    this.id = _id.toString();
    this.Numero = Numero;
    this.Demanda = Demanda;
    this.Deudor = Deudor;
    this.Avaluo = Avaluo;
    this.EtapaProcesal = EtapaProcesal;
    this.Liquidacion = Liquidacion;
    this.MedidasCautelares = MedidasCautelares;
    this.Notificaciones = Notificaciones;
    this.SuspencionProceso = SuspencionProceso;
    this.Terminacion = Terminacion;
    this.ultimaActuacion = ultimaActuacion;
    this.Codeudor = Codeudor;

    this.Nombre = () => {
      const n = this.Deudor.SegundoApellido
        ? this.Deudor.SegundoNombre
          ? `${ this.Deudor.PrimerNombre } ${ this.Deudor.SegundoNombre } ${ this.Deudor.PrimerApellido } ${ this.Deudor.SegundoApellido }`
          : `${ this.Deudor.PrimerNombre } ${ this.Deudor.PrimerApellido } ${ this.Deudor.SegundoApellido }`
        : `${ this.Deudor.PrimerNombre } ${ this.Deudor.PrimerApellido }`;

      return n;
    };

    this.despacho = () => {
      const n = this.Demanda.Juzgado.Ejecucion
        ? this.Demanda.Juzgado.Ejecucion.url
        : this.Demanda.Juzgado.Origen.url;

      return n;
    };
  }
}

export class NombreCompleto {
  Nombre: string;
  constructor(
    {
      PrimerNombre,
      SegundoNombre,
      PrimerApellido,
      SegundoApellido
    }: {
    PrimerNombre: string;
    PrimerApellido: string;
    SegundoNombre?: string;
    SegundoApellido?: string;
  }
  ) {
    this.Nombre = SegundoApellido
      ? SegundoNombre
        ? `${ PrimerNombre } ${ SegundoNombre } ${ PrimerApellido } ${ SegundoApellido }`
        : `${ PrimerNombre } ${ PrimerApellido } ${ SegundoApellido }`
      : `${ PrimerNombre } ${ PrimerApellido }`;
  }
}
/*
const demandados : IntCarpeta[] = [
  {
    _id: new ObjectId(
      '64ac755f1bba70937441dada'
    ),
    Avaluo: {
      Adjudicacion: {
        Fecha: '1999-01-01'
      },
      Remate: {
        Fecha: '1999-01-01'
      }
    },
    Numero : 14,
    Demanda: {
      Departamento             : 'CUNDINAMARCA',
      Municipio                : 'BOGOTA',
      VencimientoPagare        : '2020-05-04',
      EntregadeGarantiasAbogado: '2017-05-11',
      Radicado                 : '2017 - 00884',
      CapitalAdeudado          : '$ 33.791.309',
      Proceso                  : {
        Tipo: 'PRENDARIO'
      },
      Juzgado: {
        Origen: {
          id : '3 CM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-03-civil-municipal-de-bogota'
        }
      },
      Ubicacion: {
        Juzgado: 'HMM PISO 5'
      }
    },
    Deudor: {
      Id            : 1077969975,
      Email         : 'yess_Id@hotmail.com',
      PrimerNombre  : 'Yesid',
      SegundoNombre : 'Albeiro',
      PrimerApellido: 'Ramos',
      Direccion     : 'CARRERA 77B No. 68B - 19 BARRIO SANTA HELENITA',
      Tel           : {
        Fijo   : 3193905254,
        Celular: 3212337597
      }
    },
    EtapaProcesal: {
      Etapa: 'EMPLAZAMIENTO',
      Fecha: {
        MandamientodePago: '2017-06-02'
      }
    },
    Liquidacion: {
      Costas: {
        FechaAprobacion: '1999-01-01'
      },
      Fecha: {
        Aprobacion: '1999-01-01'
      }
    },
    MedidasCautelares: {
      Bienes               : 'VEHICULO',
      MedidaSolicitada     : 'VEHICULO',
      Extra                : 'LA PRINCIPAL SAS',
      PlacaoNumeroMatricula: 'IYM-870',
      DescripcionMedida:
        'AUTOMOVIL MODELO 2017 MARCA CHEVROLET COLOR ROJO VELVET SERVICIOPARTICULAR  MINI SPARK',
      Fecha: {
        Captura                 : 43315,
        Secuestro               : 'PENDIENTE',
        DecretoSecuestrooCaptura: '2010-03-20'
      },
      FechaRadicaccion: '2018-05-31',
      Oficios         : {
        FechaRetiro: '2017-09-28'
      },
      RespuestaEmbargo: true
    },
    Notificaciones: {
      '291': {
        AportaNotificacion: '2018-07-11'
      },
      '292': {
        AportaNotificacion: '2018-07-11'
      },
      AutoNotificado: '2018-07-11'
    },
    SuspencionProceso: {
      TerminoSuspencion: 'N/A',
      Fecha            : '1999-01-01'
    },
    Terminacion: {
      Causal: 'N/A',
      Fecha : {
        AutoTerminacion   : '1999-01-01',
        RadicacionMemorial: '1999-01-01'
      }
    },
    idProceso      : 50468620,
    llaveProceso   : '11001400300320170088400',
    ultimaActuacion: {
      idRegActuacion: 1792483340,
      llaveProceso  : '11001400300320170088400',
      consActuacion : 98,
      fechaActuacion: '2023-06-28T00:00:00',
      actuacion     : 'Fijacion estado',
      anotacion     : 'Actuación registrada el 28/06/2023 a las 16:17:33.',
      fechaInicial  : '2023-06-29T00:00:00',
      fechaFinal    : '2023-06-29T00:00:00',
      fechaRegistro : '2023-06-28T00:00:00',
      codRegla      : '00                              ',
      conDocumentos : false,
      cant          : 98
    }
  },
  {
    _id: new ObjectId(
      '64ac755f1bba70937441dadb'
    ),
    Avaluo: {
      Adjudicacion: {
        Fecha: '1999-01-01'
      },
      Remate: {
        Fecha: '1999-01-01'
      }
    },
    Numero : 14,
    Demanda: {
      Departamento             : 'CUNDINAMARCA',
      Municipio                : 'BOGOTA',
      VencimientoPagare        : '2020-05-04',
      EntregadeGarantiasAbogado: '2017-05-11',
      Radicado                 : '2017 - 00884',
      CapitalAdeudado          : '$ 33.791.309',
      Proceso                  : {
        Tipo: 'PRENDARIO'
      },
      Juzgado: {
        Origen: {
          id : '3 CM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-03-civil-municipal-de-bogota'
        }
      },
      Ubicacion: {
        Juzgado: 'HMM PISO 5'
      }
    },
    Deudor: {
      Id            : 1077969975,
      Email         : 'yess_Id@hotmail.com',
      PrimerNombre  : 'Yesid',
      SegundoNombre : 'Albeiro',
      PrimerApellido: 'Ramos',
      Direccion     : 'CARRERA 77B No. 68B - 19 BARRIO SANTA HELENITA',
      Tel           : {
        Fijo   : 3193905254,
        Celular: 3212337597
      }
    },
    EtapaProcesal: {
      Etapa: 'EMPLAZAMIENTO',
      Fecha: {
        MandamientodePago: '2017-06-02'
      }
    },
    Liquidacion: {
      Costas: {
        FechaAprobacion: '1999-01-01'
      },
      Fecha: {
        Aprobacion: '1999-01-01'
      }
    },
    MedidasCautelares: {
      Bienes               : 'VEHICULO',
      MedidaSolicitada     : 'VEHICULO',
      Extra                : 'LA PRINCIPAL SAS',
      PlacaoNumeroMatricula: 'IYM-870',
      DescripcionMedida:
        'AUTOMOVIL MODELO 2017 MARCA CHEVROLET COLOR ROJO VELVET SERVICIOPARTICULAR  MINI SPARK',
      Fecha: {
        Captura                 : 43315,
        Secuestro               : 'PENDIENTE',
        DecretoSecuestrooCaptura: '2010-03-20'
      },
      FechaRadicaccion: '2018-05-31',
      Oficios         : {
        FechaRetiro: '2017-09-28'
      },
      RespuestaEmbargo: true
    },
    Notificaciones: {
      '291': {
        AportaNotificacion: '2018-07-11'
      },
      '292': {
        AportaNotificacion: '2018-07-11'
      },
      AutoNotificado: '2018-07-11'
    },
    SuspencionProceso: {
      TerminoSuspencion: 'N/A',
      Fecha            : '1999-01-01'
    },
    Terminacion: {
      Causal: 'N/A',
      Fecha : {
        AutoTerminacion   : '1999-01-01',
        RadicacionMemorial: '1999-01-01'
      }
    },
    idProceso   : 113956611,
    llaveProceso: '11001400300320170088400'
  },
  {
    _id: new ObjectId(
      '64ac755f1bba70937441dadc'
    ),
    Numero  : 86,
    Codeudor: {
      Id    : 1015435620,
      Nombre: 'JESICA PAOLA GUZMAN OSPINA'
    },
    Demanda: {
      CapitalAdeudado          : '$ 26.515.333',
      Departamento             : 'CUNDINAMARCA',
      EntregadeGarantiasAbogado: '1899-12-30',
      Juzgado                  : {
        Ejecucion: {
          id : '12 CME',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-12-de-ejecucion-civil-municipal-de-bogota'
        },
        Origen: {
          id : '34 CM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-34-civil-municipal-de-bogota'
        }
      },
      Municipio: 'BOGOTA',
      Proceso  : {
        Tipo: 'PRENDARIO'
      },
      Radicado : '2017 - 00836',
      Ubicacion: {
        Juzgado: 'JUZGADOS EJECUCION'
      },
      VencimientoPagare: '2020-06-09'
    },
    Deudor: {
      Direccion      : 'CARRERA 95 # 138 - 58',
      Email          : 'orduzcrit2@hotmail.com',
      Id             : 1032432802,
      PrimerNombre   : 'Luis',
      SegundoNombre  : 'Esneider',
      PrimerApellido : 'Orduz',
      SegundoApellido: 'Farfan'
    },
    EtapaProcesal: {
      Etapa: 'EJECUCION',
      Fecha: {
        MandamientodePago  : '2017-07-10',
        PresentacionDemanda: '2017-06-20'
      }
    },
    MedidasCautelares: {
      Bienes           : 'VEHICULO',
      DescripcionMedida: 'VEHICULO',
      Fecha            : {
        SolicitudCapturaoSecuestro: '2019-04-11'
      },
      FechaOrdena     : '2017-07-10',
      FechaRadicaccion: '2018-08-24',
      MedidaSolicitada: 'VEHICULO',
      Oficio          : {
        Fecha : '2017-07-17',
        Numero: 1355
      },
      Oficios: {
        FechaRetiro: '2017-08-24'
      },
      PlacaoNumeroMatricula: 'UBK-333',
      RespuestaEmbargo     : true
    },
    Notificaciones: {
      '291': {
        AportaNotificacion: '2018-07-18',
        Recibo            : '2018-12-02',
        Resultado         : true
      },
      '292': {
        AportaNotificacion: '2018-07-18',
        Resultado         : true
      },
      AutoNotificado: '2019-01-25',
      Certimail     : false,
      Fisico        : true,
      Tipo          : 'EMPLAZAMIENTO'
    },
    idProceso      : 50521480,
    llaveProceso   : '11001400303420170083600',
    ultimaActuacion: {
      idRegActuacion: 1724588680,
      llaveProceso  : '11001400303420170083600',
      consActuacion : 94,
      fechaActuacion: '2023-04-27T00:00:00',
      actuacion     : 'Entrega de oficios',
      anotacion:
        'SE REMITE TELEGRAMA No. TOECM-0323ALB-16 ordenados por auto del 15 de febrero de 2023.  LETRA / PAOLA ROBAYO',
      fechaInicial : null,
      fechaFinal   : null,
      fechaRegistro: '2023-04-27T00:00:00',
      codRegla     : '00                              ',
      conDocumentos: false,
      cant         : 94
    }
  },
  {
    _id: new ObjectId(
      '64ac755f1bba70937441dadd'
    ),
    Numero  : 86,
    Codeudor: {
      Id    : 1015435620,
      Nombre: 'JESICA PAOLA GUZMAN OSPINA'
    },
    Demanda: {
      Departamento             : 'CUNDINAMARCA',
      Municipio                : 'BOGOTA',
      VencimientoPagare        : '2020-06-09',
      Radicado                 : '2017 - 00836',
      EntregadeGarantiasAbogado: '1899-12-30',
      CapitalAdeudado          : '$ 26.515.333',
      Juzgado                  : {
        Origen: {
          id : '34 CM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-34-civil-municipal-de-bogota'
        },
        Ejecucion: {
          id : '12 CME',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-12-de-ejecucion-civil-municipal-de-bogota'
        }
      },
      Proceso: {
        Tipo: 'PRENDARIO'
      },
      Ubicacion: {
        Juzgado: 'JUZGADOS EJECUCION'
      }
    },
    Deudor: {
      Id             : 1032432802,
      Email          : 'orduzcrit2@hotmail.com',
      PrimerNombre   : 'Luis',
      SegundoNombre  : 'Esneider',
      PrimerApellido : 'Orduz',
      SegundoApellido: 'Farfan',
      Direccion      : 'CARRERA 95 # 138 - 58'
    },
    EtapaProcesal: {
      Etapa: 'EJECUCION',
      Fecha: {
        MandamientodePago  : '2017-07-10',
        PresentacionDemanda: '2017-06-20'
      }
    },
    MedidasCautelares: {
      Bienes: 'VEHICULO',
      Fecha : {
        SolicitudCapturaoSecuestro: '2019-04-11'
      },
      MedidaSolicitada     : 'VEHICULO',
      DescripcionMedida    : 'VEHICULO',
      PlacaoNumeroMatricula: 'UBK-333',
      FechaRadicaccion     : '2018-08-24',
      FechaOrdena          : '2017-07-10',
      Oficio               : {
        Numero: 1355,
        Fecha : '2017-07-17'
      },
      Oficios: {
        FechaRetiro: '2017-08-24'
      },
      RespuestaEmbargo: true
    },
    Notificaciones: {
      '291': {
        Recibo            : '2018-12-02',
        AportaNotificacion: '2018-07-18',
        Resultado         : true
      },
      '292': {
        AportaNotificacion: '2018-07-18',
        Resultado         : true
      },
      AutoNotificado: '2019-01-25',
      Certimail     : false,
      Fisico        : true,
      Tipo          : 'EMPLAZAMIENTO'
    },
    idProceso   : 81728891,
    llaveProceso: '11001400303420170083600'
  },
  {
    _id: new ObjectId(
      '64ac755f1bba70937441dade'
    ),
    Avaluo: {
      Valor:
        'SE ENVIA SOLICITUD OFICIO PARA ENVIAR POR EL JUZGADO A SALUD TOTAL EPS // PROCESO IRRECUPERABLE'
    },
    Numero : 98,
    Demanda: {
      CapitalAdeudado          : '$ 50.000.000',
      Departamento             : 'CUNDINAMARCA',
      EntregadeGarantiasAbogado: '2017-06-12',
      Municipio                : 'MESITAS',
      Juzgado                  : {
        Origen: {
          id : '001 PM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-001-promiscuo-municipal-de-el-colegio'
        }
      },
      Proceso: {
        Tipo: 'SINGULAR'
      },
      Radicado : '2017-00239',
      Ubicacion: {
        Juzgado: 'EL COLEGIO'
      },
      VencimientoPagare: '2019-07-05'
    },
    Deudor: {
      Direccion      : 'CALL 2 # 8-40 EL COLEGIO',
      Id             : 1070329396,
      PrimerNombre   : 'Erika',
      SegundoNombre  : 'Alejandra',
      PrimerApellido : 'Quintero',
      SegundoApellido: 'Reyes'
    },
    EtapaProcesal: {
      Etapa: 'EJECUCIÓN',
      Fecha: {
        MandamientodePago  : '2017-11-07',
        PresentacionDemanda: '2017-08-29'
      }
    },
    Liquidacion: {
      Fecha: {
        Presentacion: '2018-11-26',
        Solicitud   : '2018-09-04'
      }
    },
    MedidasCautelares: {
      Bienes           : 'BANCOS',
      DescripcionMedida: 'RETENCION DINEROS',
      FechaOrdena      : '2017-11-07',
      FechaRadicaccion : '2023-02-02',
      MedidaSolicitada : 'EMBARGO DE DINEROS EN BANCOS',
      Oficio           : {
        Fecha : '2017-11-15',
        Numero: 1461
      },
      RespuestaEmbargo: true
    },
    Notificaciones: {
      '291': {
        AportaNotificacion: '2018-05-17'
      },
      '292': {
        AportaNotificacion: '2018-05-17',
        Resultado         : true
      },
      AutoNotificado: '2018-07-17',
      Tipo          : 'CORREO'
    },
    idProceso   : 0,
    llaveProceso: '25245408900120170023900'
  },
  {
    _id: new ObjectId(
      '64ac755f1bba70937441dadf'
    ),
    Numero  : 116,
    Codeudor: {
      Direccion: 'CARRERA 3 # 29A - 02 LOCAL 1057',
      Id       : 52771090,
      Nombre   : 'YENY ESPERANZA ARIAS MENDIETA'
    },
    Demanda: {
      CapitalAdeudado          : '$ 13.906.249',
      Departamento             : 'CUNDINAMARCA',
      EntregadeGarantiasAbogado: '2017-08-04',
      Municipio                : 'SOACHA',
      Juzgado                  : {
        Origen: {
          id : '003 PCYCM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-03-municipal-de-pequenas-causas-y-competencia-multiple-de-soacha'
        }
      },
      Proceso: {
        Tipo: 'SINGULAR'
      },
      Radicado : '2017 - 00755',
      Ubicacion: {
        Juzgado: 'SOACHA'
      },
      VencimientoPagare: '2021-04-12'
    },
    Deudor: {
      Direccion     : 'CARRERA 3 # 29A - 02',
      Id            : 900212673,
      PrimerNombre  : 'Jencell',
      PrimerApellido: 'E.U.'
    },
    EtapaProcesal: {
      Etapa: 'EJECUCIÓN',
      Fecha: {
        MandamientodePago  : '2017-09-08',
        PresentacionDemanda: '2017-08-11'
      }
    },
    Liquidacion: {
      Fecha: {
        Aprobacion  : '2018-08-01',
        Presentacion: '2018-06-20',
        Sentencia   : '2018-02-09'
      },
      ValorCredito: '5003149,67'
    },
    MedidasCautelares: {
      Bienes: 'BANCOS',
      DescripcionMedida:
        'SOLICITA EMBARGO DE INMUEBLE PROPIEDAD DE REPRESENTANTE LEGAL Y CODEUDORA',
      FechaOrdena     : '2017-09-08',
      FechaRadicaccion: '2018-06',
      MedidaSolicitada: 'EMBARGO INMUEBLE DE LA CODEUDORA',
      Oficio          : {
        Fecha : '2017-09-15',
        Numero: 1181
      },
      Oficios: {
        FechaRetiro: '2018-09-15'
      },
      PlacaoNumeroMatricula: '051-130616'
    },
    Notificaciones: {
      '291': {
        AportaNotificacion: '2017-12-12',
        Recibo            : '2017-12-12',
        Resultado         : true
      },
      '292': {
        AportaNotificacion: '2017-12-12',
        Resultado         : true
      },
      AutoNotificado: '2018-02-09',
      Certimail     : true,
      Fisico        : false,
      Tipo          : 'CERTIMAIL'
    },
    idProceso   : 0,
    llaveProceso: '25754418900320170075500'
  },
  {
    _id: new ObjectId(
      '64ac755f1bba70937441dae0'
    ),
    Numero : 170,
    Demanda: {
      Departamento             : 'CUNDINAMARCA',
      Municipio                : 'BOGOTA',
      VencimientoPagare        : '2026-03-10',
      EntregadeGarantiasAbogado: '2017-08-22',
      CapitalAdeudado          : '$ 14.795.921',
      Juzgado                  : {
        Origen: {
          id : '25 CM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-25-civil-municipal-de-bogota'
        },
        Ejecucion: {
          id : '18 CME',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-18-de-ejecucion-civil-municipal-de-bogota'
        }
      },
      Proceso: {
        Tipo: 'HIPOTECARIO'
      },
      Radicado : '2017 - 00903',
      Ubicacion: {
        Juzgado: 'JUZGADOS EJECUCION'
      }
    },
    Deudor: {
      Id             : 52189873,
      Email          : 'darnelly-74@hotmail.com',
      PrimerNombre   : 'Darnelly',
      PrimerApellido : 'Hernandez',
      SegundoApellido: 'Martinez',
      Direccion      : 'CALLE 74G # 80 - 58 SUR',
      Tel            : {
        Fijo   : 4530972,
        Celular: 3144189224
      }
    },
    EtapaProcesal: {
      Etapa: 'EJECUCIÓN',
      Fecha: {
        MandamientodePago  : '2017-09-18',
        PresentacionDemanda: '2017-08-28'
      }
    },
    Liquidacion: {
      Fecha: {
        Presentacion: '2019-01-11',
        Sentencia   : '2018-06-22'
      }
    },
    MedidasCautelares: {
      Bienes           : 'INMUEBLE APTO 504',
      DescripcionMedida: 'INMUEBLE  CARRERA 88 C N° 62-65 SUR',
      Fecha            : {
        SolicitudCapturaoSecuestro: '2018-03-22'
      },
      MedidaSolicitada: 'EMBARGO DE INMUEBLE',
      FechaRadicaccion: '2018-01-28',
      FechaOrdena     : '2017-09-18',
      Oficio          : {
        Numero: 3781,
        Fecha : '2017-09-25'
      },
      PlacaoNumeroMatricula: '50S-40552545',
      RespuestaEmbargo     : true
    },
    Notificaciones: {
      '291': {
        AportaNotificacion: '2018-06-20',
        Recibo            : '2018-06-20',
        Resultado         : true
      },
      '292': {
        AportaNotificacion: '2018-06-20',
        Resultado         : true
      },
      AutoNotificado: '2018-06-22',
      Certimail     : true,
      Fisico        : false,
      Tipo          : 'CERTIMAIL'
    },
    idProceso      : 112048180,
    llaveProceso   : '11001400302520170090300',
    ultimaActuacion: {
      idRegActuacion: 1785813450,
      llaveProceso  : '11001400302520170090300',
      consActuacion : 81,
      fechaActuacion: '2023-06-23T00:00:00',
      actuacion     : 'Al despacho',
      anotacion     : 'EXPEDIENTE HIBRIDO INGRESA A DESPACHO // ALEJA M',
      fechaInicial  : null,
      fechaFinal    : null,
      fechaRegistro : '2023-06-22T00:00:00',
      codRegla      : '00                              ',
      conDocumentos : false,
      cant          : 81
    }
  },
  {
    _id: new ObjectId(
      '64ac755f1bba70937441dae1'
    ),
    Avaluo: {
      Valor:
        'SOLICITAR JUZGADO REQUERIR A SECRETARIA DE MOVILIDAD DE COTA LAS RAZONES POR LAS CUALES NO SE HA REGISTRADO MEDIDA CAUTELAR VEHICULO SLJ234 // RECONOCE PERSONERIA 31/01/22 // REVISAR URGENTE NUEVO APODERADO CISA // BANCOLOMBIA NO HA CEDIDO A REINTEGRA CREDITO // SEPT 9 RECONOCE PODER A CISA'
    },
    Numero : 178,
    Demanda: {
      CapitalAdeudado          : '$ 25.833.335',
      Departamento             : 'CUNDINAMARCA',
      EntregadeGarantiasAbogado: '2017-08-01',
      Juzgado                  : {
        Ejecucion: {
          id : '17 CME',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-17-de-ejecucion-civil-municipal-de-bogota'
        },
        Origen: {
          id : '1 CM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-01-civil-municipal-de-bogota'
        }
      },
      Municipio: 'BOGOTA',
      Proceso  : {
        Tipo: 'SINGULAR'
      },
      Radicado : '2017 - 01001',
      Ubicacion: {
        Juzgado: 'JUZGADOS EJECUCION'
      },
      VencimientoPagare: '2019-11-03'
    },
    Deudor: {
      Direccion      : 'CARRERA 81C # 2B - 80 PISO 2',
      Email          : 'grupocomerciallasabana@hotmail.com',
      Id             : 11185630,
      PrimerNombre   : 'Wilson',
      SegundoNombre  : 'Alfonso',
      PrimerApellido : 'Jimenez',
      SegundoApellido: 'Mendieta'
    },
    EtapaProcesal: {
      Etapa: 'EJECUCIÓN',
      Fecha: {
        MandamientodePago  : '2017-09-05',
        PresentacionDemanda: '2017-08-08'
      }
    },
    Liquidacion: {
      Fecha: {
        Aprobacion  : '2018-07-13',
        Presentacion: '2018-06-29',
        Solicitud   : '2018-06-22'
      }
    },
    MedidasCautelares: {
      Bienes: 'BANCOS',
      DescripcionMedida:
        'PEDIR EMBARGO Y SECUESTRO VEHICULO PROPIEDAD DEL DEUDOR',
      FechaOrdena     : '2017-09-05',
      MedidaSolicitada: 'EMBARGO DE DINEROS EN BANCOS',
      Oficio          : {
        Fecha : '2017-09-06',
        Numero: 2849
      },
      PlacaoNumeroMatricula: 'SLJ234',
      RespuestaEmbargo     : false
    },
    Notificaciones: {
      '291': {
        AportaNotificacion: '2018-06-06',
        Recibo            : '2018-02-06',
        Resultado         : true
      },
      '292': {
        AportaNotificacion: '2018-06-06',
        Resultado         : true
      },
      AutoNotificado: '2018-06-22',
      Certimail     : true,
      Fisico        : false,
      Tipo          : 'CORREO'
    },
    idProceso      : 50621670,
    llaveProceso   : '11001400300120170100100',
    ultimaActuacion: {
      idRegActuacion: 1804588910,
      llaveProceso  : '11001400300120170100100',
      consActuacion : 114,
      fechaActuacion: '2023-07-07T00:00:00',
      actuacion     : 'Elaboración de oficios',
      anotacion:
        '-SE ELABORA OFICIO N°OOECM-0723WGG-1619 //SIJIN // PROCESO HIBRIDO PASA PARA LA FIRMA// Wendy Gualteros',
      fechaInicial : null,
      fechaFinal   : null,
      fechaRegistro: '2023-07-07T00:00:00',
      codRegla     : '00                              ',
      conDocumentos: false,
      cant         : 113
    }
  },
  {
    _id: new ObjectId(
      '64ac755f1bba70937441dae2'
    ),
    Numero : 231,
    Demanda: {
      CapitalAdeudado          : '$ 27.603.821',
      Departamento             : 'CUNDINAMARCA',
      EntregadeGarantiasAbogado: '2017-09-06',
      Juzgado                  : {
        Ejecucion: {
          id : '6 CME',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-06-de-ejecucion-civil-municipal-de-bogota'
        },
        Origen: {
          id : '8 CM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-008-civil-municipal-de-bogota'
        }
      },
      Municipio: 'BOGOTA',
      Proceso  : {
        Tipo: 'HIPOTECARIO'
      },
      Radicado : '2017 - 01134',
      Ubicacion: {
        Juzgado: 'JUZGADOS EJECUCION'
      },
      VencimientoPagare: '2017-02-14'
    },
    Deudor: {
      Direccion      : 'DIAGONAL 56 BIS 84 A 10 SUR TR 1',
      Email          : 'fanor.diaz@gmail.com',
      Id             : 79853115,
      PrimerNombre   : 'Fanor',
      PrimerApellido : 'Diaz',
      SegundoApellido: 'Agudelo',
      Tel            : {
        Celular: 3212406193,
        Fijo   : 8060271
      }
    },
    EtapaProcesal: {
      Etapa: 'EJECUCIÓN',
      Fecha: {
        MandamientodePago  : '2017-09-21',
        PresentacionDemanda: '2017-09-18'
      }
    },
    Liquidacion: {
      Fecha: {
        Presentacion: '2019-01-11',
        Sentencia   : '2018-07-16',
        Solicitud   : '2018-07-24'
      }
    },
    MedidasCautelares: {
      Bienes: 'INMUEBLE',
      DescripcionMedida:
        'APARTAMENTO 502 INT. 17 CONJUNTO RESIDNCIAL ALONDRA  P.H.  DIAGONAL 56 BIS SUR N° 84 A -20',
      FechaOrdena     : '2017-09-21',
      FechaRadicaccion: '2018-05-15',
      MedidaSolicitada: 'EMBARGO DE INMUEBLE',
      Oficio          : {
        Fecha : '2017-10-04',
        Numero: 2746
      },
      Oficios: {
        FechaRetiro: '2017-10-04'
      },
      PlacaoNumeroMatricula: '50S-40590187',
      RespuestaEmbargo     : true
    },
    Notificaciones: {
      '291': {
        AportaNotificacion: '2018-02-06',
        Recibo            : '2018-02-06',
        Resultado         : true
      },
      '292': {
        AportaNotificacion: '2018-02-06',
        Resultado         : true
      },
      AutoNotificado: '2018-05-07',
      Certimail     : true,
      Fisico        : false,
      Tipo          : 'CERTIMAIL'
    },
    idProceso      : 50716620,
    llaveProceso   : '11001400300820170113400',
    ultimaActuacion: {
      idRegActuacion: 1804892750,
      llaveProceso  : '11001400300820170113400',
      consActuacion : 81,
      fechaActuacion: '2023-07-10T00:00:00',
      actuacion     : 'Constancia secretarial',
      anotacion     : 'PROCESO FIRMADO PASA A BARANDA DIGITAL,MZ',
      fechaInicial  : null,
      fechaFinal    : null,
      fechaRegistro : '2023-07-10T00:00:00',
      codRegla      : '00                              ',
      conDocumentos : false,
      cant          : 81
    }
  },
  {
    _id: new ObjectId(
      '64ac755f1bba70937441dae3'
    ),
    Numero  : 274,
    Codeudor: {
      Direccion: 'CARRERA  115 No 89 A - 31 INT 12 APART 202',
      Id       : 4337296,
      Nombre   : 'JOSE NOEL PUERTA PUERTA'
    },
    Demanda: {
      CapitalAdeudado          : '$ 12.347.548',
      Departamento             : 'CUNDINAMARCA',
      EntregadeGarantiasAbogado: '2017-09-28',
      Juzgado                  : {
        Ejecucion: {
          id : '11 CME',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-11-de-ejecucion-civil-municipal-de-bogota'
        },
        Origen: {
          id : '37 CM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-37-civil-municipal-de-bogota'
        }
      },
      Municipio: 'BOGOTA',
      Proceso  : {
        Tipo: 'SINGULAR'
      },
      Radicado : '2017 - 01391',
      Ubicacion: {
        Juzgado: 'JUZGADOS EJECUCION'
      },
      VencimientoPagare: '2019-03-18'
    },
    Deudor: {
      Direccion      : 'CARRERA  101  No 71 B - 53',
      Email          : 'natis-rolita@hotmail.con',
      Id             : 35506033,
      PrimerNombre   : 'Luz',
      SegundoNombre  : 'Dary',
      PrimerApellido : 'Puerta',
      SegundoApellido: 'Jaramillo',
      Tel            : {
        Celular: 3103430010,
        Fijo   : 4357832
      }
    },
    EtapaProcesal: {
      Etapa: 'EJECUCIÓN',
      Fecha: {
        MandamientodePago  : '2018-01-16',
        PresentacionDemanda: '2017-10-10'
      }
    },
    Notificaciones: {
      '291': {
        AportaNotificacion: '2018-09-14',
        Recibo            : '2018-04-30',
        Resultado         : true
      },
      '292': {
        AportaNotificacion: '2018-06-08',
        Recibo            : '2018-05-15',
        Resultado         : true
      },
      AutoNotificado: '2018-09-03',
      Certimail     : false,
      Fisico        : true,
      Tipo          : 'CORREO'
    },
    idProceso      : 112945420,
    llaveProceso   : '11001400303720170139100',
    ultimaActuacion: {
      idRegActuacion: 1262270900,
      llaveProceso  : '11001400303720170139100',
      consActuacion : 70,
      fechaActuacion: '2022-03-09T00:00:00',
      actuacion     : 'Constancia secretarial',
      anotacion:
        '    SE RECEPCIONA EXPEDIENTE EN EL AREA DE ESTADOS PARA LO PERTINENTE LUIS G y ESTEFANNY ORTIZ--CUADERNOS 2\r\n',
      fechaInicial : null,
      fechaFinal   : null,
      fechaRegistro: '2022-03-09T00:00:00',
      codRegla     : '00                              ',
      conDocumentos: false,
      cant         : 70
    }
  },
  {
    _id: new ObjectId(
      '64ac755f1bba70937441dae4'
    ),
    Numero  : 278,
    Codeudor: {
      Direccion: 'DG 3B No. 0-78 ESTE',
      Id       : [
        41759787,
        39710157
      ],
      Nombre: [
        'CARMELINA AGUILAR ',
        ' ANA LUCIA AGUILAR'
      ],
      Tel: {
        Celular: 3204613419,
        Fijo   : 3107627120
      }
    },
    Demanda: {
      CapitalAdeudado          : '$ 66.362.959',
      Departamento             : 'CUNDINAMARCA',
      EntregadeGarantiasAbogado: '2017-09-21',
      Juzgado                  : {
        Ejecucion: {
          id : '11 CME',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-11-de-ejecucion-civil-municipal-de-bogota'
        },
        Origen: {
          id : '15 CM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-015-civil-municipal-de-bogota'
        }
      },
      Municipio: 'BOGOTA',
      Proceso  : {
        Tipo: 'HIPOTECARIO'
      },
      Radicado : '2017 - 01394',
      Ubicacion: {
        Juzgado: 'JUZGADOS EJECUCION'
      },
      VencimientoPagare: '2024-05-05'
    },
    Deudor: {
      Direccion      : 'CALLE 2 C No 62 - 20',
      Email          : 'maifren_13@yahoo.es',
      Id             : 19255260,
      PrimerNombre   : 'Matias',
      SegundoNombre  : 'Humberto',
      PrimerApellido : 'Avila',
      SegundoApellido: 'Aguilar',
      Tel            : {
        Celular: 3125024008,
        Fijo   : 4170527
      }
    },
    EtapaProcesal: {
      Etapa: 'EJECUCIÓN',
      Fecha: {
        MandamientodePago  : '2018-02-09',
        PresentacionDemanda: '2017-10-10'
      }
    },
    MedidasCautelares: {
      Bienes          : 'CASA',
      FechaOrdena     : '2017-11-08',
      FechaRadicaccion: '2018-03-12',
      MedidaSolicitada: 'EMBARGO DE INMUEBLE',
      Oficio          : {
        Fecha : '2018-02-16',
        Numero: 284
      },
      Oficios: {
        FechaRetiro: '2018-02-16'
      },
      PlacaoNumeroMatricula: '50C-643759',
      RespuestaEmbargo     : false
    },
    Notificaciones: {
      '291': {
        AportaNotificacion: '2018-06-08',
        Recibo            : '2018-02-14',
        Resultado         : true
      },
      '292': {
        AportaNotificacion: '2018-06-08',
        Recibo            : '2018-02-23',
        Resultado         : true
      },
      AutoNotificado: '2018-02-23',
      Certimail     : false,
      Fisico        : true,
      Tipo          : 'CORREO/ PERSONAL'
    },
    idProceso      : 50777890,
    llaveProceso   : '11001400301520170139400',
    ultimaActuacion: {
      idRegActuacion: 1232366290,
      llaveProceso  : '11001400301520170139400',
      consActuacion : 81,
      fechaActuacion: '2021-11-08T00:00:00',
      actuacion     : 'Constancia secretarial',
      anotacion:
        '   SE RECEPCIONA EXPEDIENTE EN EL AREA DE ESTADOS PARA LO PERTINENTE STEFY ORTIZ Y LUIS GIRALDO-- CUADERNOS 2\r\n',
      fechaInicial : null,
      fechaFinal   : null,
      fechaRegistro: '2021-11-08T00:00:00',
      codRegla     : '00                              ',
      conDocumentos: false,
      cant         : 81
    }
  },
  {
    _id: new ObjectId(
      '64ac755f1bba70937441dae5'
    ),
    Avaluo: {
      Valor:
        'RETIRAR DEL JUZGADO RESPUESTA DE ETB Y ALIANSALUD EPS SE RADICA OFICIO ACLARANDO CESIÓN DEL CRÉDITO'
    },
    Numero : 289,
    Demanda: {
      CapitalAdeudado          : '$ 12.249.598',
      Departamento             : 'CUNDINAMARCA',
      EntregadeGarantiasAbogado: '2017-09-19',
      Juzgado                  : {
        Ejecucion: {
          id : '7 CME',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-07-de-ejecucion-civil-municipal-de-bogota'
        },
        Origen: {
          id : '48 CM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-048-civil-municipal-de-bogota'
        }
      },
      Municipio : 'BOGOTA',
      Obligacion: {
        '1': '320088443  / 377813441863587',
        '2': 4513070212799642
      },
      Proceso: {
        Tipo: 'SINGULAR'
      },
      Radicado : '2017 - 00974',
      Ubicacion: {
        Juzgado: 'JUZGADOS EJECUCION'
      },
      VencimientoPagare: '2020-03-05'
    },
    Deudor: {
      Direccion      : 'CALLE 64 SUR  No 85 B - 40  APARTAMENTO  104',
      Email          : 'ars.09@hotmail.com',
      Id             : 1032383389,
      PrimerNombre   : 'Anderson',
      PrimerApellido : 'Revelo',
      SegundoApellido: 'Santos',
      Tel            : {
        Celular: 3118526428,
        Fijo   : 4725511
      }
    },
    EtapaProcesal: {
      Etapa: 'EJECUCIÓN',
      Fecha: {
        MandamientodePago  : '2017-11-03',
        PresentacionDemanda: '2017-10-06'
      }
    },
    Liquidacion: {
      Fecha: {
        Aprobacion  : '2018-06-15',
        Presentacion: '2018-06-05',
        Solicitud   : '2018-02-23'
      }
    },
    MedidasCautelares: {
      Bienes           : 'APTO 104 TORRE 4',
      DescripcionMedida: 'EMBARGO DE SALARIOS',
      FechaOrdena      : '2017-11-03',
      FechaRadicaccion : '2018-01-31',
      MedidaSolicitada : 'EMBARGO DE INMUEBLE',
      Oficio           : {
        Fecha : '2017-12-01',
        Numero: 799
      },
      PlacaoNumeroMatricula: '50S-40606676',
      RespuestaEmbargo     : false
    },
    Notificaciones: {
      '291': {
        AportaNotificacion: '2018-01-30',
        Recibo            : '2018-01-30',
        Resultado         : true
      },
      '292': {
        AportaNotificacion: '2018-01-30',
        Resultado         : true
      },
      AutoNotificado: '2018-02-23',
      Certimail     : true,
      Fisico        : false,
      Tipo          : 'CERTIMAIL'
    },
    idProceso      : 50762570,
    llaveProceso   : '11001400304820170097400',
    ultimaActuacion: {
      idRegActuacion: 1535316390,
      llaveProceso  : '11001400304820170097400',
      consActuacion : 76,
      fechaActuacion: '2022-12-01T00:00:00',
      actuacion     : 'Constancia secretarial',
      anotacion:
        'SE RECEPCIONA EXPEDIENTE CON 2 CUADERNOS//JHONATHAN CAÑON, Y ESTEFANIA LOPEZ',
      fechaInicial : null,
      fechaFinal   : null,
      fechaRegistro: '2022-12-01T00:00:00',
      codRegla     : '00                              ',
      conDocumentos: false,
      cant         : 76
    }
  },
  {
    _id: new ObjectId(
      '64ac755f1bba70937441dae6'
    ),
    Avaluo: {
      Valor: 'VALIDAR COMO IRRECUPERABLE'
    },
    Numero : 306,
    Demanda: {
      CapitalAdeudado          : '$ 40.406.421',
      Departamento             : 'CUNDINAMARCA',
      EntregadeGarantiasAbogado: '2017-10-04',
      Juzgado                  : {
        Ejecucion: {
          id : '15 CME',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-15-de-ejecucion-civil-municipal-de-bogota'
        },
        Origen: {
          id : '21 CM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-021-civil-municipal-de-bogota'
        }
      },
      Municipio : 'BOGOTA',
      Obligacion: {
        '1': '1740086734 4513073749673967',
        '2': 5303719549810730
      },
      Proceso: {
        Tipo: 'SINGULAR'
      },
      Radicado : '2017 - 01532',
      Ubicacion: {
        Juzgado: 'JUZGADOS EJECUCION'
      },
      VencimientoPagare: '2020-03-23'
    },
    Deudor: {
      Direccion      : 'CARRERA 72 A- No 9 - 44',
      Email          : 'li_bcar@hotmail.com',
      Id             : 79388145,
      PrimerNombre   : 'Libardo',
      SegundoNombre  : 'Alfonso',
      PrimerApellido : 'Gonzalez',
      SegundoApellido: 'Triviño'
    },
    EtapaProcesal: {
      Etapa: 'EJECUCIÓN',
      Fecha: {
        MandamientodePago  : '2017-11-30',
        PresentacionDemanda: '2017-10-10'
      }
    },
    MedidasCautelares: {
      Bienes: 'VEHICULO',
      DescripcionMedida:
        'CAMIONETA PUBLICO// ENVIO DERECHO DE PETICION PARA REGISTRAR LA MEDIDA',
      FechaOrdena     : '2017-11-30',
      FechaRadicaccion: '2017-11-30',
      MedidaSolicitada: 'EMBARGO DE VEHICULO',
      Oficio          : {
        Fecha : '2017-11-08',
        Numero: 4273
      },
      Oficios: {
        FechaRetiro: '2017-11-30'
      },
      PlacaoNumeroMatricula: 'WLQ-216',
      RespuestaEmbargo     : false
    },
    Notificaciones: {
      '291': {
        AportaNotificacion: '2018-07-06',
        Recibo            : '2018-04-25',
        Resultado         : true
      },
      '292': {
        AportaNotificacion: '2019-05-27',
        Recibo            : '2019-05-27',
        Resultado         : true
      },
      AutoNotificado: '2019-06-17',
      Certimail     : false,
      Fisico        : true,
      Tipo          : 'CORREO'
    },
    idProceso      : 50769660,
    llaveProceso   : '11001400302120170153200',
    ultimaActuacion: {
      idRegActuacion: 1742239800,
      llaveProceso  : '11001400302120170153200',
      consActuacion : 77,
      fechaActuacion: '2023-05-15T00:00:00',
      actuacion     : 'Constancia secretarial',
      anotacion:
        'SE RECEPCIONA EL PRESENTE ASUNTO EN EL AREA ESTADOS // CRISTIAN QUINTO     LETRA\r\n',
      fechaInicial : null,
      fechaFinal   : null,
      fechaRegistro: '2023-05-15T00:00:00',
      codRegla     : '00                              ',
      conDocumentos: false,
      cant         : 77
    }
  },
  {
    _id: new ObjectId(
      '64ac755f1bba70937441dae7'
    ),
    Avaluo: {
      Valor: 'VALIDAR COMO IRRECUPERABLE'
    },
    Numero : 306,
    Demanda: {
      Departamento             : 'CUNDINAMARCA',
      Municipio                : 'BOGOTA',
      VencimientoPagare        : '2020-03-23',
      EntregadeGarantiasAbogado: '2017-10-04',
      Radicado                 : '2017 - 01532',
      CapitalAdeudado          : '$ 40.406.421',
      Juzgado                  : {
        Ejecucion: {
          id : '15 CME',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-15-de-ejecucion-civil-municipal-de-bogota'
        },
        Origen: {
          id : '21 CM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-021-civil-municipal-de-bogota'
        }
      },
      Obligacion: {
        '1': '1740086734 4513073749673967',
        '2': 5303719549810730
      },
      Proceso: {
        Tipo: 'SINGULAR'
      },
      Ubicacion: {
        Juzgado: 'JUZGADOS EJECUCION'
      }
    },
    Deudor: {
      Id             : 79388145,
      PrimerNombre   : 'Libardo',
      SegundoNombre  : 'Alfonso',
      PrimerApellido : 'Gonzalez',
      SegundoApellido: 'Triviño',
      Email          : 'li_bcar@hotmail.com',
      Direccion      : 'CARRERA 72 A- No 9 - 44'
    },
    EtapaProcesal: {
      Etapa: 'EJECUCIÓN',
      Fecha: {
        MandamientodePago  : '2017-11-30',
        PresentacionDemanda: '2017-10-10'
      }
    },
    MedidasCautelares: {
      PlacaoNumeroMatricula: 'WLQ-216',
      Bienes               : 'VEHICULO',
      MedidaSolicitada     : 'EMBARGO DE VEHICULO',
      DescripcionMedida:
        'CAMIONETA PUBLICO// ENVIO DERECHO DE PETICION PARA REGISTRAR LA MEDIDA',
      FechaOrdena     : '2017-11-30',
      FechaRadicaccion: '2017-11-30',
      Oficio          : {
        Numero: 4273,
        Fecha : '2017-11-08'
      },
      Oficios: {
        FechaRetiro: '2017-11-30'
      },
      RespuestaEmbargo: false
    },
    Notificaciones: {
      '291': {
        AportaNotificacion: '2018-07-06',
        Recibo            : '2018-04-25',
        Resultado         : true
      },
      '292': {
        AportaNotificacion: '2019-05-27',
        Recibo            : '2019-05-27',
        Resultado         : true
      },
      AutoNotificado: '2019-06-17',
      Certimail     : false,
      Fisico        : true,
      Tipo          : 'CORREO'
    },
    idProceso   : 81620291,
    llaveProceso: '11001400302120170153200'
  },
  {
    _id: new ObjectId(
      '64ac755f1bba70937441dae8'
    ),
    Numero : 312,
    Demanda: {
      CapitalAdeudado          : '$ 44.944.657',
      Departamento             : 'CUNDINAMARCA',
      EntregadeGarantiasAbogado: '2017-10-26',
      Municipio                : 'SOACHA',
      Juzgado                  : {
        Origen: {
          id : '1 CM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-01-civil-municipal-de-bogota'
        }
      },
      Obligacion: {
        '1': '180049   53037120066499008',
        '2': '3778133433049336 /4513075801129044'
      },
      Proceso: {
        Tipo: 'HIPOTECARIO'
      },
      Radicado : '2017 - 00323',
      Ubicacion: {
        Juzgado: 'REMATE DEL INMUEBLE'
      },
      VencimientoPagare: '2030-01-05'
    },
    Deudor: {
      Direccion      : 'CARRERA 18 B No 4 C -  20  SOACHA',
      Email          : 'saliradelante2012@hotmail.com',
      Id             : 8799171,
      PrimerNombre   : 'Manuel',
      SegundoNombre  : 'Enrique',
      PrimerApellido : 'Arteaga',
      SegundoApellido: 'Orozco'
    },
    EtapaProcesal: {
      Etapa: 'EJECUCION',
      Fecha: {
        MandamientodePago  : '2017-11-24',
        PresentacionDemanda: '2017-11-01'
      }
    },
    Liquidacion: {
      Fecha: {
        Sentencia: '2018-11-06',
        Solicitud: '2018-11-13'
      }
    },
    MedidasCautelares: {
      Bienes          : 'APTO 101 TORRE 20',
      FechaOrdena     : '2017-11-24',
      MedidaSolicitada: 'EMBARGO DE INMUEBLE',
      Oficio          : {
        Fecha : '2018-08-01',
        Numero: 8469
      },
      PlacaoNumeroMatricula: '051-162001',
      RespuestaEmbargo     : true
    },
    Notificaciones: {
      '291': {
        AportaNotificacion: '2018-02-15',
        Recibo            : '2018-02-15',
        Resultado         : true
      },
      '292': {
        Resultado: true
      },
      AutoNotificado: '2018-02-22',
      Certimail     : true,
      Fisico        : false,
      Tipo          : 'CERTIMAIL'
    },
    idProceso   : 0,
    llaveProceso: '25754400300120170032300'
  },
  {
    _id: new ObjectId(
      '64ac755f1bba70937441dae9'
    ),
    Numero : 401,
    Demanda: {
      CapitalAdeudado          : '$ 22.592.583',
      Departamento             : 'CUNDINAMARCA',
      EntregadeGarantiasAbogado: '2018-02-15',
      Juzgado                  : {
        Ejecucion: {
          id : '13 CME',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-13-de-ejecucion-civil-municipal-de-bogota'
        },
        Origen: {
          id : '21 CM',
          url: 'https: //www.ramajudicial.gov.co/web/juzgado-021-civil-municipal-de-bogota'
        }
      },
      Municipio: 'BOGOTA',
      Proceso  : {
        Tipo: 'HIPOTECARIO'
      },
      Radicado : '2018 - 00236',
      Ubicacion: {
        Juzgado: 'JUZGADOS EJECUCION'
      },
      VencimientoPagare: '2021-01-27'
    },
    Deudor: {
      Direccion      : 'CALLE 12 A No 71 B - 60',
      Email          : 'arthurlingo64@hotmail.com',
      Id             : 79396995,
      PrimerNombre   : 'Arturo',
      PrimerApellido : 'Lince',
      SegundoApellido: 'Gomez',
      Tel            : {
        Celular: 31088445603,
        Fijo   : 4244358
      }
    },
    EtapaProcesal: {
      Etapa: 'EJECUCIÓN',
      Fecha: {
        MandamientodePago  : '2018-03-02',
        PresentacionDemanda: '2018-02-22'
      }
    },
    Liquidacion: {
      Costas: {
        FechaAprobacion: '2018-07-11',
        Valor          : 20
      },
      Fecha: {
        Aprobacion  : '2018-08-27',
        Presentacion: '2018-08-02',
        Sentencia   : '2018-09-25'
      }
    },
    MedidasCautelares: {
      Bienes: 'CASA 176',
      Fecha : {
        DecretoSecuestrooCaptura: '2018-08-27'
      },
      FechaOrdena     : '2018-03-01',
      FechaRadicaccion: '2018-06-28',
      MedidaSolicitada: 'EMBARGO DE INMUEBLE',
      Oficio          : {
        Fecha : '2018-03-09',
        Numero: 832
      },
      Oficios: {
        FechaRetiro: '2018-03-09'
      },
      PlacaoNumeroMatricula: '50C-1645938',
      RespuestaEmbargo     : true
    },
    Notificaciones: {
      '291': {
        AportaNotificacion: '2018-04-10',
        Recibo            : '2018-04-08',
        Resultado         : true
      },
      '292': {
        Resultado: true
      },
      AutoNotificado: '2018-04-19',
      Certimail     : true,
      Fisico        : false,
      Tipo          : 'PERSONAL'
    },
    idProceso      : 51029180,
    llaveProceso   : '11001400302120180023600',
    ultimaActuacion: {
      idRegActuacion: 1777434510,
      llaveProceso  : '11001400302120180023600',
      consActuacion : 52,
      fechaActuacion: '2023-06-15T00:00:00',
      actuacion     : 'Recepción memorial',
      anotacion:
        'Radicado No. 5837-2023, No. Reloj Radicador: 9490, Entidad o Señor(a): CARMEN RAMIREZ - Tercer Interesado, Aportó Documento: Memorial, Con La Solucitud: Aportar liquidación de crédito',
      fechaInicial : null,
      fechaFinal   : null,
      fechaRegistro: '2023-06-15T00:00:00',
      codRegla     : '00                              ',
      conDocumentos: false,
      cant         : 52
    }
  },
  {
    _id: new ObjectId(
      '64ac755f1bba70937441daea'
    ),
    Numero  : 405,
    Codeudor: {
      Direccion: 'CALLE 56 # 17 - 03 CASA 65 NEIVA',
      Id       : 12192291,
      Nombre   : 'ANDRES ENRIQUE IBARRA ACOSTA'
    },
    Demanda: {
      CapitalAdeudado          : '$ 11.949.471',
      Departamento             : 'CUNDINAMARCA',
      EntregadeGarantiasAbogado: '2018-02-15',
      Juzgado                  : {
        Ejecucion: {
          id : '7 CME',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-07-de-ejecucion-civil-municipal-de-bogota'
        },
        Origen: {
          id : '56 CM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-056-civil-municipal-de-bogota'
        }
      },
      Municipio: 'BOGOTA',
      Proceso  : {
        Tipo: 'SINGULAR'
      },
      Radicado : '2018 - 00221',
      Ubicacion: {
        Juzgado: 'JUZGADOS EJECUCION'
      },
      VencimientoPagare: '2018-06-20'
    },
    Deudor: {
      Direccion      : 'CARRERA 50 1# 47 - 50 INT 1 APTO 101',
      Email          : 'andibarracosta@gmail.com',
      Id             : 900545720,
      PrimerNombre   : 'Creas',
      PrimerApellido : 'Soluciones',
      SegundoApellido: 'S.A.S',
      Tel            : {
        Celular: 3107982028,
        Fijo   : 8626344
      }
    },
    EtapaProcesal: {
      Etapa: 'EJECUCIÓN',
      Fecha: {
        MandamientodePago  : '2018-03-22',
        PresentacionDemanda: '2018-02-28'
      }
    },
    Liquidacion: {
      Fecha: {
        Sentencia: '2018-06-07'
      }
    },
    MedidasCautelares: {
      Bienes          : 'BANCOS',
      FechaOrdena     : '2018-03-22',
      MedidaSolicitada: 'EMBARGO DE DINEROS EN BANCOS',
      Oficio          : {
        Fecha : '2018-04-02',
        Numero: 747
      },
      RespuestaEmbargo: false
    },
    Notificaciones: {
      '291': {
        AportaNotificacion: '2018-05-18',
        Recibo            : '2018-05-18',
        Resultado         : true
      },
      '292': {
        AportaNotificacion: '2018-05-18',
        Resultado         : true
      },
      AutoNotificado: '2018-05-18',
      Certimail     : true,
      Fisico        : false,
      Tipo          : 'CERTIMAIL'
    },
    idProceso      : 51042800,
    llaveProceso   : '11001400305620180022100',
    ultimaActuacion: {
      idRegActuacion: 1769641810,
      llaveProceso  : '11001400305620180022100',
      consActuacion : 65,
      fechaActuacion: '2023-06-08T00:00:00',
      actuacion     : 'Constancia secretarial',
      anotacion:
        'SE AGREGA MEMORIAL AL GESTOR  PARA LO PERTINENTE //EXPEDIENTE HIBRIDO, FISICO HASTA C1-92- C2-39//ART 109 - LETRA//JILL RIONDO Y JONATHAN C',
      fechaInicial : null,
      fechaFinal   : null,
      fechaRegistro: '2023-06-08T00:00:00',
      codRegla     : '00                              ',
      conDocumentos: false,
      cant         : 65
    }
  },
  {
    _id: new ObjectId(
      '64ac755f1bba70937441daeb'
    ),
    Numero : 461,
    Demanda: {
      CapitalAdeudado          : '$ 24.501.535',
      Departamento             : 'CUNDINAMARCA',
      EntregadeGarantiasAbogado: '2018-07-05',
      Municipio                : 'BOGOTA',
      Juzgado                  : {
        Origen: {
          id : '14 PCYCM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-014-de-pequenas-causas-y-competencia-multiple-de-bogota'
        }
      },
      Obligacion: {
        '1': 'AMERICAN 0377814037749057',
        '2': 'VISA 4513083943843365 // MASTER 5303729958258417'
      },
      Proceso: {
        Tipo: 'SINGULAR'
      },
      Radicado : '2019 - 00656',
      Ubicacion: {
        Juzgado: 'JARAMILLO'
      },
      VencimientoPagare: '2021-02-16'
    },
    Deudor: {
      Direccion      : 'DIAGONAL 2 # 21 B-20',
      Email          : 'leidyyaneth.lyv@gmail.com',
      Id             : 52883958,
      PrimerNombre   : 'Leidy',
      SegundoNombre  : 'Yaneth',
      PrimerApellido : 'Vidal',
      SegundoApellido: 'Rodriguez'
    },
    EtapaProcesal: {
      Etapa: 'CONTESTACION DEMANDA',
      Fecha: {
        MandamientodePago  : '2019-05-07',
        PresentacionDemanda: '2018-07-12'
      }
    },
    MedidasCautelares: {
      Bienes          : 'PREDIO RURAL',
      FechaOrdena     : '2019-05-14',
      MedidaSolicitada: 'EMBARGO DE INMUEBLE',
      Oficio          : {
        Fecha : '2019-05-14',
        Numero: 937
      },
      PlacaoNumeroMatricula: '372-19300',
      RespuestaEmbargo     : false
    },
    Notificaciones: {
      '291': {
        AportaNotificacion: '2019-09-28',
        Recibo            : '2019-09-28',
        Resultado         : false
      },
      '292': {
        Resultado: true
      },
      AutoNotificado: '2020-01-29',
      Certimail     : true,
      Fisico        : true,
      Tipo          : 'CERTIMAIL Y CORREO'
    },
    idProceso      : 51816100,
    llaveProceso   : '11001418901420190065600',
    ultimaActuacion: {
      idRegActuacion: 1791264470,
      llaveProceso  : '11001418901420190065600',
      consActuacion : 97,
      fechaActuacion: '2023-06-27T00:00:00',
      actuacion     : 'Fijacion estado',
      anotacion     : 'Actuación registrada el 27/06/2023 a las 20:15:32.',
      fechaInicial  : '2023-06-28T00:00:00',
      fechaFinal    : '2023-06-28T00:00:00',
      fechaRegistro : '2023-06-27T00:00:00',
      codRegla      : '00                              ',
      conDocumentos : false,
      cant          : 97
    }
  },
  {
    _id: new ObjectId(
      '64ac755f1bba70937441daec'
    ),
    Numero : 461,
    Demanda: {
      Departamento: 'CUNDINAMARCA',
      Juzgado     : {
        Origen: {
          id : '14 PCYCM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-014-de-pequenas-causas-y-competencia-multiple-de-bogota'
        }
      },
      Municipio                : 'BOGOTA',
      VencimientoPagare        : '2021-02-16',
      Radicado                 : '2019 - 00656',
      EntregadeGarantiasAbogado: '2018-07-05',
      CapitalAdeudado          : '$ 24.501.535',
      Obligacion               : {
        '1': 'AMERICAN 0377814037749057',
        '2': 'VISA 4513083943843365 // MASTER 5303729958258417'
      },
      Proceso: {
        Tipo: 'SINGULAR'
      },
      Ubicacion: {
        Juzgado: 'JARAMILLO'
      }
    },
    Deudor: {
      Id             : 52883958,
      Email          : 'leidyyaneth.lyv@gmail.com',
      PrimerNombre   : 'Leidy',
      SegundoNombre  : 'Yaneth',
      PrimerApellido : 'Vidal',
      SegundoApellido: 'Rodriguez',
      Direccion      : 'DIAGONAL 2 # 21 B-20'
    },
    EtapaProcesal: {
      Etapa: 'CONTESTACION DEMANDA',
      Fecha: {
        MandamientodePago  : '2019-05-07',
        PresentacionDemanda: '2018-07-12'
      }
    },
    MedidasCautelares: {
      Bienes          : 'PREDIO RURAL',
      MedidaSolicitada: 'EMBARGO DE INMUEBLE',
      FechaOrdena     : '2019-05-14',
      Oficio          : {
        Numero: 937,
        Fecha : '2019-05-14'
      },
      PlacaoNumeroMatricula: '372-19300',
      RespuestaEmbargo     : false
    },
    Notificaciones: {
      '291': {
        AportaNotificacion: '2019-09-28',
        Recibo            : '2019-09-28',
        Resultado         : false
      },
      '292': {
        Resultado: true
      },
      AutoNotificado: '2020-01-29',
      Certimail     : true,
      Fisico        : true,
      Tipo          : 'CERTIMAIL Y CORREO'
    },
    idProceso      : 135801811,
    llaveProceso   : '11001418901420190065600',
    ultimaActuacion: {
      idRegActuacion: 1176372381,
      llaveProceso  : '11001418901420190065600',
      consActuacion : 28516253,
      fechaActuacion: '2022-09-12T00:00:00',
      actuacion     : 'Auto Emplaza',
      anotacion:
        'En cumplimiento a lo ordenado con auto del 5 de septiembre de 2022, se efectúa el emplazamiento de la demandada LEIDY YANETH VIDAL RODRIGUEZ en la forma prevista en el art. 108 del C.. G. del P., en consonancia con el art. 10 de la Ley 2213 de 2022.',
      fechaInicial : '2022-09-13T00:00:00',
      fechaFinal   : '2022-10-03T00:00:00',
      fechaRegistro: '2022-09-12T00:00:00',
      codRegla     : '00                              ',
      conDocumentos: true,
      cant         : 1
    }
  },
  {
    _id: new ObjectId(
      '64ac755f1bba70937441daed'
    ),
    Numero : 489,
    Demanda: {
      Departamento             : 'CUNDINAMARCA',
      Municipio                : 'BOGOTA',
      VencimientoPagare        : '2021-07-05',
      EntregadeGarantiasAbogado: '2018-09-03',
      Radicado                 : '2018 - 00785',
      CapitalAdeudado          : '$ 18.100.699',
      Juzgado                  : {
        Origen: {
          id : '8 PCYCM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-08-de-pequenas-causas-laborales-de-bogota'
        },
        Ejecucion: {
          id : '5 CME',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-05-de-ejecucion-civil-municipal-de-bogota'
        }
      },
      Obligacion: {
        '1': 'AUDIOPRESTAMO',
        '2': '0377816345049476 // 4513070259455355 // 5303720114305077'
      },
      Proceso: {
        Tipo: 'SINGULAR'
      },
      Ubicacion: {
        Juzgado: 'JUZGADOS EJECUCION'
      }
    },
    Deudor: {
      Id             : 51987570,
      Email          : 'sandrabogota2007@yahoo.com',
      PrimerNombre   : 'Sandra',
      SegundoNombre  : 'Patricia',
      PrimerApellido : 'Pacheco',
      SegundoApellido: 'Ramirez',
      Direccion:
        'CALLE 163 B No 50-80  INTERIOR 10 APT 231 CONJUNTO LA ESTANCIA III'
    },
    EtapaProcesal: {
      Etapa: 'EMBARGO DE REMANENTES JUZGADO 27 PROCESO 2019 - 00251',
      Fecha: {
        MandamientodePago  : '2018-10-04',
        PresentacionDemanda: '2018-09-20'
      }
    },
    MedidasCautelares: {
      MedidaSolicitada: 'EMBARGO DE INMUEBLE',
      Bienes          : 'APTO 231',
      FechaOrdena     : '2018-11-20',
      Oficio          : {
        Numero: 2288,
        Fecha : '2018-11-20'
      },
      PlacaoNumeroMatricula: '50N - 20247423',
      RespuestaEmbargo     : false
    },
    Notificaciones: {
      '291': {
        AportaNotificacion: '2018-11-02',
        Recibo            : '2018-11-02',
        Resultado         : true
      },
      '292': {
        Resultado: true
      },
      Certimail: true,
      Fisico   : false,
      Tipo     : 'CORREO'
    },
    idProceso      : 87350810,
    llaveProceso   : '11001418900820180078500',
    ultimaActuacion: {
      idRegActuacion: 1808835460,
      llaveProceso  : '11001418900820180078500',
      consActuacion : 26,
      fechaActuacion: '2023-07-13T00:00:00',
      actuacion     : 'Constancia secretarial',
      anotacion:
        'DESPACHO COMISORIO FIRMADO, PROCESO PASA A BARANDA. ISABEL BOTERO ',
      fechaInicial : null,
      fechaFinal   : null,
      fechaRegistro: '2023-07-13T00:00:00',
      codRegla     : '00                              ',
      conDocumentos: false,
      cant         : 26
    }
  },
  {
    _id: new ObjectId(
      '64ac755f1bba70937441daee'
    ),
    Numero : 494,
    Demanda: {
      CapitalAdeudado          : '$ 27.373.832',
      Departamento             : 'CUNDINAMARCA',
      EntregadeGarantiasAbogado: '2018-09-18',
      Juzgado                  : {
        Origen: {
          id : '3 CM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-003-civil-municipal-de-chia'
        }
      },
      Municipio : 'CHIA',
      Obligacion: {
        '1': 'AUDIOPRESTAMO',
        '2': 5491570347356810
      },
      Proceso: {
        Tipo: 'SINGULAR'
      },
      Radicado : '2018 - 00602',
      Ubicacion: {
        Juzgado: 'CHIA'
      },
      VencimientoPagare: '2021-09-14'
    },
    Deudor: {
      Direccion      : 'CARRERA 6 No 6-59',
      Email          : 'mopadinco@yahoo.com',
      Id             : 13222728,
      PrimerNombre   : 'Modesto',
      PrimerApellido : 'Pineda',
      SegundoApellido: 'Perez'
    },
    EtapaProcesal: {
      Etapa: 'EJECUCIÓN',
      Fecha: {
        MandamientodePago  : '2018-10-12',
        PresentacionDemanda: '2018-10-04'
      }
    },
    MedidasCautelares: {
      Bienes          : 'CASA',
      FechaOrdena     : '2018-10-22',
      MedidaSolicitada: 'EMBARGO DE INMUEBLE',
      Oficio          : {
        Fecha : '2019-02-11',
        Numero: 1939
      },
      PlacaoNumeroMatricula: 'YESID',
      RespuestaEmbargo     : true
    },
    Notificaciones: {
      '291': {
        AportaNotificacion: '2018-12-06',
        Recibo            : '2018-11-26',
        Resultado         : true
      },
      '292': {
        Resultado: true
      },
      Certimail: false,
      Fisico   : true,
      Tipo     : 'CERTIMAIL'
    },
    idProceso   : 0,
    llaveProceso: '25175408900320180060200'
  },
  {
    _id: new ObjectId(
      '64ac755f1bba70937441daef'
    ),
    Numero  : 497,
    Codeudor: {
      Direccion: 'DIAGONAL 77B No 119 A-74 APTO 504 INT6',
      Id       : 51955296,
      Nombre   : 'FLOR ANGELA RODRIGUEZ'
    },
    Demanda: {
      CapitalAdeudado          : '$ 24.807.317',
      Departamento             : 'CUNDINAMARCA',
      EntregadeGarantiasAbogado: '2018-10-08',
      Juzgado                  : {
        Origen: {
          id : '13 PCYCM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-13-de-pequenas-causas-y-competencias-multiples-de-bogota'
        }
      },
      Municipio : 'BOGOTA',
      Obligacion: {
        '1': '20990123680  7/  377813468472239',
        '2': '4513079359765043 // 53037220341399596'
      },
      Proceso: {
        Tipo: 'HIPOTECARIO'
      },
      Radicado : '2019 - 00708',
      Ubicacion: {
        Juzgado: 'HMM PISO 5'
      },
      VencimientoPagare: '2024-11-30'
    },
    Deudor: {
      Direccion      : 'DIAGONAL 77B No 119 A-74 APTO 504 INT6',
      Email          : 'dcentro@pcpplasticos.com',
      Id             : 3208569,
      PrimerNombre   : 'Floresmiro',
      PrimerApellido : 'Aponte',
      SegundoApellido: 'Acosta'
    },
    EtapaProcesal: {
      Etapa: 'EJECUCIÓN',
      Fecha: {
        MandamientodePago  : '2019-07-31',
        PresentacionDemanda: '2018-10-12'
      }
    },
    MedidasCautelares: {
      Bienes          : 'APTO 504',
      FechaOrdena     : '2020-02-13',
      MedidaSolicitada: 'EMBARGO DE INMUEBLE',
      Oficio          : {
        Fecha : '2020-02-13',
        Numero: 422
      },
      RespuestaEmbargo: false
    },
    Notificaciones: {
      '291': {
        AportaNotificacion: '2020-02-18',
        Recibo            : '2020-02-18'
      },
      '292': {
        Resultado: true
      },
      Certimail: true,
      Fisico   : false,
      Tipo     : 'CORREO'
    },
    idProceso   : 0,
    llaveProceso: '11001418901320190070800'
  },
  {
    _id: new ObjectId(
      '64ac755f1bba70937441daf0'
    ),
    Numero : 506,
    Demanda: {
      CapitalAdeudado          : '$ 29.416.113',
      Departamento             : 'CUNDINAMARCA',
      EntregadeGarantiasAbogado: '2018-11-26',
      Juzgado                  : {
        Origen: {
          id : '001 PM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-01-promiscuo-municipal-de-la-calera'
        }
      },
      Municipio: 'LA CALERA',
      Proceso  : {
        Tipo: 'SINGULAR'
      },
      Radicado : '2018 - 00371',
      Ubicacion: {
        Juzgado: 'LA CALERA'
      },
      VencimientoPagare: '2026-03-01'
    },
    Deudor: {
      Direccion      : 'CALLE 2 A # 5-22 APTO 503',
      Email          : 'joalvato09@hotmail.com',
      Id             : 11230400,
      PrimerNombre   : 'Jose',
      SegundoNombre  : 'Alfonso',
      PrimerApellido : 'Vasquez',
      SegundoApellido: 'Tovar'
    },
    EtapaProcesal: {
      Etapa: 'EJECUCIÓN',
      Fecha: {
        MandamientodePago  : '2019-01-17',
        PresentacionDemanda: '2018-12-07'
      }
    },
    MedidasCautelares: {
      Bienes               : 'APTO 503',
      FechaOrdena          : '2019-01-28',
      MedidaSolicitada     : 'EMBARGO INMUEBLES',
      PlacaoNumeroMatricula: '50N - 20288831',
      RespuestaEmbargo     : false
    },
    Notificaciones: {
      '291': {
        AportaNotificacion: '2019-04-24',
        Recibo            : '2019-04-24',
        Resultado         : true
      },
      '292': {
        Resultado: true
      },
      Certimail: false,
      Fisico   : true,
      Tipo     : 'CORREO'
    },
    idProceso   : 0,
    llaveProceso: '25377408900120180037100'
  },
  {
    _id: new ObjectId(
      '64ac755f1bba70937441daf1'
    ),
    Numero  : 529,
    Codeudor: {
      Direccion: 'KR 81 No. 127 - 46 Torre 1 Apt 401',
      Id       : 19299851,
      Nombre   : 'MARCO TULIO SANCHEZ MEDINA'
    },
    Demanda: {
      CapitalAdeudado          : '$ 35.608.653',
      Departamento             : 'CUNDINAMARCA',
      EntregadeGarantiasAbogado: '2020-10-07',
      Municipio                : 'BOGOTA',
      Juzgado                  : {
        Origen: {
          id : '42 CM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-42-civil-municipal-de-bogota'
        }
      },
      Obligacion: {
        '1': 2020084294,
        '2': '2020087484 // 4594250317705437 //5303723260933890'
      },
      Proceso: {
        Tipo: 'SINGULAR'
      },
      Radicado : '2020 - 00535',
      Ubicacion: {
        Juzgado: 'HMM PISO 13'
      }
    },
    Deudor: {
      Direccion      : 'KR 81 No. 127 A - 46 CONJUNTO MONTE AZUL BOGOTA',
      Email          : 'yadelcis@hotmail.com',
      Id             : 51813018,
      PrimerNombre   : 'Sandra',
      SegundoNombre  : 'Leonor',
      PrimerApellido : 'Paez',
      SegundoApellido: 'Murcia',
      Tel            : {
        Celular: 3134386087,
        Fijo   : 6139147
      }
    },
    EtapaProcesal: {
      Etapa: 'EJECUCION',
      Fecha: {
        PresentacionDemanda: '2020-10-07'
      }
    },
    Notificaciones: {
      '291': {
        Recibo   : '2021-06-22',
        Resultado: true
      },
      Certimail: true,
      Fisico   : true
    },
    idProceso      : 128164881,
    llaveProceso   : '11001400304220200053500',
    ultimaActuacion: {
      idRegActuacion: 1231752641,
      llaveProceso  : '11001400304220200053500',
      consActuacion : 40,
      fechaActuacion: '2023-03-13T00:00:00',
      actuacion     : 'Fijacion estado',
      anotacion     : 'Actuación registrada el 13/03/2023 a las 08:19:44.',
      fechaInicial  : '2023-03-14T00:00:00',
      fechaFinal    : '2023-03-14T00:00:00',
      fechaRegistro : '2023-03-13T00:00:00',
      codRegla      : '00                              ',
      conDocumentos : false,
      cant          : 40
    }
  },
  {
    _id: new ObjectId(
      '64ac755f1bba70937441daf2'
    ),
    Numero : 530,
    Demanda: {
      CapitalAdeudado          : '$ 15.324.570',
      Departamento             : 'CUNDINAMARCA',
      EntregadeGarantiasAbogado: '2020-09-05',
      Juzgado                  : {
        Origen: {
          id : '68 CM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-068-civil-municipal-de-bogota'
        }
      },
      Municipio : 'BOGOTA',
      Obligacion: {
        '1': 65886140334,
        '2': 4594260446916180
      },
      Proceso: {
        Tipo: 'SINGULAR'
      },
      Radicado : '2020-1021',
      Ubicacion: {
        Juzgado: 'HMM PISO 15'
      }
    },
    Deudor: {
      Direccion      : 'AV BOYACA 63D - 26 OFICINA 103',
      Id             : 900520023,
      PrimerNombre   : 'Dimoin',
      PrimerApellido : 'Colombia',
      SegundoApellido: 'S.A.S'
    },
    EtapaProcesal: {
      Etapa: 'NOTIFICACION'
    },
    idProceso      : 112628300,
    llaveProceso   : '11001400306820200102100',
    ultimaActuacion: {
      idRegActuacion: 1791918410,
      llaveProceso  : '11001400306820200102100',
      consActuacion : 28,
      fechaActuacion: '2023-06-29T00:00:00',
      actuacion     : 'Al despacho',
      anotacion     : 'con escrito de contestación de demanda y excepciones previas',
      fechaInicial  : null,
      fechaFinal    : null,
      fechaRegistro : '2023-06-29T00:00:00',
      codRegla      : '00                              ',
      conDocumentos : false,
      cant          : 28
    }
  },
  {
    _id: new ObjectId(
      '64ac755f1bba70937441daf3'
    ),
    Numero : 366,
    Demanda: {
      CapitalAdeudado: '$ 56.987.693',
      Departamento   : 'CUNDINAMARCA',
      Juzgado        : {
        Origen: {
          id : '4 PCYCM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-04-municipal-de-pequenas-causas-y-competencia-multiple-de-soacha'
        }
      },
      EntregadeGarantiasAbogado: '2017-11-14',
      Municipio                : 'SOACHA',
      Obligacion               : {
        '1': 1680097436,
        '2': 148653
      },
      Proceso: {
        Tipo: 'HIPOTECARIO'
      },
      Radicado : '2018 - 00060',
      Ubicacion: {
        Juzgado: 'SOACHA'
      },
      VencimientoPagare: '2021-11-15'
    },
    Deudor: {
      Direccion      : 'DIAGONAL 28 No 33-27  TORRE 7 APART 203  SOACHA',
      Email          : 'jairopardo8-11-70@hotmail.com',
      Id             : 79522009,
      PrimerNombre   : 'Jairo',
      SegundoNombre  : 'Alfonso',
      PrimerApellido : 'Pardo',
      SegundoApellido: 'jaimes'
    },
    EtapaProcesal: {
      Etapa: 'EJECUCION'
    },
    idProceso      : 404,
    llaveProceso   : '2575440030042018000600',
    ultimaActuacion: {
      actuacion: 'Envío de expediente',
      anotacion:
        'Fecha Salida:11/07/2014,Oficio:1954 Enviado a: - 000 - Laboral - Tribunal Superior - POPAYAN (CAUCA)',
      cant          : 8,
      codRegla      : '00                              ',
      conDocumentos : false,
      consActuacion : 8,
      fechaActuacion: '2014-07-11T00:00:00',
      fechaFinal    : null,
      fechaInicial  : null,
      fechaRegistro : '2014-07-11T00:00:00',
      idRegActuacion: 2674,
      llaveProceso  : '19001220500020000052601'
    }
  },
  {
    _id: new ObjectId(
      '64ac755f1bba70937441daf4'
    ),
    Numero : 500,
    Demanda: {
      Departamento: 'CUNDINAMARCA',
      Municipio   : 'FUSAGASUGA',
      Juzgado     : {
        Origen: {
          id : '3 CM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-003-civil-municipal-de-fusagasuga'
        }
      },
      Proceso: {
        Tipo: 'SINGULAR'
      },
      Radicado : '2023 - 763',
      Ubicacion: {
        Juzgado: 'CIVIL MUNICIPAL'
      }
    },
    Deudor: {
      PrimerNombre   : 'Pedro',
      SegundoNombre  : 'Jonathan',
      PrimerApellido : 'Ramirez',
      SegundoApellido: 'Gomez'
    },
    idProceso      : 404,
    llaveProceso   : '00000000000000000000000',
    ultimaActuacion: {
      actuacion: 'Envío de expediente',
      anotacion:
        'Fecha Salida:11/07/2014,Oficio:1954 Enviado a: - 000 - Laboral - Tribunal Superior - POPAYAN (CAUCA)',
      cant          : 8,
      codRegla      : '00                              ',
      conDocumentos : false,
      consActuacion : 8,
      fechaActuacion: '2014-07-11T00:00:00',
      fechaFinal    : null,
      fechaInicial  : null,
      fechaRegistro : '2014-07-11T00:00:00',
      idRegActuacion: 2674,
      llaveProceso  : '19001220500020000052601'
    }
  }
];



let map = demandados.map(
  (
    demandado
  ) => {
    return new Carpeta(
      demandado
    );
  }
);



map.forEach(
  (
    crp
  ) => {
    console.log(
      crp.Nombre()
    );
    console.log(
      crp.despacho()
    );
  }
);
 */
