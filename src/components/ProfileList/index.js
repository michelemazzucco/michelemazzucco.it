import React from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/commonStyles'

const ListTitle = styled.h3`
  color: #FFF;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 1rem;

  &:after {
    content: '';
    width: 1rem;
    height: 1px;
    background: ${colors.yellow500};
    display: inline-block;
    vertical-align: middle;
    margin-left: 1rem;
  }
`

const ProfileList = ({ title, list }) =>
  <article>
    <header>
      <ListTitle>{title}</ListTitle>
    </header>
    <main>{list()}</main>
  </article>

export default ProfileList
