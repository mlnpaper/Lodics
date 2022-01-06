import styled from 'styled-components';
import { palette } from '@styles/color';

export const HeadLineContainer = styled.div`
  /* -------------------------------------------------------------------------- */
  /*                               모바일  & default                             */
  /* -------------------------------------------------------------------------- */
  margin-bottom: 5rem;

  p,
  em {
    font-size: 2.5rem;
    margin: 0;
  }

  em {
    font-weight: 600;
    color: ${palette.themePrimary};
  }

  @media all and (min-width: 768px) {
    /* -------------------------------------------------------------------------- */
    /*                                   테블릿                                    */
    /* -------------------------------------------------------------------------- */
    p,
    em {
      font-size: 3rem;
    }
  }
`;

export const ContentContainer = styled.div`
  /* -------------------------------------------------------------------------- */
  /*                               모바일  & default                             */
  /* -------------------------------------------------------------------------- */
  margin-bottom: 5rem;

  p {
    font-size: 1.3rem;
    margin: 0;
    line-height: 190%;
    font-weight: 400;
  }

  @media all and (min-width: 768px) {
    /* -------------------------------------------------------------------------- */
    /*                                   테블릿                                    */
    /* -------------------------------------------------------------------------- */
    p {
      font-size: 1.6rem;
    }
  }

  @media all and (min-width: 1200px) {
    /* -------------------------------------------------------------------------- */
    /*                              데스크탑 일반                                  */
    /* -------------------------------------------------------------------------- */
  }
`;

export const SignContainer = styled.div`
  /* -------------------------------------------------------------------------- */
  /*                               모바일  & default                             */
  /* -------------------------------------------------------------------------- */
  margin-bottom: 7rem;

  span {
    font-size: 1.6rem;
    margin-right: 1.5rem;
  }

  em {
    font-size: 2.3rem;
    font-weight: 600;
  }

  @media all and (min-width: 768px) {
    /* -------------------------------------------------------------------------- */
    /*                                   테블릿                                    */
    /* -------------------------------------------------------------------------- */
    span {
      font-size: 1.8rem;
    }

    em {
      font-size: 2.5rem;
    }
  }
`;
