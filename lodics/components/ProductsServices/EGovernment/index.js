import React, { useContext } from 'react';
import { PageTitle } from 'components';
import { Contents } from './styles';
import GlobalStateContext from '@context/globalStateContext';
import { eGovernmentKorean, eGovernmentEnglish } from '@data/language/eGovernment';

export default function EGovernment() {
  //useContext를 통해 전역적으로 관리하고 있는 value를 가져와서 사용
  const { language } = useContext(GlobalStateContext);

  //현재 언어 Check
  const currentLanguage = language === 'korea' ? eGovernmentKorean : eGovernmentEnglish;

  //전자정부사업 개발 화면 구성 map
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
