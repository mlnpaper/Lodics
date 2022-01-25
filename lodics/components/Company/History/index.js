import React, { useContext, useEffect } from 'react';
import Timeline from '@mui/lab/Timeline';
import AOS from 'aos';
import 'aos/dist/aos.css';

import GlobalStateContext from '@context/globalStateContext';
import { historyKorean, historyEnglish } from '@data/language/history';

import { PageTitle, HistoryList } from 'components';
import { TimelineContainer } from './styles';

export default function History() {
  const { language } = useContext(GlobalStateContext);

  const currentLanguage = language === 'korea' ? historyKorean : historyEnglish;

  // AOS 애니메이션 설정
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <React.Fragment>
      <PageTitle title={currentLanguage.pageTitle} />
      <TimelineContainer>
        <Timeline position='alternate'>
          {currentLanguage.historyList.map((history, i) => (
            <HistoryList
              key={history[0].years}
              historyList={history}
              parentIndex={i}
              isLastIndex={currentLanguage.historyList.length - 1 === i}
            />
          ))}
        </Timeline>
      </TimelineContainer>
    </React.Fragment>
  );
}
