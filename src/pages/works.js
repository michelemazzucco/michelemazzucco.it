import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import WorksContent from '../components/WorksContent'

const worksQuery = graphql`
  query WorksQuery {
    works: allWorksJson {
      edges {
        work: node {
          title,
          category,
          collaborators,
          client,
          year,
          url,
          featured,
          image {
            src
            sources {
              media
              srcset
            }
          }
        }
      }
    }
  }
`

export default ({ location }) =>
  <Layout location={location}>
    <StaticQuery
      query={worksQuery}
      render={data => <WorksContent data={data} />}
    />
  </Layout>
