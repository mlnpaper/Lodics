import '../styles/globals.css';
import Head from 'next/head';
import 'antd/dist/antd.css';
import GlobalState from '../context/globalState';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalState>
      <Head>
        <meta charSet='utf-8' />
        <title>LoDiCS</title>
      </Head>
      <Component {...pageProps} />
    </GlobalState>
  );
}

export default MyApp;
