import React from 'react';
import { AppLayout, SubMenu } from '../../components';
import { PageContainer } from '../company';

const subSelectList = [
  [
    { value: 'keyTechnology', text: '핵심기술' },
    { value: 'eGovernment', text: '전자정부사업' },
  ],
  [
    { value: 'keyTechnology01', text: '연구개발실적' },
    { value: 'keyTechnology02', text: '스마트 방사능방재 지휘통제 시스템 구축' },
    { value: 'keyTechnology03', text: '실감형 3D 도시모델 저작 및 제공 기술 개발' },
    { value: 'keyTechnology04', text: '국가해양영토 광역 감시망 구축 기반연구 통합분석 시스템' },
    { value: 'keyTechnology05', text: '긴급차량 동적 가이던스 시스템 연구' },
    { value: 'keyTechnology06', text: '다중센서 분산처리 및 GCOINT자료 통합처리 시스템' },
  ],
];

export default function productsServices() {
  return (
    <AppLayout theme='black'>
      <SubMenu title='Products & Services' subSelectList={subSelectList} />
      <PageContainer>productsServices</PageContainer>
    </AppLayout>
  );
}