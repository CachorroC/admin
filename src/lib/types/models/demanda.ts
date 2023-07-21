import { IntCarpeta, Deudor, Codeudor, TipoProceso, Obligacion } from '../demandados';
import { Demanda } from './Mess';




export class ClassDemanda
implements IntCarpeta {

  deudor: Deudor;
  numero: number;
  capitalAdeudado: number | string;
  fechaIngreso: Date  ;
  reparto: boolean;
  codeudor: Codeudor | undefined;
  tipoProceso: TipoProceso;
  tipoBien: string;
  obligacion?: Obligacion;
  llaveProceso: string;
  idProceso: number[];
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
      grupo
    }: {
    numero: number;
    deudor: Deudor;
    idProceso:  number[];
    capitalAdeudado: number | string;
    fechaIngreso: Date| string;
    reparto: boolean;
    clase: string;
    grupo: string;
    tipoProceso: TipoProceso;
    tipoBien: string;
    llaveProceso: string;
    codeudor?: Codeudor;
        obligacion?: Obligacion;

  }
  ) {
    this.deudor = deudor;
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
}

function getConsecutivo(): number {
  const procesos = 800;

  return procesos;
}
