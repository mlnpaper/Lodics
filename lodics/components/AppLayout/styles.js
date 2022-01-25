import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column;
  justify-content: ${props => (props.$theme === 'black' ? 'none' : 'space-between')};
`;
