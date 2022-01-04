import styled from 'styled-components';
import { palette } from '../../styles/color';
import { MdHome } from 'react-icons/md';

export const HomeIcon = styled(MdHome)``;
export const Container = styled.div`
  /* -------------------------------------------------------------------------- */
  /*                               모바일  & default                             */
  /* -------------------------------------------------------------------------- */
  height: 20rem;
  background: center / cover no-repeat url('img/basic_bg.jpg');
  width: 100%;

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
  background: ${palette.themePrimary};
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
  overflow: hidden;

  i {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-right: 1px solid ${palette.themeWhite};
    color: ${palette.themeWhite};

    svg {
      width: 23px;
      height: 23px;
    }
  }

  .ant-select {
    height: 100%;

    &:last-child .ant-select-selector {
      border-right: none;
    }

    .ant-select-selector {
      height: 100%;
      background: transparent;
      color: ${palette.themeWhite};
      border-top: none;
      border-bottom: none;
      border-left: none;
      border-radius: 0;
    }

    .ant-select-selection-search {
      height: 100%;
    }

    .ant-select-selection-item {
      height: 100%;
      font-size: 1.2rem;
      font-family: 'Nanum Gothic';
      padding: 0.8rem 3rem 0 1rem;
      color: ${palette.themeWhite};
    }

    .ant-select-arrow {
      color: ${palette.themeWhite};
      padding-right: 1.5rem;
    }
  }

  @media all and (min-width: 768px) {
    /* -------------------------------------------------------------------------- */
    /*                                   테블릿                                    */
    /* -------------------------------------------------------------------------- */
    width: calc(100% - 5rem);

    i {
      border-left: 1px solid ${palette.themeWhite};
    }

    .ant-select {
      &:last-child .ant-select-selector {
        border-right: 1px solid ${palette.themeWhite};
      }

      .ant-select-selection-item {
        font-size: 1.4rem;
      }
    }
  }

  @media all and (min-width: 1200px) {
    /* -------------------------------------------------------------------------- */
    /*                              데스크탑 일반                                  */
    /* -------------------------------------------------------------------------- */
    width: 1200px;
  }
`;
