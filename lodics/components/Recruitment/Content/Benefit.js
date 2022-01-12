import React from 'react';
import { PageSemiTitle, RecruitmentCard } from 'components';
import { palette } from '@styles/color';
import { Line, Circle, WrapCirCle } from '../styles';

const benefitList = [
  {
    key: 0,
    title: '복지제도',
    content: '4대보험 가입\n청년내일채움공제 가입\n경조금 및 경조 휴가 부여',
    url: 'img/recruitment/benefit01.png',
  },
  { key: 1, title: '인재육성', content: '수시교육\n도서 구입비 지원', url: 'img/recruitment/benefit02.png' },
  {
    key: 2,
    title: '여가활동',
    content: '주 40시간제 실시\n상시 휴가제 운영\n사원들의 여가활동 보장',
    url: 'img/recruitment/benefit03.png',
  },
];

export default function Benefit() {
  const benefitContent = benefitList => {
    return (
      <WrapCirCle>
        {benefitList.map(({ key, title, content, url }) => (
          <RecruitmentCard key={key} title={title} content={content} url={url} />
        ))}
      </WrapCirCle>
    );
  };

  const Card = (key, title, content, url) => {
    <>
      <Circle $theme={'image'} $image={url} $size={'300px'}>
        <div>{title}</div>
        <hr />
        <div>{content}</div>
      </Circle>
      {title !== '여가활동' ? <div>●●●</div> : null}
    </>;
  };

  return (
    <>
      <Line />
      <PageSemiTitle title='복리후생' color={palette.themeBlack} fontWeight={400} />
      {benefitContent(benefitList)}
    </>
  );
}
