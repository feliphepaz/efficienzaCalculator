import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import type { DocumentContext } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
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
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta
            name="description"
            content="Conheça a ferramenta que vai te ajudar a desenvolver sua estrutura de consórcio!"
          />
          <meta
            name="keywords"
            content="calculadora de custos para monstar uma equipe de consórcio, ferramenta de custos para equipe, gerador de custos para equipe de consórcio, como calcular os custos de uma equipe de consórcio"
          />
          <meta name="author" content="Efficienza Consultoria" />
          <meta name="language" content="pt-BR" />
          <link
            rel="canonical"
            href="https://calculadora.efficienzaconsultoria.com"
          />

          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Calculadora de custos de uma equipe de consórcio"
          />
          <meta
            property="og:description"
            content="Conheça a ferramenta que vai te ajudar a desenvolver sua estrutura de consórcio!"
          />
          <meta
            property="og:url"
            content="https://calculadora.efficienzaconsultoria.com"
          />
          <meta
            property="og:image"
            content="https://efficienzaconsultoria.com/wp-content/themes/efficienza/og-image.jpg"
          />

          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:title"
            content="Calculadora de custos de uma equipe de consórcio"
          />
          <meta
            name="twitter:description"
            content="Conheça a ferramenta que vai te ajudar a desenvolver sua estrutura de consórcio!"
          />

          <link
            rel="shortcut icon"
            href="https://efficienzaconsultoria.com/wp-content/themes/efficienza/favicon.ico"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
