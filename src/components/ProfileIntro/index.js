import React from 'react'
import styled from 'styled-components'
import WeekDistance from '../WeekDistance'
import Intro from '../Intro'
import { fonts, colors, media } from '../../utils/commonStyles'

const ProfileWrapper = styled.section`
  display: grid;
  grid-template-columns: 63% 37.5%;
  grid-template-rows: 25% auto 10%;
  position: relative;
  ${media.md`
    grid-template-columns: 100%;
    grid-template-rows: auto;
    grid-row-gap: 2rem;
  `}
`

const RightColumn = styled.div`
`

const BoxWrapper = styled.div`
  grid-area: 1 / col2-start / last-line / 2;
  padding-top: 200%;
  ${media.md`
    grid-area: 1 / 1 / 1 / 1;
    position: relative;
    padding-top: 100%;
  `}
`

const Box = styled.div`
  background: #293340;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 55%;
  z-index: 1;
  ${media.md`
    width: 100%;
  `}
`

const StyledWeekDistance = styled(WeekDistance)`
  grid-row-end: div 2;
  align-self: end;
  z-index: 2;
`

const LeftColumn = styled.div`
`

const InfoWrapper = styled.header`
  grid-row: 2 / 2;
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
        Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
      </AboutMe>
    </InfoWrapper>
    <StyledWeekDistance />
    <BoxWrapper>
      <Box />
    </BoxWrapper>
  </ProfileWrapper>

export default ProfileIntro
