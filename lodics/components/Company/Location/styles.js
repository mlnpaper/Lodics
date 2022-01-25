import styled from 'styled-components';

import { palette } from '@styles/color';

export const MapContainer = styled.div`
  width: 100%;
  height: calc(100vh - 35rem);
  margin-bottom: 10rem;

  #daumRoughmapContainer1641175660053 {
    width: 100%;
    height: 100%;
    overflow: visible;

    .wrap_map {
      height: 100%;
    }
  }
`;

export const TextContainer = styled.div`
  /* -------------------------------------------------------------------------- */
  /*                               모바일  & default                             */
  /* -------------------------------------------------------------------------- */
  margin-top: 2rem;
  padding-bottom: 5rem;
  border-bottom: 1px dashed ${palette.themeDashedBorder};
  line-height: 2.5rem;
  white-space: pre-line;

  span {
    font-size: 1.3rem;
  }

  em {
    font-size: 1.3rem;
    font-weight: 600;
  }

  div {
    margin-top: 0.5rem;

    span {
      margin-right: 2rem;
    }
  }

  @media all and (min-width: 768px) {
    /* -------------------------------------------------------------------------- */
    /*                                   테블릿                                    */
    /* -------------------------------------------------------------------------- */
    span {
      font-size: 1.6rem;
    }

    em {
      font-size: 1.6rem;
    }

    div {
      margin-top: 1rem;

      span {
        margin-right: 2rem;
      }
    }
  }
`;

export const SubwayTextContainer = styled.div`
  /* -------------------------------------------------------------------------- */
  /*                               모바일  & default                             */
  /* -------------------------------------------------------------------------- */
  margin-top: 5rem;
  padding-bottom: 3rem;
  border-bottom: 1px dashed ${palette.themeDashedBorder};
  display: flex;
  flex-flow: row wrap;
  align-items: center;

  div {
    display: flex;
    flex-flow: row nowarp;
    align-items: center;
    margin-right: 5rem;
    margin-bottom: 2rem;

    span {
      font-size: 1.3rem;
      margin-right: 0.5rem;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;

      &:last-child {
        color: red;
        margin-left: 0.5rem;
      }
    }
  }

  @media all and (min-width: 768px) {
    /* -------------------------------------------------------------------------- */
    /*                                   테블릿                                    */
    /* -------------------------------------------------------------------------- */
    div {
      span {
        font-size: 1.6rem;
      }
    }
  }
`;

export const SubwayIcon = styled.i`
  /* -------------------------------------------------------------------------- */
  /*                               모바일  & default                             */
  /* -------------------------------------------------------------------------- */
  color: ${palette.themeWhite};
  margin-left: 0.5rem;
  margin-right: 2rem;
  display: inline-block;
  padding: 0.1rem 0.65rem;
  border-radius: 50%;
  background: ${props => props.$color};
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    margin-left: 1rem;
    width: 1px;
    height: 13px;
    background-color: ${palette.themeGray};
    top: 50%;
    right: -1rem;
    transform: translateY(-50%);
  }

  @media all and (min-width: 768px) {
    /* -------------------------------------------------------------------------- */
    /*                                   테블릿                                    */
    /* -------------------------------------------------------------------------- */
    padding: 0.2rem 0.75rem;
  }
`;

export const BusTextContainer = styled.div`
  /* -------------------------------------------------------------------------- */
  /*                               모바일  & default                             */
  /* -------------------------------------------------------------------------- */
  margin-top: 5rem;
  padding-bottom: 3rem;
  display: flex;
  flex-flow: row wrap;

  div {
    display: flex;
    flex-flow: column;
    margin-right: 5rem;
    margin-bottom: 4rem;

    span {
      font-size: 1.3rem;
      line-height: 2.5rem;
      display: flex;
      align-items: center;

      &:nth-child(2) {
        color: #666666;
      }
    }
  }

  @media all and (min-width: 768px) {
    /* -------------------------------------------------------------------------- */
    /*                                   테블릿                                    */
    /* -------------------------------------------------------------------------- */
    div {
      span {
        font-size: 1.6rem;
        line-height: 3rem;
      }
    }
  }
`;

export const BusIcon = styled.i`
  /* -------------------------------------------------------------------------- */
  /*                               모바일  & default                             */
  /* -------------------------------------------------------------------------- */
  background: ${props => props.$color};
  color: ${palette.themeWhite};
  border-radius: 5px;
  padding: 0.1rem 0.5rem;
  height: 1.8rem;
  line-height: 1.6rem;
  margin-right: 0.5rem;

  @media all and (min-width: 768px) {
    /* -------------------------------------------------------------------------- */
    /*                                   테블릿                                    */
    /* -------------------------------------------------------------------------- */
    padding: 0.2rem 0.5rem;
    height: 2rem;
  }
`;
