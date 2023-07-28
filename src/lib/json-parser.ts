type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONObject
  | JSONArray;
type JSONObject = { [key: string]: JSONValue };
type JSONArray = JSONValue[];

class JSONParser {
  private pos = 0;
  private input: string;

  constructor(
    input: string 
  ) {
    this.input = input;
  }
  // Parsing functions will be defined here
}
