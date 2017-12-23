import React from 'react'

export default ({ data }) =>
  <div>
    <h1>Works</h1>
    <ul>{data.allWorksJson.edges.map((w, i) => <li key={i}>{w.node.title}</li>)}</ul>
  </div>

export const query = graphql`
  query WorksQUery {
    allWorksJson {
      edges {
        node {
          title
        }
      }
    }
  }
`
