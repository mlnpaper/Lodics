import React from 'react'
import { PageTitle } from '../../..'
import KeyTechnologyComponent from '../KeyTechnologyComponent'

export const keyTechnologyList = [
  {
    title: '개발 개요',
    contents: [
      '빅데이터 기반의 공간정보와 크라우드 소싱 (Crowd Sourcing) 기술을 기반으로 긴급출동 차량의 최적 출동경로 정보를 동적으로 제공하는 시스템을 개발',
    ],
  },
  {
    title: '운용 개념',
    contents: [
      '상세 정밀지도 정보 및 실시간 소통정보 수집',
      '긴급자동차 제원 별 최적경로 탐색',
      '크라우드 소싱기반 영상 취득 및 장애물 탐지',
    ],
  },
  {
    title: '체계 구성',
    contents: [
      '긴급자동차 출동경로 자료 구축',
      '긴급자동차 정밀지도 구축',
      '긴급자동차 최적 출동경로 탐색',
      '크라우드 소싱기반 영상 활용',
      '시뮬레이터용 빅데이터 구축',
    ],
  },
]

export default function KeyTechnology05() {
  return (
    <>
      <PageTitle title={'긴급차량 동적 가이던스 시스템 연구'} />
      <KeyTechnologyComponent
        imageUrl={'img/pev.png'}
        list={keyTechnologyList}
      />
    </>
  )
}
