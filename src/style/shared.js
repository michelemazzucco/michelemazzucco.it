import styled from 'styled-components'
import { media, colors } from './constants'

export const ContentWrapper = styled.div`
  max-width: 68rem;
  width: calc(100% - 9.25rem * 2);
  margin: 11rem auto 5rem;
  ${media.lg`
    margin: 8rem auto 3rem;
    width: calc(100% - 11rem * 2);
  `}
  
  ${media.md`
    width: 100%;
    margin: 4rem auto 0;
    padding: 0 3rem 6rem;
  `}
  
  ${media.sm`
    margin: 2rem auto 0;
    padding: 0 2rem 6rem;
  `}
`

export const ListItem = styled.li`
  font-size: 1rem;
  color: ${colors.gray500};
  padding: .3rem 0;
  line-height: 1.6em;
`
