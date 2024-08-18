import type { Metadata } from 'next'
import './globals.css'
import Header from './components/header'

export const metadata: Metadata = {
  title: {
    default: 'AI + HZN | NEAR AI Incubation Program',
    template: '%s | AI + HZN'
  },
  description: 'Join our AI Incubation Program to pioneer the next generation of decentralized AI applications on NEAR.',
  keywords: ['AI', 'Blockchain', 'NEAR', 'Incubation', 'Decentralized AI'],
  authors: [{ name: 'NEAR Foundation' }],
  openGraph: {
    title: 'AI + HZN | NEAR AI Incubation Program',
    description: 'Pioneer the next generation of decentralized AI applications with NEAR.',
    url: 'https://near.org',
    siteName: 'AI + HZN',
    images: [
      {
        url: 'https://near.org/og-image.jpg', // Replace with your actual OG image
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
    images: ['https://near.org/twitter-image.jpg'], // Replace with your actual Twitter image
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
        <Header />
        {children}
      </body>
    </html>
  )
}