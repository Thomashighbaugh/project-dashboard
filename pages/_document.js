import Document, { Head, Main, NextScript, Html } from "next/document";

import { getSiteMetaData } from "@utils/helpers";

export default class MyDocument extends Document {
  render() {
    const siteMetadata = getSiteMetaData();
    //Available for site wide customization
    return (
      <Html lang={siteMetadata.language}>
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            rel="stylesheet"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap"
          />
          <link
            rel="stylesheet"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap"
          />
          <link
            rel="stylesheet"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <footer />
        </body>
      </Html>
    );
  }
}
