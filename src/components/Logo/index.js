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
  ${media.md`
    position: static;
    padding: 0;
  `} 
`

const Logo = () =>
  <LogoWrapper>
    <Link to='/'><Circle /></Link>
  </LogoWrapper>

export default Logo
