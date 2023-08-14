export type Styles = {
  animatetop: string;
  body: string;
  content: string;
  footer: string;
  header: string;
  modal: string;
  wrapper: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
