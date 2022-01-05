import styled from 'styled-components'
import { palette } from '../../../styles/color'

export const Contents = styled.ul`
  margin-bottom: 30px;
  li {
    font-size: 20px;
    font-weight: 600;
    list-style: square;
    ul {
      margin-top: 15px;
      list-style: square;
      li {
        font-size: 16px;
        font-weight: 700;
        padding-left: 0px;
        padding-bottom: 5px;
        color: ${palette.themePrimary};
        font-family: 'Malgun Gothic';
        li {
          list-style: none;
          color: ${palette.themeBlack};
          font-family: 'Malgun Gothic';
          font-weight: normal;
        }
      }
    }
  }
`
