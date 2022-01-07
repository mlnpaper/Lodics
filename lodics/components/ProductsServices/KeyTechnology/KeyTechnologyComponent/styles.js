import styled from 'styled-components';
import { palette } from '@styles/color';

export const Contents = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: space-between;

  img {
    width: 540px;
    border: 1px solid #dfdfdf;
  }
`;
export const Table = styled.table`
  width: 640px;
  border-top: 3px solid ${palette.themePrimary};
  border-bottom: 3px solid ${palette.themePrimary};
  th {
    vertical-align: middle;
    width: 160px;
    background-color: #efeff1;
    font-size: 18px;
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
    font-size: 15px;
    line-height: 35px;
    margin-bottom: 0px;
    list-style: square;
    padding: 0px 20px 0px 50px;
    /* border-bottom: 1px solid #dfdfdf; */
  }
`;
