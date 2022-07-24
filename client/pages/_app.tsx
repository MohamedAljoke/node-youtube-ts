import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import Head from 'next/head'
import { NotificationsProvider } from '@mantine/notifications'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'
// import { QueryClient, QueryClientProvider} from 'react-query'


// const queryClient = new QueryClient()
type NextPageWithLayout = NextPage & {
  getLayout?: (page:ReactElement) => ReactNode
}
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) =>page)
  return (
    <>
      <Head>
        <title>My YT chunks clone</title>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width'/>
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
      colorScheme:"dark"
        }}>
        <NotificationsProvider>
      

         { getLayout(<main>
            <Component {...pageProps} />
          </main>)}
     
        </NotificationsProvider>
      </MantineProvider>
    </>
  )
}

export default MyApp
