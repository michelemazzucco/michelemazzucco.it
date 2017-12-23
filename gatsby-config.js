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
    'gatsby-transformer-json'
  ],
}
