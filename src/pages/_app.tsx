import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import InitComponent from './components/init'
import Appbar from './components/AppBar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <InitComponent />
      <Appbar></Appbar>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
