import Document, { Html, Head, Main, NextScript } from 'next/document';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { basePath } = publicRuntimeConfig;

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
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