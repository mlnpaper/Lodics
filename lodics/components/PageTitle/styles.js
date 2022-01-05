import styled from 'styled-components'
import { palette } from '../../styles/color'

export const Title = styled.div`
  margin: 0 0 5rem;
  div {
    font-size: 40px;
    font-weight: 600;
  }
  hr {
    width: 6em;
    float: left;
    border: 1px solid ${palette.themePrimary};
  }
`
