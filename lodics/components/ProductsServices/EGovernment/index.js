import React from 'react'
import { PageTitle } from '../..'
import { Contents } from './styles'

export default function EGovernment() {
  return (
    <>
      <PageTitle title={'전자정부사업 개발'} />
      <Contents>
        <li>
          전자정부 개발에 대한 국제적 자문
          <ul>
            <li>{'정부 차원의 정책 & 전략 수립에 대한 자문'}</li>
            <li>{'정부 차원의 정책 & 전략 수립에 대한 자문'}</li>
          </ul>
        </li>
      </Contents>
      <Contents>
        <li>
          사업 기획
          <ul>
            <li>{'분석 및 평가'}</li>
            <li>{'사업 타당성 조사'}</li>
            <li>{'마스터 플랜 작성'}</li>
            <li>{'사업 계획서 작성'}</li>
          </ul>
        </li>
      </Contents>
      <Contents>
        <li>
          전자정부 개발 및 설립
          <ul>
            <li>{'전자정부 개발 시행'}</li>
            <li>{'제품 및 장비 공급'}</li>
            <li>{'수리 및 정비'}</li>
            <li>{'교육 및 훈련'}</li>
          </ul>
        </li>
      </Contents>
      <Contents>
        <li>
          기술 개발
          <ul>
            <li>{'전자정부 설립과 관련된 기술 개발'}</li>
            <li>{'기술 소개 및 전수'}</li>
          </ul>
        </li>
      </Contents>
      <Contents>
        <li>
          자금 조달
          <ul>
            <li>{'재무적 타당성 조사'}</li>
            <li>{'자금원 물색'}</li>
            <li>{'BoT 혹은 PPP 방식에 의한 자금 조달'}</li>
            <li>{'금융 조달 및 투자'}</li>
          </ul>
        </li>
      </Contents>
      <Contents>
        <li>
          사업 실적
          <ul>
            <li>
              {'연구 & 개발 실적'}
              <li>전자정부 개발 모델에 대한 연구 및 개발</li>
            </li>
            <li>
              {'추진 중인 전자정부 프로젝트'}
              <li>캄보디아 정부와 전자정부 개발 프로젝트 추진 중</li>
            </li>
          </ul>
        </li>
      </Contents>
    </>
  )
}
