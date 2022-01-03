import styled from 'styled-components'
import { palette } from '../../styles/color'

export const WapContent = styled.div`
  width: 100%;
  background: transparent;
  border-bottom: 1px solid ${palette.themeGray};
  padding: 15px 0px 15px 0px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const WrapNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: white;
  ul {
    display: flex;
    flex-flow: row nowrap;
    margin: 0;
    list-style: none;

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
  }

  a {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;

        div {
          font-size: 1.1rem;
          font-weight: 600;
          color: ${props =>
            props.$theme === 'white' ? palette.themeWhite : palette.themeBlack};
          transition: color 0.3s;

          &:hover {
            color: ${palette.themeHover};
          }
        }

        div + div {
          font-size: 1rem;
          font-weight: 300;
          color: ${palette.themeGray};
          /* margin-top: 0.5rem; */
          text-align : center;

          &:hover {
            color: ${palette.themeGray};
          }
        }
      }


`
export const MainText = styled.text`
  font-family: 'Noto Sans KR';
  font-size: 17px;
  color: white;
  font-weight: bold;
`
export const Ul = styled.ul`
  list-style: none;
`
export const Li = styled.li`
  align-items: center;
  float: left;
  font-size: 17px;
  font-weight: 500;
`
