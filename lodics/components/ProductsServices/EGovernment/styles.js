import styled from 'styled-components';
import { palette } from '@styles/color';

export const Contents = styled.ul`
  margin: 0px 0px 30px 30px;

  span {
    font-size: 20px;
    font-weight: 600;
    list-style: square;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      display: block;
      top: 14px;
      left: -25px;
      width: 13px;
      height: 13px;
      border: 4px solid ${palette.themePrimary};
      transform: translateY(-50%);
    }
  }

  ul {
    margin-top: 15px;
    li {
      list-style: square;
      font-size: 16px;
      font-weight: 700;
      padding-left: 0px;
      padding-bottom: 5px;
      color: ${palette.themePrimary};
      font-family: 'Malgun Gothic';
      div {
        font-size: 14px;
        list-style: none;
        color: ${palette.themeBlack};
        font-family: 'Malgun Gothic';
        font-weight: normal;
      }
    }
  }
`;
