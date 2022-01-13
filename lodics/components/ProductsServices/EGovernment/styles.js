import styled from 'styled-components';
import { palette } from '@styles/color';

export const Contents = styled.ul`
  margin-bottom: 30px;
  li {
    font-size: 20px;
    font-weight: 600;
    list-style-image: url('img/smallHead-icon.png');
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
  }
`;
