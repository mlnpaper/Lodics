import React, { useEffect } from 'react';
import { BusTextContainer, MapContainer, SubwayTextContainer, TextContainer, SubwayIcon, BusIcon } from './styles';
import { PageSemiTitle, PageTitle } from '../..';

export default function Location() {
  // <!-- 3. 실행 스크립트 -->
  const executeScript = () => {
    const scriptTag = document.createElement('script');
    const inlineScript = document.createTextNode(`new daum.roughmap.Lander({
      "timestamp" : "1641175660053",
      "key" : "28nsp",
    }).render();`);
    scriptTag.appendChild(inlineScript);
    document.body.appendChild(scriptTag);
  };

  // <!-- 2. 설치 스크립트 * 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다. -->
  const InstallScript = () => {
    (function () {
      var c = location.protocol == 'https:' ? 'https:' : 'http:';
      var a = 'c6dc0bd8';

      if (window.daum && window.daum.roughmap && window.daum.roughmap.cdn) {
        return;
      }
      window.daum = window.daum || {};
      window.daum.roughmap = {
        cdn: a,
        URL_KEY_DATA_LOAD_PRE: c + '//t1.daumcdn.net/roughmap/',
        url_protocal: c,
      };

      var b = c + '//t1.daumcdn.net/kakaomapweb/place/jscss/roughmap/' + a + '/roughmapLander.js';

      const scriptTag = document.createElement('script');
      scriptTag.src = b;
      document.body.append(scriptTag);
      scriptTag.onload = () => {
        executeScript();
      };
    })();
  };

  useEffect(() => {
    InstallScript();
  }, []);

  return (
    <React.Fragment>
      <PageTitle title='회사위치' />
      <MapContainer>
        {/* 카카오맵 - 지도퍼가기 */}
        {/* 1. 지도 노드  */}
        <div id='daumRoughmapContainer1641175660053' class='root_daum_roughmap root_daum_roughmap_landing'></div>
      </MapContainer>
      <PageSemiTitle title='요약' />
      <TextContainer>
        <span>
          지하철 2호선 뚝섬역 4번 출구, 신한은행 골목으로 들어와, 메가커피 골목으로 500m 직진.
          <br />
          1층 '바다화원' 건물
        </span>
      </TextContainer>
      <PageSemiTitle title='주소' />
      <TextContainer>
        <span>서울특별시 성동구 상원4길 6-1 태양빌딩 3층 (성수동1가 14-32)</span>
        <div>
          <span>
            <em>TEL</em> 02-403-1160
          </span>
          <span>
            <em>FAX</em> 02-403-1108
          </span>
        </div>
      </TextContainer>
      <PageSemiTitle title='지하철역' />
      <SubwayTextContainer>
        <div>
          <span>
            뚝섬역 <SubwayIcon $color='#37B32D'>2</SubwayIcon>
          </span>
          <span>4번 출구</span>
          <span>도보 2분</span>
        </div>
        <div>
          <span>
            성수역 <SubwayIcon $color='#37B32D'>2</SubwayIcon>
          </span>
          <span>1번 출구</span>
          <span>도보 10분</span>
        </div>
        <div>
          <span>
            서울숲역 <SubwayIcon $color='#E9AF17'>분당</SubwayIcon>
          </span>
          <span>1번 출구</span>
          <span>도보 13분</span>
        </div>
      </SubwayTextContainer>
      <PageSemiTitle title='버스정류장' />
      <BusTextContainer>
        <div>
          <span>뚝섬역4번출구</span>
          <span>(04239) | 30m</span>
          <span>
            <BusIcon $color='#6372D7'>간선</BusIcon>N62(심야)
          </span>
          <span>
            <BusIcon $color='#53A135'>지선</BusIcon>2016 | 2224 | 2413
          </span>
        </div>
        <div>
          <span>뚝섬역3번5번출구</span>
          <span>(04238) | 70m</span>
          <span>
            <BusIcon $color='#6372D7'>간선</BusIcon>N62(심야)
          </span>
          <span>
            <BusIcon $color='#53A135'>지선</BusIcon>2016 | 2224 | 2413
          </span>
        </div>
        <div>
          <span>뚝섬역2번출구</span>
          <span>(04237) | 198m</span>
          <span>
            <BusIcon $color='#6372D7'>간선</BusIcon>N62(심야)
          </span>
          <span>
            <BusIcon $color='#53A135'>지선</BusIcon>2016 | 2224 | 2413
          </span>
        </div>
      </BusTextContainer>
    </React.Fragment>
  );
}
