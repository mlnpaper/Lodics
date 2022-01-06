import React from 'react'
import { PageTitle } from 'components'
import KeyTechnologyComponent from '@components/ProductsServices/KeyTechnology/KeyTechnologyComponent'

export const keyTechnologyList = [
  {
    title: '개발 개요',
    contents: [
      '데이터 기반 실감형 3D 도시모델 편집 및 생성',
      '수요처의 요구에 맞는 고품질 3D 도시모델 생성 및 활용',
    ],
  },
  {
    title: '운용 개념',
    contents: [
      '3D 도시모델 변환',
      '실감형 3D 도시모델 저작',
      '실감형 3D 도시모델 제공',
    ],
  },
  {
    title: '체계 구성',
    contents: [
      '데이터 입출력 관리',
      '3D 객체 생성 및 저작 모듈',
      '3D 도로 및 도로 시설물 생성 및 저작 모듈',
      '영상 기반 3D 객체 생성 및 저작 모듈',
      '실감형 3D 도시모델 관리 모듈',
    ],
  },
]

export default function KeyTechnology03() {
  return (
    <>
      <PageTitle title={'실감형 3D 도시모델 저작 및 제공 기술 개발'} />
      <KeyTechnologyComponent
        imageUrl={'img/qubism.png'}
        list={keyTechnologyList}
      />
    </>
  )
}
