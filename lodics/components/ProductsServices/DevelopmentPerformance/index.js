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
  const { subSelectedComponent, setSubSelectedComponent, language } = useContext(GlobalStateContext);
  const [selectedState, setSelectedState] = useState(srpListKorean);

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
      <PageTitle title={selectedState[0]['title']} />
      <Contents>
        <img src={selectedState[0]['imgURL']} />
        <Table>{KeyTechnologyTable(selectedState[1])}</Table>
      </Contents>
    </>
  );
}
