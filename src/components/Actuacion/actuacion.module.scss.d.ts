export type Styles = {
  actuacion: string;
  anotacion: string;
  container: string;
  content: string;
  date: string;
  links: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
