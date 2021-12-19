import '../styles/globals.scss';
import type { AppProps } from 'next/app'
import NavBarMobile from '../components/common/NavBar/NavBarMobile';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      {/* <NavBarMobile /> */}
      <Component {...pageProps} />
    </div>)

}

export default MyApp
