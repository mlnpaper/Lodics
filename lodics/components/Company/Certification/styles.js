import styled from 'styled-components';
import { palette } from '@styles/color';

// index.js
export const Container = styled.div`
  /* -------------------------------------------------------------------------- */
  /*                               모바일  & default                             */
  /* -------------------------------------------------------------------------- */
  display: flex;
  flex-flow: row wrap;
  border-bottom: 1px dashed ${palette.themeDashedBorder};
  padding-bottom: 3rem;
  margin-bottom: 10rem;

  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
`;

// Card.js
export const CardContainer = styled.div`
  /* -------------------------------------------------------------------------- */
  /*                               모바일  & default                             */
  /* -------------------------------------------------------------------------- */
  border: 1px solid ${palette.themeDashedBorder};
  display: flex;
  flex-flow: column;
  width: calc(100% / 2 - 2.5rem + 0.625rem);
  margin: 2.5rem 2.5rem 0 0;
  background: #f4f8ff;

  &:nth-child(2n) {
    margin-right: 0;
  }

  p {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0;
    padding: 0.8rem;
    font-size: 1.2rem;
    font-family: 'Nanum Gothic';
    background: ${palette.themeWhite};
    border-top: 1px dashed ${palette.themeDashedBorder};
  }

  @media all and (min-width: 768px) {
    /* -------------------------------------------------------------------------- */
    /*                                   테블릿                                    */
    /* -------------------------------------------------------------------------- */
    width: calc(100% / 4 - 2.5rem + 0.625rem);

    &:nth-child(2n) {
      margin-right: 2.5rem;
    }

    &:nth-child(4n) {
      margin-right: 0;
    }

    p {
      font-size: 1.4rem;
      white-space: pre-line;
    }
  }
`;

export const ImgContainer = styled.div`
  padding: 1rem;

  img {
    display: inline-block;
    width: 100%;
  }
`;
