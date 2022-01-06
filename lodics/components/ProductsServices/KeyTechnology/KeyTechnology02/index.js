import React from 'react'
import { PageTitle } from '../../..'
import KeyTechnologyComponent from '../KeyTechnologyComponent'

export const keyTechnologyList = [
  {
    title: '사업개요',
    contents: [
      '방사능 누출 시 현장 상황 판단',
      '재난 주관기관별 정보 수집/전달',
      '재난 대응 체계 발전을 위한 ICT 기술 도입',
      '방사능 방재 지휘 통제 인프라 확충',
    ],
  },
  {
    title: '사업 범위',
    contents: [
      '현장 상황판단을 위한 디지털맵 & 상황도 표출',
      '임무 계획 및 운용 시스템/상황 전파 처리 시스템 구축',
      '현장·본무 무선통제 시스템 및 인프라 장비 도입',
      '이재민 관리, 방사능영향평가, 상황정보 공유 등 기존 시스템 연계',
    ],
  },
  {
    title: '사업 구성',
    contents: [
      '외부시스템 연계 인터페이스',
      '공간정보 및 빅 데이터 통합 관리',
      '임무 계획 및 운용 시스템',
      '상황 전파 처리 시스템',
      '디지털맵 상황도 표출 시스템',
    ],
  },
]

export default function KeyTechnology02() {
  return (
    <>
      <PageTitle title={'스마트 방사능방재 지휘통제 시스템 구축'} />
      <KeyTechnologyComponent
        imageUrl={'img/srp.png'}
        list={keyTechnologyList}
      />
    </>
  )
}
