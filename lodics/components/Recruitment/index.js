import React, { useContext } from 'react';
import { Div } from './styles';
import { PageTitle } from '..';
import RecruitField from '@components/Recruitment/Content/RecruitField';
import Process from '@components/Recruitment/Content/Process';
import Policy from '@components/Recruitment/Content/Policy';
import Benefit from '@components/Recruitment/Content/Benefit';
import GlobalStateContext from '@context/globalStateContext';
import { recruitmentKorean, recruitmentEnglish } from '@data/language/recruitment';

export default function Recruitment() {
  //useContext를 통해 전역적으로 관리하고 있는 value를 가져와서 사용
  const { language } = useContext(GlobalStateContext);

  //현재 언어 Check
  const currentLanguage = language === 'korea' ? recruitmentKorean : recruitmentEnglish;

  return (
    <>
      <PageTitle title={currentLanguage.pageTitle}></PageTitle>
      <Div>{currentLanguage.headLine()}</Div>
      <RecruitField language={language} /> {/* 모집분야 및 자격요건 component 호출 props -> language : string*/}
      <Process language={language} /> {/* 채용절차 component 호출 props -> language : string*/}
      <Policy language={language} /> {/* 인사제도 component 호출 props -> language : string*/}
      <Benefit language={language} /> {/* 복리후생 component 호출 props -> language : string*/}
    </>
  );
}
