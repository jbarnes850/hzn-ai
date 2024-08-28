import type { Metadata } from 'next'
import './globals.css'
import Footer from './components/footer'
import { Analytics } from "@vercel/analytics/react"

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://hzn-ai.vercel.app'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#9696FE',
}

export const metadata: Metadata = {
  title: {
    default: 'AI + HZN | NEAR AI Incubation Program',
    template: '%s | AI + HZN'
  },
  description: 'Build the next generation of decentralized AI applications with NEAR. Join our Incubation Program for funding, resources, and mentorship.',
  metadataBase: new URL(baseUrl),
  keywords: ['AI', 'Blockchain', 'NEAR', 'Incubation', 'Decentralized AI', 'Funding', 'Web3'],
  authors: [{ name: 'NEAR Foundation' }],
  openGraph: {
    title: 'AI + HZN | NEAR AI Incubation Program',
    description: 'Build the next generation of decentralized AI applications with NEAR.',
    url: baseUrl,
    siteName: process.env.NEXT_PUBLIC_SITE_NAME,
    images: [
      {
        url: `${baseUrl}/images/seo/@HZN+AI Graphic 1200x630.png`,
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI + HZN | NEAR AI Incubation Program',
    description: 'Pioneer the next generation of decentralized AI applications with NEAR.',
    creator: '@NEARProtocol',
    images: [`${baseUrl}/images/seo/@HZN+AI Graphic 1200x630.png`],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: baseUrl,
  },
  other: {
    'og:locale': 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            {children}
            <Analytics />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}