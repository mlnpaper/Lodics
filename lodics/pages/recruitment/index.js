import React from 'react';
import { AppLayout, SubMenu } from '../../components';
import { PageContainer } from '../company';

export default function recruitment() {
  return (
    <AppLayout theme='black'>
      <SubMenu title='Recruitment' />
      <PageContainer>recruitment</PageContainer>
    </AppLayout>
  );
}
