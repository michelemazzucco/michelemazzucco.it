import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { colors, fonts } from '../utils/constants'

const FixedNav = styled.nav`
  padding: 4rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  ul:last-child {
    text-align: right;
  }
`

const ResetedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    list-style: none;
  }
`

const MenuItem = styled.li`
  padding: .4rem 0;
  a {
    color: ${colors.gray500};
    font-family: ${fonts.mono};
  }
`

const HighligtedItem = MenuItem.extend`
  a {
    color: ${colors.yellow500}
  }
`
const Nav = () =>
  <FixedNav>
    <ResetedList>
      <MenuItem><a href='https://twitter.com/MicheleMazzucco' target='_blank'>Twitter</a></MenuItem>
      <MenuItem><a href='https://twitter.com/MicheleMazzucco' target='_blank'>Dribbble</a></MenuItem>
      <MenuItem><a href='https://twitter.com/MicheleMazzucco' target='_blank'>Instagram</a></MenuItem>
      <MenuItem><a href='https://twitter.com/MicheleMazzucco' target='_blank'>Github</a></MenuItem>
    </ResetedList>
    <ResetedList>
      <MenuItem><Link to='/'>Index</Link></MenuItem>
      <MenuItem><Link to='/works'>Works</Link></MenuItem>
      <MenuItem><Link to='/profile'>Profile</Link></MenuItem>
      <HighligtedItem><a href='mailto:hello@michelemazzucco.it'>Contact</a></HighligtedItem>
    </ResetedList>
  </FixedNav>

export default Nav
