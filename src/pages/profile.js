import React, { Component } from 'react'
import styled from 'styled-components'
import Anime from 'react-anime'
import ContentWrapper from '../components/ContentWrapper'
import ProfileIntro from '../components/ProfileIntro'
import ProfileList from '../components/ProfileList'
import ProfileListItem from '../components/ProfileListItem'
import EventListItem from '../components/EventListItem'
import { media } from '../utils/commonStyles'

const ListsWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto; 
  grid-column-gap: 3rem;
  grid-row-gap: 4.5rem;
  padding: 6rem 0;
  ${media.sm`
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 0;
  `} 
`

const ClientsList = styled(ProfileList)`
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    ${media.sm`
      grid-template-columns: repeat(1, 1fr);
      grid-column-gap: 0;
    `} 
  }
`

const ProfilePage = props => {
  const { clients, events, mentions, articles } = props.data
  
  return (
    <ContentWrapper>
      <ProfileIntro />
      <ListsWrapper>
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
        {clients.edges.length > 0 && 
          <ClientsList 
            title='Aziende con cui ho lavorato'
            list={() => clients.edges.map(({ client }, i) => (
              <ProfileListItem 
                key={i}
                {...client}
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
      </ListsWrapper>
    </ContentWrapper> 
  )
}

export default ProfilePage

export const profileQuery = graphql`
  query ProfileQuery {
    clients: allClientsJson {
      edges {
        client: node {
          name
        }
      }
    }
    events: allEventsJson {
      edges {
        event: node {
          year
          position
          company
        }
      }
    }
    mentions: allMentionsJson {
      edges {
        mention: node {
          name
          url
        }
      }
    }
    articles: allArticlesJson {
      edges {
        article: node {
          name
          url
        }
      }
    }
  }
`
