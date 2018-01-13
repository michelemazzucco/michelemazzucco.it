import React from 'react'
import styled, { css } from 'styled-components'
import { colors, fonts, getOuterSpace } from '../../utils/commonStyles'
import { getCurrentYear } from '../../utils/functions'

const FooterWrapper = styled.footer`
  width: 100%;
  position: fixed;
  top: 50%;
`

const FooterItem = styled.div`
  position: absolute;
  font-family: ${fonts.mono};
  color: ${colors.gray700};
  font-size: .8rem;
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
`

const Footer = () =>
  <FooterWrapper>
    <FooterItem position='left'>
      Made (with love) in {getCurrentYear()}
    </FooterItem>
    <FooterItem position='right'>
      <a target='_blank' href='https://github.com/'>Source code</a>
    </FooterItem>
  </FooterWrapper>

export default Footer
