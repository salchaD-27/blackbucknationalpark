// src/pages/_document.tsx

import Document, { Html, Head, Main, NextScript } from 'next/document';
import getConfig from 'next/config';

export default class MyDocument extends Document {
  render() {
    // Get the basePath configuration safely, with fallback to an empty string if undefined
    const { publicRuntimeConfig } = getConfig() || {};
    const basePath = publicRuntimeConfig ? publicRuntimeConfig.basePath : '';

    return (
      <Html>
        <Head>
          {/* Ensure relative URLs resolve with the correct base */}
          <base href={`${basePath}/`} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
