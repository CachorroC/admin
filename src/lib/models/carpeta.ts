import { Category, Demanda, Deudor, IntCarpeta, TipoProceso } from '../types/carpeta';

class Carpeta implements IntCarpeta{
  constructor (
    category: Category, numero: number, llaveProceso: string, tipoProceso: TipoProceso, idProceso?: number | undefined
  ) {
    this.category = category;
    this.numero = numero;
    this.llaveProceso = llaveProceso;
    this.idProceso = idProceso,
    this.tipoProceso = tipoProceso;


  }
  categoryTag!: number;
  numero: number;
  category: Category;
  llaveProceso: string;
  tipoProceso: TipoProceso;
  demanda!: Demanda;
  deudor!: Deudor;
  idProceso?: number | undefined;
  lastModified?: Date | undefined;
}