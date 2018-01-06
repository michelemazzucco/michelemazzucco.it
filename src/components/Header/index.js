import React from 'react'
import Link from 'gatsby-link'
import Circle from './circle.svg'
import styled from 'styled-components'
import { colors, fonts, getOuterSpace } from '../../utils/commonStyles'

const HeaderWrapper = styled.header`
  position: fixed; 
  top: 0;
  left: 0;
  max-width: 18rem;
  ${getOuterSpace('padding')}
`

const Header = () =>
  <HeaderWrapper>
    <Link to='/'><Circle /></Link>
  </HeaderWrapper>

export default Header
