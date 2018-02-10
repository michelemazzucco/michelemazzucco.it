import React from 'react'
import styled from 'styled-components'
import WeekDistance from '../WeekDistance'
import Intro from '../Intro'
import Image from '../Image'
import { colors, media } from '../../utils/commonStyles'

const ProfileWrapper = styled.section`
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

const StyledImage = styled(Image)`
  grid-area: 1 / 4 / last-line / end;
  background: ${colors.blue900};

  img {
    mix-blend-mode: lighten;
    opacity: .1;
    width: 100%;
    height: 100%;
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

const StyledWeekDistance = styled(WeekDistance)`
  grid-row: 4 / last-line;
  grid-column: 1 / span 4;
  align-self: end;
  z-index: 2;
`

const InfoWrapper = styled.header`
  grid-row: 2 / 4;
  grid-column: 1 / 6;
  z-index: 2;
  ${media.md`
    grid-column: 1 / 7;
  `}
  ${media.sm`
    grid-row: 2 / 3;
    grid-column: 1 / 1;
  `}
`

const Content = styled.main`
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

const ProfileIntroSection = ({ content }) => 
  <ProfileWrapper>
    <InfoWrapper>
      <Intro fixed={false} />
      <Content>{content()}</Content>
    </InfoWrapper>
    <StyledWeekDistance />
    <StyledImage 
      src="/images/profile/michele-mazzucco-portrait.jpg"
      alt="Michele Mazzucco - Interdiscliplinary Designer"
      sources={[{
        media: 'max-width: 40rem',
        srcset: [
          '/images/profile/michele-mazzucco-portrait-square.jpg 1x',
          '/images/profile/michele-mazzucco-portrait-square-2x.jpg 2x',
          '/images/profile/michele-mazzucco-portrait-square-3x.jpg 3x'
        ]
      },{
        srcset: [
          '/images/profile/michele-mazzucco-portrait.jpg 1x',
          '/images/profile/michele-mazzucco-portrait-2x.jpg 2x',
          '/images/profile/michele-mazzucco-portrait-3x.jpg 3x'
        ]       
      }]}
    />
  </ProfileWrapper>

export default ProfileIntroSection
