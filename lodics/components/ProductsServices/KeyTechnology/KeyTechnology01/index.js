import React from 'react'
import { WrapContents, SingleContents, MultipleContents } from './styles'

export default function KeyTechnology01() {
  return (
    <>
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
                  <tr>
                    <td>여색입체</td>
                    <td>편광입체</td>
                  </tr>
                </table>
              </li>
              <li>Stereo 영상 생성</li>
              <li>
                군사 규격 자료
                <table>
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
                </table>
              </li>
              <li>
                NITF
                <table>
                  <tr>
                    <td>NITF 2.0</td>
                    <td>NITF 2.1</td>
                  </tr>
                  <tr>
                    <td>TRE 처리</td>
                    <td>압축영상 처리</td>
                  </tr>
                </table>
              </li>
              <li>센서 모델링</li>
            </ul>
            <ul>
              <li>
                RPC/RSM Generator
                <table>
                  <tr>
                    <td>{'RSM\nExploiter'}</td>
                    <td>{'RSM\nGenerator'}</td>
                  </tr>
                </table>
              </li>
              <li>
                기하/방사 보정
                <table>
                  <tr>
                    <td style={{ width: 250 }}>단영상 모델링</td>
                  </tr>
                  <tr>
                    <td>Block Modeling</td>
                  </tr>
                  <tr>
                    <td>정확도 자료 생성</td>
                  </tr>
                </table>
              </li>
              <li>
                CSM
                <table>
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
            <li>이동제 위치추적</li>
            <li>GIS 자료 중첩도시</li>
            <li>3D 지형처리</li>
            <li>PostgreSQL/PostGIS</li>
          </ul>
        </SingleContents>
      </WrapContents>
      {/* <WrapContents>
        <Contents>
          <span>{'GEOINT\n자료 통합처리 기술'}</span>
          <div>{'다중센서\n융합처리'}</div>
          <div>{'GEOINT\n정보추출'}</div>
          <div>{'분산형\nGEOINT DB\n통합처리'}</div>
          <div>{'정보융합\n분산 정보처리'}</div>
        </Contents>
        <Contents_>
          <span>{'다중영상기반 정밀 위치결정자료 제작 기술'}</span>
          <div>
            <div>
              <div>
                입체시 Viewer
                <div>
                  <div>여색입체</div>
                  <div>여색입체</div>
                </div>
              </div>
              <div>Stereo 영상 생성</div>
              <div>군사 규격 자료</div>
              <div>NITF</div>
              <div>센서 모델링</div>
            </div>
            <div>
              <div>RPC/RSM Generator</div>
              <div>기하/방사 보정</div>
              <div>CSM</div>
              <div>특징점 추출 및 매칭</div>
            </div>
          </div>
        </Contents_>
        <Contents>
          <span>{'위치기반\n통합 모니터링 기술'}</span>
          <div>가시영역 처리</div>
          <div>이동제 위치추적</div>
          <div>GIS 자료 중첩도시</div>
          <div>3D 지형처리</div>
          <div>PostgreSQL/PostGIS</div>
        </Contents>
      </WrapContents> */}
    </>
  )
}
