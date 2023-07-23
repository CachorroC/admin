import { IntCarpeta,
         Deudor,
         Codeudor,
         TipoProceso } from '../demandados';

export class ClassDemanda implements IntCarpeta {
  deudor: Deudor;
  numero: number;
  capitalAdeudado: number | string;
  fechaIngreso: Date;
  reparto: boolean;
  codeudor: Codeudor | undefined;
  tipoProceso: TipoProceso;
  tipoBien: string;
  obligacion?: Obligacion;
  llaveProceso: string;
  grupo: string;
  clase: string;
  constructor({ numero = getConsecutivo(), deudor, capitalAdeudado, fechaIngreso = new Date(), reparto = false, codeudor, tipoProceso, tipoBien, obligacion, llaveProceso, clase, idProceso, grupo}: { numero: number; deudor: Deudor; idProceso: number[]; capitalAdeudado: number | string; fechaIngreso: Date | string; reparto: boolean; clase: string; grupo: string; tipoProceso: TipoProceso; tipoBien: string; llaveProceso: string; codeudor?: Codeudor; obligacion?: (number | string)[];}) {this.deudor = deudor;
    this.numero = numero;
    this.capitalAdeudado = capitalAdeudado;
    this.fechaIngreso = new Date(
      fechaIngreso
    );
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

  set idProceso (
    x: number[]
  ) {
    this.idProceso = x;
  }

  get idProceso () {
    return this.idProceso;
  }
  get llaveProceso () {
    return this.llaveProceso;
  }
}

function getConsecutivo(): number {
  const procesos = 800;

  return procesos;
}
