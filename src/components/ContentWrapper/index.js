import styled from 'styled-components'
import { media, mq } from '../../utils/commonStyles'

const ContentWrapper = styled.div`
  max-width: 68rem; 
  width: calc(100% - 9.25rem * 2);
  margin: 11rem auto 6.5rem;
  ${media.md`
    width: 100%;
    margin: 2rem auto 9rem;
    padding: 0 2rem;
  `} 
`

export default ContentWrapper
