module.exports = {
  siteMetadata: {
    title: 'Michele Mazzucco | Multidisciplinary designer'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`
      }
    },{
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/img/favicon.png',
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
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-json',
    '@jacobmischka/gatsby-plugin-react-svg',
    'gatsby-plugin-styled-components'
  ],
}
