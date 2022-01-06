import React from 'react'
import { PageTitle } from 'components'
import KeyTechnologyComponent from '@components/ProductsServices/KeyTechnology/KeyTechnologyComponent'

export const keyTechnologyList = [
  {
    title: '개발 개요',
    contents: ['통합분석시스템 프로그램 및 관련 모듈 개발'],
  },
  {
    title: '운용 개념',
    contents: [
      '해양운용 수집수단 획득 자료 도시',
      '선박/적조 통합분석 시스템 구축을 통한 분석 자료 표출',
    ],
  },
  {
    title: '체계 구성',
    contents: [
      '선박탐지통합분석',
      '적조탐지통합분석',
      '해양운용 수집수단 연계 시뮬레이터',
    ],
  },
]

export default function KeyTechnology04() {
  return (
    <>
      <PageTitle
        title={'국가해양영토 광역 감시망 구축 기반연구 통합분석 시스템'}
      />
      <KeyTechnologyComponent
        imageUrl={'img/wiss.png'}
        list={keyTechnologyList}
      />
    </>
  )
}
