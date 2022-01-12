import React from 'react';
import { PageSemiTitle, RecruitmentCard } from 'components';
import { palette } from '@styles/color';
import { Line, Circle, WrapCirCle } from '../styles';

const policyList = [
  { key: 0, title: '성과평가', content: '공정하고 객관적인 성과 평가를 통해\n 성과에 따른 공정한 보상을 제공합니다' },
  { key: 1, title: '보상제도', content: '업무 역량과 성과 기여도에 따른\n개인별/조직별 보상을 실현합니다' },
  {
    key: 2,
    title: '교육제도',
    content: '직급/직무별 체계적인\n교육훈련 기회를 제공하여\n자기계발과 성장을 통해\n핵심 인재로 육성합니다',
  },
];

export default function Policy() {
  const policyContent = policyList => {
    return (
      <>
        {policyList.map(({ key, title, content }) => (
          <RecruitmentCard key={key} title={title} content={content} />
        ))}
      </>
    );
  };

  return (
    <>
      <Line />
      <PageSemiTitle title='인사제도' color={palette.themeBlack} fontWeight={400} />
      <WrapCirCle>{policyContent(policyList)}</WrapCirCle>
    </>
  );
}
