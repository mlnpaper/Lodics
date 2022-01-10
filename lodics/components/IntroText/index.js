import React, { useEffect, useState } from 'react';
import { Container } from './styles';

const getFirstIntro = () => (
  <React.Fragment>
    <span className='first_line'>Leaders of GEOINT</span>
    <span className='second_line'>
      로딕스는 특수분야의 사업수행 경험을 바탕으로
      <br />
      센서기반 공간정보 응용 솔루션 개발, GIS 솔루션 시장, GIS DB 구축 사업을 추진합니다.{' '}
    </span>
  </React.Fragment>
);

const getSecondIntro = () => (
  <React.Fragment>
    <span className='first_line'>GEOINT 전문기업</span>
    <span className='second_line'>공공 및 민간부분의 GEOINT 시장 창출과 확장을 선도하는 강소기업입니다.</span>
  </React.Fragment>
);

export default function IntroText() {
  const [introText, setIntroText] = useState(1);

  useEffect(() => {
    const timeId = setInterval(() => {
      if (introText === 1) {
        setIntroText(2);
      } else {
        setIntroText(1);
      }
    }, 10000);

    return () => clearInterval(timeId);
  }, [introText]);

  return <Container>{introText === 1 ? getFirstIntro() : getSecondIntro()}</Container>;
}
