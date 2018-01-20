import React from 'react'

const ClientsList = ({ clients }) => {
  return (
    <ul>
      {clients.map(({ client }) => <li>{client.name}</li>)}
    </ul>    
  )
}

export default ClientsList
