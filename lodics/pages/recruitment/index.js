import React from 'react';
import { AppLayout, SubMenu, Recruitment } from 'components';
import { PageContainer } from '@pages/company/styles';

export default function recruitment() {
  return (
    <AppLayout theme='black'>
      <SubMenu title='Recruit' />
      <PageContainer>
        <Recruitment />
      </PageContainer>
    </AppLayout>
  );
}
