import {
  Poiret_One,
  Inter,
  Raleway,
  Josefin_Sans,
  Roboto,
} from 'next/font/google';
import localFont from 'next/font/local';

// define your variable fonts
const inter = Inter({
  subsets: ['latin-ext', 'latin'],
  variable: '--inter',
});
const josefina = Josefin_Sans({
  subsets: ['latin'],
  variable: '--josefa',
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--raleway',
});
const roboto = Roboto({
  subsets: ['latin'],
  variable: '--roboto',
  weight: [
    '100',
    '300',
    '400',
    '500',
    '700',
    '900',
  ],
});
const poiret = Poiret_One({
  weight: '400',
  variable: '--font-poiret',
  subsets: ['latin', 'latin-ext'],
});

export {
  inter,
  raleway,
  roboto,
  poiret,
  josefina,
};
