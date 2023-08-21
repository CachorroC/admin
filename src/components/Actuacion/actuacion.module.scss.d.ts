export type Styles = {
  actuacion: string;
  anotacion: string;
  container: string;
  date: string;
  fecha: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
