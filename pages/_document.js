import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="apple-mobile-web-app-capable" content="yes"></meta>
          <meta
            property="og:title"
            content="Mog – A flexible, modular Blog System"
          ></meta>
          <meta
            property="og:image"
            content="https://mog.js.org/social-preview.png"
          ></meta>
          <meta
            property="og:description"
            content="A flexible, modular Blog System. Open source. Free forever."
          ></meta>
          <meta property="og:url" content="https://mog.js.org"></meta>
          <meta
            name="twitter:image"
            content="https://mog.js.org/social-preview.png"
          ></meta>
          <meta
            name="twitter:image:src"
            content="https://mog.js.org/social-preview.png"
          ></meta>
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:title" content="Mog"></meta>
          <meta
            name="twitter:description"
            content="Mog, a flexible, modular Blog System. Open source. Free forever."
          ></meta>
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <script async="" defer="" data-website-id="db355c05-e3d6-4e4c-a813-fccbc15e39b0" src="https://umami.iucky.cn/umami.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
