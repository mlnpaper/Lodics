import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';

import { palette } from '@styles/color';

// index.js
export const Container = styled.div`
  /* -------------------------------------------------------------------------- */
  /*                               모바일  & default                             */
  /* -------------------------------------------------------------------------- */
  height: 20rem;
  background: center / cover no-repeat url('img/basic_bg.jpg');
  width: 100%;

  .portal {
    width: 100vw;
    top: 109px;
    height: 100vh;
    position: absolute;
    z-index: 5;
  }

  h2 {
    color: ${palette.themeWhite};
    font-size: 3rem;
    font-weight: 600;
    text-align: center;
    line-height: 20rem;
    margin: 0;
    word-break: keep-all;
    backdrop-filter: grayscale(30%);
  }

  @media all and (min-width: 768px) {
    /* -------------------------------------------------------------------------- */
    /*                                   테블릿                                    */
    /* -------------------------------------------------------------------------- */
    height: 30rem;

    h2 {
      font-size: 7rem;
      line-height: 30rem;
    }
  }
`;

export const MenuContainer = styled.div`
  height: 5rem;
  width: 100%;
  background: ${palette.themeSubMenu};
`;

export const MenuInnerContainer = styled.div`
  /* -------------------------------------------------------------------------- */
  /*                               모바일  & default                             */
  /* -------------------------------------------------------------------------- */
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  color: ${palette.themeWhite};

  &:first-child > button {
    height: 100%;
    background: transparent;
    border: none;
    border-radius: 0 50px 50px 0;
    box-shadow: 5px 0 5px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    width: 80px;
    font-size: 1.2rem;
    text-align: left;
    padding: 0 2rem;
  }

  @media all and (min-width: 768px) {
    /* -------------------------------------------------------------------------- */
    /*                                   테블릿                                    */
    /* -------------------------------------------------------------------------- */
    width: calc(100% - 5rem);

    &:first-child > button {
      width: 100px;
      font-size: 1.4rem;
    }
  }

  @media all and (min-width: 1200px) {
    /* -------------------------------------------------------------------------- */
    /*                              데스크탑 일반                                  */
    /* -------------------------------------------------------------------------- */
    width: 1200px;

    &:first-child > button {
      width: 150px;
    }
  }
`;

// Select.js
export const SelectContainer = styled.div`
  /* -------------------------------------------------------------------------- */
  /*                               모바일  & default                             */
  /* -------------------------------------------------------------------------- */
  position: relative;
    height: 100%;
    border-radius: 0 50px 50px 0;
    box-shadow: 5px 0 5px rgba(0,0,0,0.3);
    cursor: pointer;
    width: 110px;
    z-index: 10;

    button {
      display: flex;
      align-items: center;
      width: inherit;
      border: none;
      outline: none;
      background: transparent;
      cursor: pointer;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      padding: 0 2rem;
      height: 100%;
  

      span {
        display: inline-block;
        font-size: 1.2rem;
        width: inherit;
        height: 100%;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 5rem;
      }
    }

    ul {
      position: absolute;
      top: ${props => (props.$open ? '100%' : '95%')};
      opacity: ${props => (props.$open ? 1 : 0)};
      left: 0;
      width: 93%;
      background-color : ${palette.themeSelector};
      transition: 0.2s;
      z-index: 10;
      box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
      
      li {
        border-bottom: 1px solid ${palette.themeDarkSelector};
        padding: 1.5rem 2rem;
        font-size: 1.2rem;
        transition: 0.2s;
        cursor: ${props => (props.$open ? 'pointer' : 'initial')};

        &:hover {
          background: ${palette.themeDarkSelector};
        }

        &:last-child {
          border-bottom: none;
        }
      }
    }
  }

  @media all and (min-width: 768px) {
    /* -------------------------------------------------------------------------- */
    /*                                   테블릿                                    */
    /* -------------------------------------------------------------------------- */
    width: ${props => props.$width}px;

    button {
      span {
        font-size: 1.4rem;
      }
    }

    ul {
      li {
        font-size: 1.4rem;
      }
    }
  }
`;

export const ArrowIcon = styled(IoIosArrowDown)``;
export const IconContainer = styled.i`
  border: none !important;
  width: auto !important;
  margin-left: 2rem;

  svg {
    width: 1.5rem !important;
    transform: ${props => props.$open && 'rotate(180deg)'};
    transition: 0.2s;
  }
`;
