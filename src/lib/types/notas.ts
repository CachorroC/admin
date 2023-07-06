import { WithId } from 'mongodb';

export interface intNotaFormValues {
  nota: string;
  tareas: Tarea[];
}

export interface Tarea {
  tarea: string;
  isDone: boolean;
  dueDate: string;
}

export interface intNota
  extends intNotaFormValues {
  llaveProceso: string;
  pathname: string;
  fecha: string;
}

export interface monNota extends intNota {
  _id: string;
}

export class ConvertNotas {
  public static toMonNota(
    json: string
  ): monNota[] {
    return JSON.parse (json);
  }
  public static monNotaToJson(
    value: monNota[]
  ): string {
    return JSON.stringify (value);
  }
}

export class ConvertNota {
  public static toMonNota(json: string): monNota {
    return JSON.parse (json);
  }
  public static monNotaToJson(
    value: monNota
  ): string {
    return JSON.stringify (value);
  }
  public static toTarea(json: string): Tarea {
    return JSON.parse (json);
  }
  public static tareaToJson(
    value: Tarea
  ): string {
    return JSON.stringify (value);
  }
}
