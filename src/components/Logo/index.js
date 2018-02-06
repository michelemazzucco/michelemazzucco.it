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

  > div {
    position: relative;
  }

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

  .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    background: rgba(255, 255, 255, .05);
    height: 100%;
    width: 100%;
    border-radius: 100%;
    pointer-events: none;
    opacity: 1;
  }

  a:hover + .circle {
    opacity: 0;
    transform: translate(-50%, -50%) scale(7.5);
    transition: transform 1s cubic-bezier(0.45, 0, .1, 1), opacity .8s ease;
  }
`

const Logo = () =>
  <LogoWrapper>
    <div>
      <Link to='/'><Circle width={22} height={22} /></Link>
      <div className="circle" />
    </div>
  </LogoWrapper>

export default Logo