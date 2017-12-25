import React from 'react'
import Link from 'gatsby-link'
import Circle from './circle.svg'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  padding: 4rem;
  position: fixed; 
  top: 0;
  left: 0;
  max-width: 18rem;
`

const Header = () =>
  <HeaderWrapper>
    <Link to='/'><Circle /></Link>
  </HeaderWrapper>

export default Header
