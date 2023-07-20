import {
  BienIncautado,
  Codeudor,
  Deudor,
  Tipo
} from '../demandados';

export class Demanda {
  deudor: Deudor;
  numero: number;
  capitalAdeudado: number;
  fechaIngreso: string | Date;
  reparto: boolean;
  codeudor: Codeudor | undefined;
  tipoProceso: string | undefined;
  tipoBien: string | undefined;
  obligacion: number[] | undefined;
  llaveProceso: string | undefined;
  grupo: string | undefined;
  clase: string | undefined;
  constructor({
    deudor,
    numero = getConsecutivo(),
    capitalAdeudado,
    fechaIngreso = new Date(),
    reparto = false,
    codeudor,
    clase,
    grupo,
    tipoProceso,
    tipoBien,
    obligacion,
    llaveProceso
  }: {
    deudor: Deudor;
    numero: number;
    capitalAdeudado: number;
    fechaIngreso: Date | string;
    reparto: boolean;
    clase?: string;
    grupo?: string;
    codeudor?: Codeudor;
    tipoProceso?: Tipo;
    tipoBien?: BienIncautado;
    obligacion?: number[];
    llaveProceso?: string;
  }) {
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
  }
}
const YesidAlbeiro = new Demanda();

function getConsecutivo(): number {
  const procesos = 800;

  return procesos;
}
