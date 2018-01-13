import styled from 'styled-components'
import { media, mq } from '../../utils/commonStyles'

const ContentWrapper = styled.div`
  max-width: ${mq.lg}; 
  width: calc(100% - 18rem * 2);
  margin: 11rem auto 6.5rem;
  ${media.lg`
    width: calc(100% - 14rem * 2);
    margin: 5.5rem 14rem 6.5rem;
  `} 
  ${media.md`
    width: calc(100% - 10rem * 2);
    margin: 5.5rem 10rem 6.5rem;
  `} 
`

export default ContentWrapper
