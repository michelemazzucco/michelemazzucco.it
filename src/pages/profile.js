import React, { Component } from 'react'
import ContentWrapper from '../components/ContentWrapper'
import ProfileIntro from '../components/ProfileIntro'
import ProfileBlock from '../components/ProfileBlock'
import BlockList from '../components/BlockList'
import EventsBlockList from '../components/EventsBlockList'
import styled from 'styled-components';


const BlocksWrapper = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto auto; 
  grid-column-gap: 2rem;
  grid-row-gap: 4rem;
  padding: 6rem 0;
`

const ProfilePage = props => {
  const { clients, events, mentions, articles } = props.data
  
  return (
    <ContentWrapper>
      <ProfileIntro />
      <BlocksWrapper>
        {clients.edges.length > 0 && 
          <ProfileBlock title="Clients">
            <BlockList edges={clients.edges} />
          </ProfileBlock>}
        {events.edges.length > 0 && 
          <ProfileBlock title="Timeline">
            <EventsBlockList events={events.edges} />
          </ProfileBlock>}
        {mentions.edges.length > 0 && 
          <ProfileBlock title="Mentions & Features">
            <BlockList edges={mentions.edges} />
          </ProfileBlock>}
        {articles.edges.length > 0 && 
          <ProfileBlock title="Public speaking & Articles">
            <BlockList edges={articles.edges} />
          </ProfileBlock>}
      </BlocksWrapper>
    </ContentWrapper> 
  )
}

export default ProfilePage

export const profileQuery = graphql`
  query ProfileQuery {
    clients: allClientsJson {
      edges {
        node {
          name
        }
      }
    }
    events: allEventsJson {
      edges {
        node {
          year
          position
          company
        }
      }
    }
    mentions: allMentionsJson {
      edges {
        node {
          name
          url
        }
      }
    }
    articles: allArticlesJson {
      edges {
        node {
          name
          url
        }
      }
    }
  }
`
