module.exports = {
  siteMetadata: {
    title: 'Michele Mazzucco | Multidisciplinary designer'
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/img/`
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-json',
    '@jacobmischka/gatsby-plugin-react-svg'
  ],
}
