import React from 'react';
import { AppLayout, SubMenu, Recruitment } from 'components';
import { PageContainer } from '@pages/company';

export default function recruitment() {
  return (
    <AppLayout theme='black' page='Recruit'>
      <SubMenu title='Recruit' />
      <PageContainer>
        <Recruitment />
      </PageContainer>
    </AppLayout>
  );
}
