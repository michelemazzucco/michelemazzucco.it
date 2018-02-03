import React from 'react'
import Link from 'gatsby-link'
import Circle from './circle.svg'
import styled from 'styled-components'
import { colors, fonts, media, getOuterSpace } from '../../utils/commonStyles'

const LogoWrapper = styled.div`
  position: fixed; 
  top: 0;
  left: 0;
  max-width: 18rem;
  ${getOuterSpace('padding')}

  a, svg {
    display: block;
  }

  a {
    width: 1.65rem;
    ${media.lg`
      width: 1.45rem;
    `} 
  }

  svg {
    width: 100%;
    height: auto;
  }

  ${media.md`
    position: static;
    padding: 0;
  `} 
`

const Logo = () =>
  <LogoWrapper>
    <Link to='/'><Circle width={22} height={22} /></Link>
  </LogoWrapper>

export default Logo
