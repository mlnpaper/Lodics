import styled from 'styled-components';

import { palette } from '@styles/color';

export const TimelineContainer = styled.div`
  .MuiTimelineDot-root {
    width: 18px;
    height: 18px;
    background: ${palette.themePrimary};
    position: relative;

    &:after {
      content: '';
      display: block;
      width: 30px;
      position: absolute;
      top: -57%;
      left: -60%;
      height: 30px;
      border-radius: 50%;
      background: rgba(13, 71, 161, 0.3);
    }
  }

  .css-18y2uza-MuiTypography-root-MuiTimelineContent-root {
    font-size: 3rem;
    font-family: 'Noto Sans KR';
    color: ${palette.themePrimary};
    font-weight: 600;
  }
`;

export const Ul = styled.ul`
  /* -------------------------------------------------------------------------- */
  /*                               모바일  & default                             */
  /* -------------------------------------------------------------------------- */
  margin: ${props => (props.$isLastIndex ? '4rem 0 0' : '4rem 0 6rem')};

  li {
    display: flex;
    flex-flow: row;
    align-items: top;
    margin: ${props => (props.$parentIndex ? '0 0.5rem 2.5rem 0' : '0 0 2.5rem 0.5rem')};
    justify-content: ${props => (props.$parentIndex ? 'flex-end' : 'flex-start')};

    span {
      font-size: 1.6rem;
      color: ${palette.themeGray};
      font-weight: 600;
      margin: ${props => (props.$parentIndex ? '0 0 0 2rem' : '0 2rem 0 0')};
      line-height: 2rem;
    }

    p {
      font-size: 1.2rem;
      line-height: 2rem;
      margin: 0;
      font-weight: 300;
      color: ${palette.themeBlack};
      word-break: break-all;
    }
  }

  @media all and (min-width: 768px) {
    /* -------------------------------------------------------------------------- */
    /*                                   테블릿                                    */
    /* -------------------------------------------------------------------------- */
    li {
      span {
        font-size: 2rem;
        line-height: 2.5rem;
      }

      p {
        font-size: 1.6rem;
        line-height: 2.5rem;
        word-break: keep-all;
      }
    }
  }
`;
