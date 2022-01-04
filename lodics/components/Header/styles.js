import styled from 'styled-components';
import { palette } from '../../styles/color';
import { MdMenu } from 'react-icons/md';

export const Container = styled.div`
  width: 100%;
  background: transparent;
  border-bottom: 1px solid ${palette.themeGray};
  position: relative;
`;

export const InnerContainer = styled.div`
  /* -------------------------------------------------------------------------- */
  /*                               모바일  & default                             */
  /* -------------------------------------------------------------------------- */
  width: calc(100% - 2rem);
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 1.5rem 0;

  img {
    width: 12rem;
  }

  @media all and (min-width: 768px) {
    /* -------------------------------------------------------------------------- */
    /*                                  테블릿                                    */
    /* -------------------------------------------------------------------------- */
    padding: 3rem 0;

    img {
      width: 17rem;
    }

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
            font-size: 1.5rem;
            font-weight: 600;
            transition: color 0.3s;
            color: ${props => (props.$theme === 'white' ? palette.themeWhite : palette.themeBlack)};

            &:hover {
              color: ${palette.themeHover};
            }
          }

          span + span {
            font-size: 1.1rem;
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
  }

  @media all and (min-width: 1200px) {
    /* -------------------------------------------------------------------------- */
    /*                              데스크탑 일반                                  */
    /* -------------------------------------------------------------------------- */
    width: 1200px;

    img {
      width: auto;
    }

    ul {
      li {
        a {
          span {
            font-size: 1.7rem;
          }

          span + span {
            font-size: 1.3rem;
          }
        }
      }
    }
  }
`;

export const MenuIcon = styled(MdMenu)`
  width: 2rem;
  height: 2rem;
  color: ${palette.themeWhite};
`;

export const ToggleNavContainer = styled.ul`
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  margin: 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  z-index: 5;
  border: 1px solid #4c5a72;

  li {
    width: 100%;
    text-align: center;
    padding: 1.5rem;
    background: ${palette.themeSelector};
    border-bottom: 1px solid #4c5a72;

    &:last-child {
      border-bottom: none;
    }

    a {
      span {
        font-size: 1.3rem;
        color: ${palette.themeWhite};
        transition: color 0.3s;

        &:hover {
          color: ${palette.themeHover};
        }
      }
    }
  }
`;
