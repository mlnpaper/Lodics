import styled from 'styled-components';
import { palette } from '../../styles/color';

export const Container = styled.div`
  width: 100vw;
  background: transparent;
  border-bottom: 1px solid ${palette.themeGray};
`;

export const InnerContainer = styled.div`
  width: 1200px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 3rem 0;

  ul {
    display: flex;
    flex-flow: row nowrap;
    margin: 0;

    li {
      margin-left: 5rem;
      position: relative;

      &:nth-child(-n + 3) {
        &:after {
          display: block;
          content: '';
          width: 1px;
          height: 24px;
          background-color: ${palette.themeGray};
          float: right;
          position: absolute;
          top: 0.5rem;
          right: -2.5rem;
        }
      }

      a {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;

        span {
          font-size: 1.7rem;
          font-weight: 600;
          color: ${props => (props.$theme === 'white' ? palette.themeWhite : palette.themeBlack)};
          transition: color 0.3s;

          &:hover {
            color: ${palette.themeHover};
          }
        }

        span + span {
          font-size: 1.3rem;
          font-weight: 300;
          color: ${palette.themeGray};
          margin-top: 0.5rem;

          &:hover {
            color: ${palette.themeGray};
          }
        }
      }
    }
  }
`;
