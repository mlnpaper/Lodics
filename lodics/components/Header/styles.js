import styled from 'styled-components';
import { MdMenu } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';

import { palette } from '@styles/color';

export const Container = styled.header`
  width: 100%;
  background: transparent;
  border-bottom: 1px solid ${palette.themeGray};
  position: relative;
`;

export const InnerContainer = styled.div`
  /* -------------------------------------------------------------------------- */
  /*                               모바일  & default                             */
  /* -------------------------------------------------------------------------- */
  width: calc(100% - 2rem);
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 1.5rem 0;

  img {
    width: 12rem;
  }

  @media all and (min-width: 768px) {
    /* -------------------------------------------------------------------------- */
    /*                                  테블릿                                    */
    /* -------------------------------------------------------------------------- */
    padding: 3rem 0;

    img {
      width: 17rem;
    }

    .MuiTabs-flexContainer {
      button {
        color: ${props => (props.$theme === 'white' ? palette.themeWhite : palette.themeBlack)};
        font-size: 1.3rem;
        font-weight: 500;
        font-family: 'Noto Sans KR';
      }

      .Mui-selected {
        color: ${palette.themePrimary};
      }
    }

    .css-1aquho2-MuiTabs-indicator {
      background-color: ${palette.themePrimary};
    }
  }

  @media all and (min-width: 1200px) {
    /* -------------------------------------------------------------------------- */
    /*                              데스크탑 일반                                  */
    /* -------------------------------------------------------------------------- */
    width: 1200px;

    img {
      width: auto;
    }

    .MuiTabs-flexContainer {
      button {
        font-size: 1.5rem;
      }
    }
  }
`;

export const TabContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;

  .css-18467a {
    width: 15rem;

    label {
      color: ${props => (props.$theme === 'white' ? palette.themeWhite : palette.themeBlack)};
      font-size: 1.2rem;
    }

    .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input,
    svg {
      color: ${props => (props.$theme === 'white' ? palette.themeWhite : palette.themeBlack)};
    }

    .MuiOutlinedInput-notchedOutline,
    fieldset {
      border: 1px solid ${props => (props.$theme === 'white' ? palette.themeWhite : palette.themeGray)};
    }
  }
`;

export const MenuIcon = styled(MdMenu)`
  width: 2rem;
  height: 2rem;
  color: ${props => (props.$theme === 'white' ? palette.themeWhite : palette.themeBlack)};
  cursor: pointer;
`;

export const CloseMenuIcon = styled(IoIosArrowForward)`
  width: 2rem;
  height: 2rem;
  z-index: 25;
  position: fixed;
  top: 1.5rem;
  right: ${props => (props.$openToggleNav ? '1rem' : '-100%')};
  color: ${palette.themeWhite};
  cursor: pointer;
  transition: all 0.3s;
`;

export const ToggleNavContainer = styled.ul`
  position: fixed;
  right: ${props => (props.$openToggleNav ? '0' : '-100%')};
  top: 0;
  width: 50%;
  margin: 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  z-index: 25;
  transition: all 0.3s;
  background: ${palette.themeSelector};
  height: 100vh;
  border-radius: 2rem 0 0 2rem;
  overflow: hidden;
  box-shadow: -3px 3px 10px rgba(0, 0, 0, 0.3);
  padding: 5.37rem 0;

  li {
    width: 100%;
    text-align: center;
    padding: 1.43rem;
    background: ${palette.themeSelector};
    border-bottom: 1px solid ${palette.themeDarkSelector};

    &:first-child {
      border-top: 1px solid ${palette.themeDarkSelector};
    }

    a {
      span {
        font-size: 1.4rem;
        color: ${palette.themeWhite};
        transition: color 0.3s;

        &:hover {
          color: ${palette.themeHover};
        }
      }
    }
  }
`;
