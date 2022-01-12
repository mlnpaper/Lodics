import React from 'react';
import { PageTitle } from 'components';
import { WrapContents, SingleContents, MultipleContents } from './styles';

export default function KeyTechnology() {
  return (
    <>
      <PageTitle title={'핵심기술'} />
      <WrapContents>
        <SingleContents>
          <span>{'GEOINT\n자료 통합처리 기술'}</span>
          <ul>
            <li>{'다중센서\n융합처리'}</li>
            <li>{'GEOINT\n정보추출'}</li>
            <li>{'분산형\nGEOINT DB\n통합처리'}</li>
            <li>{'정보융합\n분산 정보처리'}</li>
          </ul>
        </SingleContents>
        <MultipleContents>
          <span>{'다중영상기반 정밀 위치결정자료 제작 기술'}</span>
          <div>
            <ul>
              <li>
                입체시 Viewer
                <table>
                  <tbody>
                    <tr>
                      <td>여색입체</td>
                      <td>편광입체</td>
                    </tr>
                  </tbody>
                </table>
              </li>
              <li>Stereo 영상 생성</li>
              <li>
                군사 규격 자료
                <table>
                  <tbody>
                    <tr>
                      <td colSpan={2}>CIB</td>
                    </tr>
                    <tr>
                      <td>DTED</td>
                      <td>GARS</td>
                    </tr>
                    <tr>
                      <td>DPPDB</td>
                      <td>CADRG</td>
                    </tr>
                  </tbody>
                </table>
              </li>
              <li>
                NITF
                <table>
                  <tbody>
                    <tr>
                      <td>NITF 2.0</td>
                      <td>NITF 2.1</td>
                    </tr>
                    <tr>
                      <td>TRE 처리</td>
                      <td>압축영상 처리</td>
                    </tr>
                  </tbody>
                </table>
              </li>
              <li>센서 모델링</li>
            </ul>
            <ul>
              <li>
                RPC/RSM Generator
                <table>
                  <tbody>
                    <tr>
                      <td>{'RSM\nExploiter'}</td>
                      <td>{'RSM\nGenerator'}</td>
                    </tr>
                  </tbody>
                </table>
              </li>
              <li>
                기하/방사 보정
                <table>
                  <tbody>
                    <tr>
                      <td style={{ width: 250 }}>단영상 모델링</td>
                    </tr>
                    <tr>
                      <td>Block Modeling</td>
                    </tr>
                    <tr>
                      <td>정확도 자료 생성</td>
                    </tr>
                  </tbody>
                </table>
              </li>
              <li>
                CSM
                <table>
                  <tbody>
                    <tr>
                      <td>Pushbroom</td>
                      <td>Whiskbroom</td>
                    </tr>
                    <tr>
                      <td>Frame</td>
                      <td>SAR</td>
                    </tr>
                    <tr>
                      <td>DLT</td>
                      <td>RPC/RSM</td>
                    </tr>
                  </tbody>
                </table>
              </li>
              <li>특징점 추출 및 매칭</li>
            </ul>
          </div>
        </MultipleContents>
        <SingleContents>
          <span>{'위치기반\n통합 모니터링 기술'}</span>
          <ul>
            <li>가시영역 처리</li>
            <li>이동체 위치추적</li>
            <li>GIS 자료 중첩도시</li>
            <li>3D 지형처리</li>
            <li>PostgreSQL/PostGIS</li>
          </ul>
        </SingleContents>
      </WrapContents>
    </>
  );
}
