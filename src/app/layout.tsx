import type { Metadata } from 'next'
import './globals.css'
import Footer from './components/footer'

export const metadata: Metadata = {
  title: {
    default: 'AI + HZN | NEAR AI Incubation Program',
    template: '%s | AI + HZN'
  },
  description: 'Pioneer decentralized AI applications with NEAR. Join our Incubation Program for funding, resources, and connections.',
  keywords: ['AI', 'Blockchain', 'NEAR', 'Incubation', 'Decentralized AI', 'Funding', 'Web3'],
  authors: [{ name: 'NEAR Foundation' }],
  openGraph: {
    title: 'AI + HZN | NEAR AI Incubation Program',
    description: 'Pioneer the next generation of decentralized AI applications with NEAR.',
    url: 'https://near.org',
    siteName: 'AI + HZN',
    images: [
      {
        url: 'https://pbs.twimg.com/profile_images/1665711433651310592/qHT7hLa5_400x400.png',
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
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}