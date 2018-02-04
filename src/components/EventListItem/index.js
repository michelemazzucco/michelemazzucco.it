import React from 'react'
import styled from 'styled-components'
import ListItem from '../ListItem'
import { colors } from '../../utils/commonStyles'

const Divider = styled.span`
  color: ${colors.yellow500};
`

const Position = styled.span`
  border-bottom: 1px dotted ${colors.gray700};
`

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;

  div {
    transition: transform .3s cubic-bezier(0.41,0,0.07,1);
  }

  div:first-child {
    transform: translateY(0);
  }

  div:last-child {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    transform: translateY(100%);
    color: #FFF;
  }

  &:hover {
    div:first-child {
      transform: translateY(-100%);
    }    
    div:last-child {
      transform: translateY(0);
    }
  }

`

const EventListItem = ({ year, position, company }) =>
  <ListItem>
    <Wrapper>
      <div>
        <Position>{position}</Position> at <span>{company}</span>
      </div>
      <div>
        {year}
      </div>
    </Wrapper>
  </ListItem>

export default EventListItem
