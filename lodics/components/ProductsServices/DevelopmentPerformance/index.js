import React, { useContext, useEffect, useState } from 'react';
import { PageTitle } from 'components';
import { Contents, Table } from './styles';
import GlobalStateContext from '@context/globalStateContext';
import {
  srpListKorean,
  qubismListKorean,
  pevListKorean,
  wissListKorean,
  geointListKorean,
  srpListEnglish,
  qubismListEnglish,
  pevListEnglish,
  wissListEnglish,
  geointListEnglish,
} from '@data/language/developmentPerformance';

//연구개발실적 화면 구성 map
export const KeyTechnologyTable = list => {
  return list.map(({ key, title, contents }) => (
    <tbody key={key}>
      <tr>
        <th>{title}</th>
        <td>
          {contents.map((contents, index) => (
            <li key={index}>{contents}</li>
          ))}
        </td>
      </tr>
    </tbody>
  ));
};

export default function DevelopmentPerformance() {
  //useContext를 통해 전역적으로 관리하고 있는 value를 가져와서 사용
  const { subSelectedComponent, setSubSelectedComponent, language } = useContext(GlobalStateContext);

  //선택된 프로젝트를 저장 및 설정해주는 useState, 초기값은 스마트 방사능 방재 지휘통제 시스템 구축 한국어 ver로 설정
  const [selectedState, setSelectedState] = useState(srpListKorean);

  //subMenu value 및 언어가 변경될 경우 실행
  useEffect(() => {
    if (language === 'korea') {
      setSelectedState(srpListKorean);
      if (subSelectedComponent === 'developmentPerformance') {
        setSelectedState(srpListKorean);
        setSubSelectedComponent('srp');
      } else if (subSelectedComponent === 'srp') setSelectedState(srpListKorean);
      else if (subSelectedComponent === 'qubism') setSelectedState(qubismListKorean);
      else if (subSelectedComponent === 'wiss') setSelectedState(wissListKorean);
      else if (subSelectedComponent === 'pev') setSelectedState(pevListKorean);
      else if (subSelectedComponent === 'geoint') setSelectedState(geointListKorean);
    } else {
      setSelectedState(srpListEnglish);
      if (subSelectedComponent === 'developmentPerformance') {
        setSelectedState(srpListEnglish);
        setSubSelectedComponent('srp');
      } else if (subSelectedComponent === 'srp') setSelectedState(srpListEnglish);
      else if (subSelectedComponent === 'qubism') setSelectedState(qubismListEnglish);
      else if (subSelectedComponent === 'wiss') setSelectedState(wissListEnglish);
      else if (subSelectedComponent === 'pev') setSelectedState(pevListEnglish);
      else if (subSelectedComponent === 'geoint') setSelectedState(geointListEnglish);
    }
  }, [subSelectedComponent, language]);

  return (
    <>
      {/* 선택 된 상태값의 제목, 사진, 내용 표출 (data 수정 필요 시 data/language/developmentPerformance 수정  ) */}
      <PageTitle title={selectedState[0]['title']} />
      <Contents>
        <img src={selectedState[0]['imgURL']} />
        <Table>{KeyTechnologyTable(selectedState[1])}</Table>
      </Contents>
    </>
  );
}
