import React from 'react';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import { Ul } from './styles';

export default function HistoryList({ historyList, parentIndex, isLastIndex }) {
  const year = historyList[0]['years'];

  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent className='year'>
        {year}
        <Ul
          $parentIndex={parentIndex % 2}
          $isLastIndex={isLastIndex}
          data-aos={parentIndex % 2 ? 'fade-right' : 'fade-left'}
        >
          {historyList.map((history, i) => {
            if (i > 0) {
              return (
                <li key={history.key}>
                  {parentIndex % 2 ? (
                    <>
                      <p>{history.content}</p>
                      <span>{history.month}</span>
                    </>
                  ) : (
                    <>
                      <span>{history.month}</span>
                      <p>{history.content}</p>
                    </>
                  )}
                </li>
              );
            }
          })}
        </Ul>
      </TimelineContent>
    </TimelineItem>
  );
}
