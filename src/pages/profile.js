import React, { Component } from 'react'
import styled from 'styled-components'
import ContentWrapper from '../components/ContentWrapper'
import Intro from '../components/Intro'

const ProfileWrapper = styled.div`
  display: grid;
`

const Box = styled.div`
  background: #313944;
`

class ProfilePage extends Component {
  render() {
    return (
      <ContentWrapper>
        <ProfileWrapper>
          <div>
            <Intro fixed={false} />
            <div>
              Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
            </div>
          </div>
          <div>
            <Box />
          </div>
        </ProfileWrapper>

        
      </ContentWrapper> 
    )
  }
}

export default ProfilePage
