import React from 'react';
import { AppLayout, SubMenu } from '../../components';
import { PageContainer } from '../company';

const subSelectList = [
  [
    { value: 'goalsVisions', text: '목표와 비전' },
    { value: 'keyBusiness ', text: '주요사업분야' },
  ],
];

export default function business() {
  return (
    <AppLayout theme='black'>
      <SubMenu title='Business' subSelectList={subSelectList} />
      <PageContainer>business</PageContainer>
    </AppLayout>
  );
}
