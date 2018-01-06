import React, { Component } from 'react'
import idx from 'idx'
import ContentWrapper from '../components/ContentWrapper'
import WorksList from '../components/WorksList'

class WorksPage extends Component {
  getData() {
    const { data } = this.props
    return idx(data, _ => _.allWorksJson.edges) 
  }

  getWorks() {  
    const works = this.getData()
    return works && works.filter(w => !w.node.featured)
  }
  
  getFeaturedWorks() {
    const works = this.getData()
    return works && works.filter(w => w.node.featured)
  }

  render() {
    console.log('f works', this.getFeaturedWorks())
    console.log('works', this.getWorks())
    return (
      <ContentWrapper>
        <WorksList works={this.getWorks()}/>
      </ContentWrapper>      
    )
  }
}

export default WorksPage

export const worksQuery = graphql`
  query WorksQuery {
    allWorksJson {
      edges {
        node {
          title,
          category,
          featured,
          collaborators,
          coverImage
        }
      }
    }
  }
`
