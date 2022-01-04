import styled from 'styled-components'
import { palette } from '../../../../styles/color'

export const WrapContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Contents = styled.div`
  border: 1px solid #dddddd;
  border-radius: 10px;
  text-align: center;
  padding: 10px 10px 10px 10px;

  span {
    font-size: 20px;
    font-weight: 500;
    white-space: pre-wrap;
    color: ${palette.themePrimary};
  }

  div {
    background-color: #f6f6f6;
    border: 1px solid #dddddd;
    border-radius: 5px;
    padding: 40px 60px 40px 60px;
    margin: 10px 10px 10px 10px;
    color: #464646;
    font-size: 18px;
    font-weight: 500;
    white-space: pre-wrap;
  }
`
