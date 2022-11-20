import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CacheProvider, EmotionCache, ThemeProvider } from '@emotion/react'
import { useMode } from '../utilities/theme';
import Head from 'next/head';
import { CssBaseline } from '@mui/material';
import createEmotionCache from '../utilities/createEmotionCache';

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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}
