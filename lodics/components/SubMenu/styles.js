import styled from 'styled-components';
import { palette } from '../../styles/color';
import { MdHome } from 'react-icons/md';

export const HomeIcon = styled(MdHome)``;
export const Container = styled.div`
  height: 30rem;
  background: center / cover no-repeat url('img/basic_bg.jpg');

  h2 {
    color: ${palette.themeWhite};
    font-size: 7rem;
    font-weight: 600;
    text-align: center;
    line-height: 30rem;
    margin: 0;
  }
`;

export const MenuContainer = styled.div`
  height: 5rem;
  background: ${palette.themePrimary};
`;

export const MenuInnerContainer = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  color: ${palette.themeWhite};

  i {
    width: 50px;
    height: 50px;
    padding: 1.3rem;
    cursor: pointer;
    border-right: 1px solid ${palette.themeWhite};
    border-left: 1px solid ${palette.themeWhite};

    svg {
      width: 100%;
      height: 100%;
    }
  }

  .ant-select {
    height: 100%;

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
      font-size: 1.4rem;
      font-family: 'Nanum Gothic';
      padding: 0.8rem 2rem 0;
    }

    .ant-select-arrow {
      color: ${palette.themeWhite};
      padding-right: 2rem;
    }
  }
`;
