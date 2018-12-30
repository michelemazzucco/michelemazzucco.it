import styled, { keyframes } from 'styled-components'
import { fonts, colors } from '../../style/constants'

export const loading = keyframes`
  0% {
    background-position: -20rem 0;
  }
  
  100% {
    background-position: 20rem 0;
  }
`

export const DistanceWrapper = styled.div`
  font-family: ${fonts.mono};
  font-size: .9rem;
  color: ${colors.gray500};
`

export const DistanceLoader = styled.div`
  display: inline-block;
  height: 1rem;
  width: 10rem;
  animation-duration: .75s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${loading};
  animation-timing-function: linear;
  background: linear-gradient(to right, #273240 8%, #2c3644 18%, #273240 33%);
  background-size: 800px 104px;
  border-radius: 2px;
`

export const EmojiWrapper = styled.span`
  font-size: .95rem;
  color: initial;
  display: inline-block;
  vertical-align: middle;
  margin-right: .5rem;
`

export const Kilometers = styled.a`
  border-bottom: 1px dotted ${colors.gray500};
  display: inline-block;
  vertical-align: top;
  color: #fff;
`
