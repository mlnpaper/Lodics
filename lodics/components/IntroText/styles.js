import styled from 'styled-components';

import { palette } from '@styles/color';

export const Container = styled.div`
  /* -------------------------------------------------------------------------- */
  /*                               모바일  & default                             */
  /* -------------------------------------------------------------------------- */
  width: calc(100% - 5rem);
  color: ${palette.themeWhite};
  display: flex;
  flex-flow: column;
  margin: 5rem auto;
  min-height: 18rem;
  position: relative;

  .first_line,
  .second_line {
    color: ${palette.themeWhite};
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
  }

  .first_line {
    font-size: 3rem;
    font-weight: 600;

    animation: firstTextAnimation 10s ease-out 0s infinite normal forwards;
    @keyframes firstTextAnimation {
      0% {
        opacity: 0;
        top: -50%;
      }
      10% {
        opacity: 1;
        top: 0;
      }
    }
  }

  .second_line {
    font-size: 1.6rem;
    font-weight: 300;
    margin-bottom: 0;
  }

  .second_line {
    animation: secondTextAnimation 10s ease-out 0s infinite normal forwards;
    @keyframes secondTextAnimation {
      0% {
        opacity: 0;
        top: 0%;
      }
      10% {
        opacity: 0;
        top: 0%;
      }
      20% {
        opacity: 1;
        top: 50%;
      }
      100% {
        opacity: 1;
        top: 50%;
      }
    }
  }

  @media all and (min-width: 768px) {
    /* -------------------------------------------------------------------------- */
    /*                                   테블릿                                    */
    /* -------------------------------------------------------------------------- */
    width: calc(100% - 2rem);

    .first_line {
      font-size: 3.2rem;
    }

    .second_line {
      font-size: 2rem;
      margin-top: 1rem;
      white-space: pre-line;
    }
  }

  @media all and (min-width: 1200px) {
    /* -------------------------------------------------------------------------- */
    /*                              데스크탑 일반                                  */
    /* -------------------------------------------------------------------------- */
    width: 1200px;
  }
`;
