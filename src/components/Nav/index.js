import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'styled-components'
import { colors, fonts } from '../../utils/commonStyles'

const NavWrapper = styled.nav`
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

const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  padding: 4rem;
  max-width: 18rem;
`

const MenuItem = styled.li`
  list-style: none;
  padding: .4rem 0;
  a {
    font-family: ${fonts.mono};
    ${props => props.highlight 
      ? css`
        color: ${colors.yellow500};
      `
      : css`
        color: ${colors.gray500};
        &:hover {
          color: #FFF;
        }
      `}
  }
`

const MenuLink = styled(Link).attrs({
  activeClassName: 'active'
})`
  &.active {
    color: #FFF;
  }

  &.active:before {
    background: ${colors.yellow500};
    border-radius: 100%;
    content: '';
    display: inline-block;
    height: 4px;  
    margin-right: .5rem;
    vertical-align: middle;
    width: 4px;
    border: 1px solid ${colors.yellow700};
  }
`

const Nav = () =>
  <NavWrapper>
    <Menu>
      <MenuItem><a href='https://twitter.com/MicheleMazzucco' target='_blank'>Twitter</a></MenuItem>
      <MenuItem><a href='https://twitter.com/MicheleMazzucco' target='_blank'>Dribbble</a></MenuItem>
      <MenuItem><a href='https://twitter.com/MicheleMazzucco' target='_blank'>Instagram</a></MenuItem>
      <MenuItem><a href='https://twitter.com/MicheleMazzucco' target='_blank'>Github</a></MenuItem>
    </Menu>
    <Menu>
      <MenuItem><MenuLink exact to='/'>Index</MenuLink></MenuItem>
      <MenuItem><MenuLink exact to='/works'>Works</MenuLink></MenuItem>
      <MenuItem><MenuLink exact to='/profile'>Profile</MenuLink></MenuItem>
      <MenuItem highlight><a href='mailto:hello@michelemazzucco.it'>Contact</a></MenuItem>
    </Menu>
  </NavWrapper>

export default Nav
