import React from 'react';
import { AppLayout } from '../../components';
import styled from 'styled-components';

export const PageContainer = styled.section`
  border: 1px solid red;
  width: 1200px;
  margin: 8rem auto;
`;

export default function company() {
  return (
    <AppLayout theme='black'>
      <PageContainer>company</PageContainer>
    </AppLayout>
  );
}
