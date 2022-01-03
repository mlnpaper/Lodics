import styled from 'styled-components';
import { palette } from '../../../styles/color';

export const ImgContainer = styled.div`
  width: 100%;
  padding: 0 5rem;

  img {
    border: 1px solid ${palette.themeDashedBorder};
    display: block;
    width: 100%;
    min-height: 80vh;
  }
`;
