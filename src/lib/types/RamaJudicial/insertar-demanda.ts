// To parse this data:
//
//   import { Convert, InsertarDemandaPostResponse } from "./file";
//
//   const insertarDemandaPostResponse = Convert.toInsertarDemandaPostResponse(json);

export interface InsertarDemandaPostResponse {
  data: boolean;
  error: string;
  rload: boolean;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toInsertarDemandaPostResponse(
    json: string
  ): InsertarDemandaPostResponse {
    return JSON.parse(
      json 
    );
  }

  public static insertarDemandaPostResponseToJson(
    value: InsertarDemandaPostResponse
  ): string {
    return JSON.stringify(
      value 
    );
  }
}
