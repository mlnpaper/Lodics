import React, { useEffect } from 'react';
import { AppLayout, SubMenu } from 'components';
import { PageContainer } from '@pages/company/styles';

export default function recruitment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AppLayout theme='black'>
      <SubMenu title='Recruitment' />
      <PageContainer>recruitment</PageContainer>
    </AppLayout>
  );
}
