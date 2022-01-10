import styled from 'styled-components';
import { palette } from '@styles/color';

export const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  @media all and (min-width: 1200px) {
    /* -------------------------------------------------------------------------- */
    /*                              데스크탑 일반                                  */
    /* -------------------------------------------------------------------------- */
    flex-flow: row nowrap;
    width: 1200px;
    img {
      width: 540px;
      border: 1px solid #dfdfdf;
    }
  }
`;

export const Table = styled.table`
  border-top: 3px solid ${palette.themePrimary};
  border-bottom: 3px solid ${palette.themePrimary};
  th {
    vertical-align: middle;
    width: 100px;
    background-color: #efeff1;
    font-size: 1.5rem;
    color: #333;
    border-bottom: 1px solid #dfdfdf;
  }
  td {
    vertical-align: middle;
    border-bottom: 1px solid #dfdfdf;
  }
  li::marker {
    color: ${palette.themePrimary};
  }
  li {
    color: ${palette.themeBlack};
    font-family: 'Malgun Gothic';
    font-size: 1.3rem;
    line-height: 35px;
    margin-bottom: 0px;
    list-style: square;
    padding: 0px 20px 0px 20px;
    /* border-bottom: 1px solid #dfdfdf; */
  }

  @media all and (min-width: 768px) {
    /* -------------------------------------------------------------------------- */
    /*                                   테블릿                                    */
    /* -------------------------------------------------------------------------- */
    width: 640px;
    border-top: 3px solid ${palette.themePrimary};
    border-bottom: 3px solid ${palette.themePrimary};
  th {
    font-size: 1.8rem;
  }
  li {
    font-size: 1.5rem;
  }
`;
