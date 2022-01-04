import React from 'react'
import { SubTitle, Circle, WrapCirCle } from '../styles'

const policyList = [
  {
    title: '성과평가',
    content:
      '공정하고 객관적인 성과 평가를 통해\n 성과에 따른 공정한 보상을 제공합니다',
  },
  {
    title: '보상제도',
    content: '업무 역량과 성과 기여도에 따른\n개인별/조직별 보상을 실현합니다',
  },
  {
    title: '교육제도',
    content:
      '직급/직무별 체계적인\n교육훈련 기회를 제공하여\n자기계발과 성장을 통해\n핵심 인재로 육성합니다',
  },
]

export default function Policy() {
  const policyContent = policyList => {
    return (
      <>
        {policyList.map(({ title, content }) => (
          <>
            <Circle $size={'300px'}>
              <div>{title}</div>
              <hr />
              <div>{content}</div>
            </Circle>
            {title !== '교육제도' ? <div>●●●</div> : null}
          </>
        ))}
      </>
    )
  }

  return (
    <>
      <SubTitle>
        <div>
          <div />
        </div>
        <span>인사제도</span>
      </SubTitle>
      <WrapCirCle>{policyContent(policyList)}</WrapCirCle>
    </>
  )
}
