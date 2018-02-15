const { fs, ga, fv, mf } = require('./gatsby-plugins-opts.js')

module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    siteUrl: 'https://www.michelemazzucco.it/'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: fs
    },{
      resolve: 'gatsby-plugin-google-analytics',
      options: ga
    },{
      resolve: 'gatsby-plugin-favicon',
      options: fv
    },{
      resolve: 'gatsby-plugin-manifest',
      options: mf
    },
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-json',
    '@jacobmischka/gatsby-plugin-react-svg',
    'gatsby-plugin-styled-components'
  ],
}
