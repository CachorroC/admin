import '#@/styles/globals.css';
import 'material-symbols';
import type { Metadata } from 'next';
import Script from 'next/script';
import { inter,
         josefina,
         poiret,
         raleway,
         roboto } from '#@/styles/fonts/fonts';
import { ReactNode } from 'react';
import { SearchProvider } from './search-context';
import { ModalProvider } from './modal-context';
import { NoteProvider } from './notes-context';
import styles from '#@/styles/layout.module.css';
import typography from '#@/styles/fonts/typography.module.css';
import { NoteSliderProvider } from './context/note-slider-context';

const hostname
  = process.env.URL
  ?? process.env.NODE_ENV === 'development'
    ? 'beta.rsasesorjuridico.com'
    : 'app.rsasesorjuridico.com';

export const metadata: Metadata = {
  metadataBase: new URL(
    `https://${ hostname }`
  ),
  title          : 'R&S Asesoría Jurídica',
  description    : 'Generated by create next app',
  generator      : 'R&S Asesoría Jurídica',
  applicationName: 'R&S Asesoría Jurídica',
  referrer       : 'origin-when-cross-origin',
  keywords       : [
    'Next.js',
    'React',
    'JavaScript'
  ],
  authors: [
    {
      name: 'cam'
    },
    {
      name: 'Cachorro Cami',
      url : `https://${ hostname }`
    }
  ],
  colorScheme: 'light dark',
  themeColor : [
    {
      media: '(prefers-color-scheme: light)',
      color: '#bb152c'
    },
    {
      media: '(prefers-color-scheme: dark)',
      color: '#ab2a64'
    }
  ],
  creator        : 'Cachorro Cami',
  manifest       : `https://${ hostname }/manifest.webmanifest`,
  publisher      : 'CachorroC',
  alternates     : {},
  formatDetection: {
    email    : false,
    address  : false,
    telephone: false
  },
  openGraph: {
    title: 'R&S Asesoría Jurídica',
    description:
      'The React Framework for the Web',
    url     : `https://${ hostname }`,
    siteName: 'Next.js',
    images  : [
      {
        url   : `https://${ hostname }/splash_screens/12.9__iPad_Pro_portrait.png`,
        width : 800,
        height: 600
      },
      {
        url   : `https://${ hostname }/splash_screens/8.3__iPad_Mini_landscape.png`,
        width : 1800,
        height: 1600,
        alt   : 'My custom alt'
      }
    ],
    locale: 'es-CO',
    type  : 'website'
  },
  icons: {
    icon: [
      {
        url: '/icons/favicon.png'
      },
      new URL(
        '/favicon.svg',
        `https://${ hostname }`
      )
    ],
    shortcut: '/safari-pinned-tab.svg',
    apple   : '/icons/apple-touch-icon.png',
    other   : {
      rel: 'apple-touch-icon-precomposed',
      url: '/icons/apple-touch-icon-precomposed.png'
    }
  },
  appleWebApp: {
    title         : 'Apple Web App',
    statusBarStyle: 'black-translucent',
    startupImage  : [
      '/icons/mstile-310x310.png',
      {
        url: '/icons/android-chrome-512x512.png',
        media:
          '(device-width: 768px) and (device-height: 1024px)'
      }
    ]
  },
  appLinks: {
    web: {
      url            : `https://${ hostname }`,
      should_fallback: true
    }
  }
};

export default function RootLayout(
  {
    children,
    modal,
    header
  }: {
  children: ReactNode;
  modal: ReactNode;
  header: ReactNode;
}
) {
  return (
    <html lang='en'>
      <body
        className={`${ poiret.variable } ${ raleway.variable } ${ inter.variable } ${ roboto.variable } ${ josefina.variable } [ color-scheme: light dark ]`}
      >
        <NoteSliderProvider>
          <SearchProvider>
            <ModalProvider>
              <NoteProvider>
                <div
                  className={`${ styles.container } ${ typography.container }`}
                >
                  {modal} {header} {children}
                </div>
              </NoteProvider>
            </ModalProvider>
          </SearchProvider>
        </NoteSliderProvider>
        <Script src='/service-worker.js' />
      </body>
    </html>
  );
}
