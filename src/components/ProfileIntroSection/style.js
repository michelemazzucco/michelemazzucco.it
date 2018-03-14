import styled from 'styled-components'
import WeekDistance from '../WeekDistance'
import Image from '../Image'
import { colors, media } from '../../style/constants'

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(5, 1fr);
  position: relative;
  ${media.sm`
    grid-template-columns: 100%;
    grid-template-rows: repeat(3, auto);
    grid-row-gap: 2rem;
  `}
`

export const StyledImage = styled(Image)`
  grid-area: 1 / 4 / last-line / end;
  background: ${colors.blue900};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    padding-top: 150%;
    display: block;
    ${media.sm`
      padding-top: 100%;
    `}
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: auto;
    top: -100%;
    right: -100%;
    bottom: -100%;
    left: -100%;
    mix-blend-mode: lighten;
    opacity: .1;
    display: block;
    object-fit: cover;
    ${media.sm`
      opacity: .2;
    `}
  }

  ${media.sm`
    grid-area: 1 / 1 / 1 / 1;
    &:before {
      padding-top: 100%;
    }
  `}
`

export const StyledWeekDistance = styled(WeekDistance)`
  grid-row: 4 / last-line;
  grid-column: 1 / span 4;
  align-self: end;
  z-index: 3;
`

export const InfoWrapper = styled.header`
  grid-row: 2 / 4;
  grid-column: 1 / 6;
  z-index: 3;
  ${media.md`
    grid-column: 1 / 7;
  `}
  ${media.sm`
    grid-row: 2 / 3;
    grid-column: 1 / 1;
  `}
`

export const Content = styled.main`
  margin-top: 1rem;
  line-height: 1.8em;
  color: ${colors.gray500};
  ${media.sm`
    margin-top: 1rem;
  `}

  p {
    margin: 1.5rem 0;
  }

  a {
    color: #fff;
    border-bottom: 1px dotted ${colors.gray500};
    
    &:hover {
      border-bottom-color: ${colors.yellow500};
    }
  }
`
