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
  const { language } = useContext(GlobalStateContext);
  const currentLanguage = language === 'korea' ? recruitmentKorean : recruitmentEnglish;

  return (
    <>
      <PageTitle title={currentLanguage.pageTitle}></PageTitle>
      <Div>{currentLanguage.headLine()}</Div>
      <RecruitField language={language} />
      <Process language={language} />
      <Policy language={language} />
      <Benefit language={language} />
    </>
  );
}
