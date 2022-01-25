import styled from 'styled-components';

import { palette } from '@styles/color';

export const Container = styled.footer`
  /* -------------------------------------------------------------------------- */
  /*                               모바일  & default                             */
  /* -------------------------------------------------------------------------- */
  width: 100%;
  font-family: 'Nanum Gothic';
  background: rgba(0, 0, 0, 0.7);
  padding: 2rem;

  ul {
    width: calc(100% - 2rem);
    margin: 0 auto;
    display: flex;
    flex-flow: column;

    li {
      text-align: center;
    }

    span {
      font-size: 1rem;
      color: ${palette.themeWhite};
      opacity: 0.7;
    }

    a {
      &:hover span {
        color: ${palette.themeHover};
      }
    }
  }

  @media all and (min-width: 768px) {
    /* -------------------------------------------------------------------------- */
    /*                                   테블릿                                    */
    /* -------------------------------------------------------------------------- */
    ul {
      width: 1200px;
      padding: 0.3rem 0;
      flex-flow: row;

      li {
        margin-right: 1rem;
      }

      span {
        font-size: 1.2rem;
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
  }
`;
