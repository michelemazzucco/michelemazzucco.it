import React from 'react'
import styled from 'styled-components'
import WeekDistance from '../WeekDistance'
import Intro from '../Intro'
import { fonts, colors, media } from '../../utils/commonStyles'

const ProfileWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(8, 12.5% [col]);
  grid-template-rows: .4fr [content-start] 1fr [content-end] 20px;
  position: relative;
  ${media.md`
    grid-template-columns: 100%;
    grid-template-rows: auto [content-start] auto [content-end] auto;
    grid-row-gap: 2rem;
  `}
`

const Box = styled.div`
  grid-area: 1 / 4 / last-line / end;
  background: #293340;
  &:before {
    content: '';
    padding-top: 150%;
    display: block;
  }
  ${media.md`
    grid-area: 1 / 1 / 1 / 1;
    &:before {
      padding-top: 100%;
    }
  `}
`

const StyledWeekDistance = styled(WeekDistance)`
  grid-row: 3 / last-line;
  grid-column: 1 / span 4;
  align-self: end;
  z-index: 2;
`

const InfoWrapper = styled.header`
  grid-row: content-start/ content-end;
  grid-column: 1 / 6;
  z-index: 2;
`

const AboutMe = styled.main`
  margin-top: 2.6rem;
  line-height: 1.6em;
  color: ${colors.gray500};
  ${media.md`
    margin-top: 1rem;
  `}
`

const ProfileIntro = () => 
  <ProfileWrapper>
    <InfoWrapper>
      <Intro fixed={false} />
      <AboutMe>
        Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Maecenas faucibus mollis interdum. Nulla vitae elit libero, 
        a pharetra augue. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
      </AboutMe>
    </InfoWrapper>
    <StyledWeekDistance />
    <Box />
  </ProfileWrapper>

export default ProfileIntro
