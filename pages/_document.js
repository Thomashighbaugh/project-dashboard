import Document, { Head, Main, NextScript, Html } from "next/document";

import { getSiteMetaData } from "@utils/helpers";

export default class MyDocument extends Document {
  render() {
    const siteMetadata = getSiteMetaData();
//Available for site wide customization
    return (
      <Html lang={siteMetadata.language}>
        <Head />
        <body>
          <Main />
          <NextScript />
          <footer />
        </body>
      </Html>
    );
  }
}
