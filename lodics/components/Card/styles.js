import styled from 'styled-components';
import { IoEarthSharp } from 'react-icons/io5';
import { FaSatellite, FaHandsHelping } from 'react-icons/fa';

import { palette } from '@styles/color';

export const BusinessIcon = styled(IoEarthSharp)``;
export const PSIcon = styled(FaSatellite)``;
export const RecruitmentIcon = styled(FaHandsHelping)``;
export const Container = styled.div`
  /* -------------------------------------------------------------------------- */
  /*                               모바일  & default                             */
  /* -------------------------------------------------------------------------- */
  border: 1px solid ${palette.themeDashedBorder};
  padding: 3rem;
  display: flex;
  flex-flow: column;
  width: 100%;
  text-align: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0.9;
  transition: background 0.4s;
  cursor: pointer;

  &:hover {
    background: ${props =>
      props.$type === 'business'
        ? 'rgba(53, 78, 102, 0.6)'
        : props.$type === 'productsServices'
        ? 'rgba(52, 138, 155, 0.6)'
        : 'rgba(124, 103, 67, 0.6)'};
  }

  &:hover button {
    background: ${palette.themeWhite};
    color: ${palette.themeBlack};
  }

  i {
    svg {
      width: 40px;
      height: 40px;
      color: ${palette.themeWhite};
    }
  }

  span {
    color: ${palette.themeWhite};
    font-size: 2.6rem;
    font-weight: 600;
    margin-top: 2rem;
  }

  span + span {
    font-size: 1.2rem;
    font-weight: 300;
    margin-top: 1rem;
  }

  button {
    color: ${palette.themeWhite};
    font-size: 1.2rem;
    background: transparent;
    border: 1px solid ${palette.themeWhite};
    padding: 0.5rem 6rem;
    margin-top: 2rem;
    transition: all 0.4s;
    cursor: pointer;
  }

  @media all and (min-width: 768px) {
    /* -------------------------------------------------------------------------- */
    /*                                   테블릿                                    */
    /* -------------------------------------------------------------------------- */
    border: none;
    padding: 4rem;
    width: calc(100% / 3);

    &:nth-child(-n + 2) {
      border-right: 1px solid ${palette.themeWhite};
    }

    i {
      svg {
        width: 45px;
        height: 45px;
      }
    }

    span {
      margin-top: 3rem;
    }

    span + span {
      margin-top: 2rem;
    }

    button {
      border: 1px solid ${palette.themeWhite};
      padding: 0.5rem 6rem;
      margin-top: 3rem;
    }
  }

  @media all and (min-width: 1200px) {
    /* -------------------------------------------------------------------------- */
    /*                              데스크탑 일반                                  */
    /* -------------------------------------------------------------------------- */
    padding: 5rem;

    i {
      svg {
        width: 50px;
        height: 50px;
      }
    }

    span {
      font-size: 2.8rem;
    }

    span + span {
      font-size: 1.3rem;
    }

    button {
      font-size: 1.4rem;
      padding: 0.5rem 8rem;
    }
  }
`;
