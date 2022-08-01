import '../styles/globals.css'
import Head from "next/head";
import favicon from '/Users/farihahossain/projects/personal-portfolio/public/favicon.ico'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Add the favicon */}
      <Head>
        <title>farfar</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {/* Add the favicon */}
      {/* Note that the path doesn't include "public" */}

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;