import React, { useContext } from 'react';

import GlobalStateContext from '@context/globalStateContext';
import { GoalsVisionsEnglish, GoalsVisionsKorean } from '@data/language/goalsVisions';

import { CertificationCard, PageSemiTitle, PageTitle } from 'components';
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
  <ContentContainer key={content}>
    <p>{content}</p>
    <p>{description}</p>
  </ContentContainer>
);

const createImgCardElement = (img, text) => (
  <ImgCardInnerContainer key={text} $width={text === 'GEOINT' ? '100%' : 'calc(100% / 3 - 2rem)'}>
    <img src={img} alt={text} />
    <span>{text}</span>
  </ImgCardInnerContainer>
);

export default function GoalsVisions() {
  const { language } = useContext(GlobalStateContext);

  const currentLanguage = language === 'korea' ? GoalsVisionsKorean : GoalsVisionsEnglish;

  return (
    <React.Fragment>
      <Container>
        <PageTitle title={currentLanguage.goalsVisionTitle} />
        <ImgContainer>
          <img src={currentLanguage.goalsVisionImg} alt={currentLanguage.goalsVisionTitle} />
        </ImgContainer>
        <InnerContainer>
          <PageSemiTitle title={currentLanguage.goalsVisionSemiTitleGeointIntroduce} />
          <ThirdTitle>{currentLanguage.geointIntroduceGeospatialIntelligenceThirdTItle}</ThirdTitle>
          {createContentElement(
            currentLanguage.geointIntroduceGeospatialIntelligenceContent[0],
            currentLanguage.geointIntroduceGeospatialIntelligenceContent[1]
          )}
          <ThirdTitle>{currentLanguage.geointIntroduceCompositionThirdTitle}</ThirdTitle>
          {currentLanguage.geointIntroduceCompositionContent.map(list => createContentElement(list[0], list[1]))}
          <ImgCardContainer>
            {currentLanguage.geointIntroduceImg.map(list => createImgCardElement(list[0], list[1]))}
          </ImgCardContainer>
        </InnerContainer>
        <GeointProcessContainer>
          <PageSemiTitle title={currentLanguage.goalsVisionSemiTitleGeointProcess} />
          <ThirdTitle>{currentLanguage.geointProcessThirdTitle}</ThirdTitle>
          <ImgContainer>
            <img src={currentLanguage.geointProcessImg} alt={currentLanguage.geointProcessThirdTitle} />
          </ImgContainer>
        </GeointProcessContainer>
      </Container>
      <Container>
        <PageTitle title={currentLanguage.eGovernmentTitle} />
        <p>{currentLanguage.eGovernmentContent}</p>
        <InnerContainer>
          <PageSemiTitle title={currentLanguage.eGovernmentSemiTitle} />
          <EGovernmentImgContainer>
            {currentLanguage.eGovernmentImg.map(({ key, img, title }) => (
              <CertificationCard key={key} img={img} title={title} />
            ))}
          </EGovernmentImgContainer>
        </InnerContainer>
      </Container>
    </React.Fragment>
  );
}
