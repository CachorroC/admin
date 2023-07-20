import { Codeudor, Deudor, Tipo } from './Mess';

export class ClassDemanda {
  deudor: Deudor;
  numero: number;
  capitalAdeudado: number | string;
  fechaIngreso: string | Date;
  reparto: boolean;
  codeudor: Codeudor | undefined;
  tipoProceso: string;
  tipoBien: string;
  obligacion?:
    | number[]
    | { [key: string]: number | string };
  llaveProceso: string;
  idProceso: number | number[];
  grupo: string;
  clase: string;
  constructor(
    {
      numero = getConsecutivo(),
      deudor,
      idProceso,
      capitalAdeudado,
      fechaIngreso = new Date(),
      reparto = false,
      codeudor,
      tipoProceso,
      tipoBien,
      obligacion,
      llaveProceso,
      clase,
      grupo,
    }: {
      numero: number;
    deudor: Deudor;
    idProceso: number | number[]
    capitalAdeudado: number | string;
    fechaIngreso: Date | string;
    reparto: boolean;
    clase: string;
    grupo: string;
    tipoProceso: string;
    tipoBien: string;
    llaveProceso: string;
    codeudor?: Codeudor;
    obligacion?:
      | number[]
      | { [key: string]: number | string };
  }
  ) {
    this.deudor = deudor;
    this.numero = numero;
    this.capitalAdeudado = capitalAdeudado;
    this.fechaIngreso = fechaIngreso;
    this.reparto = reparto;
    this.clase = clase;
    this.grupo = grupo;
    this.codeudor = codeudor;
    this.tipoProceso = tipoProceso;
    this.tipoBien = tipoBien;
    this.obligacion = obligacion;
    this.llaveProceso = llaveProceso;
    this.idProceso = idProceso;
  }
}

function getConsecutivo(): number {
  const procesos = 800;

  return procesos;
}
