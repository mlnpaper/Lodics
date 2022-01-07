import React from 'react';
import { CertificationCard, PageSemiTitle, PageTitle } from 'components';
import { eGovernmentModelDevelopment } from '@data/eGovernmentModelDevelopment';
import {
  Container,
  InnerContainer,
  ThirdTitle,
  ContentContainer,
  GeointProcessContainer,
  ImgContainer,
  EGovernmentImgContainer,
  ImgCardInnerContainer,
  ImgCardContainer,
} from './styles';

const createContentElement = (content, description) => (
  <ContentContainer>
    <p>{content}</p>
    <p>{description}</p>
  </ContentContainer>
);

const createImgCardElement = (img, text) => (
  <ImgCardInnerContainer $width={text === 'GEOINT' ? '100%' : 'calc(100% / 3 - 2rem)'}>
    <img src={img} alt={text} />
    <span>{text}</span>
  </ImgCardInnerContainer>
);

export default function GoalsVisions() {
  return (
    <React.Fragment>
      <Container>
        <PageTitle title='목표와 비전' />
        <ImgContainer>
          <img src='img/business/biz01_01.png' alt='목표와 비전' />
        </ImgContainer>
        <InnerContainer>
          <PageSemiTitle title='GEOINT 소개' />
          <ThirdTitle>지리공간정보(Geospatial Intelligence)</ThirdTitle>
          {createContentElement(
            '지리공간정보(GEOINT)란?',
            '지구상의 모든 지형지물과 지리적으로 연계된 활동들을 설명, 평가, 가시화하기위해 영상과 지형정보를 활용하는 것으로 영상, 영상정보, 지형정보로 구성'
          )}
          <ThirdTitle>구성요소</ThirdTitle>
          {createContentElement('영상(Imagery)', '위성, 항공영상 포함')}
          {createContentElement(
            '영상정보(Imagery Intelligence)',
            '영상에 나타난 건물, 중요지형 등과 관련해 추가로 수집된 신호, 인간정보 등 연관 첩보를 종합해 그 중요도와 의미에 대한 평가를 부여'
          )}
          {createContentElement(
            '지형공간정보(Geospatial Information)',
            '지형 자체가 가지고 있는 특성을 분석한 ‘지형정보’를 여러 장의 투명도를 겹치듯이 융합해 지형과 상황에 대한 종합적인 분석과 판단이 가능하도록 정보를 제공'
          )}
          <ImgCardContainer>
            {createImgCardElement('img/business/biz01_02_01.png', '영상')}
            {createImgCardElement('img/business/biz01_02_02.png', '영상정보')}
            {createImgCardElement('img/business/biz01_02_03.png', '지형공간정보')}
            {createImgCardElement('img/business/biz01_02_04.png', 'GEOINT')}
          </ImgCardContainer>
        </InnerContainer>
        <GeointProcessContainer>
          <PageSemiTitle title='GEOINT 프로세스' />
          <ThirdTitle>GEOINT 자료처리 과정</ThirdTitle>
          <ImgContainer>
            <img src='img/business/biz01_03.png' alt='GEOINT 자료처리 과정' />
          </ImgContainer>
        </GeointProcessContainer>
      </Container>
      <Container>
        <PageTitle title='전자정부 개발에 대한 자문' />
        <p>
          로딕스는 전자정부 개발과 관련되는 업무 전반에 대하여 자문을 제공하고 있으며, 이에는 한국 모델을 기반으로 한
          정부 차원에서 전자정부 개발에 대한 정책 및 전략 수립,
          <br />
          각 부처 프로젝트의 기획 및 시행, 기술 개발, 자금 조달 등이 포함 되어 있습니다.
          <br />
          <br />
          저희 고객이 전자정부 개발 관리에 대한 전반적 이해를 돕기 위해 “전자정부 개발 및 정보통신 산업 육성 전략”이라는
          책자를 2016년도에 출간하였습니다.
        </p>
        <InnerContainer>
          <PageSemiTitle title='전자정부 모델 개발 현황' />
          <EGovernmentImgContainer>
            {eGovernmentModelDevelopment.map(({ key, img, title }) => (
              <CertificationCard key={key} img={img} title={title} />
            ))}
          </EGovernmentImgContainer>
        </InnerContainer>
      </Container>
    </React.Fragment>
  );
}
