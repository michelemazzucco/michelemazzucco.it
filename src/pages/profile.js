import React, { Component } from 'react'
import ContentWrapper from '../components/ContentWrapper'
import ProfileIntro from '../components/ProfileIntro'
import ProfileBlock from '../components/ProfileBlock'
import ClientsList from '../components/ClientsList'

const ProfilePage = ({ data }) => {
  console.log(data)
  return (
    <ContentWrapper>
      <ProfileIntro />
      <ProfileBlock title="Clients">
        <ClientsList clients={data.clients.edges} />
      </ProfileBlock>
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
    timeline: allTimelineJson {
      edges {
        event: node {
          year
          position
          company
        }
      }
    }
  }
`
