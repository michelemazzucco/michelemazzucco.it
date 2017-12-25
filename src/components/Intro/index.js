import React from 'react'
import styled, { css } from 'styled-components'
import { colors, fonts } from '../../utils/commonStyles'

const IntroWrapper = styled.div`
  font-size: 1.7rem;
  position: absolute; 
  top: 0;
  right: 0;
  padding: 4rem;
  text-align: right;
  h1 span {
    color: ${colors.yellow500};
    text-decoration: line-through;
  }
`

const Intro = () => 
  <IntroWrapper>
    <h1>
      Hi, my name is Michele Mazzucco,<br/>
      an <span>interdiscliplinary</span> designer<br/>
      based in Brescia, Italy
    </h1>
  </IntroWrapper>

export default Intro
