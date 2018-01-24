import React from 'react'
import ListItem from '../ListItem'

const EventListItem = ({ year, position, company }) =>
  <ListItem>
    <span>{year}</span>
    <span>{position}</span>
    <span>{company}</span>
  </ListItem>

export default EventListItem
