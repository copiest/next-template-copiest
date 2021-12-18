import { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { Global } from '@emotion/react'
import globalStyles from '@components/shared/globalStyles'

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default App
