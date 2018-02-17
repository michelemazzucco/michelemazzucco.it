import React from 'react'
import { ListItem } from '../../style/shared'

const ProfileListItem = ({ name, url }) =>
  <ListItem>
    {url 
      ? <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
      : name}
  </ListItem>

export default ProfileListItem
