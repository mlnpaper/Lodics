import React from 'react';
import { PageSemiTitle } from 'components';
import { Line, RecruitFieldTable } from '../styles';
import { palette } from '@styles/color';

const fieldHeaderList = ['모집분야', '담당업무', '자격요건', '모집인원'];

const fieldBodyList = [
  {
    title: '공통사항',
    content: ['- 학력: 무관', '- 경력: 신입 및 경력'],
    preferential: [
      '- 관련학과(소프트웨어, 원격탐사, 공간정보) 전공, 관련자격증 보유, 유관업무 경험',
      '- (전략기획 부문)석사 이상 졸업자로 다수의 논문, 제안서, 보고서 등 작성 경험자',
      '- Open Source(GDAL, OpenCV 등) 라이브러리 활용 경험',
      '- GIS 소프트웨어(GeoServer, ERDAS, ArcGIS, QGIS 등) 사용 경험',
      '- GIS 데이터(항공/위성영상(EO/IR, SAR), ESRI Shape 등) 처리 경험',
      '- 긍정적인 사고와 적극적인 마인드의 소유자',
    ],
  },
  {
    title: '응용 SW 개발',
    task: '응용 SW',
    content: ['- C/C++, C#, Python 등 언어 사용 개발 경험'],
    preferential: [
      '- 영상처리 개발 경험',
      '- GDAL, SciPy 등 오픈소스 라이브러리 사용 경험',
      '- MATLAB 등 공학 소프트웨어 사용 경험',
      '- Hadoop, Spark 등 분산 플랫폼 사용 경험',
      '- Unity 등 3D 애플리케이션 경험',
      '- Open Street Map 등 지도 데이터 처리 경험',
      '- Cesium 사용 경험',
    ],
    person: 'O',
  },
  {
    title: '웹/서버 개발',
    task: '웹 기반 응용 SW 개발 (Back End)',
    content: [
      '- C/C++, C#, Java, Python 등 언어 사용 개발 경험',
      '- PostgreSQL, PostGIS 등 Database 사용 경험',
      '- CentOS, Ubuntu, Fedora 등 리눅스 사용 경험',
    ],
    preferential: [
      '- RESTful API 개발 경험',
      '- VirtualBox, Docker 등 가상화 소프트웨어 사용 경험',
      '- Cesium 사용 경험',
    ],
    person: 'O',
  },
  {
    title: '전략 기획',
    task: '전략 기획',
    content: [
      '- 관련 분야 동향 조사/분석',
      '- 마케팅/영업 활동',
      '- 관련 분야 제안 작업',
      '- 기술 영업 활동',
      '- 제품 개발, 회사 전략 계획 수립 및 시행',
      '- 기타 관련 업무',
    ],
    person: 'O',
  },
];

export default function RecruitField() {
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
      <Line />
      <PageSemiTitle title='모집분야 및 자격요건' color={palette.themeBlack} fontWeight={400} />
      <RecruitFieldTable>
        <thead>
          <tr>{fieldTitleContent(fieldHeaderList)}</tr>
        </thead>
        <tbody>{fieldContent(fieldBodyList)}</tbody>
      </RecruitFieldTable>
    </>
  );
}
