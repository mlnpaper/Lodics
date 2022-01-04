import styled from 'styled-components';
import { palette } from '../../styles/color';

export const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  background: center / cover no-repeat url('img/basic_bg.jpg');
`;

export const CardContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 1200px;
  margin: 0 auto;
`;

export const TextContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  color: ${palette.themeWhite};
  display: flex;
  flex-flow: column;
  backdrop-filter: grayscale(50%);

  span {
    font-size: 3.2rem;
    font-weight: 600;
    margin-bottom: 4rem;
    text-align: center;
    color: ${palette.themeWhite};
  }

  span + span {
    font-size: 2rem;
    font-weight: 300;
    margin-top: 1rem;
    margin-bottom: 0;
  }
`;
