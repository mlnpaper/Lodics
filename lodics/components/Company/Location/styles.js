import styled from 'styled-components';
import { palette } from '../../../styles/color';

export const MapContainer = styled.div`
  width: 100%;
  height: calc(100vh - 35rem);
  margin-bottom: 10rem;

  #daumRoughmapContainer1641175660053 {
    width: 100%;
    height: 100%;
    overflow: visible;

    .wrap_map {
      height: 100%;
    }
  }
`;

export const TextContainer = styled.div`
  margin-top: 2rem;
  padding-bottom: 5rem;
  border-bottom: 1px dashed ${palette.themeDashedBorder};
  line-height: 2.5rem;

  span {
    font-size: 1.6rem;
  }

  em {
    font-size: 1.6rem;
    font-weight: 600;
  }

  div {
    margin-top: 1rem;
    span {
      margin-right: 2rem;
    }
  }
`;

export const SubwayTextContainer = styled.div`
  margin-top: 5rem;
  padding-bottom: 5rem;
  border-bottom: 1px dashed ${palette.themeDashedBorder};
  display: flex;
  flex-flow: row nowarp;
  align-items: center;

  div {
    display: flex;
    flex-flow: row nowarp;
    align-items: center;
    margin-right: 5rem;

    span {
      font-size: 1.6rem;
      margin-right: 0.5rem;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;

      &:last-child {
        color: red;
        margin-left: 0.5rem;
      }
    }
  }
`;

export const SubwayIcon = styled.i`
  color: ${palette.themeWhite};
  margin-left: 0.5rem;
  margin-right: 2rem;
  display: inline-block;
  padding: 0.2rem 0.75rem;
  border-radius: 50%;
  background: ${props => props.$color};
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    margin-left: 1rem;
    width: 1px;
    height: 13px;
    background-color: ${palette.themeGray};
    top: 50%;
    right: -1rem;
    transform: translateY(-50%);
  }
`;

export const BusTextContainer = styled.div`
  margin-top: 5rem;
  padding-bottom: 5rem;
  display: flex;
  flex-flow: row nowrap;

  div {
    display: flex;
    flex-flow: column;
    margin-right: 5rem;

    span {
      font-size: 1.6rem;
      line-height: 3rem;
      display: flex;
      align-items: center;

      &:nth-child(2) {
        color: #666666;
      }
    }
  }
`;

export const BusIcon = styled.i`
  background: ${props => props.$color};
  color: ${palette.themeWhite};
  border-radius: 5px;
  padding: 0.2rem 0.5rem;
  height: 2rem;
  line-height: 1.6rem;
  margin-right: 0.5rem;
`;
