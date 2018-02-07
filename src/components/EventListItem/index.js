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
    transition: transform .3s cubic-bezier(.45, 0, .1, 1);
  }

  .position {
    transform: translateY(0);
  }

  .year {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    transform: translateY(100%);
    color: #fff;
  }

  &:hover {
    .position {
      transform: translateY(-100%);
    }

    .year {
      transform: translateY(0);
    }
  }
`

const EventListItem = ({ year, position, company }) =>
  <ListItem>
    <Wrapper>
      <div className="position"><Position>{position}</Position> at <span>{company}</span></div>
      <div className="year">{year}</div>
    </Wrapper>
  </ListItem>

export default EventListItem
