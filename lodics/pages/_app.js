import '../styles/globals.css';

import Head from 'next/head';
import 'antd/dist/antd.css';

import GlobalState from 'context';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalState>
      <Head>
        <meta charSet='utf-8' />
        <meta
          name='description'
          content='로딕스는 GIS 및 DB SI의 전문 기술을 기반으로 21세기의 기반이 될 컨버전스 유비쿼터스 시장에서 선두주자가 되고자 합니다.'
        />
        <meta name='keywords' content='소프트웨어 개발, GIS, LiDAR' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='LoDiCS' />
        <meta
          property='og:description'
          content='로딕스는 GIS 및 DB SI의 전문 기술을 기반으로 21세기의 기반이 될 컨버전스 유비쿼터스 시장에서 선두주자가 되고자 합니다.'
        />
        {/* TODO: 최종 url 넣기 */}
        {/* <meta property='og:url' content='' /> */}
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1 minimum-scale=1, maximum-scale=1, user-scalable=no'
        />
        <title>LoDiCS</title>
      </Head>
      <Component {...pageProps} />
    </GlobalState>
  );
}

export default MyApp;
