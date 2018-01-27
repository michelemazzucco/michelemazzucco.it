import React, { Component } from 'react'
import idx from 'idx'
import ContentWrapper from '../components/ContentWrapper'
import WorksList from '../components/WorksList'
import WorksFeatured from '../components/WorksFeatured'

class WorksPage extends Component {
  constructor() {
    super()
    this.state = { category: null }
    this.setCategory = this.setCategory.bind(this)
  }

  setCategory(category) {
    this.setState({ category })
  }

  getData() {
    const { data } = this.props
    return idx(data, _ => _.works.edges) 
  }

  getWorksList(category) {
    const { works } = this.props
    return category 
      ? works.filter(({ work }) => work.category.includes(category))
      : works
  }

  getWorks() {  
    const { category } = this.state
    const works = this.getData()
    
    return works && 
      works.filter(({ work }) =>
        category 
          ? !work.featured && work.category.includes(category)
          : !work.featured
      )
  }
  
  getFeaturedWorks() {
    const works = this.getData()
    return works && works.filter(({ work }) => work.featured)
  }

  render() {
    const { category } = this.state

    return (
      <ContentWrapper>
        <WorksFeatured works={this.getFeaturedWorks()} />
        <WorksList 
          works={this.getWorks()} 
          category={category}
          setCategory={this.setCategory} 
        />
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
