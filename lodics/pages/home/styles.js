import styled from 'styled-components';
import { palette } from '../../styles/color';

export const Container = styled.div`
  /* -------------------------------------------------------------------------- */
  /*                               모바일  & default                             */
  /* -------------------------------------------------------------------------- */
  min-height: 100vh;
  overflow: hidden;
  background: left / cover no-repeat url('img/basic_bg.jpg');

  @media all and (min-width: 768px) {
    /* -------------------------------------------------------------------------- */
    /*                                   테블릿                                    */
    /* -------------------------------------------------------------------------- */
    background: center / cover no-repeat url('img/basic_bg.jpg');
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
  margin: 5rem auto 0;

  span {
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 4rem;
    text-align: center;
    color: ${palette.themeWhite};
  }

  span + span {
    font-size: 1.6rem;
    font-weight: 300;
    margin-bottom: 0;
  }

  @media all and (min-width: 768px) {
    /* -------------------------------------------------------------------------- */
    /*                                   테블릿                                    */
    /* -------------------------------------------------------------------------- */
    width: calc(100% - 2rem);
    margin: 0 auto;

    span {
      font-size: 3.2rem;
    }

    span + span {
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
  margin: 5rem 0;

  @media all and (min-width: 768px) {
    /* -------------------------------------------------------------------------- */
    /*                                   테블릿                                    */
    /* -------------------------------------------------------------------------- */
    flex-flow: row nowrap;
    margin: 0 auto;
  }

  @media all and (min-width: 1200px) {
    /* -------------------------------------------------------------------------- */
    /*                              데스크탑 일반                                  */
    /* -------------------------------------------------------------------------- */
    width: 1200px;
  }
`;
