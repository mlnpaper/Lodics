import React from 'react'
import { PageTitle } from 'components'
import KeyTechnologyComponent from '@components/ProductsServices/KeyTechnology/KeyTechnologyComponent'

export const keyTechnologyList = [
  {
    title: '개발 개요',
    contents: [
      '다중센서 정보의 분산처리',
      'GEOINT자료의 통합처리 성능 확인',
      '군사표준(NITF, DPPDB) 기반 자료 처리 및 운용',
    ],
  },
  {
    title: '운용 개념',
    contents: [
      '영상(Imagery)/영상정보(IMINT)/지형공간정보 정보융합',
      '분산플랫폼 & 분산DB 기반 분산처리',
    ],
  },
  {
    title: '체계 구성',
    contents: [
      '다중센서 융합처리',
      'GEOINT 정보추출',
      '분산형 GEOINT DB 통합처리',
      '정보융합 분산 정보처리 시스템',
    ],
  },
]

export default function KeyTechnology06() {
  return (
    <>
      <PageTitle title={'다중센서 분산처리 및 GEOINT 자료 통합처리 시스템'} />
      <KeyTechnologyComponent
        imageUrl={'img/geoint.png'}
        list={keyTechnologyList}
      />
    </>
  )
}
