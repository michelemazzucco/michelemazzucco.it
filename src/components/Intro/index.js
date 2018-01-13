import React from 'react'
import styled, { css } from 'styled-components'
import { colors, fonts, getOuterSpace } from '../../utils/commonStyles'

const IntroWrapper = styled.div`
  font-size: 1.7rem;
  
  
  h1 span {
    color: ${colors.yellow500};
    text-decoration: line-through;
  }

  ${props => props.fixed 
    ? css`
    position: absolute; 
    top: 0;
    right: 0;
    text-align: right;
    ${getOuterSpace('padding')};
    `
    : css`
      text-align: left;
    `
  }
`

const Intro = props => 
  <IntroWrapper {...props} >
    <h1>
      Hi, my name is Michele Mazzucco,<br/>
      an <span>interdiscliplinary</span> designer<br/>
      based in Brescia, Italy
    </h1>
  </IntroWrapper>

export default Intro
