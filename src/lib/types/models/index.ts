import fs from 'fs/promises';
import { Mess, Liquidacion } from './Mess';
import { ClassDemanda, pruebaDemanda } from './demanda';

const mess: Mess[] = [
  {
    _id   : '64ac755f1bba70937441dadf',
    numero: 116,
    deudor: {
      direccion     : 'CARRERA 3 # 29A - 02',
      cedula        : 900212673,
      primerNombre  : 'Jencell',
      primerApellido: 'E.U.'
    },
    codeudor: {
      direccion:
        'CARRERA 3 # 29A - 02 LOCAL 1057',
      cedula: 52771090,
      Nombre: 'YENY ESPERANZA ARIAS MENDIETA'
    },
    demanda: {
      capitalAdeudado   : 13906249,
      departamento      : 'CUNDINAMARCA',
      entregadeGarantias: '2017-08-04',
      municipio         : 'SOACHA',
      juzgado           : {
        origen: {
          id : '003 PCYCM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-03-municipal-de-pequenas-causas-y-competencia-multiple-de-soacha'
        }
      },
      tipoProceso      : 'SINGULAR',
      radicado         : '2017 - 00755',
      ubicacion        : 'SOACHA',
      vencimientoPagare: '2021-04-12'
    },
    etapaProcesal: {
      etapa : 'EJECUCIÓN',
      fechas: {
        mandamientodePago  : '2017-09-08',
        presentacionDemanda: '2017-08-11'
      }
    },
    liquidacion: {
      fechas: {
        aprobacion  : '2018-08-01',
        presentacion: '2018-06-20',
        Sentencia   : '2018-02-09'
      },
      capitalAdeudado: 500314967
    },
    medidasCautelares: {
      bien: 'BANCOS',
      descripcionMedida:
        'SOLICITA EMBARGO DE INMUEBLE PROPIEDAD DE REPRESENTANTE LEGAL Y CODEUDORA',
      ordena     : '2017-09-08',
      radicaccion: '2018-06',
      medidaSolicitada:
        'EMBARGO INMUEBLE DE LA CODEUDORA',
      oficio: {
        fechas: '2017-09-15',
        numero: 1181
      },
      oficios: {
        retiro: '2018-09-15'
      },
      placaoNumeroMatricula: '051-130616'
    },
    notificaciones: {
      '291': {
        aporta   : '2017-12-12',
        recibo   : '2017-12-12',
        resultado: true
      },
      '292': {
        aporta   : '2017-12-12',
        resultado: true
      },
      autoNotificado: '2018-02-09',
      certimail     : true,
      fisico        : false,
      tipo          : 'CERTIMAIL'
    },
    idProceso   : 0,
    llaveProceso: '25754418900320170075500'
  },
  {
    _id      : '64ac755f1bba70937441dae1',
    numero   : 178,
    idProceso: [
      50621670
    ],
    llaveProceso: '11001400300120170100100',
    demanda     : {
      fechas: [
        {
          entregaGarantias: '2017-08-01'
        },
        {
          vencimientoPagare: '2019-11-03'
        }
      ],
      capitalAdeudado: 25833335,
      departamento   : 'CUNDINAMARCA',
      juzgado        : {
        ejecucion: {
          id : '17 CME',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-17-de-ejecucion-civil-municipal-de-bogota'
        },
        origen: {
          id : '1 CM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-01-civil-municipal-de-bogota'
        }
      },
      municipio  : 'BOGOTA',
      tipoProceso: 'SINGULAR',
      radicado   : '2017 - 01001',
      ubicacion  : 'JUZGADOS EJECUCION'
    },
    deudor: {
      direccion      : 'CARRERA 81C # 2B - 80 PISO 2',
      email          : 'grupocomerciallasabana@hotmail.com',
      cedula         : 11185630,
      primerNombre   : 'Wilson',
      segundoNombre  : 'Alfonso',
      primerApellido : 'Jimenez',
      segundoApellido: 'Mendieta'
    },
    etapaProcesal: {
      etapa : 'EJECUCIÓN',
      fechas: {
        mandamientodePago  : '2017-09-05',
        presentacionDemanda: '2017-08-08'
      }
    },
    liquidacion: {
      fechas: {
        aprobacion  : '2018-07-13',
        presentacion: '2018-06-29',
        solicitud   : '2018-06-22'
      }
    },
    medidasCautelares: {
      bien: 'BANCOS',
      descripcionMedida:
        'PEDIR EMBARGO Y SECUESTRO VEHICULO PROPIEDAD DEL DEUDOR',
      ordena: '2017-09-05',
      medidaSolicitada:
        'EMBARGO DE DINEROS EN BANCOS',
      oficio: {
        fechas: '2017-09-06',
        numero: 2849
      },
      placaoNumeroMatricula: 'SLJ234',
      respuestaEmbargo     : false
    },
    notificaciones: {
      '291': {
        aporta   : '2018-06-06',
        recibo   : '2018-02-06',
        resultado: true
      },
      '292': {
        aporta   : '2018-06-06',
        resultado: true
      },
      autoNotificado: '2018-06-22',
      certimail     : true,
      fisico        : false,
      tipo          : 'CORREO'
    },
    ultimaActuacion: {
      idRegActuacion: 1813276130,
      llaveProceso  : '11001400300120170100100',
      consActuacion : 116,
      fechaActuacion: '2023-07-17T00:00:00',
      actuacion     : 'Constancia secretarial',
      anotacion:
        'SE HACE ENVIO DE OFICIO OOECM-0723WGG-1619     // JOSE ROJAS SE DIRECCIONA A LETRA',

      fechaRegistro: '2023-07-17T00:00:00',
      codRegla:
        '00                              ',
      conDocumentos: false,
      cant         : 115
    },
    procesos: [
      {
        idProceso   : 50621670,
        idConexion  : 259,
        llaveProceso: '11001400300120170100100',
        fechaProceso: '2017-08-09T00:00:00',
        fechaUltimaActuacion:
          '2023-07-17T00:00:00',
        despacho:
          'JUZGADO 017 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ',
        departamento: 'BOGOTÁ',
        sujetosProcesales:
          'Demandante: BANCOLOMBIA S.A. | Demandado: WILSON ALFONSO JIMENEZ MENDIETA ',
        esPrivado: false,
        cantFilas: -1
      }
    ]
  },
  {
    _id    : '64ac755f1bba70937441dae2',
    numero : 231,
    demanda: {
      capitalAdeudado   : '$ 27.603.821',
      departamento      : 'CUNDINAMARCA',
      entregadeGarantias: '2017-09-06',
      juzgado           : {
        ejecucion: {
          id : '6 CME',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-06-de-ejecucion-civil-municipal-de-bogota'
        },
        origen: {
          id : '8 CM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-008-civil-municipal-de-bogota'
        }
      },
      municipio: 'BOGOTA',
      Proceso  : {
        tipo: 'HIPOTECARIO'
      },
      radicado : '2017 - 01134',
      ubicacion: {
        juzgado: 'JUZGADOS EJECUCION'
      },
      vencimientoPagare: '2017-02-14'
    },
    deudor: {
      direccion:
        'DIAGONAL 56 BIS 84 A 10 SUR TR 1',
      email          : 'fanor.diaz@gmail.com',
      cedula         : 79853115,
      primerNombre   : 'Fanor',
      primerApellido : 'Diaz',
      segundoApellido: 'Agudelo',
      tel            : {
        celular: 3212406193,
        fijo   : 8060271
      }
    },
    etapaProcesal: {
      etapa : 'EJECUCIÓN',
      fechas: {
        mandamientodePago  : '2017-09-21',
        presentacionDemanda: '2017-09-18'
      }
    },
    liquidacion: {
      fechas: {
        presentacion: '2019-01-11',
        Sentencia   : '2018-07-16',
        solicitud   : '2018-07-24'
      }
    },
    medidasCautelares: {
      bien: 'INMUEBLE',
      descripcionMedida:
        'APARTAMENTO 502 INT. 17 CONJUNTO RESIDNCIAL ALONDRA  P.H.  DIAGONAL 56 BIS SUR N° 84 A -20',
      ordena          : '2017-09-21',
      radicaccion     : '2018-05-15',
      medidaSolicitada: 'EMBARGO DE INMUEBLE',
      oficio          : {
        fechas: '2017-10-04',
        numero: 2746
      },
      oficios: {
        retiro: '2017-10-04'
      },
      placaoNumeroMatricula: '50S-40590187',
      respuestaEmbargo     : true
    },
    notificaciones: {
      '291': {
        aporta   : '2018-02-06',
        recibo   : '2018-02-06',
        resultado: true
      },
      '292': {
        aporta   : '2018-02-06',
        resultado: true
      },
      autoNotificado: '2018-05-07',
      certimail     : true,
      fisico        : false,
      tipo          : 'CERTIMAIL'
    },
    idProceso      : 50716620,
    llaveProceso   : '11001400300820170113400',
    ultimaActuacion: {
      idRegActuacion: 1804892750,
      llaveProceso  : '11001400300820170113400',
      consActuacion : 81,
      fechaActuacion: '2023-07-10T00:00:00',
      actuacion     : 'Constancia secretarial',
      anotacion:
        'PROCESO FIRMADO PASA A BARANDA DIGITAL,MZ',

      fechaRegistro: '2023-07-10T00:00:00',
      codRegla:
        '00                              ',
      conDocumentos: false,
      cant         : 81
    },
    procesos: [
      {
        idProceso   : 50716620,
        idConexion  : 259,
        llaveProceso: '11001400300820170113400',
        fechaProceso: '2017-09-19T00:00:00',
        fechaUltimaActuacion:
          '2023-07-10T00:00:00',
        despacho:
          'JUZGADO 006 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ',
        departamento: 'BOGOTÁ',
        sujetosProcesales:
          'Demandante: BANCOLOMBIA S.A. | Demandado: FANOR DIAZ AGUDELO ',
        esPrivado: false,
        cantFilas: -1
      }
    ]
  },
  {
    _id   : '64ac755f1bba70937441dae7',
    avaluo: {
      valor: 'VALIDAR COMO IRRECUPERABLE'
    },
    numero : 306,
    demanda: {
      departamento      : 'CUNDINAMARCA',
      municipio         : 'BOGOTA',
      vencimientoPagare : '2020-03-23',
      entregadeGarantias: '2017-10-04',
      radicado          : '2017 - 01532',
      capitalAdeudado   : '$ 40.406.421',
      juzgado           : {
        ejecucion: {
          id : '15 CME',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-15-de-ejecucion-civil-municipal-de-bogota'
        },
        origen: {
          id : '21 CM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-021-civil-municipal-de-bogota'
        }
      },
      obligacion: {
        '1': '1740086734 4513073749673967',
        '2': 5303719549810730
      },
      Proceso: {
        tipo: 'SINGULAR'
      },
      ubicacion: {
        juzgado: 'JUZGADOS EJECUCION'
      }
    },
    deudor: {
      cedula         : 79388145,
      primerNombre   : 'Libardo',
      segundoNombre  : 'Alfonso',
      primerApellido : 'Gonzalez',
      segundoApellido: 'Triviño',
      email          : 'li_bcar@hotmail.com',
      direccion      : 'CARRERA 72 A- No 9 - 44'
    },
    etapaProcesal: {
      etapa : 'EJECUCIÓN',
      fechas: {
        mandamientodePago  : '2017-11-30',
        presentacionDemanda: '2017-10-10'
      }
    },
    medidasCautelares: {
      placaoNumeroMatricula: 'WLQ-216',
      bien                 : 'VEHICULO',
      medidaSolicitada     : 'EMBARGO DE VEHICULO',
      descripcionMedida:
        'CAMIONETA PUBLICO// ENVIO DERECHO DE PETICION PARA REGISTRAR LA MEDIDA',
      ordena     : '2017-11-30',
      radicaccion: '2017-11-30',
      oficio     : {
        numero: 4273,
        fechas: '2017-11-08'
      },
      oficios: {
        retiro: '2017-11-30'
      },
      respuestaEmbargo: false
    },
    notificaciones: {
      '291': {
        aporta   : '2018-07-06',
        recibo   : '2018-04-25',
        resultado: true
      },
      '292': {
        aporta   : '2019-05-27',
        recibo   : '2019-05-27',
        resultado: true
      },
      autoNotificado: '2019-06-17',
      certimail     : false,
      fisico        : true,
      tipo          : 'CORREO'
    },
    idProceso   : 81620291,
    llaveProceso: '11001400302120170153200',
    procesos    : [
      {
        idProceso   : 50769660,
        idConexion  : 259,
        llaveProceso: '11001400302120170153200',
        fechaProceso: '2017-10-11T00:00:00',
        fechaUltimaActuacion:
          '2023-05-15T00:00:00',
        despacho:
          'JUZGADO 015 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ',
        departamento: 'BOGOTÁ',
        sujetosProcesales:
          'Demandante: BANCOLOMBIA S.A. | Demandado: LIBARDO ALFONSO GONZALEZ TRIVIÑO ',
        esPrivado: false,
        cantFilas: -1
      },
      {
        idProceso   : 81620291,
        idConexion  : 320,
        llaveProceso: '11001400302120170153200',

        despacho:
          'JUZGADO 021 CIVIL MUNICIPAL DE BOGOTÁ ',
        departamento: 'BOGOTÁ',
        sujetosProcesales:
          '--- [ PROCESO PRIVADO ] ---',
        esPrivado: true,
        cantFilas: -1
      }
    ]
  },
  {
    _id    : '64ac755f1bba70937441dae9',
    numero : 401,
    demanda: {
      capitalAdeudado   : '$ 22.592.583',
      departamento      : 'CUNDINAMARCA',
      entregadeGarantias: '2018-02-15',
      juzgado           : {
        ejecucion: {
          id : '13 CME',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-13-de-ejecucion-civil-municipal-de-bogota'
        },
        origen: {
          id : '21 CM',
          url: 'https: //www.ramajudicial.gov.co/web/juzgado-021-civil-municipal-de-bogota'
        }
      },
      municipio: 'BOGOTA',
      Proceso  : {
        tipo: 'HIPOTECARIO'
      },
      radicado : '2018 - 00236',
      ubicacion: {
        juzgado: 'JUZGADOS EJECUCION'
      },
      vencimientoPagare: '2021-01-27'
    },
    deudor: {
      direccion      : 'CALLE 12 A No 71 B - 60',
      email          : 'arthurlingo64@hotmail.com',
      cedula         : 79396995,
      primerNombre   : 'Arturo',
      primerApellido : 'Lince',
      segundoApellido: 'Gomez',
      tel            : {
        celular: 31088445603,
        fijo   : 4244358
      }
    },
    etapaProcesal: {
      etapa : 'EJECUCIÓN',
      fechas: {
        mandamientodePago  : '2018-03-02',
        presentacionDemanda: '2018-02-22'
      }
    },
    liquidacion: {
      costas: {
        aprobacion: '2018-07-11',
        valor     : 20
      },
      fechas: {
        aprobacion  : '2018-08-27',
        presentacion: '2018-08-02',
        Sentencia   : '2018-09-25'
      }
    },
    medidasCautelares: {
      bien  : 'CASA 176',
      fechas: {
        decreto: '2018-08-27'
      },
      ordena          : '2018-03-01',
      radicaccion     : '2018-06-28',
      medidaSolicitada: 'EMBARGO DE INMUEBLE',
      oficio          : {
        fechas: '2018-03-09',
        numero: 832
      },
      oficios: {
        retiro: '2018-03-09'
      },
      placaoNumeroMatricula: '50C-1645938',
      respuestaEmbargo     : true
    },
    notificaciones: {
      '291': {
        aporta   : '2018-04-10',
        recibo   : '2018-04-08',
        resultado: true
      },
      '292': {
        resultado: true
      },
      autoNotificado: '2018-04-19',
      certimail     : true,
      fisico        : false,
      tipo          : 'PERSONAL'
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

      fechaRegistro: '2023-06-15T00:00:00',
      codRegla:
        '00                              ',
      conDocumentos: false,
      cant         : 52
    },
    procesos: [
      {
        idProceso   : 51029180,
        idConexion  : 259,
        llaveProceso: '11001400302120180023600',
        fechaProceso: '2018-02-23T00:00:00',
        fechaUltimaActuacion:
          '2023-06-15T00:00:00',
        despacho:
          'JUZGADO 013 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ',
        departamento: 'BOGOTÁ',
        sujetosProcesales:
          'Demandante: BANCOLOMBIA S.A. | Demandado: ARTURO LINCE GOMEZ ',
        esPrivado: false,
        cantFilas: -1
      }
    ]
  },
  {
    _id     : '64ac755f1bba70937441daea',
    numero  : 405,
    codeudor: {
      direccion:
        'CALLE 56 # 17 - 03 CASA 65 NEIVA',
      cedula: 12192291,
      Nombre: 'ANDRES ENRIQUE IBARRA ACOSTA'
    },
    demanda: {
      capitalAdeudado   : '$ 11.949.471',
      departamento      : 'CUNDINAMARCA',
      entregadeGarantias: '2018-02-15',
      juzgado           : {
        ejecucion: {
          id : '7 CME',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-07-de-ejecucion-civil-municipal-de-bogota'
        },
        origen: {
          id : '56 CM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-056-civil-municipal-de-bogota'
        }
      },
      municipio: 'BOGOTA',
      Proceso  : {
        tipo: 'SINGULAR'
      },
      radicado : '2018 - 00221',
      ubicacion: {
        juzgado: 'JUZGADOS EJECUCION'
      },
      vencimientoPagare: '2018-06-20'
    },
    deudor: {
      direccion:
        'CARRERA 50 1# 47 - 50 INT 1 APTO 101',
      email          : 'andibarracosta@gmail.com',
      cedula         : 900545720,
      primerNombre   : 'Creas',
      primerApellido : 'Soluciones',
      segundoApellido: 'S.A.S',
      tel            : {
        celular: 3107982028,
        fijo   : 8626344
      }
    },
    etapaProcesal: {
      etapa : 'EJECUCIÓN',
      fechas: {
        mandamientodePago  : '2018-03-22',
        presentacionDemanda: '2018-02-28'
      }
    },
    liquidacion: {
      fechas: {
        Sentencia: '2018-06-07'
      }
    },
    medidasCautelares: {
      bien  : 'BANCOS',
      ordena: '2018-03-22',
      medidaSolicitada:
        'EMBARGO DE DINEROS EN BANCOS',
      oficio: {
        fechas: '2018-04-02',
        numero: 747
      },
      respuestaEmbargo: false
    },
    notificaciones: {
      '291': {
        aporta   : '2018-05-18',
        recibo   : '2018-05-18',
        resultado: true
      },
      '292': {
        aporta   : '2018-05-18',
        resultado: true
      },
      autoNotificado: '2018-05-18',
      certimail     : true,
      fisico        : false,
      tipo          : 'CERTIMAIL'
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

      fechaRegistro: '2023-06-08T00:00:00',
      codRegla:
        '00                              ',
      conDocumentos: false,
      cant         : 65
    },
    procesos: [
      {
        idProceso   : 51042800,
        idConexion  : 259,
        llaveProceso: '11001400305620180022100',
        fechaProceso: '2018-03-01T00:00:00',
        fechaUltimaActuacion:
          '2023-06-08T00:00:00',
        despacho:
          'JUZGADO 007 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ',
        departamento: 'BOGOTÁ',
        sujetosProcesales:
          'Demandante: BANCOLOMBIA S.A. | Demandado: CREAS CONSULTORES S.A.S. ',
        esPrivado: false,
        cantFilas: -1
      }
    ]
  },
  {
    _id    : '64ac755f1bba70937441daf4',
    numero : 500,
    demanda: {
      departamento: 'CUNDINAMARCA',
      municipio   : 'FUSAGASUGA',
      juzgado     : {
        origen: {
          id : '3 CM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-003-civil-municipal-de-fusagasuga'
        }
      },
      Proceso: {
        tipo: 'SINGULAR'
      },
      radicado : '2023 - 763',
      ubicacion: {
        juzgado: 'CIVIL MUNICIPAL'
      }
    },
    deudor: {
      primerNombre   : 'Pedro',
      segundoNombre  : 'Jonathan',
      primerApellido : 'Ramirez',
      segundoApellido: 'Gomez'
    },
    idProceso      : 404,
    llaveProceso   : '00000000000000000000000',
    ultimaActuacion: {
      actuacion: 'Envío de llaveProceso',
      anotacion:
        'Fecha Salida:11/07/2014,Oficio:1954 Enviado a: - 000 - Laboral - Tribunal Superior - POPAYAN (CAUCA)',
      cant: 8,
      codRegla:
        '00                              ',
      conDocumentos : false,
      consActuacion : 8,
      fechaActuacion: '2014-07-11T00:00:00',

      fechaRegistro : '2014-07-11T00:00:00',
      idRegActuacion: 2674,
      llaveProceso  : '19001220500020000052601'
    }
  },
  {
    _id     : '64ac755f1bba70937441dadc',
    numero  : 86,
    codeudor: {
      cedula: 1015435620,
      Nombre: 'JESICA PAOLA GUZMAN OSPINA'
    },
    demanda: {
      capitalAdeudado   : '$ 26.515.333',
      departamento      : 'CUNDINAMARCA',
      entregadeGarantias: '1899-12-30',
      juzgado           : {
        ejecucion: {
          id : '12 CME',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-12-de-ejecucion-civil-municipal-de-bogota'
        },
        origen: {
          id : '34 CM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-34-civil-municipal-de-bogota'
        }
      },
      municipio: 'BOGOTA',
      Proceso  : {
        tipo: 'PRENDARIO'
      },
      radicado : '2017 - 00836',
      ubicacion: {
        juzgado: 'JUZGADOS EJECUCION'
      },
      vencimientoPagare: '2020-06-09'
    },
    deudor: {
      direccion      : 'CARRERA 95 # 138 - 58',
      email          : 'orduzcrit2@hotmail.com',
      cedula         : 1032432802,
      primerNombre   : 'Luis',
      segundoNombre  : 'Esneider',
      primerApellido : 'Orduz',
      segundoApellido: 'Farfan'
    },
    etapaProcesal: {
      etapa : 'EJECUCION',
      fechas: {
        mandamientodePago  : '2017-07-10',
        presentacionDemanda: '2017-06-20'
      }
    },
    medidasCautelares: {
      bien             : 'VEHICULO',
      descripcionMedida: 'VEHICULO',
      fechas           : {
        SolicitudCapturaoSecuestro: '2019-04-11'
      },
      ordena          : '2017-07-10',
      radicaccion     : '2018-08-24',
      medidaSolicitada: 'VEHICULO',
      oficio          : {
        fechas: '2017-07-17',
        numero: 1355
      },
      oficios: {
        retiro: '2017-08-24'
      },
      placaoNumeroMatricula: 'UBK-333',
      respuestaEmbargo     : true
    },
    notificaciones: {
      '291': {
        aporta   : '2018-07-18',
        recibo   : '2018-12-02',
        resultado: true
      },
      '292': {
        aporta   : '2018-07-18',
        resultado: true
      },
      autoNotificado: '2019-01-25',
      certimail     : false,
      fisico        : true,
      tipo          : 'EMPLAZAMIENTO'
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

      fechaRegistro: '2023-04-27T00:00:00',
      codRegla:
        '00                              ',
      conDocumentos: false,
      cant         : 94
    },
    procesos: [
      {
        idProceso   : 50521480,
        idConexion  : 259,
        llaveProceso: '11001400303420170083600',
        fechaProceso: '2017-06-21T00:00:00',
        fechaUltimaActuacion:
          '2023-04-27T00:00:00',
        despacho:
          'JUZGADO 012 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ',
        departamento: 'BOGOTÁ',
        sujetosProcesales:
          'Demandante: BANCOLOMBIA S.A. | Demandado: LUIS ESNEIDER ORDUZ FARFAN ',
        esPrivado: false,
        cantFilas: -1
      },
      {
        idProceso   : 81728891,
        idConexion  : 320,
        llaveProceso: '11001400303420170083600',
        fechaProceso: '2017-09-14T00:00:00',

        despacho:
          'JUZGADO 034 CIVIL MUNICIPAL DE BOGOTÁ ',
        departamento: 'BOGOTÁ',
        sujetosProcesales:
          'Demandante/accionante: Banco Bancolombia SA | Demandado/indiciado/causante: LUIS ESNEIDER ORDUZ FARFAN | Defensor Privado: MARIA HELENA SUAREZ GARCIA | Tercero Vinculado: ACREEEDORES    (Emplazado) ',
        esPrivado: false,
        cantFilas: -1
      }
    ]
  },
  {
    _id     : '64ac755f1bba70937441dadd',
    numero  : 86,
    codeudor: {
      cedula: 1015435620,
      Nombre: 'JESICA PAOLA GUZMAN OSPINA'
    },
    demanda: {
      departamento      : 'CUNDINAMARCA',
      municipio         : 'BOGOTA',
      vencimientoPagare : '2020-06-09',
      radicado          : '2017 - 00836',
      entregadeGarantias: '1899-12-30',
      capitalAdeudado   : 26515333,
      juzgado           : {
        origen: {
          id : '34 CM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-34-civil-municipal-de-bogota'
        },
        ejecucion: {
          id : '12 CME',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-12-de-ejecucion-civil-municipal-de-bogota'
        }
      },
      Proceso: {
        tipo: 'PRENDARIO'
      },
      ubicacion: {
        juzgado: 'JUZGADOS EJECUCION'
      }
    },
    deudor: {
      cedula         : 1032432802,
      email          : 'orduzcrit2@hotmail.com',
      primerNombre   : 'Luis',
      segundoNombre  : 'Esneider',
      primerApellido : 'Orduz',
      segundoApellido: 'Farfan',
      direccion      : 'CARRERA 95 # 138 - 58'
    },
    etapaProcesal: {
      etapa : 'EJECUCION',
      fechas: {
        mandamientodePago  : '2017-07-10',
        presentacionDemanda: '2017-06-20'
      }
    },
    medidasCautelares: {
      bien  : 'VEHICULO',
      fechas: {
        SolicitudCapturaoSecuestro: '2019-04-11'
      },
      medidaSolicitada     : 'VEHICULO',
      descripcionMedida    : 'VEHICULO',
      placaoNumeroMatricula: 'UBK-333',
      radicaccion          : '2018-08-24',
      ordena               : '2017-07-10',
      oficio               : {
        numero: 1355,
        fechas: '2017-07-17'
      },
      oficios: {
        retiro: '2017-08-24'
      },
      respuestaEmbargo: true
    },
    notificaciones: {
      '291': {
        recibo   : '2018-12-02',
        aporta   : '2018-07-18',
        resultado: true
      },
      '292': {
        aporta   : '2018-07-18',
        resultado: true
      },
      autoNotificado: '2019-01-25',
      certimail     : false,
      fisico        : true,
      tipo          : 'EMPLAZAMIENTO'
    },
    idProceso   : 81728891,
    llaveProceso: '11001400303420170083600'
  },
  {
    _id   : '64ac755f1bba70937441dade',
    avaluo: {
      valor:
        'SE ENVIA SOLICITUD OFICIO PARA ENVIAR POR EL JUZGADO A SALUD TOTAL EPS // PROCESO IRRECUPERABLE'
    },
    numero : 98,
    demanda: {
      capitalAdeudado   : '$ 50.000.000',
      departamento      : 'CUNDINAMARCA',
      entregadeGarantias: '2017-06-12',
      municipio         : 'MESITAS',
      juzgado           : {
        origen: {
          id : '001 PM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-001-promiscuo-municipal-de-el-colegio'
        }
      },
      Proceso: {
        tipo: 'SINGULAR'
      },
      radicado : '2017-00239',
      ubicacion: {
        juzgado: 'EL COLEGIO'
      },
      vencimientoPagare: '2019-07-05'
    },
    deudor: {
      direccion      : 'CALL 2 # 8-40 EL COLEGIO',
      cedula         : 1070329396,
      primerNombre   : 'Erika',
      segundoNombre  : 'Alejandra',
      primerApellido : 'Quintero',
      segundoApellido: 'Reyes'
    },
    etapaProcesal: {
      etapa : 'EJECUCIÓN',
      fechas: {
        mandamientodePago  : '2017-11-07',
        presentacionDemanda: '2017-08-29'
      }
    },
    liquidacion: {
      fechas: {
        presentacion: '2018-11-26',
        solicitud   : '2018-09-04'
      }
    },
    medidasCautelares: {
      bien             : 'BANCOS',
      descripcionMedida: 'RETENCION DINEROS',
      ordena           : '2017-11-07',
      radicaccion      : '2023-02-02',
      medidaSolicitada:
        'EMBARGO DE DINEROS EN BANCOS',
      oficio: {
        fechas: '2017-11-15',
        numero: 1461
      },
      respuestaEmbargo: true
    },
    notificaciones: {
      '291': {
        aporta: '2018-05-17'
      },
      '292': {
        aporta   : '2018-05-17',
        resultado: true
      },
      autoNotificado: '2018-07-17',
      tipo          : 'CORREO'
    },
    idProceso   : 0,
    llaveProceso: '25245408900120170023900'
  },
  {
    _id    : '64ac755f1bba70937441dae0',
    numero : 170,
    demanda: {
      departamento      : 'CUNDINAMARCA',
      municipio         : 'BOGOTA',
      vencimientoPagare : '2026-03-10',
      entregadeGarantias: '2017-08-22',
      capitalAdeudado   : '$ 14.795.921',
      juzgado           : {
        origen: {
          id : '25 CM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-25-civil-municipal-de-bogota'
        },
        ejecucion: {
          id : '18 CME',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-18-de-ejecucion-civil-municipal-de-bogota'
        }
      },
      Proceso: {
        tipo: 'HIPOTECARIO'
      },
      radicado : '2017 - 00903',
      ubicacion: {
        juzgado: 'JUZGADOS EJECUCION'
      }
    },
    deudor: {
      cedula         : 52189873,
      email          : 'darnelly-74@hotmail.com',
      primerNombre   : 'Darnelly',
      primerApellido : 'Hernandez',
      segundoApellido: 'Martinez',
      direccion      : 'CALLE 74G # 80 - 58 SUR',
      tel            : {
        fijo   : 4530972,
        celular: 3144189224
      }
    },
    etapaProcesal: {
      etapa : 'EJECUCIÓN',
      fechas: {
        mandamientodePago  : '2017-09-18',
        presentacionDemanda: '2017-08-28'
      }
    },
    liquidacion: {
      fechas: {
        presentacion: '2019-01-11',
        Sentencia   : '2018-06-22'
      }
    },
    medidasCautelares: {
      bien: 'INMUEBLE APTO 504',
      descripcionMedida:
        'INMUEBLE  CARRERA 88 C N° 62-65 SUR',
      fechas: {
        SolicitudCapturaoSecuestro: '2018-03-22'
      },
      medidaSolicitada: 'EMBARGO DE INMUEBLE',
      radicaccion     : '2018-01-28',
      ordena          : '2017-09-18',
      oficio          : {
        numero: 3781,
        fechas: '2017-09-25'
      },
      placaoNumeroMatricula: '50S-40552545',
      respuestaEmbargo     : true
    },
    notificaciones: {
      '291': {
        aporta   : '2018-06-20',
        recibo   : '2018-06-20',
        resultado: true
      },
      '292': {
        aporta   : '2018-06-20',
        resultado: true
      },
      autoNotificado: '2018-06-22',
      certimail     : true,
      fisico        : false,
      tipo          : 'CERTIMAIL'
    },
    idProceso      : 112048180,
    llaveProceso   : '11001400302520170090300',
    ultimaActuacion: {
      idRegActuacion: 1812540980,
      llaveProceso  : '11001400302520170090300',
      consActuacion : 83,
      fechaActuacion: '2023-07-17T00:00:00',
      actuacion     : 'Fijacion estado',
      anotacion:
        'Actuación registrada el 17/07/2023 a las 12:46:00.',
      fechaInicial : '2023-07-18T00:00:00',
      fechaFinal   : '2023-07-18T00:00:00',
      fechaRegistro: '2023-07-17T00:00:00',
      codRegla:
        '00                              ',
      conDocumentos: false,
      cant         : 83
    },
    procesos: [
      {
        idProceso   : 112048180,
        idConexion  : 259,
        llaveProceso: '11001400302520170090300',
        fechaProceso: '2017-08-29T00:00:00',
        fechaUltimaActuacion:
          '2023-07-17T00:00:00',
        despacho:
          'JUZGADO 018 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ',
        departamento: 'BOGOTÁ',
        sujetosProcesales:
          'Demandante: BANCOLOMBIA S.A. | Demandado: DARNELLY HERNANDEZ MARTINEZ ',
        esPrivado: false,
        cantFilas: -1
      }
    ]
  },
  {
    _id     : '64ac755f1bba70937441dae3',
    numero  : 274,
    codeudor: {
      direccion:
        'CARRERA  115 No 89 A - 31 INT 12 APART 202',
      cedula: 4337296,
      Nombre: 'JOSE NOEL PUERTA PUERTA'
    },
    demanda: {
      capitalAdeudado   : '$ 12.347.548',
      departamento      : 'CUNDINAMARCA',
      entregadeGarantias: '2017-09-28',
      juzgado           : {
        ejecucion: {
          id : '11 CME',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-11-de-ejecucion-civil-municipal-de-bogota'
        },
        origen: {
          id : '37 CM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-37-civil-municipal-de-bogota'
        }
      },
      municipio: 'BOGOTA',
      Proceso  : {
        tipo: 'SINGULAR'
      },
      radicado : '2017 - 01391',
      ubicacion: {
        juzgado: 'JUZGADOS EJECUCION'
      },
      vencimientoPagare: '2019-03-18'
    },
    deudor: {
      direccion      : 'CARRERA  101  No 71 B - 53',
      email          : 'natis-rolita@hotmail.con',
      cedula         : 35506033,
      primerNombre   : 'Luz',
      segundoNombre  : 'Dary',
      primerApellido : 'Puerta',
      segundoApellido: 'Jaramillo',
      tel            : {
        celular: 3103430010,
        fijo   : 4357832
      }
    },
    etapaProcesal: {
      etapa : 'EJECUCIÓN',
      fechas: {
        mandamientodePago  : '2018-01-16',
        presentacionDemanda: '2017-10-10'
      }
    },
    notificaciones: {
      '291': {
        aporta   : '2018-09-14',
        recibo   : '2018-04-30',
        resultado: true
      },
      '292': {
        aporta   : '2018-06-08',
        recibo   : '2018-05-15',
        resultado: true
      },
      autoNotificado: '2018-09-03',
      certimail     : false,
      fisico        : true,
      tipo          : 'CORREO'
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

      fechaRegistro: '2022-03-09T00:00:00',
      codRegla:
        '00                              ',
      conDocumentos: false,
      cant         : 70
    },
    procesos: [
      {
        idProceso   : 112945420,
        idConexion  : 259,
        llaveProceso: '11001400303720170139100',
        fechaProceso: '2017-10-11T00:00:00',
        fechaUltimaActuacion:
          '2022-03-09T00:00:00',
        despacho:
          'JUZGADO 011 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ',
        departamento: 'BOGOTÁ',
        sujetosProcesales:
          'Demandante: BANCOLOMBIA S.A. | Demandado: JOSE NOEL PUERTA JARAMILLO | Demandado: LUZ DARY PUERTA JARAMILLO ',
        esPrivado: false,
        cantFilas: -1
      }
    ]
  },
  {
    _id   : '64ac755f1bba70937441dae5',
    avaluo: {
      valor:
        'RETIRAR DEL JUZGADO RESPUESTA DE ETB Y ALIANSALUD EPS SE RADICA OFICIO ACLARANDO CESIÓN DEL CRÉDITO'
    },
    numero : 289,
    demanda: {
      capitalAdeudado   : '$ 12.249.598',
      departamento      : 'CUNDINAMARCA',
      entregadeGarantias: '2017-09-19',
      juzgado           : {
        ejecucion: {
          id : '7 CME',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-07-de-ejecucion-civil-municipal-de-bogota'
        },
        origen: {
          id : '48 CM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-048-civil-municipal-de-bogota'
        }
      },
      municipio : 'BOGOTA',
      obligacion: {
        '1': '320088443  / 377813441863587',
        '2': 4513070212799642
      },
      Proceso: {
        tipo: 'SINGULAR'
      },
      radicado : '2017 - 00974',
      ubicacion: {
        juzgado: 'JUZGADOS EJECUCION'
      },
      vencimientoPagare: '2020-03-05'
    },
    deudor: {
      direccion:
        'CALLE 64 SUR  No 85 B - 40  APARTAMENTO  104',
      email          : 'ars.09@hotmail.com',
      cedula         : 1032383389,
      primerNombre   : 'Anderson',
      primerApellido : 'Revelo',
      segundoApellido: 'Santos',
      tel            : {
        celular: 3118526428,
        fijo   : 4725511
      }
    },
    etapaProcesal: {
      etapa : 'EJECUCIÓN',
      fechas: {
        mandamientodePago  : '2017-11-03',
        presentacionDemanda: '2017-10-06'
      }
    },
    liquidacion: {
      fechas: {
        aprobacion  : '2018-06-15',
        presentacion: '2018-06-05',
        solicitud   : '2018-02-23'
      }
    },
    medidasCautelares: {
      bien             : 'APTO 104 TORRE 4',
      descripcionMedida: 'EMBARGO DE SALARIOS',
      ordena           : '2017-11-03',
      radicaccion      : '2018-01-31',
      medidaSolicitada : 'EMBARGO DE INMUEBLE',
      oficio           : {
        fechas: '2017-12-01',
        numero: 799
      },
      placaoNumeroMatricula: '50S-40606676',
      respuestaEmbargo     : false
    },
    notificaciones: {
      '291': {
        aporta   : '2018-01-30',
        recibo   : '2018-01-30',
        resultado: true
      },
      '292': {
        aporta   : '2018-01-30',
        resultado: true
      },
      autoNotificado: '2018-02-23',
      certimail     : true,
      fisico        : false,
      tipo          : 'CERTIMAIL'
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

      fechaRegistro: '2022-12-01T00:00:00',
      codRegla:
        '00                              ',
      conDocumentos: false,
      cant         : 76
    },
    procesos: [
      {
        idProceso   : 50762570,
        idConexion  : 259,
        llaveProceso: '11001400304820170097400',
        fechaProceso: '2017-10-09T00:00:00',
        fechaUltimaActuacion:
          '2022-12-01T00:00:00',
        despacho:
          'JUZGADO 007 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ',
        departamento: 'BOGOTÁ',
        sujetosProcesales:
          'Demandante: BANCOLOMBIA S.A. | Demandado: ANDERSON REVELO SANTOS ',
        esPrivado: false,
        cantFilas: -1
      }
    ]
  },
  {
    _id   : '64ac755f1bba70937441dae6',
    avaluo: {
      valor: 'VALIDAR COMO IRRECUPERABLE'
    },
    numero : 306,
    demanda: {
      capitalAdeudado   : '$ 40.406.421',
      departamento      : 'CUNDINAMARCA',
      entregadeGarantias: '2017-10-04',
      juzgado           : {
        ejecucion: {
          id : '15 CME',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-15-de-ejecucion-civil-municipal-de-bogota'
        },
        origen: {
          id : '21 CM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-021-civil-municipal-de-bogota'
        }
      },
      municipio : 'BOGOTA',
      obligacion: {
        '1': '1740086734 4513073749673967',
        '2': 5303719549810730
      },
      Proceso: {
        tipo: 'SINGULAR'
      },
      radicado : '2017 - 01532',
      ubicacion: {
        juzgado: 'JUZGADOS EJECUCION'
      },
      vencimientoPagare: '2020-03-23'
    },
    deudor: {
      direccion      : 'CARRERA 72 A- No 9 - 44',
      email          : 'li_bcar@hotmail.com',
      cedula         : 79388145,
      primerNombre   : 'Libardo',
      segundoNombre  : 'Alfonso',
      primerApellido : 'Gonzalez',
      segundoApellido: 'Triviño'
    },
    etapaProcesal: {
      etapa : 'EJECUCIÓN',
      fechas: {
        mandamientodePago  : '2017-11-30',
        presentacionDemanda: '2017-10-10'
      }
    },
    medidasCautelares: {
      bien: 'VEHICULO',
      descripcionMedida:
        'CAMIONETA PUBLICO// ENVIO DERECHO DE PETICION PARA REGISTRAR LA MEDIDA',
      ordena          : '2017-11-30',
      radicaccion     : '2017-11-30',
      medidaSolicitada: 'EMBARGO DE VEHICULO',
      oficio          : {
        fechas: '2017-11-08',
        numero: 4273
      },
      oficios: {
        retiro: '2017-11-30'
      },
      placaoNumeroMatricula: 'WLQ-216',
      respuestaEmbargo     : false
    },
    notificaciones: {
      '291': {
        aporta   : '2018-07-06',
        recibo   : '2018-04-25',
        resultado: true
      },
      '292': {
        aporta   : '2019-05-27',
        recibo   : '2019-05-27',
        resultado: true
      },
      autoNotificado: '2019-06-17',
      certimail     : false,
      fisico        : true,
      tipo          : 'CORREO'
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

      fechaRegistro: '2023-05-15T00:00:00',
      codRegla:
        '00                              ',
      conDocumentos: false,
      cant         : 77
    }
  },
  {
    _id    : '64ac755f1bba70937441daee',
    numero : 494,
    demanda: {
      capitalAdeudado   : '$ 27.373.832',
      departamento      : 'CUNDINAMARCA',
      entregadeGarantias: '2018-09-18',
      juzgado           : {
        origen: {
          id : '3 CM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-003-civil-municipal-de-chia'
        }
      },
      municipio : 'CHIA',
      obligacion: {
        '1': 'AUDIOPRESTAMO',
        '2': 5491570347356810
      },
      Proceso: {
        tipo: 'SINGULAR'
      },
      radicado : '2018 - 00602',
      ubicacion: {
        juzgado: 'CHIA'
      },
      vencimientoPagare: '2021-09-14'
    },
    deudor: {
      direccion      : 'CARRERA 6 No 6-59',
      email          : 'mopadinco@yahoo.com',
      cedula         : 13222728,
      primerNombre   : 'Modesto',
      primerApellido : 'Pineda',
      segundoApellido: 'Perez'
    },
    etapaProcesal: {
      etapa : 'EJECUCIÓN',
      fechas: {
        mandamientodePago  : '2018-10-12',
        presentacionDemanda: '2018-10-04'
      }
    },
    medidasCautelares: {
      bien            : 'CASA',
      ordena          : '2018-10-22',
      medidaSolicitada: 'EMBARGO DE INMUEBLE',
      oficio          : {
        fechas: '2019-02-11',
        numero: 1939
      },
      placaoNumeroMatricula: 'YESID',
      respuestaEmbargo     : true
    },
    notificaciones: {
      '291': {
        aporta   : '2018-12-06',
        recibo   : '2018-11-26',
        resultado: true
      },
      '292': {
        resultado: true
      },
      certimail: false,
      fisico   : true,
      tipo     : 'CERTIMAIL'
    },
    idProceso   : 0,
    llaveProceso: '25175408900320180060200'
  },
  {
    _id     : '64ac755f1bba70937441daf1',
    numero  : 529,
    codeudor: {
      direccion:
        'KR 81 No. 127 - 46 Torre 1 Apt 401',
      cedula: 19299851,
      Nombre: 'MARCO TULIO SANCHEZ MEDINA'
    },
    demanda: {
      capitalAdeudado   : '$ 35.608.653',
      departamento      : 'CUNDINAMARCA',
      entregadeGarantias: '2020-10-07',
      municipio         : 'BOGOTA',
      juzgado           : {
        origen: {
          id : '42 CM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-42-civil-municipal-de-bogota'
        }
      },
      obligacion: {
        '1': 2020084294,
        '2': '2020087484 // 4594250317705437 //5303723260933890'
      },
      Proceso: {
        tipo: 'SINGULAR'
      },
      radicado : '2020 - 00535',
      ubicacion: {
        juzgado: 'HMM PISO 13'
      }
    },
    deudor: {
      direccion:
        'KR 81 No. 127 A - 46 CONJUNTO MONTE AZUL BOGOTA',
      email          : 'yadelcis@hotmail.com',
      cedula         : 51813018,
      primerNombre   : 'Sandra',
      segundoNombre  : 'Leonor',
      primerApellido : 'Paez',
      segundoApellido: 'Murcia',
      tel            : {
        celular: 3134386087,
        fijo   : 6139147
      }
    },
    etapaProcesal: {
      etapa : 'EJECUCION',
      fechas: {
        presentacionDemanda: '2020-10-07'
      }
    },
    notificaciones: {
      '291': {
        recibo   : '2021-06-22',
        resultado: true
      },
      certimail: true,
      fisico   : true
    },
    idProceso      : 128164881,
    llaveProceso   : '11001400304220200053500',
    ultimaActuacion: {
      idRegActuacion: 1231752641,
      llaveProceso  : '11001400304220200053500',
      consActuacion : 40,
      fechaActuacion: '2023-03-13T00:00:00',
      actuacion     : 'Fijacion estado',
      anotacion:
        'Actuación registrada el 13/03/2023 a las 08:19:44.',
      fechaInicial : '2023-03-14T00:00:00',
      fechaFinal   : '2023-03-14T00:00:00',
      fechaRegistro: '2023-03-13T00:00:00',
      codRegla:
        '00                              ',
      conDocumentos: false,
      cant         : 40
    },
    procesos: [
      {
        idProceso   : 128164881,
        idConexion  : 256,
        llaveProceso: '11001400304220200053500',
        fechaProceso: '2020-10-16T00:00:00',
        fechaUltimaActuacion:
          '2023-03-13T00:00:00',
        despacho:
          'JUZGADO 042 CIVIL MUNICIPAL DE BOGOTÁ ',
        departamento: 'BOGOTÁ',
        sujetosProcesales:
          'Demandante: BANCOLOMBIA S.A. | Demandado: SANDRA LEONOR PAEZ MURCIA | Demandado: MARCO TULIO SANCHEZ MEDINA ',
        esPrivado: false,
        cantFilas: -1
      }
    ]
  },
  {
    _id    : '64ac755f1bba70937441daf3',
    numero : 366,
    demanda: {
      capitalAdeudado: '$ 56.987.693',
      departamento   : 'CUNDINAMARCA',
      juzgado        : {
        origen: {
          id : '4 PCYCM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-04-municipal-de-pequenas-causas-y-competencia-multiple-de-soacha'
        }
      },
      entregadeGarantias: '2017-11-14',
      municipio         : 'SOACHA',
      obligacion        : {
        '1': 1680097436,
        '2': 148653
      },
      Proceso: {
        tipo: 'HIPOTECARIO'
      },
      radicado : '2018 - 00060',
      ubicacion: {
        juzgado: 'SOACHA'
      },
      vencimientoPagare: '2021-11-15'
    },
    deudor: {
      direccion:
        'DIAGONAL 28 No 33-27  TORRE 7 APART 203  SOACHA',
      email          : 'jairopardo8-11-70@hotmail.com',
      cedula         : 79522009,
      primerNombre   : 'Jairo',
      segundoNombre  : 'Alfonso',
      primerApellido : 'Pardo',
      segundoApellido: 'jaimes'
    },
    etapaProcesal: {
      etapa: 'EJECUCION'
    },
    idProceso      : 404,
    llaveProceso   : '2575440030042018000600',
    ultimaActuacion: {
      actuacion: 'Envío de llaveProceso',
      anotacion:
        'Fecha Salida:11/07/2014,Oficio:1954 Enviado a: - 000 - Laboral - Tribunal Superior - POPAYAN (CAUCA)',
      cant: 8,
      codRegla:
        '00                              ',
      conDocumentos : false,
      consActuacion : 8,
      fechaActuacion: '2014-07-11T00:00:00',

      fechaRegistro : '2014-07-11T00:00:00',
      idRegActuacion: 2674,
      llaveProceso  : '19001220500020000052601'
    }
  },
  {
    _id    : '64ac755f1bba70937441dae8',
    numero : 312,
    demanda: {
      capitalAdeudado   : '$ 44.944.657',
      departamento      : 'CUNDINAMARCA',
      entregadeGarantias: '2017-10-26',
      municipio         : 'SOACHA',
      juzgado           : {
        origen: {
          id : '1 CM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-01-civil-municipal-de-bogota'
        }
      },
      obligacion: {
        '1': '180049   53037120066499008',
        '2': '3778133433049336 /4513075801129044'
      },
      Proceso: {
        tipo: 'HIPOTECARIO'
      },
      radicado : '2017 - 00323',
      ubicacion: {
        juzgado: 'REMATE DEL INMUEBLE'
      },
      vencimientoPagare: '2030-01-05'
    },
    deudor: {
      direccion:
        'CARRERA 18 B No 4 C -  20  SOACHA',
      email          : 'saliradelante2012@hotmail.com',
      cedula         : 8799171,
      primerNombre   : 'Manuel',
      segundoNombre  : 'Enrique',
      primerApellido : 'Arteaga',
      segundoApellido: 'Orozco'
    },
    etapaProcesal: {
      etapa : 'EJECUCION',
      fechas: {
        mandamientodePago  : '2017-11-24',
        presentacionDemanda: '2017-11-01'
      }
    },
    liquidacion: {
      fechas: {
        Sentencia: '2018-11-06',
        solicitud: '2018-11-13'
      }
    },
    medidasCautelares: {
      bien            : 'APTO 101 TORRE 20',
      ordena          : '2017-11-24',
      medidaSolicitada: 'EMBARGO DE INMUEBLE',
      oficio          : {
        fechas: '2018-08-01',
        numero: 8469
      },
      placaoNumeroMatricula: '051-162001',
      respuestaEmbargo     : true
    },
    notificaciones: {
      '291': {
        aporta   : '2018-02-15',
        recibo   : '2018-02-15',
        resultado: true
      },
      '292': {
        resultado: true
      },
      autoNotificado: '2018-02-22',
      certimail     : true,
      fisico        : false,
      tipo          : 'CERTIMAIL'
    },
    idProceso   : 0,
    llaveProceso: '25754400300120170032300'
  },
  {
    _id    : '64ac755f1bba70937441daed',
    numero : 489,
    demanda: {
      departamento      : 'CUNDINAMARCA',
      municipio         : 'BOGOTA',
      vencimientoPagare : '2021-07-05',
      entregadeGarantias: '2018-09-03',
      radicado          : '2018 - 00785',
      capitalAdeudado   : '$ 18.100.699',
      juzgado           : {
        origen: {
          id : '8 PCYCM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-08-de-pequenas-causas-laborales-de-bogota'
        },
        ejecucion: {
          id : '5 CME',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-05-de-ejecucion-civil-municipal-de-bogota'
        }
      },
      obligacion: {
        '1': 'AUDIOPRESTAMO',
        '2': '0377816345049476 // 4513070259455355 // 5303720114305077'
      },
      Proceso: {
        tipo: 'SINGULAR'
      },
      ubicacion: {
        juzgado: 'JUZGADOS EJECUCION'
      }
    },
    deudor: {
      cedula         : 51987570,
      email          : 'sandrabogota2007@yahoo.com',
      primerNombre   : 'Sandra',
      segundoNombre  : 'Patricia',
      primerApellido : 'Pacheco',
      segundoApellido: 'Ramirez',
      direccion:
        'CALLE 163 B No 50-80  INTERIOR 10 APT 231 CONJUNTO LA ESTANCIA III'
    },
    etapaProcesal: {
      etapa:
        'EMBARGO DE REMANENTES JUZGADO 27 PROCESO 2019 - 00251',
      fechas: {
        mandamientodePago  : '2018-10-04',
        presentacionDemanda: '2018-09-20'
      }
    },
    medidasCautelares: {
      medidaSolicitada: 'EMBARGO DE INMUEBLE',
      bien            : 'APTO 231',
      ordena          : '2018-11-20',
      oficio          : {
        numero: 2288,
        fechas: '2018-11-20'
      },
      placaoNumeroMatricula: '50N - 20247423',
      respuestaEmbargo     : false
    },
    notificaciones: {
      '291': {
        aporta   : '2018-11-02',
        recibo   : '2018-11-02',
        resultado: true
      },
      '292': {
        resultado: true
      },
      certimail: true,
      fisico   : false,
      tipo     : 'CORREO'
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

      fechaRegistro: '2023-07-13T00:00:00',
      codRegla:
        '00                              ',
      conDocumentos: false,
      cant         : 26
    },
    procesos: [
      {
        idProceso   : 87350810,
        idConexion  : 259,
        llaveProceso: '11001418900820180078500',
        fechaProceso: '2021-03-24T00:00:00',
        fechaUltimaActuacion:
          '2023-07-13T00:00:00',
        despacho:
          'JUZGADO 005 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ',
        departamento: 'BOGOTÁ',
        sujetosProcesales:
          'Demandante: BANCOLOMBIA S.A. | Demandado: SANDRA PATRICIA PACHECO RAMIREZ ',
        esPrivado: false,
        cantFilas: -1
      }
    ]
  },
  {
    _id    : '64ac755f1bba70937441daf0',
    numero : 506,
    demanda: {
      capitalAdeudado   : '$ 29.416.113',
      departamento      : 'CUNDINAMARCA',
      entregadeGarantias: '2018-11-26',
      juzgado           : {
        origen: {
          id : '001 PM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-01-promiscuo-municipal-de-la-calera'
        }
      },
      municipio: 'LA CALERA',
      Proceso  : {
        tipo: 'SINGULAR'
      },
      radicado : '2018 - 00371',
      ubicacion: {
        juzgado: 'LA CALERA'
      },
      vencimientoPagare: '2026-03-01'
    },
    deudor: {
      direccion      : 'CALLE 2 A # 5-22 APTO 503',
      email          : 'joalvato09@hotmail.com',
      cedula         : 11230400,
      primerNombre   : 'Jose',
      segundoNombre  : 'Alfonso',
      primerApellido : 'Vasquez',
      segundoApellido: 'Tovar'
    },
    etapaProcesal: {
      etapa : 'EJECUCIÓN',
      fechas: {
        mandamientodePago  : '2019-01-17',
        presentacionDemanda: '2018-12-07'
      }
    },
    medidasCautelares: {
      bien                 : 'APTO 503',
      ordena               : '2019-01-28',
      medidaSolicitada     : 'EMBARGO INMUEBLES',
      placaoNumeroMatricula: '50N - 20288831',
      respuestaEmbargo     : false
    },
    notificaciones: {
      '291': {
        aporta   : '2019-04-24',
        recibo   : '2019-04-24',
        resultado: true
      },
      '292': {
        resultado: true
      },
      certimail: false,
      fisico   : true,
      tipo     : 'CORREO'
    },
    idProceso   : 0,
    llaveProceso: '25377408900120180037100'
  },
  {
    _id     : '64ac755f1bba70937441dae4',
    numero  : 278,
    codeudor: {
      direccion: 'DG 3B No. 0-78 ESTE',
      cedula   : [
        41759787,
        39710157
      ],
      Nombre: [
        'CARMELINA AGUILAR ',
        ' ANA LUCIA AGUILAR'
      ],
      tel: {
        celular: 3204613419,
        fijo   : 3107627120
      }
    },
    demanda: {
      capitalAdeudado   : '$ 66.362.959',
      departamento      : 'CUNDINAMARCA',
      entregadeGarantias: '2017-09-21',
      juzgado           : {
        ejecucion: {
          id : '11 CME',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-11-de-ejecucion-civil-municipal-de-bogota'
        },
        origen: {
          id : '15 CM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-015-civil-municipal-de-bogota'
        }
      },
      municipio: 'BOGOTA',
      Proceso  : {
        tipo: 'HIPOTECARIO'
      },
      radicado : '2017 - 01394',
      ubicacion: {
        juzgado: 'JUZGADOS EJECUCION'
      },
      vencimientoPagare: '2024-05-05'
    },
    deudor: {
      direccion      : 'CALLE 2 C No 62 - 20',
      email          : 'maifren_13@yahoo.es',
      cedula         : 19255260,
      primerNombre   : 'Matias',
      segundoNombre  : 'Humberto',
      primerApellido : 'Avila',
      segundoApellido: 'Aguilar',
      tel            : {
        celular: 3125024008,
        fijo   : 4170527
      }
    },
    etapaProcesal: {
      etapa : 'EJECUCIÓN',
      fechas: {
        mandamientodePago  : '2018-02-09',
        presentacionDemanda: '2017-10-10'
      }
    },
    medidasCautelares: {
      bien            : 'CASA',
      ordena          : '2017-11-08',
      radicaccion     : '2018-03-12',
      medidaSolicitada: 'EMBARGO DE INMUEBLE',
      oficio          : {
        fechas: '2018-02-16',
        numero: 284
      },
      oficios: {
        retiro: '2018-02-16'
      },
      placaoNumeroMatricula: '50C-643759',
      respuestaEmbargo     : false
    },
    notificaciones: {
      '291': {
        aporta   : '2018-06-08',
        recibo   : '2018-02-14',
        resultado: true
      },
      '292': {
        aporta   : '2018-06-08',
        recibo   : '2018-02-23',
        resultado: true
      },
      autoNotificado: '2018-02-23',
      certimail     : false,
      fisico        : true,
      tipo          : 'CORREO/ PERSONAL'
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

      fechaRegistro: '2021-11-08T00:00:00',
      codRegla:
        '00                              ',
      conDocumentos: false,
      cant         : 81
    },
    procesos: [
      {
        idProceso   : 50777890,
        idConexion  : 259,
        llaveProceso: '11001400301520170139400',
        fechaProceso: '2017-10-13T00:00:00',
        fechaUltimaActuacion:
          '2021-11-08T00:00:00',
        despacho:
          'JUZGADO 011 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ',
        departamento: 'BOGOTÁ',
        sujetosProcesales:
          'Demandante: BANCOLOMBIA S.A. | Demandado: ANA LUCIA AGUILAR | Demandado: CARMELINA AGUILAR | Demandado: HUMBERTO AVILA MATIAS ',
        esPrivado: false,
        cantFilas: -1
      }
    ]
  },
  {
    _id    : '64ac755f1bba70937441daeb',
    numero : 461,
    demanda: {
      capitalAdeudado   : '$ 24.501.535',
      departamento      : 'CUNDINAMARCA',
      entregadeGarantias: '2018-07-05',
      municipio         : 'BOGOTA',
      juzgado           : {
        origen: {
          id : '14 PCYCM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-014-de-pequenas-causas-y-competencia-multiple-de-bogota'
        }
      },
      obligacion: {
        '1': 'AMERICAN 0377814037749057',
        '2': 'VISA 4513083943843365 // MASTER 5303729958258417'
      },
      Proceso: {
        tipo: 'SINGULAR'
      },
      radicado : '2019 - 00656',
      ubicacion: {
        juzgado: 'JARAMILLO'
      },
      vencimientoPagare: '2021-02-16'
    },
    deudor: {
      direccion      : 'DIAGONAL 2 # 21 B-20',
      email          : 'leidyyaneth.lyv@gmail.com',
      cedula         : 52883958,
      primerNombre   : 'Leidy',
      segundoNombre  : 'Yaneth',
      primerApellido : 'Vidal',
      segundoApellido: 'Rodriguez'
    },
    etapaProcesal: {
      etapa : 'CONTESTACION DEMANDA',
      fechas: {
        mandamientodePago  : '2019-05-07',
        presentacionDemanda: '2018-07-12'
      }
    },
    medidasCautelares: {
      bien            : 'PREDIO RURAL',
      ordena          : '2019-05-14',
      medidaSolicitada: 'EMBARGO DE INMUEBLE',
      oficio          : {
        fechas: '2019-05-14',
        numero: 937
      },
      placaoNumeroMatricula: '372-19300',
      respuestaEmbargo     : false
    },
    notificaciones: {
      '291': {
        aporta   : '2019-09-28',
        recibo   : '2019-09-28',
        resultado: false
      },
      '292': {
        resultado: true
      },
      autoNotificado: '2020-01-29',
      certimail     : true,
      fisico        : true,
      tipo          : 'CERTIMAIL Y CORREO'
    },
    idProceso      : 51816100,
    llaveProceso   : '11001418901420190065600',
    ultimaActuacion: {
      idRegActuacion: 1791264470,
      llaveProceso  : '11001418901420190065600',
      consActuacion : 97,
      fechaActuacion: '2023-06-27T00:00:00',
      actuacion     : 'Fijacion estado',
      anotacion:
        'Actuación registrada el 27/06/2023 a las 20:15:32.',
      fechaInicial : '2023-06-28T00:00:00',
      fechaFinal   : '2023-06-28T00:00:00',
      fechaRegistro: '2023-06-27T00:00:00',
      codRegla:
        '00                              ',
      conDocumentos: false,
      cant         : 97
    },
    procesos: [
      {
        idProceso   : 51816100,
        idConexion  : 259,
        llaveProceso: '11001418901420190065600',
        fechaProceso: '2019-04-04T00:00:00',
        fechaUltimaActuacion:
          '2023-06-27T00:00:00',
        despacho:
          'JUZGADO 014 DE PEQUEÑAS CAUSAS  Y COMPETENCIA MÚLTIPLE DE BOGOTÁ ',
        departamento: 'BOGOTÁ',
        sujetosProcesales:
          'Demandante: BANCOLOMBIA S.A. | Demandado: LEIDY YANETH VIDAL RODRÍGUEZ ',
        esPrivado: false,
        cantFilas: -1
      },
      {
        idProceso   : 135801811,
        idConexion  : 320,
        llaveProceso: '11001418901420190065600',
        fechaProceso: '2019-04-03T00:00:00',
        fechaUltimaActuacion:
          '2022-09-12T00:00:00',
        despacho:
          'JUZGADO 014 DE PEQUEÑAS CAUSAS  Y COMPETENCIA MÚLTIPLE DE BOGOTÁ ',
        departamento: 'BOGOTÁ',
        sujetosProcesales:
          'Demandante/accionante: BANCOLOMBIA SA | Demandado/indiciado/causante: LEIDY YANETH VIDAL RODRIGUEZ (Emplazado) ',
        esPrivado: false,
        cantFilas: -1
      }
    ]
  },
  {
    _id    : '64ac755f1bba70937441daec',
    numero : 461,
    demanda: {
      departamento: 'CUNDINAMARCA',
      juzgado     : {
        origen: {
          id : '14 PCYCM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-014-de-pequenas-causas-y-competencia-multiple-de-bogota'
        }
      },
      municipio         : 'BOGOTA',
      vencimientoPagare : '2021-02-16',
      radicado          : '2019 - 00656',
      entregadeGarantias: '2018-07-05',
      capitalAdeudado   : '$ 24.501.535',
      obligacion        : {
        '1': 'AMERICAN 0377814037749057',
        '2': 'VISA 4513083943843365 // MASTER 5303729958258417'
      },
      Proceso: {
        tipo: 'SINGULAR'
      },
      ubicacion: {
        juzgado: 'JARAMILLO'
      }
    },
    deudor: {
      cedula         : 52883958,
      email          : 'leidyyaneth.lyv@gmail.com',
      primerNombre   : 'Leidy',
      segundoNombre  : 'Yaneth',
      primerApellido : 'Vidal',
      segundoApellido: 'Rodriguez',
      direccion      : 'DIAGONAL 2 # 21 B-20'
    },
    etapaProcesal: {
      etapa : 'CONTESTACION DEMANDA',
      fechas: {
        mandamientodePago  : '2019-05-07',
        presentacionDemanda: '2018-07-12'
      }
    },
    medidasCautelares: {
      bien            : 'PREDIO RURAL',
      medidaSolicitada: 'EMBARGO DE INMUEBLE',
      ordena          : '2019-05-14',
      oficio          : {
        numero: 937,
        fechas: '2019-05-14'
      },
      placaoNumeroMatricula: '372-19300',
      respuestaEmbargo     : false
    },
    notificaciones: {
      '291': {
        aporta   : '2019-09-28',
        recibo   : '2019-09-28',
        resultado: false
      },
      '292': {
        resultado: true
      },
      autoNotificado: '2020-01-29',
      certimail     : true,
      fisico        : true,
      tipo          : 'CERTIMAIL Y CORREO'
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
      codRegla:
        '00                              ',
      conDocumentos: true,
      cant         : 1
    }
  },
  {
    _id     : '64ac755f1bba70937441daef',
    numero  : 497,
    codeudor: {
      direccion:
        'DIAGONAL 77B No 119 A-74 APTO 504 INT6',
      cedula: 51955296,
      Nombre: 'FLOR ANGELA RODRIGUEZ'
    },
    demanda: {
      capitalAdeudado   : '$ 24.807.317',
      departamento      : 'CUNDINAMARCA',
      entregadeGarantias: '2018-10-08',
      juzgado           : {
        origen: {
          id : '13 PCYCM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-13-de-pequenas-causas-y-competencias-multiples-de-bogota'
        }
      },
      municipio : 'BOGOTA',
      obligacion: {
        '1': '20990123680  7/  377813468472239',
        '2': '4513079359765043 // 53037220341399596'
      },
      Proceso: {
        tipo: 'HIPOTECARIO'
      },
      radicado : '2019 - 00708',
      ubicacion: {
        juzgado: 'HMM PISO 5'
      },
      vencimientoPagare: '2024-11-30'
    },
    deudor: {
      direccion:
        'DIAGONAL 77B No 119 A-74 APTO 504 INT6',
      email          : 'dcentro@pcpplasticos.com',
      cedula         : 3208569,
      primerNombre   : 'Floresmiro',
      primerApellido : 'Aponte',
      segundoApellido: 'Acosta'
    },
    etapaProcesal: {
      etapa : 'EJECUCIÓN',
      fechas: {
        mandamientodePago  : '2019-07-31',
        presentacionDemanda: '2018-10-12'
      }
    },
    medidasCautelares: {
      bien            : 'APTO 504',
      ordena          : '2020-02-13',
      medidaSolicitada: 'EMBARGO DE INMUEBLE',
      oficio          : {
        fechas: '2020-02-13',
        numero: 422
      },
      respuestaEmbargo: false
    },
    notificaciones: {
      '291': {
        aporta: '2020-02-18',
        recibo: '2020-02-18'
      },
      '292': {
        resultado: true
      },
      certimail: true,
      fisico   : false,
      tipo     : 'CORREO'
    },
    idProceso   : 0,
    llaveProceso: '11001418901320190070800'
  },
  {
    _id    : '64ac755f1bba70937441daf2',
    numero : 530,
    demanda: {
      capitalAdeudado   : '$ 15.324.570',
      departamento      : 'CUNDINAMARCA',
      entregadeGarantias: '2020-09-05',
      juzgado           : {
        origen: {
          id : '68 CM',
          url: 'https://www.ramajudicial.gov.co/web/juzgado-068-civil-municipal-de-bogota'
        }
      },
      municipio : 'BOGOTA',
      obligacion: {
        '1': 65886140334,
        '2': 4594260446916180
      },
      Proceso: {
        tipo: 'SINGULAR'
      },
      radicado : '2020-1021',
      ubicacion: {
        juzgado: 'HMM PISO 15'
      }
    },
    deudor: {
      direccion      : 'AV BOYACA 63D - 26 OFICINA 103',
      cedula         : 900520023,
      primerNombre   : 'Dimoin',
      primerApellido : 'Colombia',
      segundoApellido: 'S.A.S'
    },
    etapaProcesal: {
      etapa: 'NOTIFICACION'
    },
    idProceso      : 112628300,
    llaveProceso   : '11001400306820200102100',
    ultimaActuacion: {
      idRegActuacion: 1791918410,
      llaveProceso  : '11001400306820200102100',
      consActuacion : 28,
      fechaActuacion: '2023-06-29T00:00:00',
      actuacion     : 'Al despacho',
      anotacion:
        'con escrito de contestación de demanda y excepciones previas',

      fechaRegistro: '2023-06-29T00:00:00',
      codRegla:
        '00                              ',
      conDocumentos: false,
      cant         : 28
    },
    procesos: [
      {
        idProceso   : 112628300,
        idConexion  : 262,
        llaveProceso: '11001400306820200102100',
        fechaProceso: '2020-10-09T00:00:00',
        fechaUltimaActuacion:
          '2023-06-29T00:00:00',
        despacho:
          'JUZGADO 068 CIVIL MUNICIPAL DE BOGOTÁ ',
        departamento: 'BOGOTÁ',
        sujetosProcesales:
          'Demandante: BANCOLOMBIA S.A | Demandado: DIMOIN COLOMBIA SAS ',
        esPrivado: false,
        cantFilas: -1
      }
    ]
  }
];

const plainMaps = mess.map(
  (
    messito, index, array
  ) => {
    const meh: pruebaDemanda = {
      numero         : messito.numero,
      deudor         : messito.deudor,
      idProceso      : messito.idProceso,
      capitalAdeudado: messito.liquidacion?.capitalAdeudado
        ? messito.liquidacion?.capitalAdeudado
        : messito.demanda.capitalAdeudado ?? 'sin especificar',
      fechaIngreso: new Date(),
      reparto     : true,
      codeudor    : messito.codeudor,
      tipoProceso : messito.demanda.Proceso?.tipo
        ? messito.demanda.Proceso?.tipo
        : messito.demanda.tipoProceso
          ? messito.demanda.tipoProceso
          : '',
      tipoBien    : messito.medidasCautelares?.bien ?? '',
      obligacion  : messito.demanda.obligacion,
      llaveProceso: messito.llaveProceso,
      grupo       : 'Bancolombia',
      clase       : messito.medidasCautelares?.bien ?? 'sin especificar',
      _id         : messito._id
    };

    const idk = new ClassDemanda(
      meh
    );

    console.log(
      idk
    );

    return idk;
  }
);





fs.writeFile(
  'carpetasNew.json',
  JSON.stringify(
    plainMaps
  )
);