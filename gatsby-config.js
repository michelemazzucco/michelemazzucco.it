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
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-json',
    '@jacobmischka/gatsby-plugin-react-svg',
    'gatsby-plugin-styled-components'
  ],
}
