export type Styles = {
  cardBack: string;
  cardFront: string;
  container: string;
  content: string;
  date: string;
  divider: string;
  dummytxt: string;
  error: string;
  icon: string;
  isActive: string;
  label: string;
  link: string;
  linkIsActive: string;
  links: string;
  notActive: string;
  section: string;
  sub: string;
  title: string;
  titleInput: string;
  tooltiptext: string;
  updated: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
