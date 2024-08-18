import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="AI + HZN - NEAR AI Incubation Program" />
        <meta name="keywords" content="AI, Blockchain, NEAR, Incubation" />
        {/* Add other meta tags as needed */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}