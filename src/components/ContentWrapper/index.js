import styled from 'styled-components'
import { media, mq } from '../../utils/commonStyles'

const ContentWrapper = styled.div`
  max-width: 68rem; 
  width: calc(100% - 8.5rem * 2);
  margin: 11rem auto 6.5rem;
  ${media.md`
    width: 100%;
    padding: 0 2rem;
  `} 
`

export default ContentWrapper
