import React, { Component } from 'react'
import styled from 'styled-components'
import ContentWrapper from '../components/ContentWrapper'
import ProfileIntro from '../components/ProfileIntro'
import ProfileList from '../components/ProfileList'
import ProfileListItem from '../components/ProfileListItem'
import EventListItem from '../components/EventListItem'
import { media } from '../utils/commonStyles'

const ListsWrapper = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto auto; 
  grid-column-gap: 2rem;
  grid-row-gap: 4rem;
  padding: 6rem 0;
  ${media.md`
    grid-template-columns: 100%;
    grid-column-gap: 0;
  `} 
`

const ProfilePage = props => {
  const { clients, events, mentions, articles } = props.data
  
  return (
    <ContentWrapper>
      <ProfileIntro />
      <ListsWrapper>
        {clients.edges.length > 0 && 
          <ProfileList 
            title='Clients'
            list={() => clients.edges.map(({ client }, i) => (
              <ProfileListItem 
                key={i}
                {...client}
              />
            ))}
          />}
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
        {mentions.edges.length > 0 && 
          <ProfileList 
            title='Mentions & Features'
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
