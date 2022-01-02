import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Boilerplate</title>
          <meta name="description" content="Boilerplate" />
          <meta name="theme-color" content="#0d6efd" />
          <link rel="shortcut icon" href="/images/icon-512.png" />
          <link rel="apple-touch-icon" href="/images/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
        </Head>

        <GlobalStyles />

        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
