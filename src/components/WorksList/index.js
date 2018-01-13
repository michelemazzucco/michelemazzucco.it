import React, { Component } from 'react'
import WorksItem from '../WorksItem'

class WorksList extends Component {
  state = { category: null }

  render() {
    const { works } = this.props
    
    return (
      <div>
        <h3>Other works</h3>
        <ul>
        { works.map(({ work }, i) => 
          <WorksItem key={i} work={work} />
        )}
        </ul>
      </div>
    )
  }
}

export default WorksList
