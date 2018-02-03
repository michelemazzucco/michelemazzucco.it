import React from 'react'
import styled from 'styled-components'
import WeekDistance from '../WeekDistance'
import Intro from '../Intro'
import { fonts, colors, media } from '../../utils/commonStyles'
import portrait from './michele-mazzucco-portrait.jpg'

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

const Box = styled.div`
  grid-area: 1 / 4 / last-line / end;
  background: ${colors.blue900};
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    mix-blend-mode: lighten;
    opacity: .1;
    display: block;
    position: absolute;
    top: -100%;
    right: -100%;
    bottom: -100%;
    left: -100%;
    margin: auto;
    max-width: 100%;
    ${media.sm`
      opacity: .25;
    `}
  }

  &:before {
    content: '';
    padding-top: 145%;
    display: block;
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

const AboutMe = styled.main`
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
    color: #FFF;
    border-bottom: 1px dotted ${colors.gray500};
  }
`

const ProfileIntro = () => 
  <ProfileWrapper>
    <InfoWrapper>
      <Intro fixed={false} />
      <AboutMe>
        <p>Da più di 4 anni lavoro con piccole e grandi aziende in tutto il mondo. Sono focalizzato principalmente sul costruire interfacce utente usabili, scalabili e testabili per qualsiasi piattaforma. Mi piace il mondo open source, <a href="">sperimentare e costruire cose.</a></p>
        
        <p>Alle volte posto qualcosa <a>Behance</a>, <a>Twitter</a> o <a>Instagram</a>.</p>  
      </AboutMe>
    </InfoWrapper>
    <StyledWeekDistance />
    <Box>
      <img src={portrait} />
    </Box>
  </ProfileWrapper>

export default ProfileIntro
