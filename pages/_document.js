import Document, { Head, Main, NextScript, Html } from "next/document";

import { getSiteMetaData } from "@utils/helpers";

export default class MyDocument extends Document {
  render() {
    const siteMetadata = getSiteMetaData();
//If you want to add universal styles outside of the Layout component this is an option that is more general. 
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
