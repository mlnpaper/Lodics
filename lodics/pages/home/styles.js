import styled from 'styled-components';
import { palette } from '../../styles/color';

export const Container = styled.div`
  min-height: 100vh;
  overflow: hidden;
  position: relative;
`;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -5;
  background: center / cover no-repeat url('img/basic_bg.jpg');
  animation: scaleAnimation 10s cubic-bezier(0.4, 0.4, 0.4, 1) 0s infinite normal forwards;

  @keyframes scaleAnimation {
    0% {
      transform: scale(1.4);
      filter: blur(1px);
    }
    20% {
      filter: blur(0);
    }
    95% {
      filter: brightness(1);
    }
    100% {
      transform: scale(1);
      filter: brightness(1.1);
    }
  }
`;

export const TextContainer = styled.div`
  /* -------------------------------------------------------------------------- */
  /*                               모바일  & default                             */
  /* -------------------------------------------------------------------------- */
  width: calc(100% - 5rem);
  color: ${palette.themeWhite};
  display: flex;
  flex-flow: column;
  backdrop-filter: grayscale(50%);
  margin: 10rem auto;
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
      white-space: nowrap;
      font-size: 3.2rem;
    }

    .second_line {
      white-space: nowrap;
      font-size: 2rem;
      margin-top: 1rem;
    }
  }

  @media all and (min-width: 1200px) {
    /* -------------------------------------------------------------------------- */
    /*                              데스크탑 일반                                  */
    /* -------------------------------------------------------------------------- */
    width: 1200px;
  }
`;

export const CardContainer = styled.div`
  /* -------------------------------------------------------------------------- */
  /*                               모바일  & default                             */
  /* -------------------------------------------------------------------------- */
  display: flex;
  flex-flow: column;
  width: 100%;
  margin: 0 0 10rem;

  @media all and (min-width: 768px) {
    /* -------------------------------------------------------------------------- */
    /*                                   테블릿                                    */
    /* -------------------------------------------------------------------------- */
    flex-flow: row nowrap;
    margin: 0 auto 10rem;
  }

  @media all and (min-width: 1200px) {
    /* -------------------------------------------------------------------------- */
    /*                              데스크탑 일반                                  */
    /* -------------------------------------------------------------------------- */
    width: 1200px;
  }
`;
