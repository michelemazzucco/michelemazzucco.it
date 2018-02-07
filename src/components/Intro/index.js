import React from 'react'
import styled, { css } from 'styled-components'
import { colors, fonts, media, getOuterSpace } from '../../utils/commonStyles'

const IntroWrapper = styled.div`
  font-size: 1.7rem;
  max-width: 36rem;
  line-height: 1.3em;
  ${media.md`
    max-width: 32rem;
  `}
  ${media.sm`
    max-width: 100%;
    font-size: 1.5rem;
  `}
  ${media.xs`
    font-size: 1.35rem;
  `}
  
  h1 span {
    color: ${colors.yellow500};
    text-decoration: line-through;
  }

  ${props => props.fixed 
    ? css`
      ${getOuterSpace('padding')};
      position: absolute;
      top: 0;
      right: 0;
      text-align: right;
      ${media.md`
        text-align: left;
        left: 0;
        right: auto;
      `}
    `
    : css`
      text-align: left;
    `
  }
`

const Intro = props => 
  <IntroWrapper {...props} >
    <h1>
      Hi, my name is Michele Mazzucco,
      an <span>interdiscliplinary</span> designer
      based in Brescia, Italy
    </h1>
  </IntroWrapper>

export default Intro
