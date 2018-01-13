import React from 'react'

const WorksItem = props =>  {
  const { title, client, collaborators } = props.work

  return (
    <li>
      <div>
        <h3>{title}</h3>
        <span>{client}</span>
      </div>
      { collaborators && 
        <div>
          In collaboration with {collaborators.map(c => c).join(', ')}
        </div>
      }
    </li>
  )
}

export default WorksItem
