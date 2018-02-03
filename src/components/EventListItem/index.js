import React from 'react'
import styled from 'styled-components'
import ListItem from '../ListItem'
import { colors } from '../../utils/commonStyles'

const Divider = styled.span`
  color: ${colors.yellow500};
`

const Year = styled.span`
  border-bottom: 1px dotted ${colors.gray700};
`

const EventListItem = ({ year, position, company }) =>
  <ListItem>
    <span>{year}</span><Divider>&nbsp;&nbsp;·&nbsp;&nbsp;</Divider><Year>{position}</Year> at <span>{company}</span>
  </ListItem>

export default EventListItem
