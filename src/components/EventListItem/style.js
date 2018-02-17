import styled from 'styled-components'
import { colors } from '../../style/constants'

export const Position = styled.span`
  border-bottom: 1px dotted ${colors.gray700};
`

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;

  div {
    transition: transform .3s cubic-bezier(.45, 0, .1, 1);
    will-change: transform;
  }

  .position {
    transform: translateY(0);
  }

  .year {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    transform: translateY(100%);
    color: #fff;
  }

  &:hover {
    .position {
      transform: translateY(-100%);
    }

    .year {
      transform: translateY(0);
    }
  }
`
