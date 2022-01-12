import React from 'react';
import { Circle } from '../styles';
import { BsArrowRight } from 'react-icons/bs';

export default function RecruitmentCard({ title, content, url, icon }) {
  const policyTitle = ['성과평가', '보상제도', '교육제도'];
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
          <Circle $theme={policyTitle.includes(title) ? null : 'image'} $image={url} $size={'300px'}>
            <>
              <div>{title}</div>
              <hr />
              <div>{content}</div>
            </>
          </Circle>
          {title !== '여가활동' && title !== '교육제도' ? <div>●●●</div> : null}
        </>
      )}
    </>
  );
}
