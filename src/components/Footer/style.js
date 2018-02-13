import styled, { css } from 'styled-components'
import { colors, fonts, media, getOuterSpace } from '../../utils/commonStyles'

export const Wrapper = styled.footer`
  width: 100%;
  position: fixed;
  top: 50%;
  ${media.md`
    position: static;
    padding-top: 1.5rem;
  `}
`

export const Item = styled.div`
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
    padding: .3rem 0 0;
    text-align: center;
    font-size: .8rem;
  `}
`
