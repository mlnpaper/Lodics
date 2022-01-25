import React from 'react';
import { PageSemiTitle, RecruitmentCard } from 'components';
import { palette } from '@styles/color';
import { Line, WrapCirCle } from '../styles';
import { policyKorean, policyEnglish } from '@data/language/policy';

export default function Policy({ language }) {
  const currentLanguage = language === 'korea' ? policyKorean : policyEnglish;

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
      <PageSemiTitle title={currentLanguage.pageTitle} color={palette.themeBlack} fontWeight={400} />
      <WrapCirCle>{policyContent(currentLanguage.policyList)}</WrapCirCle>
    </>
  );
}
