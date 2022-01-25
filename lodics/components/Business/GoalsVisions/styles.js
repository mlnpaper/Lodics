import styled from 'styled-components';

import { palette } from '@styles/color';

export const Container = styled.div`
  /* -------------------------------------------------------------------------- */
  /*                               모바일  & default                             */
  /* -------------------------------------------------------------------------- */
  border-bottom: 1px solid ${palette.themeDashedBorder};
  padding-bottom: 10rem;

  p {
    font-size: 1.3rem;
    margin: 0;
    white-space: pre-line;
  }

  &:last-child {
    border: none;
  }

  @media all and (min-width: 768px) {
    /* -------------------------------------------------------------------------- */
    /*                                   테블릿                                    */
    /* -------------------------------------------------------------------------- */
    border-bottom: 1px solid ${palette.themeDashedBorder};
    padding-bottom: 10rem;

    p {
      font-size: 1.6rem;
    }
  }
`;

export const ImgContainer = styled.div`
  /* -------------------------------------------------------------------------- */
  /*                               모바일  & default                             */
  /* -------------------------------------------------------------------------- */
  width: 100%;

  img {
    display: block;
    width: 100%;
  }

  @media all and (min-width: 768px) {
    /* -------------------------------------------------------------------------- */
    /*                                   테블릿                                    */
    /* -------------------------------------------------------------------------- */
    padding: 0 5rem;
  }
`;

export const InnerContainer = styled.div`
  border-top: 1px dashed ${palette.themeDashedBorder};
  padding-top: 5rem;
  margin-top: 10rem;
  display: flex;
  flex-flow: column;
`;

export const GeointProcessContainer = styled(InnerContainer)`
  img {
    display: block;
    width: 100%;
  }
`;

export const EGovernmentImgContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

export const ThirdTitle = styled.span`
  /* -------------------------------------------------------------------------- */
  /*                               모바일  & default                             */
  /* -------------------------------------------------------------------------- */
  display: inline-block;
  font-size: 1.6rem;
  font-weight: 600;
  position: relative;
  padding-left: 3rem;
  margin: 3rem 0 2rem;

  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 50%;
    left: 0;
    width: 13px;
    height: 13px;
    border: 4px solid ${palette.themePrimary};
    transform: translateY(-50%);
  }

  @media all and (min-width: 768px) {
    /* -------------------------------------------------------------------------- */
    /*                                   테블릿                                    */
    /* -------------------------------------------------------------------------- */
    font-size: 2rem;

    &:after {
      width: 15px;
      height: 15px;
      border: 5px solid ${palette.themePrimary};
    }
  }
`;

export const ContentContainer = styled.div`
  p {
    padding-left: 3rem;
    font-weight: 400;
    margin-bottom: 1.5rem;

    &:first-child {
      color: ${palette.themePrimary};
      font-weight: 600;
      position: relative;
      margin-bottom: 0;

      &:after {
        content: '';
        position: absolute;
        display: block;
        top: 50%;
        left: 1rem;
        width: 5px;
        height: 5px;
        background: ${palette.themePrimary};
        transform: translateY(-50%);
      }
    }
  }
`;

export const ImgCardContainer = styled.div`
  /* -------------------------------------------------------------------------- */
  /*                               모바일  & default                             */
  /* -------------------------------------------------------------------------- */
  display: flex;
  flex-flow: row wrap;
  margin-top: 2rem;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 42%;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 80px;
    border-top: 30px solid #dddddd;
    border-bottom: 30px solid none;
    border-right: 40px solid transparent;
    border-left: 40px solid transparent;
  }

  @media all and (min-width: 768px) {
    /* -------------------------------------------------------------------------- */
    /*                                   테블릿                                    */
    /* -------------------------------------------------------------------------- */
    padding: 0 5rem;

    &:after {
      top: 45%;
      border-top: 50px solid #dddddd;
      border-bottom: 50px solid none;
      border-right: 50px solid transparent;
      border-left: 50px solid transparent;
    }
  }
`;

export const ImgCardInnerContainer = styled.div`
  /* -------------------------------------------------------------------------- */
  /*                               모바일  & default                             */
  /* -------------------------------------------------------------------------- */
  margin: 0 1rem;
  border: 1px solid ${palette.themeDashedBorder};
  width: ${props => props.$width};
  padding: 1rem 1rem 0 1rem;
  border-radius: 10px;
  display: flex;
  flex-flow: column;
  margin-bottom: 10rem;

  &:last-child {
    margin-bottom: 0;
  }

  img {
    border-radius: 10px;
    border: 1px solid ${palette.themeDashedBorder};
    width: 100%;
  }

  span {
    font-size: 1.2rem;
    text-align: center;
    padding: 0.5rem 0;
  }

  @media all and (min-width: 768px) {
    /* -------------------------------------------------------------------------- */
    /*                                   테블릿                                    */
    /* -------------------------------------------------------------------------- */

    padding: 2rem 2rem 0 2rem;
    border-radius: 10px;
    margin-bottom: 20rem;

    span {
      font-size: 2.5rem;
    }
  }
`;
