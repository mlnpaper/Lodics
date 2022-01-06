import styled from 'styled-components';
import { palette } from '@styles/color';

// HistoryList.js
export const HistoryListContainer = styled.div`
  /* -------------------------------------------------------------------------- */
  /*                               모바일  & default                             */
  /* -------------------------------------------------------------------------- */
  border-top: 1px dashed ${palette.themeDashedBorder};
  display: flex;
  flex-flow: row nowrap;
  padding: 1rem 0;

  @media all and (min-width: 768px) {
    /* -------------------------------------------------------------------------- */
    /*                                   테블릿                                    */
    /* -------------------------------------------------------------------------- */
    padding: 2rem 0;
  }
`;

export const HistoryListYearContainer = styled.div`
  /* -------------------------------------------------------------------------- */
  /*                               모바일  & default                             */
  /* -------------------------------------------------------------------------- */
  font-size: 2.5rem;
  font-weight: 600;
  padding: 2rem 0;

  @media all and (min-width: 768px) {
    /* -------------------------------------------------------------------------- */
    /*                                   테블릿                                    */
    /* -------------------------------------------------------------------------- */
    font-size: 3rem;
    padding: 2rem 2rem 2rem 8rem;
  }
`;

export const HistoryListContentContainer = styled.div`
  /* -------------------------------------------------------------------------- */
  /*                               모바일  & default                             */
  /* -------------------------------------------------------------------------- */
  padding: 2rem;

  @media all and (min-width: 768px) {
    /* -------------------------------------------------------------------------- */
    /*                                   테블릿                                    */
    /* -------------------------------------------------------------------------- */
    padding: 2rem 1rem;
  }
`;

export const ContentContainer = styled.div`
  /* -------------------------------------------------------------------------- */
  /*                               모바일  & default                             */
  /* -------------------------------------------------------------------------- */
  display: flex;
  flex-flow: row nowrap;
  align-items: top;

  span {
    font-size: 1.6rem;
    font-weight: 600;
    color: ${palette.themePrimary};
    margin-right: 0.5rem;
    padding: 0.5rem 1rem 1rem;
  }

  p {
    font-size: 1.5rem;
    margin: 0;
    padding: 0.5rem 1rem 1rem;
  }

  @media all and (min-width: 768px) {
    /* -------------------------------------------------------------------------- */
    /*                                   테블릿                                    */
    /* -------------------------------------------------------------------------- */
    align-items: center;

    span {
      font-size: 1.8rem;
    }

    p {
      font-size: 1.7rem;
    }
  }
`;
