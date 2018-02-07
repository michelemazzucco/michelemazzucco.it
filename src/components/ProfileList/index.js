import React from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/commonStyles'

const ListTitle = styled.h3`
  color: #fff;
  font-size: 1.1rem;
  font-weight: 400;
  margin-bottom: 1rem;

  &::after {
    content: '';
    width: 1rem;
    height: 1px;
    background: ${colors.yellow500};
    display: inline-block;
    vertical-align: middle;
    margin-left: 1rem;
  }
`

const ProfileList = ({ title, list, className }) =>
  <article className={className}>
    <header>
      <ListTitle>{title}</ListTitle>
    </header>
    <ul>{list()}</ul>
  </article>

export default ProfileList
