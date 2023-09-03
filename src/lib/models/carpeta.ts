import { Category,
         intDemanda,
         intDeudor,
         IntCarpeta,
         TipoProceso,
         intTel } from '../types/carpeta';

export class Tel implements intTel {
  fijo: number | null;
  celular: number | null;
  constructor(
    telefono: string 
  ) {
    const celularStringArray
      = telefono.match(
        /\d{10}/g 
      );

    const fijoStringArray
      = telefono.match(
        /\d{7}\s/g 
      );

    const celularNumber = celularStringArray?.map(
      (
        f 
      ) => {
        return Number(
          f 
        );
      }
    );

    const fijoNumber = fijoStringArray?.map(
      (
        f 
      ) => {
        return Number(
          f 
        );
      }
    );

    this.fijo = fijoNumber
      ? fijoNumber[ 0 ]
      : null;
    this.celular = celularNumber
      ? celularNumber[ 0 ]
      : null;
  }
}
class Deudor implements intDeudor {
  constructor(
    cedula: number | string,
    tel: { fijo: number; celular: number },
    primerNombre: string,
    primerApellido: string,
    segundoNombre?: string,
    segundoApellido?: string,
    direccion?: string,
    email?: string
  ) {
    this.tel = {
      fijo   : tel.fijo,
      celular: tel.celular
    };
    this.primerNombre = primerNombre;
    this.segundoNombre = segundoNombre;
    this.primerApellido = primerApellido;
    this.segundoApellido = segundoApellido;
    this.cedula = Number(
      cedula 
    );
    this.direccion = direccion;
    this.email = email;
  }
  tel: intTel;
  primerNombre: string;
  segundoNombre?: string | undefined;
  primerApellido: string;
  segundoApellido?: string | undefined;
  cedula: number | null;
  direccion?: string | undefined;
  email?: string | undefined;
}
class Carpeta implements IntCarpeta {
  constructor(
    category: Category,
    numero: number,
    llaveProceso: string,
    tipoProceso: TipoProceso,
    idProceso?: number | undefined
  ) {
    const categories = [
      'nn',
      'Bancolombia',
      'Reintegra',
      'LiosJuridicos',
      'Insolvencia',
      'Terminados'
    ];
    this.category = category;
    this.numero = numero;
    this.llaveProceso = llaveProceso;
    ( this.idProceso = idProceso ),
    ( this.tipoProceso = tipoProceso );
    this.categoryTag
      = categories.indexOf(
        category 
      );
  }
  demanda: Demanda;
  deudor: Deudor;
  categoryTag: number;

  numero: number;
  category: Category;
  llaveProceso: string;
  tipoProceso: TipoProceso;
  idProceso?: number | undefined;
  lastModified?: Date | undefined;
}
