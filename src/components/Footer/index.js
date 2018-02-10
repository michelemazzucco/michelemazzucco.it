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
    padding-top: 1.5rem;
  `}
`

const FooterItem = styled.div`
  position: absolute;
  font-family: ${fonts.mono};
  color: ${colors.gray700};
  font-size: .85rem;
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
  
  ${media.md`
    position: static;
    transform: rotate(0) translateX(0);
    transform-origin: 0;
    padding: .5rem 0 0;
    text-align: center;
    font-size: .8rem;
  `}
`

const Footer = () =>
  <FooterWrapper>
    <FooterItem position='left'>
      Made (with love) in {getCurrentYear()}
    </FooterItem>
    <FooterItem position='right'>
      P.I. 03671100984&nbsp;-&nbsp;
      <a target="_blank" rel="noopener noreferrer" href='https://github.com/michelemazzucco/michelemazzucco.it'>Source code</a>
    </FooterItem>
  </FooterWrapper>

export default Footer
