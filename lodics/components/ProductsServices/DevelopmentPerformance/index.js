import React, { useContext, useEffect, useState } from 'react';
import { PageTitle } from 'components';
import { Contents, Table } from './styles';
import GlobalStateContext from '@context/globalStateContext';
import { srpList, qubismList, pevList, wissList, geointList } from '@data/DevelopmentPerformance';

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
  const { subSelectedComponent, setSubSelectedComponent } = useContext(GlobalStateContext);
  const [selectedState, setSelectedState] = useState(srpList);

  useEffect(() => {
    if (subSelectedComponent === 'developmentPerformance') {
      setSelectedState(srpList);
      setSubSelectedComponent('srp');
    } else if (subSelectedComponent === 'srp') setSelectedState(srpList);
    else if (subSelectedComponent === 'qubism') setSelectedState(qubismList);
    else if (subSelectedComponent === 'wiss') setSelectedState(wissList);
    else if (subSelectedComponent === 'pev') setSelectedState(pevList);
    else if (subSelectedComponent === 'geoint') setSelectedState(geointList);
  }, [subSelectedComponent]);

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
