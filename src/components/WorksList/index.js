import React, { Component } from 'react'

class WorksList extends Component {
  state = { category: null }

  render() {
    const { works } = this.props
    
    return (
      <div>
        <h3>Other works</h3>
        <ul>
        { works.map((w, i) => 
          <li key={i}>{w.node.title}</li>)}
        </ul>
      </div>
    )
  }
}

export default WorksList
