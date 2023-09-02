import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  const prefix
    = process.env.NODE_ENV === 'production'
      ? 'app'
      : 'beta';

  const url = `https://${ prefix }.rsasesorjuridico.com`;

  return {
    short_name      : 'RyS',
    name            : 'R&S Asesoria Juridica Especializada S.A.S',
    orientation     : 'any',
    dir             : 'ltr',
    scope           : '/',
    background_color: '#202b3a',
    theme_color     : '#7aa4dd',
    display         : 'standalone',
    start_url       : url,
    description:
      'Somos una firma legal comprometida con brindar something',
    display_override: [
      'standalone',
      'fullscreen',
      'minimal-ui',
      'browser'
    ],
    shortcuts: [
      {
        name: 'Procesos',
        url : '/Procesos'
      },
      {
        name: 'Nueva Nota',
        url : '/NuevaNota'
      }
    ],
    icons: [
      {
        src  : '/icons/android-chrome-192x192.png',
        sizes: '192x192',
        type : 'any'
      },
      {
        src  : '/icons/android-chrome-512x512.png',
        sizes: '512x512',
        type : 'any'
      },
      {
        src  : '/icons/apple-touch-icon-120x120-precomposed.png',
        sizes: '120x120',
        type : 'any'
      },
      {
        src  : '/icons/apple-touch-icon-120x120.png',
        sizes: '120x120',
        type : 'any'
      },
      {
        src  : '/icons/apple-touch-icon-152x152-precomposed.png',
        sizes: '152x152',
        type : 'any'
      },
      {
        src  : '/icons/apple-touch-icon-152x152.png',
        sizes: '152x152',
        type : 'any'
      },
      {
        src  : '/icons/apple-touch-icon-180x180-precomposed.png',
        sizes: '180x180',
        type : 'any'
      },
      {
        src  : '/icons/apple-touch-icon-180x180.png',
        sizes: '180x180',
        type : 'any'
      },
      {
        src  : '/icons/apple-touch-icon-60x60-precomposed.png',
        sizes: '60x60',
        type : 'any'
      },
      {
        src  : '/icons/apple-touch-icon-60x60.png',
        sizes: '60x60',
        type : 'any'
      },
      {
        src  : '/icons/apple-touch-icon-76x76-precomposed.png',
        sizes: '76x76',
        type : 'any'
      },
      {
        src : '/icons/apple-touch-icon-76x76.png',
        type: 'monochrome'
      },
      {
        src : '/icons/apple-touch-icon-precomposed.png',
        type: 'any'
      },
      {
        src : '/icons/apple-touch-icon.png',
        type: 'any'
      },
      {
        src  : '/icons/favicon-16x16.png',
        sizes: '16x16',
        type : 'any'
      },
      {
        src  : '/icons/favicon-194x194.png',
        sizes: '192x192',
        type : 'any'
      },
      {
        src  : '/icons/favicon-32x32.png',
        sizes: '32x32',
        type : 'any'
      },
      {
        src : '/icons/favicon.png',
        type: 'any'
      },
      {
        src    : '/icons/mstile-144x144.png',
        sizes  : '144x144',
        type   : 'any',
        purpose: 'maskable'
      },
      {
        src    : '/icons/mstile-150x150.png',
        sizes  : '150x150',
        type   : 'any',
        purpose: 'maskable'
      },
      {
        src    : '/icons/mstile-310x150.png',
        sizes  : '310x150',
        type   : 'any',
        purpose: 'maskable'
      },
      {
        src    : '/icons/mstile-310x310.png',
        sizes  : '310x310',
        type   : 'any',
        purpose: 'maskable'
      },
      {
        src    : '/icons/mstile-70x70.png',
        sizes  : '70x70',
        type   : 'png',
        purpose: 'maskable'
      },
      {
        src    : '/icons/mstile-70x70.png',
        sizes  : '70x70',
        type   : 'image/png',
        purpose: 'maskable'
      },
      {
        src    : 'icons/mstile-144x144.png',
        sizes  : '144x144',
        type   : 'image/png',
        purpose: 'maskable'
      },
      {
        src    : 'icons/favicon-16x16.png',
        sizes  : '16x16',
        type   : 'image/png',
        purpose: 'badge'
      },
      {
        src    : 'icons/favicon-32x32.png',
        sizes  : '32x32',
        type   : 'image/png',
        purpose: 'badge'
      },
      {
        src    : 'icons/android-chrome-192x192.png',
        sizes  : '192x192',
        type   : 'image/png',
        purpose: 'monochrome'
      },
      {
        src    : 'icons/favicon-194x194.png',
        sizes  : '194x194',
        type   : 'image/png',
        purpose: 'monochrome'
      },
      {
        src    : 'icons/android-chrome-512x512.png',
        sizes  : '512x512',
        type   : 'image/png',
        purpose: 'maskable'
      }
    ]
  };
}
