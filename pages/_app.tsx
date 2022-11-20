import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CacheProvider, EmotionCache, ThemeProvider } from '@emotion/react'
import { ColorModeContext, useMode } from '../utilities/theme';
import Head from 'next/head';
import { CssBaseline } from '@mui/material';
import createEmotionCache from '../utilities/createEmotionCache';
import TopBar from '../components/topbar';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache ?: EmotionCache
}

export default function App( props: MyAppProps) {
  const [theme, colorMode] =  useMode();
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className='app'>
            <div className='content'>
              
              <TopBar />
              <Component {...pageProps} />
            </div>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </CacheProvider>
  )
}
