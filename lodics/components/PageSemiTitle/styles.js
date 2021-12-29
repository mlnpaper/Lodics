import styled from 'styled-components';
import { palette } from '../../styles/color';

export const Container = styled.div`
  color: ${props => props.$color};
  margin-top: 5rem;

  span {
    font-size: 3rem;
    font-weight: 600;
    position: relative;

    &:after {
      display: block;
      content: '';
      width: 15px;
      height: 8px;
      background-color: ${palette.themePrimary};
      position: absolute;
      top: -0.7rem;
    }

    &:before {
      display: block;
      content: '';
      width: 23px;
      height: 8px;
      background-color: ${palette.themeGray};
      position: absolute;
      top: -0.7rem;
    }
  }
`;
