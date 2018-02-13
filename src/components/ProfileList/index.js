import React from 'react'
import { ListTitle } from './style'

const ProfileList = ({ title, list, className }) =>
  <article className={className}>
    <header>
      <ListTitle>{title}</ListTitle>
    </header>
    <ul>{list()}</ul>
  </article>

export default ProfileList
