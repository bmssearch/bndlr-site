import "../styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { MDXProvider } from "@mdx-js/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bndlr</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <MDXProvider components={{}}>
        <Component {...pageProps} />
      </MDXProvider>
    </>
  );
}

export default MyApp;
