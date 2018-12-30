import React from 'react'
import ProfileIntroSection from '../ProfileIntroSection'
import ProfileListItem from '../ProfileListItem'
import EventListItem from '../EventListItem'
import Head from '../Head'
import ProfileList from '../ProfileList'
import { META } from '../../utils/constants'
import { ContentWrapper } from '../../style/shared'
import { ListsSection, ClientsList } from './style'

export default ({ data }) => {
  const { clients, events, mentions, articles } = data
  
  return (
      <ContentWrapper>
        <Head 
          {...META.profile}
          image={META.common.image}
        />
        <ProfileIntroSection 
          content={() =>
            <>            
              <p>Over the last 4+ years, I have been working with small and big companies all over the world. 
              I focus primarily on building, prototyping and implementing user interfaces that are usable and scalable for any web-based platform.{' '}
              <a href="https://dribbble.com/michelemazzucco" target="_blank" rel="noopener noreferrer">I enjoy experimenting</a>, <a href="https://github.com/michelemazzucco" target="_blank" rel="noopener noreferrer">building and trying</a> out new tools.</p>
              <p>Sometimes <a href="https://twitter.com/MicheleMazzucco" target="_blank" rel="noopener noreferrer">I tweet</a> and share photos on <a href="https://www.instagram.com/michele.mazzucco/" target="_blank" rel="noopener noreferrer">Instagram</a>.</p>
            </>
          }
        />
        <ListsSection>
          {events.edges.length > 0 && 
            <ProfileList 
              title='Timeline'
              list={() => events.edges.map(({ event }, i) => (
                <EventListItem 
                  key={i}
                  {...event}
                />
              ))}
            />}
          {articles.edges.length > 0 && 
            <ProfileList 
              title='Public speaking & Articles'
              list={() => articles.edges.map(({ article }, i) => (
                <ProfileListItem 
                  key={i}
                  {...article}
                />
              ))}
            />}
          {mentions.edges.length > 0 && 
            <ProfileList 
              title='Featured on'
              list={() => mentions.edges.map(({ mention }, i) => (
                <ProfileListItem 
                  key={i}
                  {...mention}
                />
              ))}
            />}
          {clients.edges.length > 0 && 
            <ClientsList 
              title='Companies I have worked with'
              list={() => clients.edges.map(({ client }, i) => (
                <ProfileListItem 
                  key={i}
                  {...client}
                />
              ))}
            />}
        </ListsSection>
      </ContentWrapper>
  )
}
