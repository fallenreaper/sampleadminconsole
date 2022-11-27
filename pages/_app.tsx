import "../styles/globals.css";
// Need to add these css files in order to get FullCalendar to work correctly.
import '@fullcalendar/common/main.css' // @fullcalendar/react imports @fullcalendar/common
import '@fullcalendar/daygrid/main.css' // @fullcalendar/timegrid imports @fullcalendar/daygrid
import '@fullcalendar/timegrid/main.css' // @fullcalendar/timegrid is a direct import

import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache, ThemeProvider } from "@emotion/react";
import { ColorModeContext, useMode } from "../utilities/theme";
import Head from "next/head";
import { CssBaseline } from "@mui/material";
import createEmotionCache from "../utilities/createEmotionCache";
import TopBar from "../components/topbar";
import SideBar from "../components/sidebar";
import { ProSidebarProvider} from "react-pro-sidebar"
import { useState } from "react";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App(props: MyAppProps) {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <ProSidebarProvider>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="app">
              <SideBar/>
              <main className="content">
                <TopBar />
                <Component {...pageProps} />
              </main>
            </div>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </CacheProvider>
    </ProSidebarProvider>
  );
}
