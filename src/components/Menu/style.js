import Link from 'gatsby-link'
import styled, { css } from 'styled-components'
import { colors, fonts, media, getOuterSpace } from '../../utils/commonStyles'

export const Wrapper = styled.nav`
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
    transition: color .4s ease;
    will-change: color;
    
    &::before {
      background: ${colors.yellow500};
      border-radius: 100%;
      content: '';
      display: block;
      height: .35rem;
      margin-right: .75rem;
      vertical-align: middle;
      width: .35rem;
      transition: transform .3s cubic-bezier(.45, 0, .1, 1), opacity .1s ease;
      will-change: transform, opacity;
    }

    &:not(.active)::before {
      opacity: 0;
      transform: translateX(-1rem);
    }

    &:hover {
      color: #fff;
      
      &::before {
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

export const Nav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 50%;
  max-width: 14rem;
`

export const NavItem = styled.li`
  list-style: none;
  padding: .3rem 0;
  
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
        
        &:hover::before {
          display: none !important;
        }
      `
      : css`
        color: ${colors.gray500};
      `}
  }
`

export const NavLink = styled(Link).attrs({
  activeClassName: 'active'
})`
  &.active {
    color: #fff;
    
    &::before {
      transform: translateX(0);
      opacity: 1;
    }
  }
`
