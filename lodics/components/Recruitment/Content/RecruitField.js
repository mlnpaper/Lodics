import React from 'react';
import { PageSemiTitle } from 'components';
import { Line, RecruitFieldTable } from '../styles';
import { palette } from '@styles/color';
import { recruitFieldKorean } from '@data/language/recruitField';

export default function RecruitField({ language }) {
  //모집분야 table header
  const fieldTitleContent = fieldHeaderList => {
    return fieldHeaderList.map((title, index) => <th key={index}>{title}</th>);
  };

  //모집분야 table body
  const fieldContent = fieldBodyList => {
    return fieldBodyList.map(({ title, task, content, preferential, person }, index) => (
      <tr key={index}>
        <td>{title}</td>
        {task === undefined ? (
          <>
            <td colSpan={3} style={{ textAlign: 'left', paddingLeft: 20 }}>
              <ul>
                {content.map((content, index) => (
                  <li key={index}>{content}</li>
                ))}
              </ul>
              <div>[우대사항]</div>
              <ul>
                {preferential.map((preferential, index) => (
                  <li key={index}>{preferential}</li>
                ))}
              </ul>
            </td>
          </>
        ) : (
          <>
            <td>{task}</td>
            <td style={{ textAlign: 'left', paddingLeft: 20 }}>
              <ul>
                {content.map((content, index) => (
                  <li key={index}>{content}</li>
                ))}
              </ul>
              {preferential !== undefined ? (
                <>
                  <div>[우대사항]</div>
                  <ul>
                    {preferential.map((preferential, index) => (
                      <li key={index}>{preferential}</li>
                    ))}
                  </ul>{' '}
                </>
              ) : null}
            </td>
            <td>{person + '명'}</td>
          </>
        )}
      </tr>
    ));
  };

  return (
    <>
      {language === 'korea' ? (
        <>
          <Line />
          <PageSemiTitle title={recruitFieldKorean.title} color={palette.themeBlack} fontWeight={400} />
          <RecruitFieldTable>
            <thead>
              <tr>{fieldTitleContent(recruitFieldKorean.fieldHeaderList)}</tr>
            </thead>
            <tbody>{fieldContent(recruitFieldKorean.fieldBodyList)}</tbody>
          </RecruitFieldTable>
        </>
      ) : null}
    </>
  );
}
