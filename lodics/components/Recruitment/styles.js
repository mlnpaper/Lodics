import styled from 'styled-components';
import { palette } from '@styles/color';

export const Div = styled.div`
  font-size: 2.5rem;
  font-weight: 400;
  white-space: pre-wrap;
  b {
    font-size: 2.5rem;
    color: ${palette.themePrimary};
  }

  @media all and (min-width: 768px) {
    /* -------------------------------------------------------------------------- */
    /*                                   테블릿                                    */
    /* -------------------------------------------------------------------------- */
    font-size: 3rem;
    b {
      font-size: 3rem;
    }
  }
`;

export const Line = styled.hr`
  border: 1px dashed #e8e8e8;
  margin: 50px 0px 50px 0px;
`;

export const RecruitFieldTable = styled.table`
  width: 100%;
  border: 1px solid #ddd;
  margin: 50px 0px 50px 0px;
  border-bottom: 1px solid #e8e8e8;

  thead {
    background-color: ${palette.themePrimary};
    color: ${palette.themeWhite};

    th {
      border: 1px solid #ddd;
      height: 50px;
      font-size: 1.3rem;
      font-weight: bold;
      vertical-align: middle;
    }
  }

  tbody {
    font-weight: bold;

    tr:nth-child(even) {
      background-color: ${palette.themeWhite};
    }
    tr:nth-child(odd) {
      background-color: #f4f8ff;
    }
    td {
      font-size: 1.3rem;
      border: 1px solid #ddd;
      text-align: center;
      vertical-align: middle;
    }

    td + td {
      font-size: 1.3rem;
      font-weight: normal;
      div {
        font-size: 1.3rem;
        font-weight: bold;
      }
    }

    ul {
      list-style-type: none;
      margin-left: 0;
      padding: 0;
      li {
        font-size: 1.3rem;
      }
    }
  }
  @media all and (min-width: 768px) {
    thead {
      th {
        font-size: 1.4rem;
      }
    }

    tbody {
      td {
        font-size: 1.6rem;
      }

      td + td {
        font-size: 1.6rem;
        div {
          font-size: 1.6rem;
        }
      }

      ul {
        li {
          font-size: 1.6rem;
        }
      }
    }
  }
`;
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
      font-size: 3rem;
      font-style: italic;
      font-weight: 500;
    }

    div + div {
      color: ${palette.themeBlack};
      font-size: 1.5rem;
      font-style: normal;
      font-weight: bold;
    }
  }

  td {
    border: 1px solid #ddd;
    font-size: 1.3rem;
    padding-left: 50px;
    vertical-align: middle;
    ul {
      margin-bottom: 0px;

      li::marker {
        color: ${palette.themePrimary};
      }

      li {
        color: ${palette.themeBlack};
        font-size: 1.3rem;
        list-style-type: square;
      }
    }
  }
  @media all and (min-width: 768px) {
    th {
      div {
        font-size: 4rem;
      }
      div + div {
        font-size: 1.8rem;
      }
    }
    td {
      font-size: 1.6rem;
      ul {
        li {
          font-size: 1.6rem;
        }
      }
    }
  }
`;

export const WrapCirCle = styled.div`
  margin-top: 50px;
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
    width: 30px;
    height: 30px;
    color: #a4a4a4;
  }
  @media all and (min-width: 768px) {
    svg {
      width: 75px;
      height: 75px;
    }
  }
`;

export const Circle = styled.div`
  background: center / cover url(${props => (props.$theme === 'image' ? props.$image : null)});
  width: ${props => (props.$size === '150px' ? '75px' : '150px')};
  height: ${props => (props.$size === '150px' ? '75px' : '150px')};
  border: 3px solid ${palette.themePrimary};
  border-color: ${props => (props.$theme === 'image' ? 'transparent' : palette.themePrimary)};
  border-radius: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    font-size: 2rem;
    color: ${props => (props.$theme === 'image' ? palette.themeWhite : palette.themePrimary)};
    font-weight: 700;
    text-align: center;
  }

  hr {
    width: 20%;
    border: 2px solid ${palette.themePrimary};
    background-color: ${palette.themePrimary};
  }

  div + hr + div {
    font-size: 1.2rem;
    color: ${props => (props.$theme === 'image' ? palette.themeWhite : palette.themePrimary)};

    white-space: pre-wrap;
    text-align: center;
  }

  svg {
    width: 37.5 px;
    height: 37.5px;
    color: ${palette.themeWhite};
  }

  @media all and (min-width: 768px) {
    width: ${props => props.$size};
    height: ${props => props.$size};

    div {
      font-size: 3rem;
    }

    div + hr + div {
      font-size: 1.4rem;
    }

    svg {
      width: 75px;
      height: 75px;
    }
  }
`;
