import styled from 'styled-components';
import { palette } from '../../styles/color';

export const Container = styled.div`
  font-size: 1.2rem;
  font-family: 'Nanum Gothic';
  background: ${palette.themeBlack};
  padding: 2rem;
  color: ${palette.themeGray};

  ul {
    width: 1200px;
    margin: 0 auto;
    padding: 0.1rem 0;
    display: flex;
    flex-flow: row;

    &:first-child {
      li {
        &:nth-child(-n + 2) {
          &:after {
            position: relative;
            top: 5px;
            display: block;
            content: '';
            margin: 0px 8px;
            width: 1px;
            height: 9px;
            background-color: ${palette.themeGray};
            float: right;
          }
        }
      }
    }
  }

  li {
    list-style: none;
  }

  a {
    &:hover {
      color: ${palette.themeHover};
    }
  }
`;
