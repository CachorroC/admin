import { MongoClient, WithId } from 'mongodb';

declare global {
  var _mongoClientPromise: Promise<MongoClient>;
}

export interface intDemandado {
  llaveProceso: string;
  sujetosProcesales: string;
  idProceso: number;
}
export interface monDemandado extends WithId<Document> {
  llaveProceso: string;
  sujetosProcesales: string;
  idProceso: number;
}

export interface intFecha extends monDemandado {
  fecha: string;
}

export interface intUri {
  host: string;
  searchParams: string;
  port: number;
  hostname: string;
}