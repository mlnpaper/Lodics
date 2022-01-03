import styled from 'styled-components';
import { palette } from '../../styles/color';

export const Container = styled.div`
  width: 100vw;
  font-family: 'Nanum Gothic';
  background: rgba(0, 0, 0, 0.7);
  padding: 2rem;
  color: ${palette.themeGray};

  ul {
    width: 1200px;
    margin: 0 auto;
    padding: 0.3rem 0;
    display: flex;
    flex-flow: row;

    li {
      margin-right: 1rem;
    }

    span {
      font-size: 1.2rem;
      color: ${palette.themeWhite};
      opacity: 0.7;
    }

    &:nth-child(-n + 2) {
      li {
        &:nth-child(-n + 2) {
          &:after {
            content: '';
            position: relative;
            top: 0.5rem;
            display: block;
            margin-left: 1rem;
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
    color: ${palette.themeGray};
    &:hover {
      color: ${palette.themeHover};
    }
  }
`;
