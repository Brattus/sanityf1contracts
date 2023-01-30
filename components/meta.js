import Head from 'next/head'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'

import mixpanel from 'mixpanel-browser';

mixpanel.init('adcf6b7d42a42e3833f4dbe593ffced3', {debug: false}); 
mixpanel.track('Page view');

export default function Meta() {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`A overview of current F1 contracts.`}
      />

   <title>F1 Driver and Circuit Contracts</title>
  <meta name="description" content="Get the latest information on driver and circuit contracts for the Formula One racing season. Stay up to date with all the latest signings, renewals, and negotiations in the world of F1."/>
  <meta name="keywords" content="F1, driver contracts, circuit contracts, Formula One, racing, signings, renewals, negotiations, f1"/>
        
      <meta property="og:image" content={'https://f1contracts.com/public/f1metaimage.webp'} />
    </Head>
  )
}
