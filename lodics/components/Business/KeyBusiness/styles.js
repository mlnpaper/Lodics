import styled from 'styled-components';
import { palette } from '../../../styles/color';

export const ImgContainer = styled.div`
  /* -------------------------------------------------------------------------- */
  /*                               모바일  & default                             */
  /* -------------------------------------------------------------------------- */
  width: 100%;

  img {
    border: 1px solid ${palette.themeDashedBorder};
    display: block;
    width: 100%;
    min-height: 40vh;
  }

  @media all and (min-width: 768px) {
    /* -------------------------------------------------------------------------- */
    /*                                   테블릿                                    */
    /* -------------------------------------------------------------------------- */
    padding: 0 5rem;

    img {
      min-height: 80vh;
    }
  }
`;
