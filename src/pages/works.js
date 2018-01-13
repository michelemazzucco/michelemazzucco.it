import React, { Component } from 'react'
import idx from 'idx'
import ContentWrapper from '../components/ContentWrapper'
import WorksList from '../components/WorksList'
import WorksFeatured from '../components/WorksFeatured'

class WorksPage extends Component {
  getData() {
    const { data } = this.props
    return idx(data, _ => _.works.edges) 
  }

  getWorks() {  
    const works = this.getData()
    return works && works.filter(({ work }) => !work.featured)
  }
  
  getFeaturedWorks() {
    const works = this.getData()
    return works && works.filter(({ work }) => work.featured)
  }

  render() {
    return (
      <ContentWrapper>
        <WorksFeatured works={this.getFeaturedWorks()} />
        <WorksList works={this.getWorks()} />
      </ContentWrapper> 
    )
  }
}

export default WorksPage

export const worksQuery = graphql`
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
          image
        }
      }
    }
  }
`
