import React, { useContext, useEffect } from 'react';
import { PageTitle, HistoryList } from 'components';
import Timeline from '@mui/lab/Timeline';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TimelineContainer } from './styles';
import GlobalStateContext from '@context/globalStateContext';
import { historyKorean, historyEnglish } from '@data/language/history';

export default function History() {
  const { language } = useContext(GlobalStateContext);

  const currentLanguage = language === 'korea' ? historyKorean : historyEnglish;

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
