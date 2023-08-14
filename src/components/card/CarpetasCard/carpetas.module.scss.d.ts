export type Styles = {
  button: string;
  card: string;
  cardActive: string;
  cardInactive: string;
  container: string;
  content: string;
  date: string;
  dummytxt: string;
  icon: string;
  links: string;
  section: string;
  sub: string;
  title: string;
  tooltiptext: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
