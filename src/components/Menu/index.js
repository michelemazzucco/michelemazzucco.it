import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'styled-components'
import { colors, fonts, getOuterSpace } from '../../utils/commonStyles'

const NavWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  ${getOuterSpace('padding')};
  ul:last-child {
    text-align: right;
  }
`

const Nav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 50%;
  max-width: 14rem;
`

const NavItem = styled.li`
  list-style: none;
  padding: .4rem 0;
  
  &:last-child {
    padding-bottom: 0;
  }

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

const NavLink = styled(Link).attrs({
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

const Menu = () =>
  <NavWrapper>
    <Nav>
      <NavItem><a href='https://twitter.com/MicheleMazzucco' target='_blank'>Twitter</a></NavItem>
      <NavItem><a href='https://twitter.com/MicheleMazzucco' target='_blank'>Dribbble</a></NavItem>
      <NavItem><a href='https://twitter.com/MicheleMazzucco' target='_blank'>Instagram</a></NavItem>
      <NavItem><a href='https://twitter.com/MicheleMazzucco' target='_blank'>Github</a></NavItem>
    </Nav>
    <Nav>
      <NavItem><NavLink exact to='/'>Index</NavLink></NavItem>
      <NavItem><NavLink exact to='/works'>Works</NavLink></NavItem>
      <NavItem><NavLink exact to='/profile'>Profile</NavLink></NavItem>
      <NavItem highlight><a href='mailto:hello@michelemazzucco.it'>Contact</a></NavItem>
    </Nav>
  </NavWrapper>

export default Menu
