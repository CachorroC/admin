import { WithId } from 'mongodb';

export interface intNotaFormValues {
  nota: string;
  tareas: {
    tarea: string;
    isDone: boolean;
    dueDate: string;
  }[];
}

export interface intNota extends intNotaFormValues {
  llaveProceso: string;
  pathname: string;
  fecha: string;
}
export interface idk extends WithId {
  llaveProceso: string;
  pathname: string;
  fecha: string;
  nota: string;
  tareas: {
    tarea: string;
    isDone: boolean;
    dueDate: string;
  }[];
}

export interface monNota extends intNota {
  _id: string;
}
// To parse this data:
//
//   import { Convert, Nota } from "./file";
//
//   const nota = Convert.toNota(json);

export interface Nota {
  notas: nintNota[];
}

export interface nintNota {
  nota: string;
  tareas?: intTarea[];
}

export interface intTarea {
  tarea: string;
  isDone: boolean;
  dueDate: Date;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toNota (
    json: string
  ): Nota {
    return JSON.parse(
      json
    );
  }

  public static notaToJson (
    value: Nota
  ): string {
    return JSON.stringify(
      value
    );
  }
}
