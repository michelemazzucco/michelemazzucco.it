import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Intro from '../components/Intro'

const IndexPage = ({ data }) =>
  <div>
    <Helmet title={data.site.siteMetadata.title} />
    <Intro fixed={true} />
  </div>

export default IndexPage

export const indexQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
