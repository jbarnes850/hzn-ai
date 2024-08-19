import type { Metadata } from 'next'
import './globals.css'
import Footer from './components/footer'
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: {
    default: 'AI + HZN | NEAR AI Incubation Program',
    template: '%s | AI + HZN'
  },
  description: 'Build the next generation of decentralized AI applications with NEAR. Join our Incubation Program for funding, resources, and mentorship.',
  keywords: ['AI', 'Blockchain', 'NEAR', 'Incubation', 'Decentralized AI', 'Funding', 'Web3'],
  authors: [{ name: 'NEAR Foundation' }],
  openGraph: {
    title: 'AI + HZN | NEAR AI Incubation Program',
    description: 'Build the next generation of decentralized AI applications with NEAR.',
    url: 'https://hzn-ai.vercel.app',
    siteName: 'AI + HZN',
    images: [
      {
        url: '/images/seo/@HZN+AI Graphic 1200x630.png',
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
    images: ['https://pbs.twimg.com/profile_images/1809571361431425024/9RTTZYzz_400x400.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#9696FE',
  alternates: {
    canonical: 'https://hzn-ai.vercel.app',
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