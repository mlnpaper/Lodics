import React, { useEffect } from 'react';
import { PageTitle, HistoryList } from 'components';
import { historyList } from '@data/history';
import Timeline from '@mui/lab/Timeline';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TimelineContainer } from './styles';

export default function History() {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <React.Fragment>
      <PageTitle title='연혁' />
      <TimelineContainer>
        <Timeline position='alternate'>
          {historyList.map((history, i) => (
            <HistoryList historyList={history} parentIndex={i} isLastIndex={historyList.length - 1 === i} />
          ))}
        </Timeline>
      </TimelineContainer>
    </React.Fragment>
  );
}
