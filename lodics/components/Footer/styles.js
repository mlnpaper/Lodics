import styled from 'styled-components';
import { palette } from '../../styles/color';

export const Container = styled.div`
  width: 100vw;
  font-family: 'Nanum Gothic';
  background: rgba(0, 0, 0, 0.8);
  padding: 2rem;
  color: ${palette.themeGray};

  ul {
    width: 1200px;
    margin: 0 auto;
    padding: 0.3rem 0;
    display: flex;
    flex-flow: row;

    span {
      font-size: 1.2rem;
    }

    &:first-child {
      li {
        &:nth-child(-n + 2) {
          &:after {
            position: relative;
            top: 0.2rem;
            display: block;
            content: '';
            margin: 0 0.7rem;
            width: 1px;
            height: 9px;
            background-color: ${palette.themeGray};
            float: right;
          }
        }
      }
    }
  }

  a {
    &:hover {
      color: ${palette.themeHover};
    }
  }
`;
