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
          <title>
            Calculadora de gastos para monstar uma equipe de consórcio
          </title>
          <meta
            name="description"
            content="Conheça agora a ferramenta que vai te ajudar a montar uma equipe!"
          />
          <meta
            name="keywords"
            content="calculadora de gastos para monstar uma equipe de consórcio, ferramenta de gastos para equipe, gerador de gastos para equipe de consórcio, como calcular os gastos de uma equipe de consórcio"
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
            content="Calculadora de gastos para monstar uma equipe de consórcio"
          />
          <meta
            property="og:description"
            content="Conheça agora a ferramenta que vai te ajudar a montar uma equipe!"
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
            content="Calculadora de gastos para monstar uma equipe de consórcio"
          />
          <meta
            name="twitter:description"
            content="Conheça agora a ferramenta que vai te ajudar a montar uma equipe!"
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
