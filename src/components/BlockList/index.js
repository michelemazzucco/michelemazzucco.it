import React from 'react'

const BlockList = ({ edges }) => {
  return (
    <ul>
      {edges.map(({ node }) => <li>{node.name}</li>)}
    </ul>    
  )
}

export default BlockList
