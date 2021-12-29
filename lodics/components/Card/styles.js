import styled from 'styled-components';
import { palette } from '../../styles/color';

export const Container = styled.div`
  padding: 5rem;
  cursor: pointer;
  display: flex;
  flex-flow: column;
  width: calc(100% / 3);
  text-align: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0.9;
  transition: background 0.4s;

  &:nth-child(-n + 2) {
    border-right: 1px solid ${palette.themeWhite};
  }

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
    width: 50px;
    height: 50px;
    background: center / contain no-repeat
      ${props =>
        props.$type === 'business'
          ? `url('img/business_icon.png')`
          : props.$type === 'productsServices'
          ? `url('img/ps_icon.png')`
          : `url('img/recruitment_icon.png')`};
  }

  span {
    color: ${palette.themeWhite};
    font-size: 2.8rem;
    font-weight: 600;
    margin-top: 3rem;
  }

  span + span {
    font-size: 1.3rem;
    font-weight: 300;
    margin-top: 2rem;
  }

  button {
    color: ${palette.themeWhite};
    font-size: 1.4rem;
    background: transparent;
    border: 1px solid ${palette.themeWhite};
    padding: 1rem;
    width: auto;
    margin-top: 3rem;
    width: 15rem;
    cursor: pointer;
    transition: all 0.4s;
  }
`;
