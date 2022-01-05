import styled from 'styled-components'
import { palette } from '../../../../styles/color'

export const Contents = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: space-between;

  img {
    width: 540px;
  }
`
export const Table = styled.table`
  width: 640px;
  border-top: 3px solid ${palette.themePrimary};
  border-bottom: 3px solid ${palette.themePrimary};
  th {
    width: 160px;
    background-color: #efeff1;
    font-size: 18px;
    color: #333;
    border-bottom: 1px solid #dfdfdf;
  }

  ul {
    margin-bottom: 0px;
    list-style: square;
    padding: 30px 50px;
    border-bottom: 1px solid #dfdfdf;
  }
  li::marker {
    color: ${palette.themePrimary};
  }
  li {
    color: ${palette.themeBlack};
    font-family: 'Malgun Gothic';
    font-size: 15px;
    line-height: 35px;
  }
`
