import styled from 'styled-components';
import { palette } from '../../../styles/color';

export const HeadLineContainer = styled.div`
  margin-bottom: 5rem;

  p,
  em {
    font-size: 3rem;
    margin: 0;
  }

  em {
    font-weight: 600;
    color: ${palette.themePrimary};
  }
`;

export const ContentContainer = styled.div`
  margin-bottom: 5rem;

  p {
    font-size: 1.6rem;
    margin: 0;
    line-height: 190%;
    font-weight: 400;
  }
`;

export const SignContainer = styled.div`
  margin-bottom: 7rem;

  span {
    font-size: 1.8rem;
    margin-right: 1.5rem;
  }

  em {
    font-size: 2.5rem;
    font-weight: 600;
  }
`;
