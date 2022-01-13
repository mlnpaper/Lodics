import React, { useContext } from 'react';
import { PageTitle } from 'components';
import { Contents } from './styles';
import GlobalStateContext from '@context/globalStateContext';
import { eGovernmentKorean, eGovernmentEnglish } from '@data/language/eGovernment';

export default function EGovernment() {
  const { language } = useContext(GlobalStateContext);

  const currentLanguage = language === 'korea' ? eGovernmentKorean : eGovernmentEnglish;
  const fillContents = eGovernmentList => {
    return eGovernmentList.map(({ key, title, contents, subContents }) => (
      <Contents key={key}>
        <span>{title}</span>
        <ul>
          {contents.map((contents, index) => (
            <li key={index}>
              {contents}
              {subContents !== undefined ? <div>{subContents[index]}</div> : null}
            </li>
          ))}
        </ul>
      </Contents>
    ));
  };

  return (
    <>
      <PageTitle title={currentLanguage.pagetitle} />
      {fillContents(currentLanguage.list)}
    </>
  );
}
