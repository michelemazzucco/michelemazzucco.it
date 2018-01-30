import React from 'react'
import styled, { css } from 'styled-components'
import { colors, fonts, media, getOuterSpace } from '../../utils/commonStyles'
import { getCurrentYear } from '../../utils/functions'

const FooterWrapper = styled.footer`
  width: 100%;
  position: fixed;
  top: 50%;
  ${media.md`
    position: static;
  `}
`

const FooterItem = styled.div`
  position: absolute;
  font-family: ${fonts.mono};
  color: ${colors.gray700};
  font-size: .9rem;
  
  ${props => props.position === 'left' 
    ? css`
      transform: rotate(-90deg) translateX(-50%);
      transform-origin: left;
      ${getOuterSpace('left')}
    `
    : css`
      transform: rotate(90deg) translateX(50%);
      transform-origin: right;
      ${getOuterSpace('right')}
    ` }
  
  a:hover {
    color: ${colors.gray500};
  }
  
  ${media.md`
    position: static;
    transform: rotate(0) translateX(0);
    transform-origin: 0;
    padding: 0;
  `}
`

const Footer = () =>
  <FooterWrapper>
    <FooterItem position='left'>
      Made (with love) in {getCurrentYear()}
    </FooterItem>
    <FooterItem position='right'>
      <a target="_blank" rel="noopener" href='https://github.com/'>Source code</a>
    </FooterItem>
  </FooterWrapper>

export default Footer
