import styled from 'styled-components'
import { palette } from '../../styles/color'

export const Div = styled.div`
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  /* justify-content: ${props =>
    props.$theme === 'black' ? 'none' : 'space-between'}; */
`
