
import clientPromise from '#@/lib/mongodb';
import { IntCarpeta } from '#@/lib/types/demandados';
import { ClassDemanda } from '#@/lib/types/models/demanda';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';
import { cache } from 'react';

const newCarpetas: IntCarpeta[] = [
  {

    capitalAdeudado: 500314967,
    clase          : 'BANCOS',
    codeudor       : {
      Nombre   : 'YENY ESPERANZA ARIAS MENDIETA',
      cedula   : 52771090,
      direccion: 'CARRERA 3 # 29A - 02 LOCAL 1057'
    },
    deudor: {
      cedula        : 900212673,
      direccion     : 'CARRERA 3 # 29A - 02',
      primerApellido: 'E.U.',
      primerNombre  : 'Jencell'
    },
    fechaIngreso: new Date(
      '2023-07-20T22:40:03.252Z'
    ),
    grupo    : 'Bancolombia',
    idProceso: [
      0
    ],
    llaveProceso: '25754418900320170075500',
    numero      : 116,
    reparto     : true,
    tipoBien    : 'BANCOS',
    tipoProceso : 'SINGULAR'
  },
  {

    capitalAdeudado: 25833335,
    clase          : 'BANCOS',
    deudor         : {
      cedula         : 11185630,
      direccion      : 'CARRERA 81C # 2B - 80 PISO 2',
      email          : 'grupocomerciallasabana@hotmail.com',
      primerApellido : 'Jimenez',
      primerNombre   : 'Wilson',
      segundoApellido: 'Mendieta',
      segundoNombre  : 'Alfonso'
    },
    fechaIngreso: new Date(
      '2023-07-20T22:40:03.345Z'
    ),
    grupo    : 'Bancolombia',
    idProceso: [ ][
      50621670
    ],
    llaveProceso: '11001400300120170100100',
    numero      : 178,
    reparto     : true,
    tipoBien    : 'BANCOS',
    tipoProceso : 'SINGULAR'
  },
  {

    capitalAdeudado: '$ 27.603.821',
    clase          : 'INMUEBLE',
    deudor         : {
      cedula: 79853115,
      direccion:
        'DIAGONAL 56 BIS 84 A 10 SUR TR 1',
      email          : 'fanor.diaz@gmail.com',
      primerApellido : 'Diaz',
      primerNombre   : 'Fanor',
      segundoApellido: 'Agudelo',
      tel            : {
        celular: 3212406193,
        fijo   : 8060271
      }
    },
    fechaIngreso: new Date(
      '2023-07-20T22:40:03.423Z'
    ),
    grupo    : 'Bancolombia',
    idProceso: [
      50716620
    ],
    llaveProceso: '11001400300820170113400',
    numero      : 231,
    reparto     : true,
    tipoBien    : 'INMUEBLE',
    tipoProceso : 'HIPOTECARIO'
  },
  {

    capitalAdeudado: '$ 40.406.421',
    clase          : 'VEHICULO',
    deudor         : {
      cedula         : 79388145,
      direccion      : 'CARRERA 72 A- No 9 - 44',
      email          : 'li_bcar@hotmail.com',
      primerApellido : 'Gonzalez',
      primerNombre   : 'Libardo',
      segundoApellido: 'Triviño',
      segundoNombre  : 'Alfonso'
    },
    fechaIngreso: new Date(
      '2023-07-20T22:40:03.485Z'
    ),
    grupo    : 'Bancolombia',
    idProceso: [
      81620291,
      50769660
    ],
    llaveProceso: '11001400302120170153200',
    numero      : 306,
    obligacion  : {
      '1': '1740086734 4513073749673967',
      '2': 5303719549810730
    },
    reparto    : true,
    tipoBien   : 'VEHICULO',
    tipoProceso: 'SINGULAR'
  },
  {

    capitalAdeudado: '$ 22.592.583',
    clase          : 'CASA 176',
    deudor         : {
      cedula         : 79396995,
      direccion      : 'CALLE 12 A No 71 B - 60',
      email          : 'arthurlingo64@hotmail.com',
      primerApellido : 'Lince',
      primerNombre   : 'Arturo',
      segundoApellido: 'Gomez',
      tel            : {
        celular: 31088445603,
        fijo   : 4244358
      }
    },
    fechaIngreso: new Date(
      '2023-07-20T22:40:03.555Z'
    ),
    grupo    : 'Bancolombia',
    idProceso: [
      51029180
    ],
    llaveProceso: '11001400302120180023600',
    numero      : 401,
    reparto     : true,
    tipoBien    : 'CASA 176',
    tipoProceso : 'HIPOTECARIO'
  },
  {

    capitalAdeudado: '$ 11.949.471',
    clase          : 'BANCOS',
    codeudor       : {
      Nombre: 'ANDRES ENRIQUE IBARRA ACOSTA',
      cedula: 12192291,
      direccion:
        'CALLE 56 # 17 - 03 CASA 65 NEIVA'
    },
    deudor: {
      cedula: 900545720,
      direccion:
        'CARRERA 50 1# 47 - 50 INT 1 APTO 101',
      email          : 'andibarracosta@gmail.com',
      primerApellido : 'Soluciones',
      primerNombre   : 'Creas',
      segundoApellido: 'S.A.S',
      tel            : {
        celular: 3107982028,
        fijo   : 8626344
      }
    },
    fechaIngreso: new Date(
      '2023-07-20T22:40:03.605Z'
    ),
    grupo    : 'Bancolombia',
    idProceso: [
      51042800
    ],
    llaveProceso: '11001400305620180022100',
    numero      : 405,
    reparto     : true,
    tipoBien    : 'BANCOS',
    tipoProceso : 'SINGULAR'
  },
  {

    capitalAdeudado: 'sin especificar',
    clase          : 'sin especificar',
    deudor         : {
      primerApellido : 'Ramirez',
      primerNombre   : 'Pedro',
      segundoApellido: 'Gomez',
      segundoNombre  : 'Jonathan'
    },
    fechaIngreso: new Date(
      '2023-07-20T22:40:03.645Z'
    ),
    grupo    : 'Bancolombia',
    idProceso: [
      404
    ],
    llaveProceso: '00000000000000000000000',
    numero      : 500,
    reparto     : true,
    tipoBien    : '',
    tipoProceso : 'SINGULAR'
  },
  {

    capitalAdeudado: '$ 26.515.333',
    clase          : 'VEHICULO',
    codeudor       : {
      Nombre: 'JESICA PAOLA GUZMAN OSPINA',
      cedula: 1015435620
    },
    deudor: {
      cedula         : 1032432802,
      direccion      : 'CARRERA 95 # 138 - 58',
      email          : 'orduzcrit2@hotmail.com',
      primerApellido : 'Orduz',
      primerNombre   : 'Luis',
      segundoApellido: 'Farfan',
      segundoNombre  : 'Esneider'
    },
    fechaIngreso: new Date(
      '2023-07-20T22:40:03.684Z'
    ),
    grupo    : 'Bancolombia',
    idProceso: [
      50521480,
      81728891
    ],
    llaveProceso: '11001400303420170083600',
    numero      : 86,
    reparto     : true,
    tipoBien    : 'VEHICULO',
    tipoProceso : 'PRENDARIO'
  },

  {

    capitalAdeudado: '$ 50.000.000',
    clase          : 'BANCOS',
    deudor         : {
      cedula         : 1070329396,
      direccion      : 'CALL 2 # 8-40 EL COLEGIO',
      primerApellido : 'Quintero',
      primerNombre   : 'Erika',
      segundoApellido: 'Reyes',
      segundoNombre  : 'Alejandra'
    },
    fechaIngreso: new Date(
      '2023-07-20T22:40:03.779Z'
    ),
    grupo    : 'Bancolombia',
    idProceso: [
      0
    ],
    llaveProceso: '25245408900120170023900',
    numero      : 98,
    reparto     : true,
    tipoBien    : 'BANCOS',
    tipoProceso : 'SINGULAR'
  },
  {

    capitalAdeudado: '$ 14.795.921',
    clase          : 'INMUEBLE APTO 504',
    deudor         : {
      cedula         : 52189873,
      direccion      : 'CALLE 74G # 80 - 58 SUR',
      email          : 'darnelly-74@hotmail.com',
      primerApellido : 'Hernandez',
      primerNombre   : 'Darnelly',
      segundoApellido: 'Martinez',
      tel            : {
        celular: 3144189224,
        fijo   : 4530972
      }
    },
    fechaIngreso: new Date(
      '2023-07-20T22:40:03.793Z'
    ),
    grupo    : 'Bancolombia',
    idProceso: [
      112048180
    ],
    llaveProceso: '11001400302520170090300',
    numero      : 170,
    reparto     : true,
    tipoBien    : 'INMUEBLE APTO 504',
    tipoProceso : 'HIPOTECARIO'
  },
  {

    capitalAdeudado: '$ 12.347.548',
    clase          : 'sin especificar',
    codeudor       : {
      Nombre: 'JOSE NOEL PUERTA PUERTA',
      cedula: 4337296,
      direccion:
        'CARRERA  115 No 89 A - 31 INT 12 APART 202'
    },
    deudor: {
      cedula         : 35506033,
      direccion      : 'CARRERA  101  No 71 B - 53',
      email          : 'natis-rolita@hotmail.con',
      primerApellido : 'Puerta',
      primerNombre   : 'Luz',
      segundoApellido: 'Jaramillo',
      segundoNombre  : 'Dary',
      tel            : {
        celular: 3103430010,
        fijo   : 4357832
      }
    },
    fechaIngreso: new Date(
      '2023-07-20T22:40:03.802Z'
    ),
    grupo    : 'Bancolombia',
    idProceso: [
      112945420
    ],
    llaveProceso: '11001400303720170139100',
    numero      : 274,
    reparto     : true,
    tipoBien    : '',
    tipoProceso : 'SINGULAR'
  },
  {

    capitalAdeudado: '$ 12.249.598',
    clase          : 'APTO 104 TORRE 4',
    deudor         : {
      cedula: 1032383389,
      direccion:
        'CALLE 64 SUR  No 85 B - 40  APARTAMENTO  104',
      email          : 'ars.09@hotmail.com',
      primerApellido : 'Revelo',
      primerNombre   : 'Anderson',
      segundoApellido: 'Santos',
      tel            : {
        celular: 3118526428,
        fijo   : 4725511
      }
    },
    fechaIngreso: new Date(
      '2023-07-20T22:40:03.813Z'
    ),
    grupo    : 'Bancolombia',
    idProceso: [
      50762570
    ],
    llaveProceso: '11001400304820170097400',
    numero      : 289,
    obligacion  : {
      '1': '320088443  / 377813441863587',
      '2': 4513070212799642
    },
    reparto    : true,
    tipoBien   : 'APTO 104 TORRE 4',
    tipoProceso: 'SINGULAR'
  },

  {

    capitalAdeudado: '$ 27.373.832',
    clase          : 'CASA',
    deudor         : {
      cedula         : 13222728,
      direccion      : 'CARRERA 6 No 6-59',
      email          : 'mopadinco@yahoo.com',
      primerApellido : 'Pineda',
      primerNombre   : 'Modesto',
      segundoApellido: 'Perez'
    },
    fechaIngreso: new Date(
      '2023-07-20T22:40:03.832Z'
    ),
    grupo    : 'Bancolombia',
    idProceso: [
      0
    ],
    llaveProceso: '25175408900320180060200',
    numero      : 494,
    obligacion  : {
      '1': 'AUDIOPRESTAMO',
      '2': 5491570347356810
    },
    reparto    : true,
    tipoBien   : 'CASA',
    tipoProceso: 'SINGULAR'
  },
  {

    capitalAdeudado: '$ 35.608.653',
    clase          : 'sin especificar',
    codeudor       : {
      Nombre: 'MARCO TULIO SANCHEZ MEDINA',
      cedula: 19299851,
      direccion:
        'KR 81 No. 127 - 46 Torre 1 Apt 401'
    },
    deudor: {
      cedula: 51813018,
      direccion:
        'KR 81 No. 127 A - 46 CONJUNTO MONTE AZUL BOGOTA',
      email          : 'yadelcis@hotmail.com',
      primerApellido : 'Paez',
      primerNombre   : 'Sandra',
      segundoApellido: 'Murcia',
      segundoNombre  : 'Leonor',
      tel            : {
        celular: 3134386087,
        fijo   : 6139147
      }
    },
    fechaIngreso: new Date(
      '2023-07-20T22:40:03.843Z'
    ),
    grupo    : 'Bancolombia',
    idProceso: [
      128164881
    ],
    llaveProceso: '11001400304220200053500',
    numero      : 529,
    obligacion  : {
      '1': 2020084294,
      '2': '2020087484 // 4594250317705437 //5303723260933890'
    },
    reparto    : true,
    tipoBien   : '',
    tipoProceso: 'SINGULAR'
  },
  {

    capitalAdeudado: '$ 56.987.693',
    clase          : 'sin especificar',
    deudor         : {
      cedula: 79522009,
      direccion:
        'DIAGONAL 28 No 33-27  TORRE 7 APART 203  SOACHA',
      email          : 'jairopardo8-11-70@hotmail.com',
      primerApellido : 'Pardo',
      primerNombre   : 'Jairo',
      segundoApellido: 'jaimes',
      segundoNombre  : 'Alfonso'
    },
    fechaIngreso: new Date(
      '2023-07-20T22:40:03.852Z'
    ),
    grupo    : 'Bancolombia',
    idProceso: [
      404
    ],
    llaveProceso: '2575440030042018000600',
    numero      : 366,
    obligacion  : {
      '1': 1680097436,
      '2': 148653
    },
    reparto    : true,
    tipoBien   : '',
    tipoProceso: 'HIPOTECARIO'
  },
  {

    capitalAdeudado: '$ 44.944.657',
    clase          : 'APTO 101 TORRE 20',
    deudor         : {
      cedula: 8799171,
      direccion:
        'CARRERA 18 B No 4 C -  20  SOACHA',
      email          : 'saliradelante2012@hotmail.com',
      primerApellido : 'Arteaga',
      primerNombre   : 'Manuel',
      segundoApellido: 'Orozco',
      segundoNombre  : 'Enrique'
    },
    fechaIngreso: new Date(
      '2023-07-20T22:40:03.863Z'
    ),
    grupo    : 'Bancolombia',
    idProceso: [
      0
    ],
    llaveProceso: '25754400300120170032300',
    numero      : 312,
    obligacion  : {
      '1': '180049   53037120066499008',
      '2': '3778133433049336 /4513075801129044'
    },
    reparto    : true,
    tipoBien   : 'APTO 101 TORRE 20',
    tipoProceso: 'HIPOTECARIO'
  },
  {

    capitalAdeudado: '$ 18.100.699',
    clase          : 'APTO 231',
    deudor         : {
      cedula: 51987570,
      direccion:
        'CALLE 163 B No 50-80  INTERIOR 10 APT 231 CONJUNTO LA ESTANCIA III',
      email          : 'sandrabogota2007@yahoo.com',
      primerApellido : 'Pacheco',
      primerNombre   : 'Sandra',
      segundoApellido: 'Ramirez',
      segundoNombre  : 'Patricia'
    },
    fechaIngreso: new Date(
      '2023-07-20T22:40:03.871Z'
    ),
    grupo    : 'Bancolombia',
    idProceso: [
      87350810
    ],
    llaveProceso: '11001418900820180078500',
    numero      : 489,
    obligacion  : {
      '1': 'AUDIOPRESTAMO',
      '2': '0377816345049476 // 4513070259455355 // 5303720114305077'
    },
    reparto    : true,
    tipoBien   : 'APTO 231',
    tipoProceso: 'SINGULAR'
  },
  {

    capitalAdeudado: '$ 29.416.113',
    clase          : 'APTO 503',
    deudor         : {
      cedula         : 11230400,
      direccion      : 'CALLE 2 A # 5-22 APTO 503',
      email          : 'joalvato09@hotmail.com',
      primerApellido : 'Vasquez',
      primerNombre   : 'Jose',
      segundoApellido: 'Tovar',
      segundoNombre  : 'Alfonso'
    },
    fechaIngreso: new Date(
      '2023-07-20T22:40:03.879Z'
    ),
    grupo    : 'Bancolombia',
    idProceso: [
      0
    ],
    llaveProceso: '25377408900120180037100',
    numero      : 506,
    reparto     : true,
    tipoBien    : 'APTO 503',
    tipoProceso : 'SINGULAR'
  },
  {

    capitalAdeudado: '$ 66.362.959',
    clase          : 'CASA',
    codeudor       : {
      Nombre: [
        'CARMELINA AGUILAR ',
        ' ANA LUCIA AGUILAR'
      ],
      cedula: [
        41759787,
        39710157
      ],
      direccion: 'DG 3B No. 0-78 ESTE',
      tel      : {
        celular: 3204613419,
        fijo   : 3107627120
      }
    },
    deudor: {
      cedula         : 19255260,
      direccion      : 'CALLE 2 C No 62 - 20',
      email          : 'maifren_13@yahoo.es',
      primerApellido : 'Avila',
      primerNombre   : 'Matias',
      segundoApellido: 'Aguilar',
      segundoNombre  : 'Humberto',
      tel            : {
        celular: 3125024008,
        fijo   : 4170527
      }
    },
    fechaIngreso: new Date(
      '2023-07-20T22:40:03.888Z'
    ),
    grupo    : 'Bancolombia',
    idProceso: [
      50777890
    ],
    llaveProceso: '11001400301520170139400',
    numero      : 278,
    reparto     : true,
    tipoBien    : 'CASA',
    tipoProceso : 'HIPOTECARIO'
  },
  {

    capitalAdeudado: '$ 24.501.535',
    clase          : 'PREDIO RURAL',
    deudor         : {
      cedula         : 52883958,
      direccion      : 'DIAGONAL 2 # 21 B-20',
      email          : 'leidyyaneth.lyv@gmail.com',
      primerApellido : 'Vidal',
      primerNombre   : 'Leidy',
      segundoApellido: 'Rodriguez',
      segundoNombre  : 'Yaneth'
    },
    fechaIngreso: new Date(
      '2023-07-20T22:40:03.897Z'
    ),
    grupo    : 'Bancolombia',
    idProceso: [
      51816100,
      135801811
    ],
    llaveProceso: '11001418901420190065600',
    numero      : 461,
    obligacion  : {
      '1': 'AMERICAN 0377814037749057',
      '2': 'VISA 4513083943843365 // MASTER 5303729958258417'
    },
    reparto    : true,
    tipoBien   : 'PREDIO RURAL',
    tipoProceso: 'SINGULAR'
  },

  {

    capitalAdeudado: '$ 24.807.317',
    clase          : 'APTO 504',
    codeudor       : {
      Nombre: 'FLOR ANGELA RODRIGUEZ',
      cedula: 51955296,
      direccion:
        'DIAGONAL 77B No 119 A-74 APTO 504 INT6'
    },
    deudor: {
      cedula: 3208569,
      direccion:
        'DIAGONAL 77B No 119 A-74 APTO 504 INT6',
      email          : 'dcentro@pcpplasticos.com',
      primerApellido : 'Aponte',
      primerNombre   : 'Floresmiro',
      segundoApellido: 'Acosta'
    },
    fechaIngreso: new Date(
      '2023-07-20T22:40:03.915Z'
    ),
    grupo    : 'Bancolombia',
    idProceso: [
      0
    ],
    llaveProceso: '11001418901320190070800',
    numero      : 497,
    obligacion  : {
      '1': '20990123680  7/  377813468472239',
      '2': '4513079359765043 // 53037220341399596'
    },
    reparto    : true,
    tipoBien   : 'APTO 504',
    tipoProceso: 'HIPOTECARIO'
  },
  {

    capitalAdeudado: '$ 15.324.570',
    clase          : 'sin especificar',
    deudor         : {
      cedula         : 900520023,
      direccion      : 'AV BOYACA 63D - 26 OFICINA 103',
      primerApellido : 'Colombia',
      primerNombre   : 'Dimoin',
      segundoApellido: 'S.A.S'
    },
    fechaIngreso: new Date(
      '2023-07-20T22:40:03.925Z'
    ),
    grupo    : 'Bancolombia',
    idProceso: [
      112628300
    ],
    llaveProceso: '11001400306820200102100',
    numero      : 530,
    obligacion  : {
      '1': 65886140334,
      '2': 4594260446916180
    },
    reparto    : true,
    tipoBien   : '',
    tipoProceso: 'SINGULAR'
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



  const newMapCarpetas = newCarpetas.map(
    (
      carpeta
    ) => {


      const classesita = new ClassDemanda(
        carpeta
      );

      return classesita;


    }
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
