import React from 'react'
import styled, { css } from 'styled-components'
import { media } from '../../utils/commonStyles'

const ToggleMenuWrapper = styled.div`
  display: none;
  height: 15px;
  width: 1.75rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  backface-visibility: hidden;
  transition: transform .45s cubic-bezier(0.41, 0, 0.07, 1);

  ${props => props.open 
    ? css`
      transform: rotate(90deg);
      align-items: center;
      span {
        &:nth-child(1),
        &:nth-child(3) {
          width: 60%;
        }
        &:nth-child(2) {
          width: 100%;
        }        
      }
    `
    : css`
      transform: rotate(0);
      span {
        &:nth-child(1) {
          width: 100%;
        }
        &:nth-child(2) {
          width: 60%;
        }
        &:nth-child(3) {
          width: 80%;
        }
      }
    `}
  
  ${media.md`
    display: flex;
  `}

  span {
    display: inline-block;
    height: 1px;
    background: #FFF;
  }
`

const ToggleMenu = props => 
  <ToggleMenuWrapper {...props}>
    <span />
    <span />
    <span />
  </ToggleMenuWrapper>

export default ToggleMenu
