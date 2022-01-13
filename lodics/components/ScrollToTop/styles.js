import styled from 'styled-components';
import { MdKeyboardArrowUp } from 'react-icons/md';

export const ArrowIcon = styled(MdKeyboardArrowUp)`
  /* -------------------------------------------------------------------------- */
  /*                               모바일  & default                             */
  /* -------------------------------------------------------------------------- */
  width: 10px;
  height: 10px;

  @media all and (min-width: 768px) {
    /* -------------------------------------------------------------------------- */
    /*                                   테블릿                                    */
    /* -------------------------------------------------------------------------- */
    width: 13px;
    height: 13px;
  }

  @media all and (min-width: 1200px) {
    /* -------------------------------------------------------------------------- */
    /*                              데스크탑 일반                                  */
    /* -------------------------------------------------------------------------- */
    width: 15px;
    height: 15px;
  }
`;
export const Container = styled.i`
  /* -------------------------------------------------------------------------- */
  /*                               모바일  & default                             */
  /* -------------------------------------------------------------------------- */

  position: fixed;
  right: 1rem;
  bottom: 2rem;
  cursor: pointer;
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
  background: #eeeeee;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);

  span {
    font-size: 1rem;
  }
  @media all and (min-width: 768px) {
    /* -------------------------------------------------------------------------- */
    /*                                   테블릿                                    */
    /* -------------------------------------------------------------------------- */

    right: 2rem;
    width: 4rem;
    height: 4rem;

    span {
      font-size: 1.1rem;
    }
  }

  @media all and (min-width: 1200px) {
    /* -------------------------------------------------------------------------- */
    /*                              데스크탑 일반                                  */
    /* -------------------------------------------------------------------------- */

    right: 5rem;
    bottom: 5rem;
    width: 5rem;
    height: 5rem;

    span {
      font-size: 1.2rem;
    }
  }
`;
