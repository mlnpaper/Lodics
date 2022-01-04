import styled from 'styled-components'
import { palette } from '../../styles/color'

export const Container = styled.div`
  height: 300px;
  background: url('img/basic_bg.jpg') center;

  h1 {
    color: ${palette.themeWhite};
    text-align: center;
    margin: 0 auto;
    line-height: 300px;
    font-size: 70px;
  }
`

export const SubContainer = styled.div`
  display: flex;
  background-color: ${palette.themePrimary};
  height: 50px;
  /* padding: 0px 0px 0px 150px; */

  .ant-btn {
    height: 50px;
    width: 50px;
    background: transparent;
    border: 0px;
    border-right: 1px solid ${palette.themeWhite};
    border-left: 1px solid ${palette.themeWhite};
    margin: 0px auto;
    margin-left: 20rem;
  }

  .ant-select {
    height: 50px;
    width: 200px;
    /* margin: 0px auto; */
    .ant-select-selector {
      height: 50px;
      align-items: center;
      background: transparent;
      margin: 0px 0px 0px 20px;
      color: ${palette.themeWhite};
      border: 0px;
      border-right: 1px solid ${palette.themeWhite};
    }
  }
  .ant-select-arrow {
    color: ${palette.themeWhite};
  }
`
