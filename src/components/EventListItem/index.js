import React from 'react'
import ListItem from '../ListItem'
import { Wrapper, Position } from './style'

const EventListItem = ({ year, position, company }) =>
  <ListItem>
    <Wrapper>
      <div className="position"><Position>{position}</Position> at <span>{company}</span></div>
      <div className="year">{year}</div>
    </Wrapper>
  </ListItem>

export default EventListItem
