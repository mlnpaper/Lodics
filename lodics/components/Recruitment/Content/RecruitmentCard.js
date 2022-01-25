import React from 'react';
import { Circle } from '../styles';
import { BsArrowRight } from 'react-icons/bs';
import { policyKorean, policyEnglish } from '@data/language/policy';
import { benefitKorean, benefitEnglish } from '@data/language/benefit';

export default function RecruitmentCard({ title, content, url, icon }) {
  // 복리후생 data 저장 (map할 경우 복리후생 title를 인식하여 배경 Image 삽입하기 위해)
  const policyTitleList = [...policyKorean.title, ...policyEnglish.title];

  // list의 마지막 data 저장 (map할 경우 마지막 요소에 ●●● 붙지 않도록 하기 위해)
  const LastList = [
    policyKorean.policyList[2].title,
    policyEnglish.policyList[2].title,
    benefitKorean.benefitList[2].title,
    benefitEnglish.benefitList[2].title,
  ];
  return (
    <>
      {icon !== undefined ? ( //Props에 Icon이 있을 경우 (채용절차)
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
        //Props에 Icon이 없을 경우 (인사제도, 복리후생)
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
