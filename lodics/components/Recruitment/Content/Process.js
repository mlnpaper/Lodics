import React from 'react';
import { PageSemiTitle, RecruitmentCard } from 'components';
import { palette } from '@styles/color';
import { Line, ProcessTable, WrapCirCle } from '../styles';
import { processKorean } from '@data/language/process';

export default function Process({ language }) {
  //채용절차 Icon
  const processContent = processList => {
    return processList.map(({ key, title, icon, url }) => (
      <RecruitmentCard key={key} title={title} icon={icon} url={url} />
    ));
  };

  //채용절차 Table
  const processDetailContent = processDetailList => {
    return processDetailList.map(({ num, title, content }, index) => (
      <tr key={index}>
        <th>
          <div>{num}</div>
          <div>{title}</div>
        </th>
        <td>
          <ul>
            {content.map((content, index) => (
              <li key={index}>{content}</li>
            ))}
          </ul>
        </td>
      </tr>
    ));
  };

  return (
    <>
      {language === 'korea' ? (
        <>
          <Line />
          <PageSemiTitle title={processKorean.title} color={palette.themeBlack} fontWeight={400} />
          <WrapCirCle>{processContent(processKorean.processList)}</WrapCirCle>

          <ProcessTable>
            <tbody>{processDetailContent(processKorean.processDetailList)}</tbody>
          </ProcessTable>
        </>
      ) : null}
    </>
  );
}
