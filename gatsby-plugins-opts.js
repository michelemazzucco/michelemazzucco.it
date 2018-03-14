require('dotenv').config()

const fs = {
  name: 'data',
  path: './src/data/'
}

const ga = {
  trackingId: 'UA-113472346-1',
  anonymize: true,
}

const fv = {
  logo: './src/assets/favicon.png',
  injectHTML: true,
  icons: {
    android: true,
    appleIcon: true,
    appleStartup: false,
    coast: false,
    favicons: true,
    firefox: false,
    twitter: true,
    yandex: false,
    windows: false
  }
}

const sn = {
  dsn: process.env.SENTRY_DSN,
}

const mf = {
  name: 'Michele Mazzucco',
  short_name: 'MHL MZZ',
  start_url: '/',
  background_color: '#f7f0eb',
  theme_color: '#a2466c',
  display: 'minimal-ui',
  icons: [
    {
      src: '/favicons/favicon-16x16.png',
      sizes: '16x16',
      type: 'image/png'
    },
    {
      src: '/favicons/favicon-32x32.png',
      sizes: '32x32',
      type: 'image/png'
    }
  ]
}

module.exports = { fs, ga, fv, sn, mf }
