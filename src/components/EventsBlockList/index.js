import React from 'react'

const EventsBlockList = ({ events }) => {
  return (
    <ul>
      {events.map(({ node }) => <li>{node.year}</li>)}
    </ul>    
  )
}

export default EventsBlockList
