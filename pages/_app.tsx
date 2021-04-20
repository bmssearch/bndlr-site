import "../styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { MDXProvider } from "@mdx-js/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta property="og:title" content="bndlr -BMS bundle installer-" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bndlr.bmssearch.net/" />
        <meta
          property="og:image"
          content="https://bndlr.bmssearch.net/ogp.png"
        />
        <meta
          property="og:description"
          content="BMSのダウンロード・インストールを補助するツールです。"
        />
        <meta property="og:site_name" content="bndlr" />
        <meta name="twitter:card" content="summary_large_image" />

        <title>bndlr -BMS bundle installer-</title>
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
