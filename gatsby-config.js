const { 
  filesystem, 
  ga, 
  favicon, 
  manifest 
} = require('./gatsby-plugins-opts.js')

module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    siteUrl: 'https://www.michelemazzucco.it/'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: filesystem
    },{
      resolve: 'gatsby-plugin-google-analytics',
      options: ga
    },{
      resolve: 'gatsby-plugin-favicon',
      options: favicon
    },{
      resolve: 'gatsby-plugin-manifest',
      options: manifest
    },
    'gatsby-plugin-react-next',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-json',
    '@jacobmischka/gatsby-plugin-react-svg',
    'gatsby-plugin-styled-components'
  ],
}
