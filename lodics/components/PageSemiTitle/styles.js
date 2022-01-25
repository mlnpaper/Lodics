import styled from 'styled-components';

import { palette } from '@styles/color';

export const Container = styled.div`
  /* -------------------------------------------------------------------------- */
  /*                               모바일  & default                             */
  /* -------------------------------------------------------------------------- */
  color: ${props => props.$color};
  margin-top: 5rem;
  padding-top: 1rem;

  span {
    font-size: 2.5rem;
    font-weight: ${props => props.$fontWeight};
    position: relative;

    &:after {
      display: block;
      content: '';
      width: 13px;
      height: 6px;
      background-color: ${palette.themePrimary};
      position: absolute;
      top: -1.5rem;
    }

    &:before {
      display: block;
      content: '';
      width: 20px;
      height: 6px;
      background-color: ${palette.themeGray};
      position: absolute;
      top: -1.5rem;
    }
  }

  @media all and (min-width: 768px) {
    /* -------------------------------------------------------------------------- */
    /*                                   테블릿                                    */
    /* -------------------------------------------------------------------------- */
    span {
      font-size: 3rem;

      &:after {
        width: 15px;
        height: 8px;
        top: -1.7rem;
      }

      &:before {
        width: 23px;
        height: 8px;
        top: -1.7rem;
      }
    }
  }
`;
