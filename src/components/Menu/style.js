import Link from 'gatsby-link'
import styled, { css } from 'styled-components'
import { colors, fonts, media, getOuterSpace } from '../../style/constants'

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
  
  ul:last-child li {
    text-align: right;
    
    a {
      transition: color .4s ease;
      will-change: color;
      position: relative;
      
      &::before {
        position: absolute;
        left: -1.1rem;
        top: 50%;
        background: ${colors.yellow500};
        border-radius: 100%;
        content: '';
        display: block;
        height: .3rem;
        width: .3rem;
        transition: transform .3s cubic-bezier(.45, 0, .1, 1), opacity .1s ease;
        will-change: transform, opacity;
      }

      &:not(.active)::before {
        opacity: 0;
        transform: translate(-1rem, -50%);
      }

      &:hover {
        color: #fff;
        
        &::before {
          transform: translate(0, -50%);
          opacity: 1;
        }
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
  padding: .5rem 0;
  line-height: 1em;
  
  &:last-child {
    padding-bottom: 0;
  }

  a {
    font-size: .9rem;
    font-family: ${fonts.mono};
    pointer-events: all;
    transition: color .1s ease;
    line-height: 1em;
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
      transform: translate(0, -50%);
      opacity: 1;
    }
  }
`
