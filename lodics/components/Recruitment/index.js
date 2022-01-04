import React from 'react'
import { Title, Line, Table, Th, Td, TdSub } from './styles'
import RecruitField from './Content/RecruitField'
import Process from './Content/Process'
import Policy from './Content/Policy'
import Benefit from './Content/Benefit'

export default function Recruitment() {
  return (
    <>
      <Title>
        <div>채용정보</div>
        <hr />
        <div>
          "새로운 내일을 향해 <b>지치지 않는 열정</b>과 <b>도전정신</b>
          {'으로\n로딕스와 함께 성장 할 인재를 기다립니다."'}
        </div>
      </Title>
      <Line />
      <RecruitField />
      <Line />
      <Process />
      <Line />
      <Policy />
      <Line />
      <Benefit />
    </>
  )
}
