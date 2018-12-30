import styled from 'styled-components'
import { media } from '../../style/constants'
import ProfileList from '../ProfileList'

export const ListsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto;
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
  padding: 8rem 0 0;
  ${media.sm`
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 3rem;
    padding: 4rem 0 0;
  `}
`

export const ClientsList = styled(ProfileList)`
  ul {
    display: grid;
    grid-template-columns: max-content max-content max-content;
    grid-template-rows: repeat(6, 1fr);
    grid-auto-flow: column;
    grid-column-gap: 5rem;
    ${media.sm`
      grid-column-gap: 3rem;
    `}

    ${media.sm`
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: auto;
      grid-auto-flow: unset;
      grid-column-gap: 0;
    `}
  }
`
