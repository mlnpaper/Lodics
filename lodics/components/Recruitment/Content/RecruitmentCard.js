import React from 'react';
import { Circle } from '../styles';
import { BsArrowRight } from 'react-icons/bs';
import { policyKorean, policyEnglish } from '@data/language/policy';
import { benefitKorean, benefitEnglish } from '@data/language/benefit';
export default function RecruitmentCard({ title, content, url, icon }) {
  const policyTitleList = [...policyKorean.title, ...policyEnglish.title];
  const LastList = [
    policyKorean.policyList[2].title,
    policyEnglish.policyList[2].title,
    benefitKorean.benefitList[2].title,
    benefitEnglish.benefitList[2].title,
  ];
  return (
    <>
      {icon !== undefined ? (
        <>
          <div>
            <Circle $theme={'image'} $image={url} $size={'150px'}>
              {icon}
            </Circle>
            <span>{title}</span>
          </div>

          {title !== '최종합격 통보' ? <BsArrowRight /> : null}
        </>
      ) : (
        <>
          <Circle $theme={policyTitleList.includes(title) ? null : 'image'} $image={url} $size={'300px'}>
            <>
              <div>{title}</div>
              <hr />
              <div>{content}</div>
            </>
          </Circle>
          {LastList.includes(title) ? null : <div>●●●</div>}
        </>
      )}
    </>
  );
}
