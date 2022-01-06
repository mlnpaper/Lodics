import { palette } from '@styles/color'
import styled from 'styled-components'

export const PageContainer = styled.section`
  /* -------------------------------------------------------------------------- */
  /*                               모바일  & default                             */
  /* -------------------------------------------------------------------------- */
  width: calc(100% - 5rem);
  margin: 8rem auto;
  color: ${palette.themeBlack};

  @media all and (min-width: 1200px) {
    /* -------------------------------------------------------------------------- */
    /*                              데스크탑 일반                                  */
    /* -------------------------------------------------------------------------- */
    width: 1200px;
  }
`
