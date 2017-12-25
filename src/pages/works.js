import React from 'react'
import MainWrapper from '../components/MainWrapper'

export default ({ data }) =>
  <div>
    <MainWrapper>
      {data.allWorksJson.edges.map((w, i) => <div key={i}>{w.node.title}</div>)}
    </MainWrapper>
  </div>

export const worksQuery = graphql`
  query WorksQuery {
    allWorksJson {
      edges {
        node {
          title
        }
      }
    }
  }
`
