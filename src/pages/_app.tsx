import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Boilerplate</title>
        <meta name="description" content="React Boilerplate" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
