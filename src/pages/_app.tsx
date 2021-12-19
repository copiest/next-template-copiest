import { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { QueryClientProvider, QueryClient } from 'react-query'
import { Global } from '@emotion/react'
import globalStyles from '@components/shared/globalStyles'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      notifyOnChangeProps: 'tracked',
      keepPreviousData: true,
      staleTime: 5_000,
    },
  },
})

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </RecoilRoot>
    </QueryClientProvider>
  )
}

export default App
