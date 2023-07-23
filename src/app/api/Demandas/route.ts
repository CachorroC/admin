import { getActuaciones } from '#@/lib/Actuaciones';
import { getProceso } from '#@/lib/RamaJudicial';
import { sleep } from '#@/lib/fix';
import clientPromise from '#@/lib/mongodb';
import { Demanda, EtapaProcesal, IntCarpeta, TipoProceso } from '#@/lib/types/demandados';
import { ClassDemanda } from '#@/lib/types/models/demanda';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';
import { cache } from 'react';

const mess = [
  {
    reparto: true,
    numero : 20,
    deudor : {
      cedula        : 1077969975,
      primerNombre  : 'Yesid',
      segundoNombre : 'Albeiro',
      primerApellido: 'Ramos',
      tel           : {
        celular: 3212337597
      },
      email: 'yess_Id@hotmail.com',
      direccion:
        'CARRERA 77B No. 68B - 19 BARRIO SANTA HELENITA'
    },
    vencimientoPagare: new Date(
      '2020-05-04T00:00:00.000Z'
    ),
    obligacion: [
      2530444
    ],
    capitalAdeudado        : 33791309,
    entregaGarantiasAbogado: new Date(
      '2017-05-11T00:00:00.000Z',
    ),
    demanda: {
      departamento: 'CUNDINAMARCA',
      municipio   : 'BOGOTA',
      juzgado     : {
        origen: {
          url: 'https://www.ramajudicial.gov.co/web/juzgado-03-civil-municipal-de-bogota',
          id : '3 CM'
        }
      },
      ubicacion: 'HMM PISO 5',
      radicado : '2017 - 00884'
    },
    tipoProceso  : 'PRENDARIO',
    llaveProceso : '11001400300320170088400',
    etapaProcesal: 'EMPLAZAMIENTO',
    clase        : 'VEHICULO',
    bien         : {
      tipo: 'VEHICULO',
      id  : 'IYM-870'
    }
  },
  {
    reparto: true,
    numero : 86,
    deudor : {
      cedula         : 1032432802,
      primerNombre   : 'Luis',
      segundoNombre  : 'Esneider',
      primerApellido : 'Orduz',
      segundoApellido: 'Farfan',
      tel            : {
        fijo: 4712921
      },
      email    : 'orduzcrit2@hotmail.com',
      direccion: 'CARRERA 95 # 138 - 58'
    },
    codeudor: {
      cedula: 1015435620,
      nombre: 'JESICA PAOLA GUZMAN OSPINA'
    },
    vencimientoPagare: new Date(
      '2020-06-09T00:00:00.000Z'
    ),
    obligacion: [
      12330030
    ],
    capitalAdeudado        : 26515333,
    entregaGarantiasAbogado: new Date(
      '1899-12-30T00:00:00.000Z',
    ),
    demanda: {
      departamento: 'CUNDINAMARCA',
      municipio   : 'BOGOTA',
      juzgado     : {
        origen: {
          url: 'https://www.ramajudicial.gov.co/web/juzgado-34-civil-municipal-de-bogota',
          id : '34 CM'
        },
        ejecucion: {
          url: 'https://www.ramajudicial.gov.co/web/juzgado-12-de-ejecucion-civil-municipal-de-bogota',
          id : '12 CME'
        }
      },
      ubicacion: 'JUZGADOS EJECUCION',
      radicado : '2017 - 00836'
    },
    tipoProceso  : 'PRENDARIO',
    llaveProceso : '11001400303420170083600',
    etapaProcesal: 'EJECUCION',
    clase        : 'VEHICULO',
    bien         : {
      tipo: 'VEHICULO',
      id  : 'UBK-333'
    }
  },
  {
    reparto: true,
    numero : 98,
    deudor : {
      cedula         : 1070329396,
      primerNombre   : 'Erika',
      segundoNombre  : 'Alejandra',
      primerApellido : 'Quintero',
      segundoApellido: 'Reyes',
      tel            : {
        celular: 3114456631
      },
      direccion: 'CALL 2 No. 8-40 EL COLEGIO'
    },
    vencimientoPagare: new Date(
      '2019-07-05T00:00:00.000Z'
    ),
    obligacion: [
      7300080586
    ],
    capitalAdeudado        : 50000000,
    entregaGarantiasAbogado: new Date(
      '2017-06-12T00:00:00.000Z',
    ),
    demanda: {
      departamento: 'CUNDINAMARCA',
      municipio   : 'MESITAS',
      juzgado     : {
        origen: {
          url: 'https://www.ramajudicial.gov.co/web/juzgado-001-promiscuo-municipal-de-el-colegio',
          id : '001 PM'
        }
      },
      ubicacion: 'EL COLEGIO',
      radicado : '2017-00239'
    },
    tipoProceso  : 'SINGULAR',
    llaveProceso : '25245408900120170023900',
    etapaProcesal: 'EJECUCION',
    clase        : 'BANCOS',
    bien         : {
      tipo: 'BANCOS'
    }
  },
  {
    reparto: true,
    numero : 116,
    deudor : {
      cedula        : 900212673,
      primerNombre  : 'Jencell',
      primerApellido: 'E.U.',
      tel           : {
        fijo: 5753416
      },
      direccion: 'CARRERA 3 # 29A - 02'
    },
    codeudor: {
      cedula   : 52771090,
      nombre   : 'YENY ESPERANZA ARIAS MENDIETA',
      tel      : 5753416,
      direccion: 'CARRERA 3 # 29A - 02 LOCAL 1057'
    },
    vencimientoPagare: new Date(
      '2021-04-12T00:00:00.000Z'
    ),
    obligacion: [
      6240082776
    ],
    capitalAdeudado        : 13906249,
    entregaGarantiasAbogado: new Date(
      '2017-08-04T00:00:00.000Z',
    ),
    demanda: {
      departamento: 'CUNDINAMARCA',
      municipio   : 'SOACHA',
      juzgado     : {
        origen: {
          url: 'https://www.ramajudicial.gov.co/web/juzgado-03-municipal-de-pequenas-causas-y-competencia-multiple-de-soacha',
          id : '003 PCYCM'
        }
      },
      ubicacion: 'SOACHA',
      radicado : '2017 - 00755'
    },
    tipoProceso  : 'SINGULAR',
    llaveProceso : '25754418900320170075500',
    etapaProcesal: 'EJECUCION',
    clase        : 'EMBARGO INMUEBLE DE LA CODEUDORA',
    bien         : {
      tipo: 'BANCOS',
      id  : '051-130616'
    }
  },
  {
    reparto: true,
    numero : 150,
    deudor : {
      cedula         : 52189873,
      primerNombre   : 'Darnelly',
      primerApellido : 'Hernandez',
      segundoApellido: 'Martinez',
      tel            : {
        fijo   : 4530972,
        celular: 3144189224
      },
      email    : 'darnelly-74@hotmail.com',
      direccion: 'CALLE 74G # 80 - 58 SUR'
    },
    vencimientoPagare: new Date(
      '2026-03-10T00:00:00.000Z'
    ),
    obligacion: [
      136962
    ],
    capitalAdeudado        : 14795921,
    entregaGarantiasAbogado: new Date(
      '2017-08-22T00:00:00.000Z',
    ),
    demanda: {
      departamento: 'CUNDINAMARCA',
      municipio   : 'BOGOTA',
      juzgado     : {
        origen: {
          url: 'https://www.ramajudicial.gov.co/web/juzgado-25-civil-municipal-de-bogota',
          id : '25 CM'
        },
        ejecucion: {
          url: 'https://www.ramajudicial.gov.co/web/juzgado-18-de-ejecucion-civil-municipal-de-bogota',
          id : '18 CME'
        }
      },
      ubicacion: 'JUZGADOS EJECUCION',
      radicado : '2017 - 00903'
    },
    tipoProceso  : 'HIPOTECARIO',
    llaveProceso : '11001400302520170090300',
    etapaProcesal: 'EJECUCION',
    clase        : 'EMBARGO DE INMUEBLE',
    bien         : {
      tipo: 'INMUEBLE APTO 504',
      id  : '50S-40552545'
    }
  },
  {
    reparto: true,
    numero : 178,
    deudor : {
      cedula         : 11185630,
      primerNombre   : 'Wilson',
      segundoNombre  : 'Alfonso',
      primerApellido : 'Jimenez',
      segundoApellido: 'Mendieta',
      tel            : {
        fijo: 5714329
      },
      email    : 'grupocomerciallasabana@hotmail.com',
      direccion: 'CARRERA 81C # 2B - 80 PISO 2'
    },
    vencimientoPagare: new Date(
      '2019-11-03T00:00:00.000Z'
    ),
    obligacion: [
      2150091504
    ],
    capitalAdeudado        : 25833335,
    entregaGarantiasAbogado: new Date(
      '2017-08-01T00:00:00.000Z',
    ),
    demanda: {
      departamento: 'CUNDINAMARCA',
      municipio   : 'BOGOTA',
      juzgado     : {
        origen: {
          url: 'https://www.ramajudicial.gov.co/web/juzgado-01-civil-municipal-de-bogota',
          id : '1 CM'
        },
        ejecucion: {
          url: 'https://www.ramajudicial.gov.co/web/juzgado-17-de-ejecucion-civil-municipal-de-bogota',
          id : '17 CME'
        }
      },
      ubicacion: 'JUZGADOS EJECUCION',
      radicado : '2017 - 01001'
    },
    tipoProceso  : 'SINGULAR',
    llaveProceso : '11001400300120170100100',
    etapaProcesal: 'EJECUCION',
    clase        : 'EMBARGO DE DINEROS EN BANCOS',
    bien         : {
      tipo: 'BANCOS',
      id  : 'SLJ234'
    }
  },
  {
    reparto: true,
    numero : 231,
    deudor : {
      cedula         : 79853115,
      primerNombre   : 'Fanor',
      primerApellido : 'Diaz',
      segundoApellido: 'Agudelo',
      tel            : {
        fijo   : 8060271,
        celular: 3212406193
      },
      email: 'fanor.diaz@gmail.com',
      direccion:
        'DIAGONAL 56 BIS 84 A 10 SUR TR 1'
    },
    vencimientoPagare: new Date(
      '2017-02-14T00:00:00.000Z'
    ),
    obligacion: [
      148931
    ],
    capitalAdeudado        : 27603821,
    entregaGarantiasAbogado: new Date(
      '2017-09-06T00:00:00.000Z',
    ),
    demanda: {
      departamento: 'CUNDINAMARCA',
      municipio   : 'BOGOTA',
      juzgado     : {
        origen: {
          url: 'https://www.ramajudicial.gov.co/web/juzgado-008-civil-municipal-de-bogota',
          id : '8 CM'
        },
        ejecucion: {
          url: 'https://www.ramajudicial.gov.co/web/juzgado-06-de-ejecucion-civil-municipal-de-bogota',
          id : '6 CME'
        }
      },
      ubicacion: 'JUZGADOS EJECUCION',
      radicado : '2017 - 01134'
    },
    tipoProceso  : 'HIPOTECARIO',
    llaveProceso : '11001400300820170113400',
    etapaProcesal: 'EJECUCION',
    clase        : 'EMBARGO DE INMUEBLE',
    bien         : {
      tipo: 'INMUEBLE',
      id  : '50S-40590187'
    }
  },
  {
    reparto: true,
    numero : 274,
    deudor : {
      cedula         : 35506033,
      primerNombre   : 'Luz',
      segundoNombre  : 'Dary',
      primerApellido : 'Puerta',
      segundoApellido: 'jaramillo',
      tel            : {
        fijo   : 4357832,
        celular: 3103430010
      },
      email    : 'natis-rolita@hotmail.con',
      direccion: 'CARRERA  101  No 71 B - 53'
    },
    codeudor: {
      cedula: 4337296,
      nombre: 'JOSE NOEL PUERTA PUERTA',
      tel   : 3103431255,
      direccion:
        'CARRERA  115 No 89 A - 31 INT 12 APART 202'
    },

    obligacion: [
      4670083154
    ],
    capitalAdeudado: 12347548,

    demanda: {
      departamento: 'CUNDINAMARCA',
      municipio   : 'BOGOTA',
      juzgado     : {
        origen: {
          url: 'https://www.ramajudicial.gov.co/web/juzgado-37-civil-municipal-de-bogota',
          id : '37 CM'
        },
        ejecucion: {
          url: 'https://www.ramajudicial.gov.co/web/juzgado-11-de-ejecucion-civil-municipal-de-bogota',
          id : '11 CME'
        }
      },
      ubicacion: 'JUZGADOS EJECUCION',
      radicado : '2017 - 01391'
    },
    tipoProceso  : 'SINGULAR',
    llaveProceso : '11001400303720170139100',
    etapaProcesal: 'EJECUCION'
  },
  {
    reparto: true,
    numero : 278,
    deudor : {
      cedula         : 19255260,
      primerNombre   : 'Matias',
      segundoNombre  : 'Humberto',
      primerApellido : 'Avila',
      segundoApellido: 'Aguilar',
      tel            : {
        fijo   : 4170527,
        celular: 3125024008
      },
      email    : 'maifren_13@yahoo.es',
      direccion: 'CALLE 2 C No 62 - 20'
    },
    codeudor: {
      cedula: '41759787- 39710157',
      nombre:
        'CARMELINA AGUILAR -  ANA LUCIA AGUILAR',
      tel      : '3204613419-3107627120',
      direccion: 'DG 3B No. 0-78 ESTE'
    },
    vencimientoPagare: new Date(
      '2024-05-05T05:00:00.000Z'
    ),
    obligacion: [
      174366
    ],
    capitalAdeudado: 66362959,

    demanda: {
      departamento: 'CUNDINAMARCA',
      municipio   : 'BOGOTA',
      juzgado     : {
        origen: {
          url: 'https://www.ramajudicial.gov.co/web/juzgado-015-civil-municipal-de-bogota',
          id : '15 CM'
        },
        ejecucion: {
          url: 'https://www.ramajudicial.gov.co/web/juzgado-11-de-ejecucion-civil-municipal-de-bogota',
          id : '11 CME'
        }
      },
      ubicacion: 'JUZGADOS EJECUCION',
      radicado : '2017 - 01394'
    },
    tipoProceso  : 'HIPOTECARIO',
    llaveProceso : '11001400301520170139400',
    etapaProcesal: 'EJECUCION',
    clase        : 'EMBARGO DE INMUEBLE',
    bien         : {
      tipo: 'CASA',
      id  : '50C-643759'
    }
  },
  {
    reparto: true,
    numero : 289,
    deudor : {
      cedula         : 1032383389,
      primerNombre   : 'Anderson',
      primerApellido : 'Revelo',
      segundoApellido: 'Santos',
      tel            : {
        fijo   : 4725511,
        celular: 3118526428
      },
      email: 'ars.09@hotmail.com',
      direccion:
        'CALLE 64 SUR  No 85 B - 40  APARTAMENTO  104'
    },
    vencimientoPagare: new Date(
      '2020-03-05T00:00:00.000Z'
    ),
    obligacion: [
      320088443,
      377813441863587,
      4513070212799642
    ],
    capitalAdeudado        : 12249598,
    entregaGarantiasAbogado: new Date(
      '2017-09-19T00:00:00.000Z',
    ),
    demanda: {
      departamento: 'CUNDINAMARCA',
      municipio   : 'BOGOTA',
      juzgado     : {
        origen: {
          url: 'https://www.ramajudicial.gov.co/web/juzgado-048-civil-municipal-de-bogota',
          id : '48 CM'
        },
        ejecucion: {
          url: 'https://www.ramajudicial.gov.co/web/juzgado-07-de-ejecucion-civil-municipal-de-bogota',
          id : '7 CME'
        }
      },
      ubicacion: 'JUZGADOS EJECUCION',
      radicado : '2017 - 00974'
    },
    tipoProceso  : 'SINGULAR',
    llaveProceso : '11001400304820170097400',
    etapaProcesal: 'EJECUCION',
    clase        : 'EMBARGO DE INMUEBLE',
    bien         : {
      tipo: 'APTO 104 TORRE 4',
      id  : '50S-40606676'
    }
  },
  {
    reparto: true,
    numero : 306,
    deudor : {
      cedula         : 79388145,
      primerNombre   : 'Libardo',
      segundoNombre  : 'Alfonso',
      primerApellido : 'Gonzalez',
      segundoApellido: 'Trivino',
      tel            : {
        fijo: 2928108
      },
      email    : 'li_bcar@hotmail.com',
      direccion: 'CARRERA 72 A- No 9 - 44'
    },

    obligacion: [
      '1740086734 4513073749673967',
      5303719549810730
    ],
    capitalAdeudado        : 40406421,
    entregaGarantiasAbogado: new Date(
      '2017-04-10T05:00:00.000Z',
    ),
    demanda: {
      departamento: 'CUNDINAMARCA',
      municipio   : 'BOGOTA',
      juzgado     : {
        origen: {
          url: 'https://www.ramajudicial.gov.co/web/juzgado-021-civil-municipal-de-bogota',
          id : '21 CM'
        },
        ejecucion: {
          url: 'https://www.ramajudicial.gov.co/web/juzgado-15-de-ejecucion-civil-municipal-de-bogota',
          id : '15 CME'
        }
      },
      ubicacion: 'JUZGADOS EJECUCION',
      radicado : '2017 - 01532'
    },
    tipoProceso  : 'SINGULAR',
    llaveProceso : '11001400302120170153200',
    etapaProcesal: 'EJECUCION',
    clase        : 'EMBARGO DE VEHICULO',
    bien         : {
      tipo: 'VEHICULO',
      id  : 'WLQ-216'
    }
  },
  {
    reparto: true,
    numero : 312,
    deudor : {
      cedula         : 8799171,
      primerNombre   : 'Manuel',
      segundoNombre  : 'Enrique',
      primerApellido : 'Arteaga',
      segundoApellido: 'Orozco',
      tel            : {
        fijo: 5164071
      },
      email: 'saliradelante2012@hotmail.com',
      direccion:
        'CARRERA 18 B No 4 C -  20  SOACHA'
    },
    vencimientoPagare: new Date(
      '2030-01-05T00:00:00.000Z'
    ),
    obligacion: [
      '180049   53037120066499008',
      '3778133433049336 -4513075801129044'
    ],
    capitalAdeudado        : 44944657,
    entregaGarantiasAbogado: new Date(
      '2017-10-26T00:00:00.000Z',
    ),
    demanda: {
      departamento: 'CUNDINAMARCA',
      municipio   : 'SOACHA',
      juzgado     : {
        origen: {
          url: 'https://www.ramajudicial.gov.co/web/juzgado-01-civil-municipal-de-bogota',
          id : '1 CM'
        }
      },
      ubicacion: 'REMATE DEL INMUEBLE',
      radicado : '2017 - 00323'
    },
    tipoProceso  : 'HIPOTECARIO',
    llaveProceso : '25754400300120170032300',
    etapaProcesal: 'EJECUCION',
    clase        : 'EMBARGO DE INMUEBLE',
    bien         : {
      tipo: 'APTO 101 TORRE 20',
      id  : '051-162001'
    }
  },
  {
    reparto: true,
    numero : 366,
    deudor : {
      cedula         : 79522009,
      primerNombre   : 'Jairo',
      segundoNombre  : 'Alfonso',
      primerApellido : 'Pardo',
      segundoApellido: 'Jaimes',
      tel            : {
        fijo: 7808590
      },
      email: 'jairopardo8-11-70@hotmail.com',
      direccion:
        'DIAGONAL 28 No 33-27  TORRE 7 APART 203  SOACHA'
    },

    obligacion: [
      1680097436,
      148653
    ],
    capitalAdeudado: 56987693,

    demanda: {
      departamento: 'CUNDINAMARCA',
      municipio   : 'SOACHA',
      juzgado     : {
        origen: {
          url: 'https://www.ramajudicial.gov.co/web/juzgado-04-municipal-de-pequenas-causas-y-competencia-multiple-de-soacha',
          id : '4 PCYCM'
        }
      },
      ubicacion: 'SOACHA',
      radicado : '2018 - 00060'
    },
    tipoProceso  : 'HIPOTECARIO',
    llaveProceso : '2575440030042018000600 ',
    etapaProcesal: 'EJECUCION'
  },
  {
    reparto: true,
    numero : 401,
    deudor : {
      cedula         : 79396995,
      primerNombre   : 'Arturo',
      primerApellido : 'Lince',
      segundoApellido: 'Gomez',
      tel            : {
        fijo   : 4244358,
        celular: 31088445603
      },
      email    : 'arthurlingo64@hotmail.com',
      direccion: 'CALLE 12 A No 71 B - 60'
    },

    obligacion: [
      87823
    ],
    capitalAdeudado: 22592583,

    demanda: {
      departamento: 'CUNDINAMARCA',
      municipio   : 'BOGOTA',
      juzgado     : {
        origen: {
          url: 'https://www.ramajudicial.gov.co/web/juzgado-021-civil-municipal-de-bogota',
          id : '21 CM'
        },
        ejecucion: {
          url: 'https://www.ramajudicial.gov.co/web/juzgado-13-de-ejecucion-civil-municipal-de-bogota',
          id : '13 CME'
        }
      },
      ubicacion: 'JUZGADOS EJECUCION',
      radicado : '2018 - 00236'
    },
    tipoProceso  : 'HIPOTECARIO',
    llaveProceso : '11001400302120180023600',
    etapaProcesal: 'EJECUCION',
    clase        : 'EMBARGO DE INMUEBLE',
    bien         : {
      tipo: 'CASA 176',
      id  : '50C-1645938'
    }
  },
  {
    reparto: true,
    numero : 405,
    deudor : {
      cedula        : 900545720,
      primerNombre  : 'Crea',
      segundoNombre : 'Soluciones',
      primerApellido: 'S.A.S',
      tel           : {
        fijo   : 8626344,
        celular: 3107982028
      },
      email: 'andibarracosta@gmail.com',
      direccion:
        'CARRERA 50 1# 47 - 50 INT 1 APTO 101'
    },
    codeudor: {
      cedula: 12192291,
      nombre: 'ANDRES ENRIQUE IBARRA ACOSTA',
      tel   : 8626344,
      direccion:
        'CALLE 56 # 17 - 03 CASA 65 NEIVA'
    },
    vencimientoPagare: new Date(
      '2018-06-20T00:00:00.000Z'
    ),
    obligacion: [
      4550087219
    ],
    capitalAdeudado        : 11949471,
    entregaGarantiasAbogado: new Date(
      '2018-02-15T00:00:00.000Z',
    ),
    demanda: {
      departamento: 'CUNDINAMARCA',
      municipio   : 'BOGOTA',
      juzgado     : {
        origen: {
          url: 'https://www.ramajudicial.gov.co/web/juzgado-056-civil-municipal-de-bogota',
          id : '56 CM'
        },
        ejecucion: {
          url: 'https://www.ramajudicial.gov.co/web/juzgado-07-de-ejecucion-civil-municipal-de-bogota',
          id : '7 CME'
        }
      },
      ubicacion: 'JUZGADOS EJECUCION',
      radicado : '2018 - 00221'
    },
    tipoProceso  : 'SINGULAR',
    llaveProceso : '11001400305620180022100',
    etapaProcesal: 'EJECUCION',
    clase        : 'EMBARGO DE DINEROS EN BANCOS',
    bien         : {
      tipo: 'BANCOS'
    }
  },
  {
    reparto: true,
    numero : 461,
    deudor : {
      cedula         : 52883958,
      primerNombre   : 'Leidy',
      segundoNombre  : 'Yaneth',
      primerApellido : 'Vidal',
      segundoApellido: 'Rodriguez',
      tel            : {
        fijo: 7114516
      },
      email    : 'leidyyaneth.lyv@gmail.com',
      direccion: 'DIAGONAL 2 No 21 B-20'
    },

    obligacion: [
      'AMERICAN 0377814037749057',
      'VISA 4513083943843365- MASTER 5303729958258417'
    ],
    capitalAdeudado        : 24501535,
    entregaGarantiasAbogado: new Date(
      '2018-07-05T00:00:00.000Z',
    ),
    demanda: {
      departamento: 'CUNDINAMARCA',
      municipio   : 'BOGOTA',
      juzgado     : {
        origen: {
          url: 'https://www.ramajudicial.gov.co/web/juzgado-014-de-pequenas-causas-y-competencia-multiple-de-bogota',
          id : '14 PCYCM'
        }
      },
      ubicacion: 'JARAMILLO',
      radicado : '2019 - 00656'
    },
    tipoProceso  : 'SINGULAR',
    llaveProceso : '11001418901420190065600',
    etapaProcesal: 'EJECUCION',
    clase        : 'EMBARGO DE INMUEBLE',
    bien         : {
      tipo: 'PREDIO RURAL',
      id  : '372-19300'
    }
  },
  {
    reparto: true,
    numero : 489,
    deudor : {
      cedula         : 51987570,
      primerNombre   : 'Sandra',
      segundoNombre  : 'Patricia',
      primerApellido : 'Pacheco',
      segundoApellido: 'Ramirez',
      tel            : {
        fijo: 8121692
      },
      email: 'sandrabogota2007@yahoo.com',
      direccion:
        'CALLE 163 B No 50-80  INTERIOR 10 APT 231 CONJUNTO LA ESTANCIA III'
    },

    obligacion: [
      'AUDIOPRESTAMO',
      '0377816345049476- 4513070259455355- 5303720114305077'
    ],
    capitalAdeudado        : 18100699,
    entregaGarantiasAbogado: new Date(
      '2018-03-09T05:00:00.000Z',
    ),
    demanda: {
      departamento: 'CUNDINAMARCA',
      municipio   : 'BOGOTA',
      juzgado     : {
        origen: {
          url: 'https://www.ramajudicial.gov.co/web/juzgado-08-de-pequenas-causas-laborales-de-bogota',
          id : '8 PCYCM'
        },
        ejecucion: {
          url: 'https://www.ramajudicial.gov.co/web/juzgado-05-de-ejecucion-civil-municipal-de-bogota',
          id : '5 CME'
        }
      },
      ubicacion: 'JUZGADOS EJECUCION',
      radicado : '2018 - 00785'
    },
    tipoProceso  : 'SINGULAR',
    llaveProceso : '11001418900820180078500',
    etapaProcesal: 'EJECUCION',
    clase        : 'EMBARGO DE INMUEBLE',
    bien         : {
      tipo: 'APTO 231',
      id  : '50N - 20247423'
    }
  },
  {
    reparto: true,
    numero : 494,
    deudor : {
      cedula         : 13222728,
      primerNombre   : 'Modesto',
      primerApellido : 'Pineda',
      segundoApellido: 'Perez',
      tel            : {
        fijo: 8852490
      },
      email    : 'mopadinco@yahoo.com',
      direccion: 'CARRERA 6 No 6-59'
    },

    obligacion: [
      'AUDIOPRESTAMO',
      5491570347356810
    ],
    capitalAdeudado: 27373832,

    demanda: {
      departamento: 'CUNDINAMARCA',
      municipio   : 'CHIA',
      juzgado     : {
        origen: {
          url: 'https://www.ramajudicial.gov.co/web/juzgado-003-civil-municipal-de-chia',
          id : '3 CM'
        }
      },
      ubicacion: 'CHIA',
      radicado : '2018 - 00602'
    },
    tipoProceso  : 'SINGULAR',
    llaveProceso : '25175408900320180060200',
    etapaProcesal: 'EJECUCION',
    clase        : 'EMBARGO DE INMUEBLE',
    bien         : {
      tipo: 'CASA',
      id  : 'YESID'
    }
  },
  {
    reparto: true,
    numero : 497,
    deudor : {
      cedula         : 3208569,
      primerNombre   : 'Floresmiro',
      primerApellido : 'Aponte',
      segundoApellido: 'Acosta',
      tel            : {
        fijo: 3208569
      },
      email: 'dcentro@pcpplasticos.com',
      direccion:
        'DIAGONAL 77B No 119 A-74 APTO 504 INT6'
    },
    codeudor: {
      cedula: 51955296,
      nombre: 'FLOR ANGELA RODRIGUEZ',
      tel   : 2286617,
      direccion:
        'DIAGONAL 77B No 119 A-74 APTO 504 INT6'
    },

    obligacion: [
      '20990123680  7-  377813468472239',
      '4513079359765043- 53037220341399596'
    ],
    capitalAdeudado        : 24807317,
    entregaGarantiasAbogado: new Date(
      '2018-08-10T05:00:00.000Z',
    ),
    demanda: {
      departamento: 'CUNDINAMARCA',
      municipio   : 'BOGOTA',
      juzgado     : {
        origen: {
          url: 'https://www.ramajudicial.gov.co/web/juzgado-13-de-pequenas-causas-y-competencias-multiples-de-bogota',
          id : '13 PCYCM'
        }
      },
      ubicacion: 'HMM PISO 5',
      radicado : '2019 - 00708'
    },
    tipoProceso  : 'HIPOTECARO',
    llaveProceso : '11001418901320190070800',
    etapaProcesal: 'EJECUCION',
    clase        : 'EMBARGO DE INMUEBLE',
    bien         : {
      tipo: 'APTO 504'
    }
  },
  {
    reparto: true,
    numero : 506,
    deudor : {
      cedula         : 11230400,
      primerNombre   : 'Jose',
      segundoNombre  : 'Alfonso',
      primerApellido : 'Vasquez',
      segundoApellido: 'Tovar',
      tel            : {
        celular: 3123703828
      },
      email    : 'joalvato09@hotmail.com',
      direccion: 'CALLE 2 A No 5-22 APTO 503'
    },
    vencimientoPagare: new Date(
      '2026-01-03T05:00:00.000Z'
    ),
    obligacion: [
      2490084469
    ],
    capitalAdeudado: 29416113,

    demanda: {
      departamento: 'CUNDINAMARCA',
      municipio   : 'LA CALERA',
      juzgado     : {
        origen: {
          url: 'https://www.ramajudicial.gov.co/web/juzgado-01-promiscuo-municipal-de-la-calera',
          id : '001 PM'
        }
      },
      ubicacion: 'LA CALERA',
      radicado : '2018 - 00371'
    },
    tipoProceso  : 'SINGULAR',
    llaveProceso : '25377408900120180037100',
    etapaProcesal: 'EJECUCION',
    clase        : 'EMBARGO INMUEBLES',
    bien         : {
      tipo: 'APTO 503',
      id  : '50N - 20288831'
    }
  },
  {
    reparto: true,
    numero : 529,
    deudor : {
      cedula         : 51813018,
      primerNombre   : 'Sandra',
      segundoNombre  : 'Leonor',
      primerApellido : 'Paez',
      segundoApellido: 'Murcia',
      tel            : {
        fijo   : 6139147,
        celular: 3134386087
      },
      email: 'yadelcis@hotmail.com',
      direccion:
        'KR 81 No. 127 A - 46 CONJUNTO MONTE AZUL BOGOTA'
    },
    codeudor: {
      cedula: 19299851,
      nombre: 'MARCO TULIO SANCHEZ MEDINA',
      tel   : 6139147,
      direccion:
        'KR 81 No. 127 - 46 Torre 1 Apt 401'
    },
    obligacion: [
      2020084294,
      '2020087484- 4594250317705437-5303723260933890'
    ],
    capitalAdeudado        : 35608653,
    entregaGarantiasAbogado: new Date(
      '2020-10-07T00:00:00.000Z',
    ),
    demanda: {
      departamento: 'CUNDINAMARCA',
      municipio   : 'BOGOTA',
      juzgado     : {
        origen: {
          url: 'https://www.ramajudicial.gov.co/web/juzgado-42-civil-municipal-de-bogota',
          id : '42 CM'
        }
      },
      ubicacion: 'HMM PISO 13',
      radicado : '2020 - 00535'
    },
    tipoProceso  : 'SINGULAR',
    llaveProceso : '11001400304220200053500',
    etapaProcesal: 'EJECUCION'
  },
  {
    reparto: true,
    numero : 530,
    deudor : {
      cedula        : 900520023,
      primerNombre  : 'Dimoin',
      segundoNombre : 'Colombia',
      primerApellido: 'S.A.S',
      tel           : {
        fijo: 6708086
      },
      direccion: 'AV BOYACA 63D - 26 OFICINA 103'
    },
    obligacion: [
      65886140334,
      4594260446916180
    ],
    capitalAdeudado        : 15324570,
    entregaGarantiasAbogado: new Date(
      '2020-09-05T00:00:00.000Z',
    ),
    demanda: {
      departamento: 'CUNDINAMARCA',
      municipio   : 'BOGOTA',
      juzgado     : {
        origen: {
          url: 'https://www.ramajudicial.gov.co/web/juzgado-068-civil-municipal-de-bogota',
          id : '50 PCYCM/ 68 CM'
        }
      },
      ubicacion: 'HMM PISO 15',
      radicado : '2020-1021'
    },
    tipoProceso  : 'SINGULAR',
    llaveProceso : '11001400306820200102100',
    etapaProcesal: 'CONTESTACION DEMANDA'
  },
  {
    reparto: true,
    numero : 531,
    deudor : {
      primerNombre   : 'Pedro',
      segundoNombre  : 'Jonathan',
      primerApellido : 'Ramirez',
      segundoApellido: 'Gomez'
    },
    entregaGarantiasAbogado: new Date(
      '2018-08-03T00:00:00.000Z',
    ),
    demanda: {
      departamento: 'CUNDINAMARCA',
      municipio   : 'FUSAGASUGA',
      juzgado     : {
        origen: {
          url: 'https://www.ramajudicial.gov.co/web/juzgado-003-civil-municipal-de-fusagasuga',
          id : '3 CM'
        }
      },
      ubicacion: 'PALACIO JUSTICIA',
      radicado : '2023 - 0371'
    },
    tipoProceso  : 'SINGULAR',
    etapaProcesal: 'ADMISION DE LA DEMANDA'
  },
  {
    reparto: true,
    numero : 532,
    deudor : {
      cedula         : 1023874668,
      primerNombre   : 'Oscar',
      segundoNombre  : 'Mauricio',
      primerApellido : 'Gomez',
      segundoApellido: 'Mendosa'
    },
    demanda: {
      departamento: 'CUNDINAMARCA',
      municipio   : 'BOGOTA',
      juzgado     : {
        origen: {
          url: 'https://www.ramajudicial.gov.co/web/juzgado-04-civil-municipal-de-bogota',
          id : '4 CM'
        }
      },
      radicado: '2023-622'
    },
    tipoProceso  : 'SINGULAR',
    llaveProceso : '11001400300420230062200',
    etapaProcesal: 'ADMISION DE LA DEMANDA'
  },
  {
    reparto: true,
    numero : 533,
    deudor : {
      primerNombre   : 'Jose',
      segundoNombre  : 'Alexander',
      primerApellido : 'Laverde',
      segundoApellido: 'Penagos'
    },
    demanda: {
      departamento: 'CUNDINAMARCA',
      municipio   : 'BOGOTA',
      juzgado     : {
        origen: {
          id: '83 CM 65 PCYCM'
        }
      }
    },
    tipoProceso  : 'SINGULAR',
    etapaProcesal: 'ADMISION DE LA DEMANDA'
  }
];

export const carpetasCollection = cache(
  async () => {
    const client = await clientPromise;

    if ( !client ) {
      throw new Error(
        'no hay cliente mongólico'
      );
    }

    const db = client.db(
      'RyS'
    );

    const carpetas
      = db.collection<IntCarpeta>(
        'Carpetas'
      );

    return carpetas;
  }
);

export async function GET () {
  const collection = await carpetasCollection();

  const actuacionesCollection = await actuacionesCollection()
;  const newMapCarpetas = [];
  const mapIdProcesoActuaciones = new Map();

  for ( let index = 0; index < mess.length; index++ ) {
    const rawCarpeta = mess[ index ];
    const awaitTime = index * 1000;
    sleep(
      awaitTime
    );
    const idProcesos: number[] = [];
    const actus = [];

    if ( rawCarpeta.llaveProceso ) {
      const req = await getProceso(
        {
          llaveProceso: rawCarpeta.llaveProceso
        }
      );

      for ( let i = 0; i < req.length; i++ ) {
        const proceso = req[ i ];

        const actuaciones = await getActuaciones(
          proceso.idProceso,
          awaitTime
        );
        mapIdProcesoActuaciones.set(
          proceso.idProceso,
          actuaciones[ 0 ]
        );
        actus.push(
          actuaciones[ 0 ]
        );
        idProcesos.push(
          proceso.idProceso
        );
      }

    }



    const newCarpeta: IntCarpeta = {
      numero                 : rawCarpeta.numero,
      deudor                 : rawCarpeta.deudor,
      demanda                : rawCarpeta.demanda as Demanda,
      codeudor               : rawCarpeta.codeudor,
      grupo                  : 'Bancolombia',
      fechaIngreso           : new Date(),
      reparto                : false,
      tipoProceso            : rawCarpeta.tipoProceso as TipoProceso,
      etapaProcesal          : rawCarpeta.etapaProcesal as EtapaProcesal,
      idProceso              : idProcesos,
      vencimientoPagare      : rawCarpeta.vencimientoPagare ?? new Date(),
      obligacion             : rawCarpeta.obligacion ?? [],
      entregaGarantiasAbogado: rawCarpeta.entregaGarantiasAbogado ?? new Date(),
      capitalAdeudado        : rawCarpeta.capitalAdeudado ?? 0,
      llaveProceso           : rawCarpeta.llaveProceso ?? '23',
      bien                   : rawCarpeta.bien,
      clase                  : rawCarpeta.clase ?? 'unknown'
    };

    const req = await collection.findOneAndUpdate(
      {
        llaveProceso: newCarpeta.llaveProceso
      },
      {
        $set: newCarpeta
      },
      {
        upsert        : true,
        returnDocument: 'after'
      }
    );

    if ( req.ok ) {
      newMapCarpetas.push(
        req.value
      );

      continue;
    }
    newMapCarpetas.push(
      newCarpeta
    );
  }
  console.log(
    mapIdProcesoActuaciones.values()
  );

  return new NextResponse(
    JSON.stringify(
      newMapCarpetas
    ),
    {
      status : 200,
      headers: {
        'content-type': 'application/json'
      }
    }
  );
}
