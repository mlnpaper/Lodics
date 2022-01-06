import '../styles/globals.css'
import GlobalState from '../context/globalState'

function MyApp({ Component, pageProps }) {
  return (
    <GlobalState>
      <Component {...pageProps} />
    </GlobalState>
  )
}

export default MyApp
