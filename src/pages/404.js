import React from 'react'
import styled from 'styled-components'
import { fonts, colors, media } from '../style/commons'

const NotFoundTitle = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  text-align: center;
`

const NotFoundSubtitle = styled.h1`
  text-align: center;
  font-size: 1.1rem;
  font-family: ${fonts.mono};
  color: ${colors.gray500};
  
  span {
    color: ${colors.yellow500};
  }
`

const NotFoundWrapper = styled.section`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  ${media.sm`
    top: 45%;
  `}
`

export default ({ location }) =>
  <NotFoundWrapper>
    <header>
      <NotFoundTitle>Oops!</NotFoundTitle>
      <NotFoundSubtitle>
        <span>{location.pathname}</span>
        &nbsp;page cannot be found!
      </NotFoundSubtitle>
    </header>
  </NotFoundWrapper>
