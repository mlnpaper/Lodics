import React, { useContext, useEffect } from 'react';

import GlobalStateContext from '@context/globalStateContext';
import { locationEnglish, locationKorean } from '@data/language/location';

import { PageSemiTitle, PageTitle } from 'components';
import { BusTextContainer, MapContainer, SubwayTextContainer, TextContainer, SubwayIcon, BusIcon } from './styles';

const createSubwayTextElement = (subwayName, subwayNumber, subwayColor, exit, distance) => (
  <div key={subwayName}>
    <span>
      {subwayName} <SubwayIcon $color={subwayColor}>{subwayNumber}</SubwayIcon>
    </span>
    <span>{exit}</span>
    <span>{distance}</span>
  </div>
);

const createBusTextElement = (exit, busStop, distance, midnight) => (
  <div key={busStop}>
    <span>{exit}</span>
    <span>
      {`(${busStop})`} | {distance}m
    </span>
    <span>
      <BusIcon $color='#6372D7'>간선</BusIcon>N62({midnight})
    </span>
    <span>
      <BusIcon $color='#53A135'>지선</BusIcon>2016 | 2224 | 2413
    </span>
  </div>
);

// [카카오맵 - 지도퍼가기] 2. 설치 스크립트 * 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다.
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

// [카카오맵 - 지도퍼가기] 3. 실행 스크립트
const executeScript = () => {
  const scriptTag = document.createElement('script');
  const inlineScript = document.createTextNode(`new daum.roughmap.Lander({
      "timestamp" : "1641175660053",
      "key" : "28nsp",
    }).render();`);
  scriptTag.appendChild(inlineScript);
  document.body.appendChild(scriptTag);
};

export default function Location() {
  const { language } = useContext(GlobalStateContext);

  const currentLanguage = language === 'korea' ? locationKorean : locationEnglish;

  // 카카오맵 호출
  useEffect(() => {
    InstallScript();
  }, []);

  return (
    <React.Fragment>
      <PageTitle title={currentLanguage.pageTitle} />
      <MapContainer>
        {/* [카카오맵 - 지도퍼가기] 1. 지도 노드  */}
        <div id='daumRoughmapContainer1641175660053' className='root_daum_roughmap root_daum_roughmap_landing'></div>
      </MapContainer>
      <PageSemiTitle title={currentLanguage.summarySemiTitle} />
      <TextContainer>
        <span>{currentLanguage.summaryContent}</span>
      </TextContainer>
      <PageSemiTitle title={currentLanguage.adrressSemiTitle} />
      <TextContainer>
        <span>{currentLanguage.adrressContent}</span>
        <div>
          <span>
            <em>TEL</em> 02-403-1160
          </span>
          <span>
            <em>FAX</em> 02-403-1108
          </span>
        </div>
      </TextContainer>
      <PageSemiTitle title={currentLanguage.subwaySemiTitle} />
      <SubwayTextContainer>
        {currentLanguage.subwayContent.map(subway =>
          createSubwayTextElement(subway.subwayStation, subway.line, subway.lineColor, subway.exit, subway.onFoot)
        )}
      </SubwayTextContainer>
      <PageSemiTitle title={currentLanguage.busSemiTitle} />
      <BusTextContainer>
        {currentLanguage.busContent.map(bus =>
          createBusTextElement(bus.busStop, bus.busNumber, bus.distance, bus.midnight)
        )}
      </BusTextContainer>
    </React.Fragment>
  );
}
