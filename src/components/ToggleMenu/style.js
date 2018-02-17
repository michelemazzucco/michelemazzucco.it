import styled, { css } from 'styled-components'
import { media } from '../../style/constants'

export const Wrapper = styled.div`
  display: none;
  height: 15px;
  width: 1.75rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  backface-visibility: hidden;
  transition: transform .45s cubic-bezier(.45, 0, .07, 1);
  will-change: transform;

  span {
    display: inline-block;
    height: 1px;
    background: #fff;
  }

  ${props => props.open 
    ? css`
      transform: rotate(90deg);
      align-items: center;
      
      span {
        &:nth-child(1), &:nth-child(3) {
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
`
