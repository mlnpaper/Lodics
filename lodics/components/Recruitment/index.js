import React from 'react';
import { Div } from './styles';
import { PageTitle } from '..';
import RecruitField from '@components/Recruitment/Content/RecruitField';
import Process from '@components/Recruitment/Content/Process';
import Policy from '@components/Recruitment/Content/Policy';
import Benefit from '@components/Recruitment/Content/Benefit';

export default function Recruitment() {
  return (
    <>
      <PageTitle title={'채용정보'}></PageTitle>
      <Div>
        "새로운 내일을 향해 <b>지치지 않는 열정</b>과 <b>도전정신</b>
        {'으로\n로딕스와 함께 성장 할 인재를 기다립니다."'}
      </Div>
      <RecruitField />
      <Process />
      <Policy />
      <Benefit />
    </>
  );
}
