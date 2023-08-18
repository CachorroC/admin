export type Styles = {
  accordion: string;
  button: string;
  buttonTextHelper: string;
  content: string;
  isDone: string;
  notDone: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
