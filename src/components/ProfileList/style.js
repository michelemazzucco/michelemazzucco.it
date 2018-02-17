import styled from 'styled-components'
import { colors } from '../../style/constants'

export const ListTitle = styled.h2`
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
