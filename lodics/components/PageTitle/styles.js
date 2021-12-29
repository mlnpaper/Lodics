import styled from 'styled-components';

export const Container = styled.div`
  margin: 3rem 0 5rem;

  h3 {
    font-size: 4rem;
    font-weight: 600;
    margin: 0;

    &:after {
      display: block;
      content: '';
      width: 80px;
      height: 2px;
      margin: 5px;
      background-color: #0d47a1;
    }
  }
`;
