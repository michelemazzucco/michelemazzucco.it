import React from 'react'
import styled from 'styled-components'
import WeekDistance from '../WeekDistance'
import Intro from '../Intro'
import { fonts, colors } from '../../utils/commonStyles'

const ProfileWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  position: relative;
`

const RightColumn = styled.div`
  width: 37.5%;
  &:before {
    content: '';
    padding-top: 210%;
    display: block;
  }
`

const Box = styled.div`
  background: #293340;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 55%;
  z-index: 0;
`

const LeftColumn = styled.div`
  position: relative;
  z-index: 1;
  width: 62.5%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
`

const InfoWrapper = styled.header`
  padding-top: 20%;
`

const AboutMe = styled.main`
  margin-top: 2.6rem;
  line-height: 1.6em;
  color: ${colors.gray500};
`

const ProfileIntro = () => 
  <ProfileWrapper>
    <LeftColumn>
      <InfoWrapper>
        <Intro fixed={false} />
        <AboutMe>
          Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
        </AboutMe>
      </InfoWrapper>
      <WeekDistance />
    </LeftColumn>
    <RightColumn>
      <Box />
    </RightColumn>
  </ProfileWrapper>

export default ProfileIntro
