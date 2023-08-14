export type Styles = {
  container: string;
  date: string;
  icon: string;
  input: string;
  inputForm: string;
  isActive: string;
  notActive: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
