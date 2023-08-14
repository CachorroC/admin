export type Styles = {
  accordion: string;
  content: string;
  isActive: string;
  isDone: string;
  notDone: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
