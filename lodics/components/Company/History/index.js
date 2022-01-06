import React from 'react';
import { PageTitle, HistoryList, PageSemiTitle } from 'components';
import {
  historyList2007,
  historyList2008,
  historyList2009,
  historyList2010,
  historyList2011,
  historyList2012,
  historyList2013,
  historyList2014,
  historyList2015,
  historyList2016,
  historyList2017,
  historyList2018,
  historyList2019,
  historyList2020,
  historyList2021,
} from '@data/history';
import { palette } from '@styles/color';

export default function History() {
  return (
    <React.Fragment>
      <PageTitle title='연혁' />
      <PageSemiTitle title="2020's" color={palette.themePrimary} fontWeight={600} />
      <HistoryList historyList={historyList2021} />
      <HistoryList historyList={historyList2020} />
      <PageSemiTitle title="2010's" color={palette.themePrimary} fontWeight={600} />
      <HistoryList historyList={historyList2019} />
      <HistoryList historyList={historyList2018} />
      <HistoryList historyList={historyList2017} />
      <HistoryList historyList={historyList2016} />
      <HistoryList historyList={historyList2015} />
      <HistoryList historyList={historyList2014} />
      <HistoryList historyList={historyList2013} />
      <HistoryList historyList={historyList2012} />
      <HistoryList historyList={historyList2011} />
      <HistoryList historyList={historyList2010} />
      <PageSemiTitle title="2000's" color={palette.themePrimary} fontWeight={600} />
      <HistoryList historyList={historyList2009} />
      <HistoryList historyList={historyList2008} />
      <HistoryList historyList={historyList2007} />
    </React.Fragment>
  );
}
