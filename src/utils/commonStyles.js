import { css } from 'styled-components'

export const colors = {
  blue900: '#1e2733',
  gray500: '#94989E',
  gray700: '#555c65',
  yellow500: '#EBC86E',
  yellow700: '#6b6349'
}

export const fonts = {
  sansSerif: '\'Roboto\', sans-serif',
  mono: '\'Roboto Mono\', monospace'
}

export const spaces = {
  p500: '5rem',
  p400: '4rem',
  p300: '3rem',
  p200: '2rem',
  p100: '1rem',
  p50: '.5rem',
  p25: '.25rem'
}

export const mq = {
  sm: '40em',
  md: '54em',
  lg: '85em'
}

export const media = {
  sm: (...a) => css`
    @media (max-width: ${mq.sm}) {
      ${css(...a)}
    }
  `,
  md: (...a) => css`
    @media (max-width: ${mq.md}) {
      ${css(...a)}
    }
  `,
  lg: (...a) => css`
    @media (max-width: ${mq.lg}) {
      ${css(...a)}
    }
  `
}

const rule = (d, v) => `${d}: ${v};` 

export const getOuterSpace = p =>
  css`
    ${rule(p, spaces.p500)}
    ${media.lg`
      ${rule(p, spaces.p300)}
    `}  
    ${media.md`
      ${rule(p, spaces.p300)}
    `}  
    ${media.md`
      ${rule(p, spaces.p200)}
    `}
  `
