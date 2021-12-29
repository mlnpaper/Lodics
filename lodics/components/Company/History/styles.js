import styled from 'styled-components';
import { palette } from '../../../styles/color';

// years.js
export const YearsContainer = styled.div`
  color: ${palette.themePrimary};
  margin-top: 5rem;

  span {
    font-size: 3rem;
    font-weight: 600;
    position: relative;

    &:after {
      display: block;
      content: '';
      width: 15px;
      height: 8px;
      background-color: ${palette.themePrimary};
      position: absolute;
      top: -0.7rem;
    }

    &:before {
      display: block;
      content: '';
      width: 23px;
      height: 8px;
      background-color: ${palette.themeGray};
      position: absolute;
      top: -0.7rem;
    }
  }
`;

// HistoryList.js
export const HistoryListContainer = styled.div`
  border-top: 1px dashed rgba(183, 183, 183, 0.3);
  display: flex;
  flex-flow: row nowrap;
  padding: 2rem 0;
`;

export const HistoryListYearContainer = styled.div`
  font-size: 3rem;
  font-weight: 600;
  color: ${palette.themeBlack};
  padding: 2rem 2rem 2rem 8rem;
`;

export const HistoryListContentContainer = styled.div`
  padding: 2rem 1rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  span {
    font-size: 1.8rem;
    font-weight: 600;
    color: ${palette.themePrimary};
    margin-right: 0.5rem;
    padding: 0.5rem 1rem 1rem;
  }

  p {
    font-size: 1.7rem;
    color: ${palette.themeBlack};
    margin: 0;
    padding: 0.5rem 1rem 1rem;
  }
`;
