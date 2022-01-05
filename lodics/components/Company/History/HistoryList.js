import React from 'react';
import {
  HistoryListContentContainer,
  HistoryListYearContainer,
  HistoryListContainer,
  ContentContainer,
} from './styles';

export default function HistoryList({ historyList }) {
  const year = historyList[0]['years'];

  return (
    <HistoryListContainer>
      <HistoryListYearContainer>{year}</HistoryListYearContainer>;
      <HistoryListContentContainer>
        {historyList.map((history, i) => {
          if (i > 0) {
            return (
              <ContentContainer key={i}>
                <span>{history.month}</span>
                <p>{history.content}</p>
              </ContentContainer>
            );
          }
        })}
      </HistoryListContentContainer>
    </HistoryListContainer>
  );
}
