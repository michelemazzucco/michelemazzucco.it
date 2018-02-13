import React from 'react'
import { Wrapper, WorkTitle, WorkInfos, WorkYear } from './style'

const WorksListItem = props =>  {
  const { title, client, year, collaborators, url } = props.work

  return (
    <Wrapper hasLink={url !== null}>
      <header>
        <WorkTitle>{title}</WorkTitle>
        <WorkInfos>
          <span>{client}</span>
          {collaborators && <span> w/ {collaborators.map(c => c).join(', ')}</span>}
        </WorkInfos>
      </header>
      <WorkInfos>
        <WorkYear>{year}</WorkYear>
      </WorkInfos>
      {url && <a href={url} target="_blank" rel="noopener noreferrer">More Info</a>}
    </Wrapper>
  )
}

export default WorksListItem
