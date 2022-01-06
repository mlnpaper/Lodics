import styled from 'styled-components'
import { palette } from '@styles/color'

export const WrapContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const SingleContents = styled.div`
  border: 1px solid #dddddd;
  border-radius: 10px;
  text-align: center;
  padding: 10px 5px 0px 5px;
  span {
    font-size: 20px;
    font-weight: 500;
    white-space: pre-wrap;
    color: ${palette.themePrimary};
  }
  ul {
    list-style: none;
    padding: 0px;
    li {
      background-color: #f6f6f6;
      border: 1px solid #dddddd;
      border-radius: 2px;
      padding: 40px 0px;
      width: 250px;
      margin: 10px 10px 10px 10px;
      color: #464646;
      font-size: 16px;
      font-weight: 500;
      white-space: pre-wrap;
    }
  }
`

export const MultipleContents = styled.div`
  border: 1px solid #dddddd;
  border-radius: 10px;
  text-align: center;
  padding: 10px 5px 0px 5px;
  margin: 0px 10px;
  span {
    font-size: 20px;
    font-weight: 500;
    white-space: pre-wrap;
    color: ${palette.themePrimary};
  }
  div {
    display: flex;
    flex-direction: row;
    font-size: 16px;
    ul {
      list-style: none;
      padding: 0px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      li {
        background-color: #f6f6f6;
        border: 1px solid #dddddd;
        border-radius: 2px;
        padding: 10px 0px;
        margin: 10px 5px 10px 5px;
        color: #464646;
        font-weight: 500;
        white-space: pre-wrap;
        table {
          border-collapse: separate;
          border-spacing: 10px 10px;
        }

        td {
          background-color: ${palette.themeWhite};
          border: 1px solid #dddddd;
          padding: 5px 0px;
          width: 120px;
          /* width: 400px; */
        }
      }
    }
  }
`

export const Contents = styled.div`
  border: 1px solid #dddddd;
  border-radius: 10px;
  text-align: center;
  padding: 10px 0px 10px 0px;

  span {
    font-size: 20px;
    font-weight: 500;
    white-space: pre-wrap;
    color: ${palette.themePrimary};
  }

  div {
    background-color: #f6f6f6;
    border: 1px solid #dddddd;
    border-radius: 2px;
    padding: 40px 70px 40px 70px;
    margin: 10px 10px 10px 10px;
    color: #464646;
    font-size: 18px;
    font-weight: 500;
    white-space: pre-wrap;
  }
`

export const Contents_ = styled.div`
  border: 1px solid #dddddd;
  border-radius: 10px;
  text-align: center;
  padding: 10px 0px 10px 0px;

  span {
    font-size: 20px;
    font-weight: 500;
    white-space: pre-wrap;
    color: ${palette.themePrimary};
  }

  div {
    display: flex;
    flex-direction: row;
    div {
      display: flex;
      flex-direction: column;
      div {
        width: 15em;
        background-color: #f6f6f6;
        border: 1px solid #dddddd;
        border-radius: 2px;
        /* padding: 40px 70px 40px 70px;
        margin: 10px 10px 10px 10px; */
        color: #464646;
        font-size: 18px;
        font-weight: 500;
        white-space: pre-wrap;
        div {
          display: flex;
          flex-direction: row;
          padding: 0px 0px 0px 0px;
          div {
            background-color: ${palette.themeWhite};
            /* margin: 0px auto; */
            padding: 0px 0px 0px 0px;
          }
        }
      }
    }
  }

  /* div + div {
    background-color: #f6f6f6;
    border: 1px solid #dddddd;
    border-radius: 2px;
    padding: 40px 70px 40px 70px;
    margin: 10px 10px 10px 10px;
    color: #464646;
    font-size: 18px;
    font-weight: 500;
    white-space: pre-wrap;
  } */
`
