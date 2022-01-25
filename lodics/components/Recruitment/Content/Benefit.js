import React from 'react';
import { PageSemiTitle, RecruitmentCard } from 'components';
import { palette } from '@styles/color';
import { Line, WrapCirCle } from '../styles';
import { benefitKorean, benefitEnglish } from '@data/language/benefit';

export default function Benefit({ language }) {
  const currentLanguage = language === 'korea' ? benefitKorean : benefitEnglish;

  const benefitContent = benefitList => {
    return (
      <WrapCirCle>
        {benefitList.map(({ key, title, content, url }) => (
          <RecruitmentCard key={key} title={title} content={content} url={url} />
        ))}
      </WrapCirCle>
    );
  };

  return (
    <>
      <Line />
      <PageSemiTitle title={currentLanguage.pageTitle} color={palette.themeBlack} fontWeight={400} />
      {benefitContent(currentLanguage.benefitList)}
    </>
  );
}
