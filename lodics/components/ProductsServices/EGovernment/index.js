import React from 'react';
import { PageTitle } from 'components';
import { Contents } from './styles';

export const eGovernmentList = [
  {
    key: 0,
    title: '전자정부 개발에 대한 국제적 자문',
    contents: ['정부 차원의 정책 & 전략 수립에 대한 자문'],
  },
  {
    key: 1,
    title: '사업 기획',
    contents: ['분석 및 평가', '사업 타당성 조사', '마스터 플랜 작성', '사업 계획서 작성'],
  },
  {
    key: 2,
    title: '전자정부 개발 및 설립',
    contents: ['전자정부 개발 시행', '제품 및 장비 공급', '수리 및 정비', '교육 및 훈련'],
  },
  { key: 3, title: '기술 개발', contents: ['전자정부 설립과 관련된 기술 개발', '기술 소개 및 전수'] },
  {
    key: 4,
    title: '자금 조달',
    contents: ['재무적 타당성 조사', '자금원 물색', 'BoT 혹은 PPP 방식에 의한 자금 조달', '금융 조달 및 투자'],
  },
  {
    key: 5,
    title: '사업 실적',
    contents: ['연구 & 개발 실적', '추진 중인 전자정부 프로젝트'],
    subContents: ['전자정부 개발 모델에 대한 연구 및 개발', '캄보디아 정부와 전자정부 개발 프로젝트 추진 중'],
  },
];

export default function EGovernment() {
  const fillContents = eGovernmentList => {
    return eGovernmentList.map(({ key, title, contents, subContents }) => (
      <Contents key={key}>
        <li>
          {title}
          <ul>
            {contents.map((contents, index) => (
              <li key={index}>
                {contents}
                {subContents !== undefined ? <div>{subContents[index]}</div> : null}
              </li>
            ))}
          </ul>
        </li>
      </Contents>
    ));
  };

  return (
    <>
      <PageTitle title={'전자정부사업 개발'} />
      {fillContents(eGovernmentList)}
    </>
  );
}
