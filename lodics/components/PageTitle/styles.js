import styled from 'styled-components';

import { palette } from '@styles/color';

export const Container = styled.div`
  /* -------------------------------------------------------------------------- */
  /*                               모바일  & default                             */
  /* -------------------------------------------------------------------------- */
  margin: 3rem 0 5rem;

  h3 {
    font-size: 3.5rem;
    font-weight: 600;
    margin: 0;
    color: ${palette.themeBlack};

    &:after {
      display: block;
      content: '';
      width: 70px;
      height: 2px;
      margin: 5px;
      background-color: ${palette.themePrimary};
    }
  }

  @media all and (min-width: 768px) {
    /* -------------------------------------------------------------------------- */
    /*                                   테블릿                                    */
    /* -------------------------------------------------------------------------- */
    h3 {
    font-size: 4rem;

    &:after {
      width: 80px;
    }
  }
`;
