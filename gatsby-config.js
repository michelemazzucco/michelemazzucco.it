module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    siteUrl: 'https://www.michelemazzucco.it/'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: './src/data/'
      }
    },{
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './static/favicon.png',
        injectHTML: true,
        icons: {
          android: false,
          appleIcon: false,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: false,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-113472346-1',
        anonymize: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Michele Mazzucco',
        short_name: 'Michele Mazzucco | In',
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
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-json',
    '@jacobmischka/gatsby-plugin-react-svg',
    'gatsby-plugin-styled-components'
  ],
}
