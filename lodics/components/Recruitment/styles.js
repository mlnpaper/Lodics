import styled from 'styled-components'
import { palette } from '../../styles/color'

export const Title = styled.div`
  div {
    font-size: 40px;
    font-weight: 600;
  }
  hr {
    width: 6em;
    float: left;
    border: 1px solid ${palette.themePrimary};
  }

  div + hr + div {
    font-size: 30px;
    font-weight: 400;
    white-space: pre-wrap;
    padding: 50px 0px 0px 0px;
    b {
      color: ${palette.themePrimary};
    }
  }
`

export const SubTitle = styled.div`
  margin-bottom: 30px;
  div {
    width: 20px;
    height: 7px;
    background-color: #e8e8e8;
    div {
      width: 13px;
      height: 7px;
      background-color: ${palette.themePrimary};
    }
  }

  span {
    font-size: 30px;
    font-weight: 500;
  }
`

export const Line = styled.hr`
  border: 1px dashed #e8e8e8;
  margin: 50px 0px 50px 0px;
`

export const RecruitFieldTable = styled.table`
  width: 100%;
  border: 1px solid #ddd;
  margin: 50px 0px 50px 0px;
  border-bottom: 1px solid #e8e8e8;

  thead {
    background-color: ${palette.themePrimary};
    color: ${palette.themeWhite};
    font-size: 16px;
    font-weight: bold;
    th {
      border: 1px solid #ddd;
      height: 50px;
    }
  }

  tbody {
    font-weight: bold;
    font-size: 16px;

    tr:nth-child(even) {
      background-color: ${palette.themeWhite};
    }
    tr:nth-child(odd) {
      background-color: #f4f8ff;
    }
    td {
      border: 1px solid #ddd;
      text-align: center;
    }

    td + td {
      font-weight: normal;
      div {
        font-weight: bold;
      }
    }

    ul {
      list-style-type: none;
      margin-left: 0;
      padding: 0;
    }
  }
`
export const ProcessTable = styled.table`
  width: 100%;
  border: 1px solid #ddd;
  margin: 50px 0px 50px 0px;
  border-bottom: 1px solid #e8e8e8;

  th {
    border: 1px solid #ddd;
    background-color: #f4f8ff;
    padding: 25px 15px 25px 15px;

    div {
      color: ${palette.themePrimary};
      font-size: 40px;
      font-style: italic;
      font-weight: 500;
    }

    div + div {
      color: ${palette.themeBlack};
      font-size: 18px;
      font-style: normal;
      font-weight: bold;
    }
  }

  td {
    border: 1px solid #ddd;
    font-size: 16px;
    padding-left: 30px;
    vertical-align: center;
    ul {
      list-style-type: square;

      li::marker {
        color: ${palette.themePrimary};
      }

      li {
        color: ${palette.themeBlack};
      }
    }
  }
`

export const WrapCirCle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  div {
    color: ${palette.themePrimary};
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  span {
    color: ${palette.themeBlack};
    font-size: 1.5em;
    font-weight: 600;
    margin-top: 15px;
  }

  svg {
    width: 75px;
    height: 75px;
    color: #a4a4a4;
  }
`

export const Circle = styled.div`
  background-image: url(${props =>
    props.$theme === 'image' ? props.$image : null});
  width: ${props => props.$size};
  height: ${props => props.$size};
  border: 3px solid ${palette.themePrimary};
  border-color: ${props =>
    props.$theme === 'image' ? 'transparent' : palette.themePrimary};
  border-radius: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    font-size: 30px;
    color: ${props =>
      props.$theme === 'image' ? palette.themeWhite : palette.themePrimary};
    font-weight: 700;
  }

  hr {
    width: 20%;
    border: 2px solid ${palette.themePrimary};
  }

  div + hr + div {
    font-size: 14px;
    color: ${props =>
      props.$theme === 'image' ? palette.themeWhite : palette.themePrimary};

    white-space: pre-wrap;
    text-align: center;
  }

  svg {
    width: 75px;
    height: 75px;
    color: ${palette.themeWhite};
  }
`
