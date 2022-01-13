import styled from 'styled-components';
import { palette } from '@styles/color';

export const WrapContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media all and (min-width: 768px) {
    /* -------------------------------------------------------------------------- */
    /*                                   테블릿                                    */
    /* -------------------------------------------------------------------------- */
    flex-direction: row;
  }
`;

export const SingleContents = styled.div`
  border: 1px solid #dddddd;
  border-radius: 10px;
  text-align: center;
  padding: 10px 5px 0px 5px;
  span {
    font-size: 1.8rem;
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
      margin: 10px 10px 10px 10px;
      color: #464646;
      font-size: 16px;
      font-weight: 500;
      white-space: pre-wrap;
    }
  }
  @media all and (min-width: 768px) {
    /* -------------------------------------------------------------------------- */
    /*                                   테블릿                                    */
    /* -------------------------------------------------------------------------- */
    span {
      font-size: 2rem;
    }
    ul {
      li {
        width: 250px;
      }
    }
  }
`;

export const MultipleContents = styled.div`
  border: 1px solid #dddddd;
  border-radius: 10px;
  text-align: center;
  padding: 10px 5px 0px 5px;
  margin: 10px 0px;
  span {
    font-size: 1.8rem;
    font-weight: 500;
    white-space: pre-wrap;
    color: ${palette.themePrimary};
  }
  div {
    display: flex;
    flex-direction: row;
    font-size: 1.4rem;
    ul {
      font-size: 1.8rem;
      list-style: none;
      padding: 0px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      li {
        font-size: 1.3rem;
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
          font-size: 1.1rem;
          background-color: ${palette.themeWhite};
          border: 1px solid #dddddd;
          padding: 5px 0px;
          width: 100px;
          /* width: 400px; */
        }
      }
    }
  }

  @media all and (max-width: 320px) {
    /* -------------------------------------------------------------------------- */
    /*                                   소형 휴대기기                                    */
    /* -------------------------------------------------------------------------- */

    div {
      flex-direction: column;
    }
  }

  @media all and (min-width: 768px) {
    /* -------------------------------------------------------------------------- */
    /*                                   테블릿                                    */
    /* -------------------------------------------------------------------------- */
    margin: 0px 10px;
    span {
      font-size: 2rem;
    }
    div {
      font-size: 1.6rem;
      ul {
        font-size: 2rem;
        li {
          font-size: 1.6rem;
          td {
            font-size: 1.6rem;
            width: 400px;
          }
        }
      }
    }
  }
`;
