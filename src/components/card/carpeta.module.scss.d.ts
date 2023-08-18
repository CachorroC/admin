export type Styles = {
  card: string;
  cardBack: string;
  cardFront: string;
  cardInner: string;
  cardIsActive: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
