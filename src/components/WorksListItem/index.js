import React from 'react'
import styled, { css } from 'styled-components'
import { fonts, colors } from '../../utils/commonStyles'

const WorkWrapper = styled.li`
  padding: 1.3rem 0;
  border-bottom: 1px dotted #2f3743;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;  

  > header {
    transform: translateX(0);
    transition: transform .5s cubic-bezier(0.5, 0.1, 0, 1.15);
  }
  
  &:last-child {
    border-bottom: 0;
  }

  > a {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  ${props => props.hasLink && css`
    &:hover {
      > header {
        transform: translateX(-.75rem);
      }    
    }
  `}
`

const WorkTitle = styled.h3`
  font-size: 1rem;
  color: #FFF;
  font-weight: 400;
`

const WorkInfos = styled.div`
  margin-top: .5rem;
  font-family: ${fonts.mono};
  font-size: .9rem;
  color: ${colors.gray500};
`

const WorkYear = styled.span`
  color: #FFF;
  &:before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 1px;
    width: 1rem;
    background: ${colors.yellow500};
    margin-right: .5rem;
  }
`

const WorksListItem = props =>  {
  const { title, client, year, collaborators, url } = props.work

  return (
    <WorkWrapper hasLink={url !== null}>
      <header>
        <WorkTitle>{title}</WorkTitle>
        <WorkInfos>
          <span>{client}</span>
          {collaborators && <span>w/ {collaborators.map(c => c).join(', ')}</span>}
        </WorkInfos>
      </header>
      <WorkInfos>
        <WorkYear>{year}</WorkYear>
      </WorkInfos>
      {url && <a href={url} target='_blank' />}
    </WorkWrapper>
  )
}

export default WorksListItem
