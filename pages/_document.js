import Document, { Html, Head, Main, NextScript } from 'next/document'
import { AnalyticsWrapper } from './components/analytics';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <AnalyticsWrapper />
        </body>
      </Html>
    )
  }
}
