export type Styles = {
  actuacion: string;
  anotacion: string;
  anotascion: string;
  card: string;
  container: string;
  content: string;
  date: string;
  divider: string;
  dummytxt: string;
  error: string;
  fecha: string;
  icon: string;
  isActive: string;
  link: string;
  linkIsActive: string;
  links: string;
  notActive: string;
  section: string;
  sub: string;
  title: string;
  tooltiptext: string;
  updated: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
