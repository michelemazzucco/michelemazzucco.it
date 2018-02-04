import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'styled-components'
import EmailMe from '../EmailMe'
import { colors, fonts, media, getOuterSpace } from '../../utils/commonStyles'

const NavWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  pointer-events: none;
  ${getOuterSpace('padding')};
  ul:last-child li a {
    justify-content: flex-end;
    &:before {
      background: ${colors.yellow500};
      border-radius: 100%;
      content: '';
      display: block;
      height: .35rem;  
      margin-right: .75rem;
      vertical-align: middle;
      width: .35rem;
      transition: transform .3s cubic-bezier(0.45, 0, .1, 1), opacity .1s ease;
    }

    &:not(.active):before {
      opacity: 0;
      transform: translateX(-1rem);
    }

    &:hover {
      &:before {
        transform: translateX(0);
        opacity: 1;
      }
    }
  }
  ${media.md`
    position: static;
    padding: 0;
  `}
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
  padding: .5rem 0;

  &:last-child {
    padding-bottom: 0;
  }

  a {
    font-size: .9rem;
    font-family: ${fonts.mono};
    pointer-events: all;
    display: flex;
    align-items: center;
    transition: color .1s ease;

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
    &:before {
      transform:translateX(0);
      opacity: 1;
    }
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
      <NavItem highlight><EmailMe text="Contact"/></NavItem>
    </Nav>
  </NavWrapper>

export default Menu
