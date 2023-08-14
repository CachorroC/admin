export type Styles = {
  cardBack: string;
  cardFront: string;
  container: string;
  content: string;
  date: string;
  dummytxt: string;
  error: string;
  icon: string;
  isActive: string;
  link: string;
  linkIsActive: string;
  links: string;
  notActive: string;
  sub: string;
  title: string;
  tooltiptext: string;
  updated: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
